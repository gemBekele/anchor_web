import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import { vacancies } from "@/content/vacancies";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Receives job applications.
 *
 * Storage lives OUTSIDE the deployment directory (which is replaced with
 * `rsync --delete` on every deploy), so applications are never wiped.
 * Override with APPLICATION_UPLOAD_DIR.
 */
const UPLOAD_DIR =
  process.env.APPLICATION_UPLOAD_DIR ?? "/home/ubuntu/anchor-data/applications";

const MAX_CV_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const attempts = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return true;
  recent.push(now);
  attempts.set(ip, recent);
  return false;
}

function clean(value: FormDataEntryValue | null, max = 400) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, max);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many applications from this connection. Please try again later." },
      { status: 429 },
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form submission." }, { status: 400 });
  }

  // Honeypot: a field no human should ever fill in.
  if (clean(form.get("website"))) {
    return NextResponse.json({ ok: true });
  }

  const vacancySlug = clean(form.get("vacancySlug"), 120);
  const vacancy = vacancies.find((v) => v.slug === vacancySlug);

  const fullName = clean(form.get("fullName"), 120);
  const email = clean(form.get("email"), 160);
  const phone = clean(form.get("phone"), 40);
  const location = clean(form.get("location"), 120);
  const linkedin = clean(form.get("linkedin"), 200);
  const experience = clean(form.get("experience"), 40);
  const coverLetter = clean(form.get("coverLetter"), 4000);
  const consent = clean(form.get("consent"), 10);

  const errors: Record<string, string> = {};
  if (!vacancy) errors.vacancySlug = "Unknown role.";
  if (!fullName) errors.fullName = "Please enter your full name.";
  if (!isValidEmail(email)) errors.email = "Please enter a valid email address.";
  if (!phone) errors.phone = "Please enter a phone number.";
  if (consent !== "yes") errors.consent = "Please confirm you agree to be contacted.";

  const cv = form.get("cv");
  const hasFile = cv instanceof File && cv.size > 0;
  if (!hasFile) {
    errors.cv = "Please attach your CV.";
  } else {
    const file = cv as File;
    const ext = path.extname(file.name).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext) || (file.type && !ALLOWED_MIME.has(file.type))) {
      errors.cv = "CV must be a PDF, DOC or DOCX file.";
    } else if (file.size > MAX_CV_BYTES) {
      errors.cv = "CV must be 5 MB or smaller.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const file = cv as File;
  const ext = path.extname(file.name).toLowerCase();
  const id = `${new Date().toISOString().slice(0, 10)}_${crypto
    .randomBytes(8)
    .toString("hex")}`;
  const safeBase = fullName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "applicant";
  const storedName = `${id}__${safeBase}${ext}`;

  try {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(path.join(UPLOAD_DIR, storedName), buffer, { mode: 0o600 });

    const record = {
      id,
      receivedAt: new Date().toISOString(),
      vacancy: vacancy!.title,
      vacancySlug: vacancy!.slug,
      fullName,
      email,
      phone,
      location,
      linkedin,
      experience,
      coverLetter,
      cvFile: storedName,
      cvOriginalName: file.name,
      cvBytes: file.size,
      ip,
      userAgent: request.headers.get("user-agent") ?? "",
    };

    await fs.appendFile(
      path.join(UPLOAD_DIR, `applications-${new Date().getFullYear()}.jsonl`),
      `${JSON.stringify(record)}\n`,
      { mode: 0o600 },
    );

    // Optional: forward to Slack / Zapier / n8n / a CRM without any dependency.
    const webhook = process.env.APPLICATION_WEBHOOK_URL;
    if (webhook) {
      fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `New application: ${vacancy!.title} — ${fullName} (${email}, ${phone})`,
          record,
        }),
      }).catch(() => {
        /* never fail the applicant because a notification failed */
      });
    }

    return NextResponse.json({ ok: true, id });
  } catch (error) {
    console.error("Application submission failed:", error);
    return NextResponse.json(
      { ok: false, error: "We could not save your application. Please try again." },
      { status: 500 },
    );
  }
}
