"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, FileText, Loader2, Send, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FieldErrors = Record<string, string>;

const MAX_BYTES = 5 * 1024 * 1024;
const ACCEPTED = ".pdf,.doc,.docx";

export function ApplicationForm({
  vacancySlug,
  vacancyTitle,
}: {
  vacancySlug: string;
  vacancyTitle: string;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const validateFile = (candidate: File): string | null => {
    const ext = `.${candidate.name.split(".").pop()?.toLowerCase() ?? ""}`;
    if (!ACCEPTED.split(",").includes(ext)) return "Please attach a PDF, DOC or DOCX file.";
    if (candidate.size > MAX_BYTES) return "That file is larger than 5 MB.";
    if (candidate.size === 0) return "That file appears to be empty.";
    return null;
  };

  const chooseFile = (candidate: File | null) => {
    if (!candidate) return;
    const problem = validateFile(candidate);
    setFileError(problem);
    setFile(problem ? null : candidate);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    setErrors({});

    if (!file) {
      setFileError("Please attach your CV.");
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("cv", file);

    setSubmitting(true);
    try {
      const response = await fetch("/api/careers/apply", { method: "POST", body: data });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok || !payload.ok) {
        if (payload.errors) setErrors(payload.errors);
        setFormError(payload.error ?? "Please check the highlighted fields and try again.");
        return;
      }
      setDone(true);
    } catch {
      setFormError("Something went wrong sending your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-card border border-paper-line bg-white p-8 text-center shadow-soft">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-50 text-accent">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-[19px] font-bold text-ink-900">
          Application received
        </h3>
        <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-muted">
          Thank you for applying for {vacancyTitle}. Our team reviews every application and will
          be in touch if there is a fit. You do not need to email us separately.
        </p>
        <Link
          href="/careers"
          className="link-underline mt-6 inline-block text-[13.5px] font-semibold text-accent"
        >
          Back to all open roles
        </Link>
      </div>
    );
  }

  const field =
    "h-12 w-full rounded-xl2 border border-paper-line bg-white px-4 text-[14px] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-ink-300 focus:outline-none";
  const labelText = "text-[12.5px] font-medium text-ink-500";
  const errorText = "mt-1.5 text-[12px] text-accent";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-card border border-paper-line bg-white p-6 shadow-soft sm:p-8">
      <input type="hidden" name="vacancySlug" value={vacancySlug} />

      {/* honeypot */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelText}>Full name *</span>
          <input name="fullName" required className={field} placeholder="Your full name" />
          {errors.fullName && <span className={errorText}>{errors.fullName}</span>}
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelText}>Phone *</span>
          <input name="phone" required type="tel" className={field} placeholder="+251 ..." />
          {errors.phone && <span className={errorText}>{errors.phone}</span>}
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelText}>Email *</span>
          <input name="email" required type="email" className={field} placeholder="name@example.com" />
          {errors.email && <span className={errorText}>{errors.email}</span>}
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelText}>City / location</span>
          <input name="location" className={field} placeholder="Addis Ababa" />
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelText}>Years of sales experience</span>
          <select name="experience" className={field} defaultValue="">
            <option value="">Select</option>
            <option value="none">None yet</option>
            <option value="1-2">1–2 years</option>
            <option value="3-5">3–5 years</option>
            <option value="5+">5+ years</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelText}>LinkedIn or portfolio (optional)</span>
          <input name="linkedin" className={field} placeholder="linkedin.com/in/..." />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className={labelText}>Why this role? (optional)</span>
          <textarea
            name="coverLetter"
            rows={5}
            className="w-full rounded-xl2 border border-paper-line bg-white px-4 py-3 text-[14px] text-ink-900 placeholder:text-ink-300 transition-colors focus:border-ink-300 focus:outline-none"
            placeholder="A short note about your experience and why this role interests you."
          />
        </label>
      </div>

      {/* CV upload */}
      <div className="mt-5">
        <span className={labelText}>CV / résumé *</span>
        <div
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragging(false);
            chooseFile(event.dataTransfer.files?.[0] ?? null);
          }}
          className={cn(
            "mt-2 rounded-xl2 border border-dashed p-6 text-center transition-colors",
            dragging ? "border-accent bg-accent-50" : "border-ink-200 bg-paper",
            fileError && "border-accent",
          )}
        >
          <input
            ref={inputRef}
            type="file"
            accept={ACCEPTED}
            className="sr-only"
            onChange={(event) => chooseFile(event.target.files?.[0] ?? null)}
          />

          {file ? (
            <div className="flex items-center justify-center gap-3">
              <FileText className="h-5 w-5 shrink-0 text-accent" />
              <span className="min-w-0 truncate text-[14px] font-medium text-ink-900">
                {file.name}
              </span>
              <span className="shrink-0 text-[12px] text-ink-400">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setFileError(null);
                  if (inputRef.current) inputRef.current.value = "";
                }}
                className="shrink-0 rounded-full p-1 text-ink-400 transition-colors hover:text-ink-900"
                aria-label="Remove file"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <>
              <Upload className="mx-auto h-5 w-5 text-ink-400" />
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="mt-3 text-[13.5px] font-semibold text-accent"
              >
                Choose a file
              </button>
              <span className="text-[13.5px] text-muted"> or drag it here</span>
              <p className="mt-1.5 text-[12px] text-ink-400">PDF, DOC or DOCX · up to 5 MB</p>
            </>
          )}
        </div>
        {fileError && <p className={errorText}>{fileError}</p>}
        {errors.cv && !fileError && <p className={errorText}>{errors.cv}</p>}
      </div>

      <label className="mt-6 flex items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          value="yes"
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-paper-line text-accent focus:ring-accent"
        />
        <span className="text-[12.5px] leading-relaxed text-muted">
          I agree that Anchor Financials may contact me about this application and store my
          details for recruitment purposes. *
        </span>
      </label>
      {errors.consent && <p className={errorText}>{errors.consent}</p>}

      {formError && (
        <p className="mt-5 rounded-xl2 border border-accent/30 bg-accent-50 px-4 py-3 text-[13px] text-accent">
          {formError}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={submitting}
          icon={submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        >
          {submitting ? "Sending…" : "Submit application"}
        </Button>
        <p className="text-[12px] text-ink-400">* Required</p>
      </div>
    </form>
  );
}
