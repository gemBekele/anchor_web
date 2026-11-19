"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Post } from "@/content/types";
import { PostCard } from "@/components/cards/PostCard";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", value: "all" },
  { label: "Blog", value: "blog" },
  { label: "News", value: "news" },
  { label: "Case Studies", value: "case-study" },
  { label: "Product Updates", value: "product-update" },
] as const;

type FilterValue = (typeof filters)[number]["value"];

export function ResourceExplorer({
  posts,
  imagesBySlug,
  lockedFilter,
  hideFilters,
}: {
  posts: Post[];
  imagesBySlug?: Record<string, string>;
  lockedFilter?: FilterValue;
  hideFilters?: boolean;
}) {
  const [active, setActive] = useState<FilterValue>(lockedFilter ?? "all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    return posts.filter((post) => {
      const matchesFilter =
        active === "all" ? true : post.kind === active;
      const matchesQuery =
        query.trim().length === 0 ||
        `${post.title} ${post.excerpt} ${post.category} ${post.tags.join(" ")}`
          .toLowerCase()
          .includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [posts, active, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {!hideFilters && (
          <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActive(filter.value)}
                className={cn(
                  "shrink-0 rounded-pill border px-4 py-2 text-[13px] font-medium transition-all duration-300",
                  active === filter.value
                    ? "border-ink bg-ink text-white"
                    : "border-paper-line bg-white text-ink-500 hover:border-ink-200 hover:text-ink",
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}

        <label className="relative flex w-full items-center lg:w-72">
          <Search className="pointer-events-none absolute left-4 h-4 w-4 text-ink-300" />
          <span className="sr-only">Search resources</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search resources"
            className="h-11 w-full rounded-pill border border-paper-line bg-white pl-11 pr-4 text-[13.5px] text-ink placeholder:text-ink-300 focus:border-ink-300 focus:outline-none"
          />
        </label>
      </div>

      {results.length > 0 ? (
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {results.map((post) => (
            <PostCard
              key={post.slug}
              post={post}
              image={imagesBySlug?.[post.slug]}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-card border border-dashed border-ink-100 bg-paper p-12 text-center">
          <p className="font-display text-[16px] font-semibold text-ink">No results found</p>
          <p className="mt-2 text-[13.5px] text-muted">
            Try a different category or search term.
          </p>
        </div>
      )}
    </div>
  );
}
