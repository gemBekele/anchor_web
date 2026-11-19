import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { getApplication, isPdf, readApplications } from "@/lib/applications";

export const metadata: Metadata = {
  title: "Applicant",
  robots: { index: false, follow: false, nocache: true },
};

export const dynamic = "force-dynamic";

function when(iso: string) {
  return new Date(iso).toLocaleString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function ApplicantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const record = await getApplication(id);
  if (!record) notFound();

  const all = await readApplications();
  const index = all.findIndex((r) => r.id === record.id);
  const newer = index > 0 ? all[index - 1] : null;
  const older = index >= 0 && index < all.length - 1 ? all[index + 1] : null;

  const cvUrl = `/api/admin/applications/${record.id}/cv`;
  const pdf = isPdf(record.cvFile);

  const fields = [
    { label: "Email", value: record.email, href: `mailto:${record.email}`, icon: Mail },
    { label: "Phone", value: record.phone, href: `tel:${record.phone}`, icon: Phone },
    { label: "Location", value: record.location || "—", icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-paper-line bg-white">
        <div className="container-anchor flex flex-wrap items-center justify-between gap-4 py-5">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-ink-500 transition-colors hover:text-ink-900"
          >
            <ArrowLeft className="h-4 w-4" />
            All applications
          </Link>
          <div className="flex items-center gap-3">
            {older && (
              <Link
                href={`/admin/${older.id}`}
                className="text-[13px] font-medium text-ink-500 hover:text-ink-900"
              >
                Older
              </Link>
            )}
            {newer && (
              <Link
                href={`/admin/${newer.id}`}
                className="text-[13px] font-medium text-ink-500 hover:text-ink-900"
              >
                Newer
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="container-anchor py-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.35fr]">
          {/* Details */}
          <div>
            <div className="rounded-card border border-paper-line bg-white p-7">
              <span className="rounded-pill bg-accent-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                {record.experience === "none"
                  ? "No sales experience"
                  : `Sales exp: ${record.experience}`}
              </span>

              <h1 className="mt-4 font-display text-[26px] font-extrabold leading-tight tracking-[-0.03em] text-ink-900">
                {record.fullName}
              </h1>
              <p className="mt-2 text-[13px] text-ink-400">
                Applied for {record.vacancy} · {when(record.receivedAt)}
              </p>

              <dl className="mt-6 space-y-4">
                {fields.map(({ label, value, href, icon: Icon }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl2 bg-paper text-ink-900">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-[11px] uppercase tracking-[0.12em] text-ink-400">
                        {label}
                      </dt>
                      {href ? (
                        <dd className="mt-0.5">
                          <a
                            href={href}
                            className="break-all text-[14px] font-medium text-ink-900 hover:text-accent"
                          >
                            {value}
                          </a>
                        </dd>
                      ) : (
                        <dd className="mt-0.5 text-[14px] font-medium text-ink-900">{value}</dd>
                      )}
                    </div>
                  </div>
                ))}

                {record.linkedin && (
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl2 bg-paper text-ink-900">
                      <ExternalLink className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-[11px] uppercase tracking-[0.12em] text-ink-400">
                        LinkedIn / portfolio
                      </dt>
                      <dd className="mt-0.5">
                        <a
                          href={
                            record.linkedin.startsWith("http")
                              ? record.linkedin
                              : `https://${record.linkedin}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-all text-[14px] font-medium text-ink-900 hover:text-accent"
                        >
                          {record.linkedin}
                        </a>
                      </dd>
                    </div>
                  </div>
                )}
              </dl>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-paper-line pt-6">
                <a
                  href={`${cvUrl}?download=1`}
                  className="inline-flex h-10 items-center gap-2 rounded-pill bg-ink-900 px-5 text-[13px] font-semibold text-white transition-colors hover:bg-ink-800"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download CV
                </a>
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-pill border border-ink-900/15 px-5 text-[13px] font-semibold text-ink-900 transition-colors hover:bg-paper"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open in new tab
                </a>
              </div>
            </div>

            {record.coverLetter && (
              <div className="mt-5 rounded-card border border-paper-line bg-white p-7">
                <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                  Why this role
                </h2>
                <p className="mt-3 whitespace-pre-wrap text-[14.5px] leading-relaxed text-ink-600">
                  {record.coverLetter}
                </p>
              </div>
            )}

            <div className="mt-5 rounded-card border border-paper-line bg-white p-7">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                Submission metadata
              </h2>
              <dl className="mt-4 space-y-2 text-[12.5px] text-ink-500">
                <div className="flex justify-between gap-4">
                  <dt>Application ID</dt>
                  <dd className="font-mono text-[11.5px] text-ink-900">{record.id}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>CV file</dt>
                  <dd className="truncate font-mono text-[11.5px] text-ink-900">
                    {record.cvOriginalName}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>IP address</dt>
                  <dd className="font-mono text-[11.5px] text-ink-900">{record.ip ?? "—"}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* CV viewer */}
          <div className="lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-card border border-paper-line bg-white">
              <div className="flex items-center justify-between border-b border-paper-line px-5 py-3">
                <p className="text-[13px] font-semibold text-ink-900">CV</p>
                <p className="text-[11.5px] text-ink-400">{record.cvOriginalName}</p>
              </div>

              {pdf ? (
                <iframe
                  src={cvUrl}
                  title={`CV — ${record.fullName}`}
                  className="h-[78vh] w-full bg-paper"
                />
              ) : (
                <div className="flex h-[78vh] flex-col items-center justify-center gap-4 p-8 text-center">
                  <p className="max-w-sm text-[14px] leading-relaxed text-muted">
                    This CV is a Word document, which browsers cannot preview. Download it to
                    open in Word, or ask for a PDF version.
                  </p>
                  <a
                    href={`${cvUrl}?download=1`}
                    className="inline-flex h-10 items-center gap-2 rounded-pill bg-ink-900 px-5 text-[13px] font-semibold text-white transition-colors hover:bg-ink-800"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download {record.cvOriginalName}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
