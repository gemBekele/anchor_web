"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Download, FileText, Search } from "lucide-react";
import type { ApplicationRecord } from "@/lib/applications";
import { cn } from "@/lib/utils";

function when(iso: string) {
  return new Date(iso).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function size(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export function ApplicationList({ applications }: { applications: ApplicationRecord[] }) {
  const [query, setQuery] = useState("");
  const [experience, setExperience] = useState("all");
  const [sort, setSort] = useState<"newest" | "oldest" | "name">("newest");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let rows = applications.filter((record) => {
      const matchesQuery =
        !q ||
        `${record.fullName} ${record.email} ${record.phone} ${record.location} ${record.linkedin} ${record.coverLetter}`
          .toLowerCase()
          .includes(q);
      const matchesExperience = experience === "all" || record.experience === experience;
      return matchesQuery && matchesExperience;
    });

    rows = [...rows].sort((a, b) => {
      if (sort === "name") return a.fullName.localeCompare(b.fullName);
      return sort === "newest"
        ? a.receivedAt < b.receivedAt
          ? 1
          : -1
        : a.receivedAt > b.receivedAt
          ? 1
          : -1;
    });
    return rows;
  }, [applications, query, experience, sort]);

  const withCv = applications.filter((r) => r.cvFile).length;

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3">
          <label className="relative flex items-center">
            <Search className="pointer-events-none absolute left-4 h-4 w-4 text-ink-300" />
            <span className="sr-only">Search applicants</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, email, phone, city…"
              className="h-11 w-full rounded-pill border border-paper-line bg-white pl-11 pr-4 text-[13.5px] text-ink-900 placeholder:text-ink-300 focus:border-ink-300 focus:outline-none sm:w-80"
            />
          </label>

          <select
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
            className="h-11 rounded-pill border border-paper-line bg-white px-4 text-[13.5px] text-ink-900 focus:border-ink-300 focus:outline-none"
          >
            <option value="all">All experience</option>
            <option value="none">None yet</option>
            <option value="1-2">1–2 years</option>
            <option value="3-5">3–5 years</option>
            <option value="5+">5+ years</option>
          </select>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value as typeof sort)}
            className="h-11 rounded-pill border border-paper-line bg-white px-4 text-[13.5px] text-ink-900 focus:border-ink-300 focus:outline-none"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>

        <p className="text-[13px] text-ink-400">
          Showing <span className="font-semibold text-ink-900">{filtered.length}</span> of{" "}
          {applications.length} · {withCv} with a CV
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-card border border-paper-line bg-white">
        <div className="hidden grid-cols-[2.2fr_1.6fr_1.2fr_1fr_auto] gap-4 border-b border-paper-line bg-paper px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400 lg:grid">
          <span>Applicant</span>
          <span>Contact</span>
          <span>Location</span>
          <span>Applied</span>
          <span className="text-right">CV</span>
        </div>

        {filtered.length === 0 ? (
          <p className="px-5 py-14 text-center text-[14px] text-muted">
            No applicants match this filter.
          </p>
        ) : (
          <ul className="divide-y divide-paper-line">
            {filtered.map((record) => (
              <li
                key={record.id}
                className="grid gap-3 px-5 py-4 transition-colors hover:bg-paper lg:grid-cols-[2.2fr_1.6fr_1.2fr_1fr_auto] lg:items-center lg:gap-4"
              >
                <div className="min-w-0">
                  <Link
                    href={`/admin/${record.id}`}
                    className="group inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-ink-900"
                  >
                    <span className="truncate">{record.fullName}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                  <p className="mt-0.5 text-[12px] text-ink-400">
                    {record.experience === "none"
                      ? "No sales experience"
                      : `Sales exp: ${record.experience}`}
                  </p>
                </div>

                <div className="min-w-0 text-[13px] text-ink-600">
                  <a href={`mailto:${record.email}`} className="block truncate hover:text-ink-900">
                    {record.email}
                  </a>
                  <a href={`tel:${record.phone}`} className="block text-ink-400 hover:text-ink-900">
                    {record.phone}
                  </a>
                </div>

                <div className="truncate text-[13px] text-ink-500">
                  {record.location || <span className="text-ink-300">—</span>}
                </div>

                <div className="text-[12.5px] text-ink-400">{when(record.receivedAt)}</div>

                <div className="flex items-center gap-3 lg:justify-end">
                  {record.cvFile ? (
                    <>
                      <span className="inline-flex items-center gap-1.5 text-[12px] text-ink-500">
                        <FileText className="h-3.5 w-3.5 text-accent" />
                        {size(record.cvBytes)}
                      </span>
                      <a
                        href={`/api/admin/applications/${record.id}/cv?download=1`}
                        className={cn(
                          "inline-flex h-8 w-8 items-center justify-center rounded-full border border-paper-line text-ink-500 transition-colors",
                          "hover:border-ink-900/25 hover:text-ink-900",
                        )}
                        aria-label={`Download ${record.fullName}'s CV`}
                        title="Download CV"
                      >
                        <Download className="h-3.5 w-3.5" />
                      </a>
                    </>
                  ) : (
                    <span className="text-[12px] text-ink-300">No CV</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
