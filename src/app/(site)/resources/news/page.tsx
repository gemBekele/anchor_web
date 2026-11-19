import type { Metadata } from "next";
import { newsPosts } from "@/content/posts";
import { imagesBySlug } from "@/content/resourceImages";
import { PageHero } from "@/components/sections/PageHero";
import { ResourceExplorer } from "@/components/resources/ResourceExplorer";

export const metadata: Metadata = {
  title: "News — Anchor Financials Announcements",
  description:
    "Company announcements, product launches, partnerships and milestones from Anchor Financials, the Ethiopian core banking software provider.",
  alternates: { canonical: "/resources/news" },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        path="/resources/news"
        eyebrow="News"
        title="Announcements and milestones."
        description="Official Anchor Financials announcements, product launches, partnerships, and events. Items appear here once confirmed for publication."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "News" },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="container-anchor">
          <ResourceExplorer
            posts={newsPosts}
            imagesBySlug={imagesBySlug}
            lockedFilter="news"
            hideFilters
          />
        </div>
      </section>
    </>
  );
}
