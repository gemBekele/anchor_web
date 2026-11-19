import type { Metadata } from "next";
import { clients } from "@/content/clients";
import { caseStudies } from "@/content/posts";
import { imagesBySlug } from "@/content/resourceImages";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PostCard } from "@/components/cards/PostCard";
import { PlaceholderLogo } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { Highlight } from "@/components/ui/Decor";
import { AccentCTA } from "@/components/sections/AccentCTA";

export const metadata: Metadata = {
  title: "Clients — Financial Institutions We Serve",
  description:
    "SACCOs, microfinance institutions and cooperatives use Anchor Financials to modernise operations, from first implementation through ongoing growth.",
  alternates: { canonical: "/clients" },
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title={
          <>
            Trusted by <Highlight tone="light">Financial Organizations.</Highlight>
          </>
        }
        description="Anchor Financials works alongside financial institutions as a long-term technology partner — from first implementation through ongoing growth."
        path="/clients"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Clients" }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="container-anchor">
          <SectionHeading
            eyebrow="Institutions"
            title="Organizations we build for."
            description="A selection of the SACCOs, microfinance institutions, and cooperatives we serve."
          />
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((client, index) => (
              <Reveal key={index} delay={(index % 4) * 60}>
                <div className="flex h-24 min-w-0 items-center rounded-card border border-paper-line bg-white px-5 shadow-soft transition-shadow duration-300 hover:shadow-lift">
                  <PlaceholderLogo label={client.name} compact />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-anchor">
          <SectionHeading
            eyebrow="Case studies"
            title="Success stories, told with results."
            description="Each case study follows the same structure: the challenge the institution faced, the solution deployed, and the impact achieved."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {caseStudies.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 2) * 90}>
                <PostCard post={post} image={imagesBySlug[post.slug]} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AccentCTA
        eyebrow="Join them"
        title="Become a reference institution."
        description="Talk to our team about what a technology partnership with Anchor Financials could look like for your organization."
      />
    </>
  );
}
