import type { Metadata } from "next";
import Link from "next/link";
import { readApplications } from "@/lib/applications";
import { ApplicationList } from "@/components/admin/ApplicationList";

export const metadata: Metadata = {
  title: "Applications",
  robots: { index: false, follow: false, nocache: true },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const applications = await readApplications();

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-paper-line bg-white">
        <div className="container-anchor flex flex-wrap items-center justify-between gap-4 py-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              Anchor Financials · Internal
            </p>
            <h1 className="mt-1.5 font-display text-[24px] font-extrabold tracking-[-0.03em] text-ink-900">
              Job applications
            </h1>
            <p className="mt-1 text-[13px] text-muted">
              Applicant details and CVs. Not indexed and not linked publicly.
            </p>
          </div>
          <Link
            href="/"
            className="link-underline text-[13px] font-semibold text-ink-500"
          >
            View site
          </Link>
        </div>
      </header>

      <main className="container-anchor py-10">
        <ApplicationList applications={applications} />
      </main>
    </div>
  );
}
