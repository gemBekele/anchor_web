import type { Metadata } from "next";
import { caseStudies } from "@/content/posts";
import { imagesBySlug } from "@/content/resourceImages";
import { PageHero } from "@/components/sections/PageHero";
import { ResourceExplorer } from "@/components/resources/ResourceExplorer";

export const metadata: Metadata = {
  title: "Case Studies — Client Success Stories",
  description:
    "Client success stories from Anchor Financials implementations, structured as challenge, solution and measured impact for SACCOs and MFIs.",
  alternates: { canonical: "/resources/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        path="/resources/case-studies"
        eyebrow="Case Studies"
        title="Client success stories."
        description="Each case study documents the challenge an institution faced, the solution deployed, and the verified impact. Results are only published with client approval."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Case Studies" },
        ]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="container-anchor">
          <ResourceExplorer
            posts={caseStudies}
            imagesBySlug={imagesBySlug}
            lockedFilter="case-study"
            hideFilters
          />
        </div>
      </section>
    </>
  );
}
