import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { solutions } from "@/content/solutions";
import { products } from "@/content/products";
import { images } from "@/content/images";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/cards/ProductCard";
import { AccentCTA } from "@/components/sections/AccentCTA";

const solutionImages: Record<string, string> = {
  saccos: images.community,
  "microfinance-institutions": images.financeDesk,
  "growing-financial-institutions": images.boardroom,
};

function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return { title: "Solution not found" };
  return {
    title: `${solution.name} Software Solutions`,
    description: solution.shortDescription,
    alternates: { canonical: `/solutions/${solution.slug}` },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const relevantProducts = products.filter((product) =>
    product.targetInstitutions.includes(solution.institutionType),
  );

  return (
    <>
      <PageHero
        path={`/solutions/${solution.slug}`}
        eyebrow="Solution"
        title={solution.name}
        description={solution.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: solution.name },
        ]}
        aside={
          <div className="relative overflow-hidden rounded-hero border border-white/10">
            <Image
              src={solutionImages[solution.slug] ?? images.teamMeeting}
              alt=""
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent"
            />
          </div>
        }
      >
        <ButtonLink href="/contact" variant="primary" size="lg" withArrow>
          Talk to Our Team
        </ButtonLink>
        <ButtonLink href="/products" variant="ghost" size="lg">
          Explore Products
        </ButtonLink>
      </PageHero>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-anchor grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
              How Anchor supports {solution.name.toLowerCase()}
            </h2>
            <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl2 bg-ink text-accent-300">
              <Icon name={solution.icon} />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-[15px] leading-relaxed text-muted">{solution.description}</p>
            <h3 className="mt-8 font-display text-[17px] font-bold text-ink">What this enables</h3>
            <ul className="mt-4 space-y-3">
              {solution.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-[14px] text-ink-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100">
                    <Check className="h-3 w-3" />
                  </span>
                  {outcome}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-anchor">
          <SectionHeading
            eyebrow="Recommended products"
            title="Products suited to your institution."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relevantProducts.map((product, index) => (
              <Reveal key={product.slug} delay={(index % 3) * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AccentCTA />
    </>
  );
}
