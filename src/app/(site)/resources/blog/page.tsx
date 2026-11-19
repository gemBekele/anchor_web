import type { Metadata } from "next";
import { blogPosts } from "@/content/posts";
import { imagesBySlug } from "@/content/resourceImages";
import { PageHero } from "@/components/sections/PageHero";
import { ResourceExplorer } from "@/components/resources/ResourceExplorer";

export const metadata: Metadata = {
  title: "Insights on SACCOs & Fintech",
  description:
    "Research-backed articles on Ethiopian SACCO statistics, core banking selection, digitisation barriers, regulation and microfinance operations.",
  alternates: { canonical: "/resources/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        path="/resources/blog"
        eyebrow="Blog"
        title="Practical insight for financial institutions."
        description="Long-form educational content on operating, managing, and modernizing financial institutions."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Blog" },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="container-anchor">
          <ResourceExplorer
            posts={blogPosts}
            imagesBySlug={imagesBySlug}
            lockedFilter="blog"
            hideFilters
          />
        </div>
      </section>
    </>
  );
}
