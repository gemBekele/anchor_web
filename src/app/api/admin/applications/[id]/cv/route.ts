import { promises as fs } from "fs";
import {
  contentTypeFor,
  getApplication,
  resolveCvPath,
} from "@/lib/applications";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Streams an applicant's CV. Never cached, never sniffed, and the path comes
 * from the stored record — the requested id can never address an arbitrary file.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const record = await getApplication(id);
  if (!record) {
    return new Response("Not found", { status: 404 });
  }

  const filePath = resolveCvPath(record);
  if (!filePath) {
    return new Response("Invalid file reference", { status: 400 });
  }

  let file: Buffer;
  try {
    file = await fs.readFile(filePath);
  } catch {
    return new Response("CV file is missing from storage", { status: 404 });
  }

  const download = new URL(request.url).searchParams.get("download") === "1";
  const safeName = record.cvOriginalName.replace(/[^\w.\- ()]/g, "_") || "cv";

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": contentTypeFor(record.cvFile),
      "Content-Disposition": `${download ? "attachment" : "inline"}; filename="${safeName}"`,
      "Content-Length": String(file.byteLength),
      "Cache-Control": "private, no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
