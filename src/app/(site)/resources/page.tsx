import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts, getFeaturedPosts } from "@/content/posts";
import { imagesBySlug } from "@/content/resourceImages";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PostCard } from "@/components/cards/PostCard";
import { ResourceExplorer } from "@/components/resources/ResourceExplorer";
import { Reveal } from "@/components/ui/Reveal";
import { Highlight } from "@/components/ui/Decor";

export const metadata: Metadata = {
  title: "Blog, News & Case Studies",
  description:
    "Insights, announcements, case studies and product updates on SACCO management, core banking, financial technology and microfinance in Ethiopia.",
  alternates: { canonical: "/resources" },
};

const categories = [
  { label: "Blog", href: "/resources/blog", description: "Long-form educational content" },
  { label: "News", href: "/resources/news", description: "Company and industry updates" },
  { label: "Case Studies", href: "/resources/case-studies", description: "Client success stories" },
  { label: "Product Updates", href: "/resources/product-updates", description: "Releases and features" },
];

export default function ResourcesPage() {
  const featured = getFeaturedPosts(3);

  return (
    <>
      <PageHero
        path="/resources"
        eyebrow="Resources"
        title={
          <>
            Ideas for the <Highlight tone="light">Future of Financial Services.</Highlight>
          </>
        }
        description="Perspectives, announcements, and practical guidance for SACCOs, microfinance institutions, and growing financial organizations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-anchor">
          <SectionHeading eyebrow="Featured" title="Start here." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featured.map((post, index) => (
              <Reveal key={post.slug} delay={index * 80}>
                <PostCard post={post} image={imagesBySlug[post.slug]} />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group flex items-center justify-between rounded-card border border-paper-line bg-paper px-5 py-4 transition-colors hover:border-ink-200 hover:bg-white"
              >
                <div>
                  <p className="font-display text-[14.5px] font-bold text-ink">
                    {category.label}
                  </p>
                  <p className="mt-0.5 text-[11.5px] text-muted">{category.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-ink-400 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className="container-anchor">
          <SectionHeading
            eyebrow="All resources"
            title="Browse everything."
            description="Filter by type or search across blog posts, news, case studies, and product updates."
          />
          <div className="mt-10">
            <ResourceExplorer posts={posts} imagesBySlug={imagesBySlug} />
          </div>
        </div>
      </section>
    </>
  );
}
