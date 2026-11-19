import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site";

const siteTitle = siteConfig.name;
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd, breadcrumbSchema, webPageSchema } from "@/components/seo/JsonLd";

export function PageHero({
  path,
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  aside,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: { label: string; href?: string; path?: string }[];
  /** Canonical path of this page, used for the WebPage schema @id. */
  path?: string;
  children?: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-paper-line bg-white pb-16 pt-14 sm:pb-20 sm:pt-20",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 h-[360px] w-[360px] rounded-full bg-accent/[0.06] blur-[100px]"
      />

      {(breadcrumbs || title) && (
        <JsonLd
          data={[
            webPageSchema({
              name: typeof title === "string" ? title : (eyebrow ?? siteTitle),
              description: typeof description === "string" ? description : "",
              path: path ?? breadcrumbs?.at(-1)?.href ?? "/",
            }),
            ...(breadcrumbs
              ? [
                  breadcrumbSchema(
                    breadcrumbs.map((crumb, i) => ({
                      name: crumb.label,
                      path:
                        crumb.path ??
                        crumb.href ??
                        (i === breadcrumbs.length - 1 ? (path ?? "/") : "/"),
                    })),
                  ),
                ]
              : []),
          ]}
        />
      )}

      <div className="container-anchor relative">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-ink-400">
              {breadcrumbs.map((crumb, index) => (
                <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                  {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-ink-200" />}
                  {crumb.href ? (
                    <Link href={crumb.href} className="transition-colors hover:text-ink-900">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-ink-900">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div
          className={cn(
            "grid items-center gap-12",
            aside ? "lg:grid-cols-[1.1fr_1fr]" : "max-w-3xl",
          )}
        >
          <div className={cn("flex flex-col gap-5", aside && "max-w-2xl")}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1 className="text-[clamp(2.1rem,4.4vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-ink-900">
              {title}
            </h1>
            {description && (
              <p className="max-w-2xl text-[15px] leading-relaxed text-muted sm:text-[16.5px]">
                {description}
              </p>
            )}
            {children && <div className="mt-2 flex flex-wrap gap-3">{children}</div>}
          </div>
          {aside && <div className="relative">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
