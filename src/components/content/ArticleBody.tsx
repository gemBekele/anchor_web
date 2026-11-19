import Link from "next/link";
import type { ReactNode } from "react";
import type { Block } from "@/content/types";
import { cn, slugify } from "@/lib/utils";

/** Renders **bold**, *italic* and [links](href) inside a text string. */
function inline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);

  return parts.filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-ink-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const external = href.startsWith("http");
      return external ? (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
        >
          {label}
        </a>
      ) : (
        <Link
          key={index}
          href={href}
          className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
        >
          {label}
        </Link>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function ArticleBody({ blocks, className }: { blocks: Block[]; className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                id={slugify(block.text)}
                className="scroll-mt-28 pt-4 text-[22px] font-extrabold leading-tight tracking-[-0.025em] text-ink-900 sm:text-[25px]"
              >
                {inline(block.text)}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={index}
                id={slugify(block.text)}
                className="scroll-mt-28 pt-2 text-[17px] font-bold leading-snug tracking-[-0.02em] text-ink-900 sm:text-[19px]"
              >
                {inline(block.text)}
              </h3>
            );
          case "p":
            return (
              <p key={index} className="text-[16px] leading-[1.75] text-ink-600">
                {inline(block.text)}
              </p>
            );
          case "ul":
            return (
              <ul key={index} className="space-y-2.5">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15.5px] leading-relaxed text-ink-600">
                    <span
                      aria-hidden
                      className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{inline(item)}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="space-y-3">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-3.5 text-[15.5px] leading-relaxed text-ink-600">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-900 text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{inline(item)}</span>
                  </li>
                ))}
              </ol>
            );
          case "checklist":
            return (
              <div
                key={index}
                className="rounded-card border border-paper-line bg-paper p-6 sm:p-7"
              >
                {block.title && (
                  <p className="mb-4 font-display text-[15px] font-bold text-ink-900">
                    {block.title}
                  </p>
                )}
                <ul className="space-y-3">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-600">
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                        fill="none"
                        aria-hidden
                      >
                        <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.12" />
                        <path
                          d="M6 10.2l2.6 2.6L14 7.4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{inline(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case "callout":
            return (
              <div
                key={index}
                className="rounded-card border-l-[3px] border-accent bg-paper p-6 sm:p-7"
              >
                {block.title && (
                  <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
                    {block.title}
                  </p>
                )}
                <p className="text-[15px] leading-relaxed text-ink-600">{inline(block.text)}</p>
              </div>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-[3px] border-ink-900 py-1 pl-6 font-display text-[19px] font-bold leading-snug tracking-[-0.02em] text-ink-900 sm:text-[21px]"
              >
                {inline(block.text)}
              </blockquote>
            );
          case "figure":
            return (
              <div
                key={index}
                className="grid gap-4 rounded-card border border-paper-line bg-ink-950 p-6 text-white sm:grid-cols-3 sm:p-8"
              >
                {block.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-extrabold leading-none tracking-[-0.035em] text-accent-300">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[12.5px] leading-snug text-ink-200">{stat.label}</p>
                  </div>
                ))}
                <p className="text-[12px] leading-relaxed text-ink-400 sm:col-span-3 sm:mt-2">
                  {block.caption}
                </p>
              </div>
            );
          case "table":
            return (
              <div key={index} className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-ink-900/15">
                      {block.head.map((cell) => (
                        <th
                          key={cell}
                          className="py-3 pr-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-400"
                        >
                          {inline(cell)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-b border-paper-line last:border-0">
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={cn(
                              "py-3.5 pr-4 text-[14px] leading-relaxed text-ink-600",
                              c === 0 && "font-medium text-ink-900",
                            )}
                          >
                            {inline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "sources":
            return (
              <div key={index} className="rounded-card bg-paper p-6">
                <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                  Sources
                </p>
                <ul className="space-y-1.5">
                  {block.items.map((item, i) => (
                    <li key={i} className="text-[13px] leading-relaxed text-ink-400">
                      {inline(item)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
