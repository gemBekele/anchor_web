import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { getProduct, products } from "@/content/products";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd, faqSchema, softwareSchema } from "@/components/seo/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductEcosystem } from "@/components/sections/ProductEcosystem";
import { AccentCTA } from "@/components/sections/AccentCTA";
import { DashboardMockup } from "@/components/product-ui/DashboardMockup";
import { PerformanceMockup } from "@/components/product-ui/PerformanceMockup";
import { PhoneMockup } from "@/components/product-ui/PhoneMockup";

const visuals: Record<string, React.ComponentType<{ className?: string }>> = {
  "core-banking-system": DashboardMockup,
  "performance-management-system": PerformanceMockup,
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const Visual = visuals[product.slug] ?? DashboardMockup;

  return (
    <>
      <JsonLd data={[softwareSchema(product), faqSchema(product.faqs)]} />

      <PageHero
        path={`/products/${product.slug}`}
        eyebrow="Product"
        title={product.name}
        description={product.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
        aside={<Visual />}
      >
        <ButtonLink href="/contact" variant="primary" size="lg" withArrow>
          Request a Demo
        </ButtonLink>
        <ButtonLink href="/products" variant="ghost" size="lg">
          All Products
        </ButtonLink>
      </PageHero>

      {/* Overview */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-anchor grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
              What {product.name} does
            </h2>
            <div className="mt-4">
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-5">
              {product.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-[15px] leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
              {product.capabilities.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="rounded-pill border border-paper-line bg-paper px-3.5 py-1.5 text-[12.5px] font-medium text-ink-500"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-anchor">
          <SectionHeading
            eyebrow="Key features"
            title="Capabilities that support daily operations."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, index) => (
              <Reveal key={feature.title} delay={(index % 3) * 70}>
                <div className="h-full rounded-card border border-paper-line bg-white p-6 shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl2 bg-ink text-accent-300">
                    <Icon name="Sparkles" />
                  </span>
                  <h3 className="mt-5 font-display text-[16px] font-bold tracking-[-0.02em] text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it helps */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-anchor grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-hero border border-white/10 bg-ink-950 p-8">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-25" />
              <Eyebrow tone="dark">How it helps</Eyebrow>
              <h3 className="relative mt-5 text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
                Practical outcomes for your institution.
              </h3>
              <ul className="relative mt-6 space-y-3">
                {product.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-[14px] text-ink-100">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Who it's for"
                title="Built for institutions like yours."
                description="This product is designed for the following types of financial organizations."
              />
              <ul className="grid gap-3 sm:grid-cols-2">
                {product.targetInstitutions.map((institution) => (
                  <li
                    key={institution}
                    className="rounded-xl2 border border-paper-line bg-paper px-4 py-3.5 text-[13.5px] font-medium text-ink"
                  >
                    {institution}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Screenshots */}
      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-20" />
        <div className="container-anchor relative">
          <SectionHeading
            eyebrow="Product screenshots"
            title="A closer look at the interface."
            description="Illustrative interface previews using sample data. Actual screens are configured around your institution."
            tone="dark"
          />
          <div className="mt-12 space-y-8">
            <Reveal>
              <Visual />
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-center">
              <Reveal>
                <div className="rounded-hero border border-white/10 bg-ink-900 p-5">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-300">
                    Reporting &amp; analytics
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {["Operational reports", "Financial summaries", "Role-based views"].map(
                      (item) => (
                        <div
                          key={item}
                          className="rounded-xl2 border border-white/10 bg-white/[0.03] p-4 text-[12.5px] text-ink-200"
                        >
                          {item}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="flex justify-center">
                  <PhoneMockup />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-anchor">
          <SectionHeading
            eyebrow="Integration & ecosystem"
            title="Part of one connected ecosystem."
            description="Anchor Financials products are designed to work together, so information stays consistent across the institution."
          />
          <div className="mt-12">
            <ProductEcosystem product={product} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-anchor grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
          <SectionHeading eyebrow="FAQ" title="Common questions." />
          <Reveal delay={80}>
            <Accordion items={product.faqs} />
          </Reveal>
        </div>
      </section>

      <AccentCTA
        eyebrow="See it in action"
        title="See What Anchor Financials Can Do For Your Institution."
        primaryLabel="Request a Demo"
        secondaryLabel="Talk to Our Team"
        secondaryHref="/contact"
      />
    </>
  );
}
