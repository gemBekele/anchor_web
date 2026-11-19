import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { Post } from "@/content/types";
import { cn, formatDate } from "@/lib/utils";

function kindLabel(kind: Post["kind"]) {
  switch (kind) {
    case "case-study":
      return "Case Study";
    case "product-update":
      return "Product Update";
    case "news":
      return "News";
    default:
      return "Blog";
  }
}

export function PostCard({
  post,
  image,
  className,
  compact = false,
}: {
  post: Post;
  image?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card border border-paper-line bg-white transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-card",
        className,
      )}
    >
      <Link href={`/resources/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-800 to-ink-950">
              <span className="font-display text-[13px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Anchor Financials
              </span>
            </div>
          )}
          <span className="absolute left-4 top-4 rounded-pill bg-white/95 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-900">
            {post.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2 text-[11.5px] text-ink-400">
            <span>{kindLabel(post.kind)}</span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              {formatDate(post.date)}
            </span>
          </div>

          <h3
            className={cn(
              "mt-3 font-semibold tracking-[-0.02em] text-ink-900",
              compact ? "text-[15.5px]" : "text-[16.5px] leading-snug",
            )}
          >
            {post.title}
          </h3>

          {!compact && (
            <p className="mt-2 line-clamp-3 text-[13.5px] leading-relaxed text-muted">
              {post.excerpt}
            </p>
          )}

          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[12.5px] font-semibold text-accent">
            {post.kind === "case-study" ? "Read Case Study" : "Read Article"}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
