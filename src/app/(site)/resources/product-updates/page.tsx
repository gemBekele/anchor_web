import type { Metadata } from "next";
import { productUpdates } from "@/content/posts";
import { imagesBySlug } from "@/content/resourceImages";
import { PageHero } from "@/components/sections/PageHero";
import { ResourceExplorer } from "@/components/resources/ResourceExplorer";

export const metadata: Metadata = {
  title: "Product Updates — Releases & Features",
  description:
    "Release notes and new features from the Anchor platform — core banking, member app, reporting and branch management for cooperatives.",
  alternates: { canonical: "/resources/product-updates" },
};

export default function ProductUpdatesPage() {
  return (
    <>
      <PageHero
        path="/resources/product-updates"
        eyebrow="Product Updates"
        title="What's new in the platform."
        description="Release notes and feature announcements. Only shipped and publicly shareable updates are listed here."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Product Updates" },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="container-anchor">
          <ResourceExplorer
            posts={productUpdates}
            imagesBySlug={imagesBySlug}
            lockedFilter="product-update"
            hideFilters
          />
        </div>
      </section>
    </>
  );
}
