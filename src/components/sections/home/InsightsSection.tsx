import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedPosts, newsPosts } from "@/content/posts";
import { imagesBySlug } from "@/content/resourceImages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PostCard } from "@/components/cards/PostCard";
import { Reveal } from "@/components/ui/Reveal";
import { formatDate } from "@/lib/utils";

export function InsightsSection() {
  const featured = getFeaturedPosts(3);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-anchor">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Ideas for the future of financial services."
            description="Perspectives on SACCO management, financial technology, digital transformation, and microfinance."
          />
          <Link
            href="/resources"
            className="group inline-flex shrink-0 items-center gap-1.5 text-[13.5px] font-semibold text-accent"
          >
            Visit the resources hub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featured.map((post, index) => (
            <Reveal key={post.slug} delay={index * 90}>
              <PostCard post={post} image={imagesBySlug[post.slug]} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 rounded-card border border-paper-line bg-paper p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
            <div className="lg:w-64 lg:shrink-0">
              <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-ink-900">
                Latest news
              </h3>
              <p className="mt-2 text-[13px] text-muted">
                Announcements, product launches, and milestones.
              </p>
            </div>
            <ul className="flex-1 divide-y divide-paper-line">
              {newsPosts.slice(0, 3).map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/resources/${post.slug}`}
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-[14px] font-medium text-ink-900">
                        {post.title}
                      </p>
                      <p className="mt-0.5 text-[11.5px] text-ink-400">
                        {post.category} · {formatDate(post.date)}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
