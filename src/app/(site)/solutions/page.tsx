import type { Metadata } from "next";
import { solutions } from "@/content/solutions";
import { images } from "@/content/images";
import { PageHero } from "@/components/sections/PageHero";
import { SolutionCard } from "@/components/cards/SolutionCard";
import { AccentCTA } from "@/components/sections/AccentCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Highlight } from "@/components/ui/Decor";

export const metadata: Metadata = {
  title: "Software for SACCOs & Microfinance",
  description:
    "Technology shaped around how SACCOs, microfinance institutions and cooperatives actually operate — configured to your workflows, priced per member.",
  alternates: { canonical: "/solutions" },
};

const solutionImages: Record<string, string> = {
  saccos: images.community,
  "microfinance-institutions": images.financeDesk,
  "growing-financial-institutions": images.boardroom,
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Solutions shaped around <Highlight tone="light">your institution.</Highlight>
          </>
        }
        description="Different institutions have different operations. Anchor Financials maps its products to how your organization actually works — instead of forcing one fixed model."
        path="/solutions"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
      />

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-anchor">
          <SectionHeading
            eyebrow="Who we serve"
            title="Choose the path that matches your institution."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Reveal key={solution.slug} delay={index * 90}>
                <SolutionCard
                  solution={solution}
                  image={solutionImages[solution.slug]}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AccentCTA />
    </>
  );
}
