import { promises as fs } from "fs";
import path from "path";

/**
 * Applicants' personal data and CVs live on the server only, outside the
 * deployment directory (which is replaced on every deploy). Nothing here is
 * ever exposed without the nginx basic-auth gate in front of /admin.
 */
export const UPLOAD_DIR =
  process.env.APPLICATION_UPLOAD_DIR ?? "/home/ubuntu/anchor-data/applications";

export interface ApplicationRecord {
  id: string;
  receivedAt: string;
  vacancy: string;
  vacancySlug: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  experience: string;
  coverLetter: string;
  cvFile: string;
  cvOriginalName: string;
  cvBytes: number;
  ip?: string;
  userAgent?: string;
}

export async function readApplications(): Promise<ApplicationRecord[]> {
  try {
    const entries = await fs.readdir(UPLOAD_DIR);
    const records: ApplicationRecord[] = [];
    for (const entry of entries.filter((f) => f.endsWith(".jsonl"))) {
      const raw = await fs.readFile(path.join(UPLOAD_DIR, entry), "utf8");
      for (const line of raw.split("\n")) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        try {
          records.push(JSON.parse(trimmed) as ApplicationRecord);
        } catch {
          // skip malformed lines rather than failing the whole view
        }
      }
    }
    return records.sort((a, b) => (a.receivedAt < b.receivedAt ? 1 : -1));
  } catch {
    return [];
  }
}

export async function getApplication(id: string) {
  const all = await readApplications();
  return all.find((record) => record.id === id);
}

/** Resolves a stored CV to an absolute path, refusing anything outside the store. */
export function resolveCvPath(record: ApplicationRecord): string | null {
  const safe = path.basename(record.cvFile);
  const full = path.join(UPLOAD_DIR, safe);
  const normalised = path.resolve(full);
  return normalised.startsWith(path.resolve(UPLOAD_DIR) + path.sep) ? normalised : null;
}

export function contentTypeFor(fileName: string): string {
  const ext = path.extname(fileName).toLowerCase();
  if (ext === ".pdf") return "application/pdf";
  if (ext === ".docx")
    return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  if (ext === ".doc") return "application/msword";
  return "application/octet-stream";
}

export function isPdf(fileName: string) {
  return path.extname(fileName).toLowerCase() === ".pdf";
}
