import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { products, getPublishedProducts } from "@/content/products";
import { PageHero } from "@/components/sections/PageHero";
import { ProductCard } from "@/components/cards/ProductCard";
import { AccentCTA } from "@/components/sections/AccentCTA";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Decor";

export const metadata: Metadata = {
  title: "Core Banking Software for SACCOs",
  description:
    "Explore six connected products for SACCOs and microfinance institutions: core banking, performance management, member app, reporting, SMS and branch management.",
  alternates: { canonical: "/products" },
};

const ecosystem = [
  "A connected ecosystem instead of isolated tools",
  "Shared data foundations across products",
  "Role-based access and consistent reporting",
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Software built around <Highlight tone="light">financial operations.</Highlight>
          </>
        }
        description="Anchor Financials develops specialized software for SACCOs, microfinance institutions, and growing financial organizations — six connected products, built around real financial operations."
        path="/products"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-anchor">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {getPublishedProducts().map((product, index) => (
              <Reveal key={product.slug} delay={(index % 3) * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-anchor grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>The Anchor ecosystem</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.75rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink">
              Products that work together.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              Anchor Financials products are designed as parts of one connected ecosystem. Core
              operational data becomes the foundation for the performance information leadership
              needs — instead of disconnected tools that never quite line up.
            </p>
            <ul className="mt-7 space-y-3">
              {ecosystem.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-ink-600">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 text-[13.5px] font-semibold text-ink"
            >
              <span className="link-underline">Discuss your requirements</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-hero border border-white/10 bg-ink-950 p-6 sm:p-8">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-25" />
              <p className="relative text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-300">
                Connected by design
              </p>
              <ul className="relative mt-6 space-y-3">
                {products.map((product) => (
                  <li
                    key={product.slug}
                    className="flex items-center justify-between rounded-xl2 border border-white/10 bg-white/[0.03] px-4 py-3.5"
                  >
                    <span className="text-[13.5px] text-white">{product.name}</span>
                    <span className="text-[11px] uppercase tracking-[0.14em] text-ink-300">
                      {product.status === "placeholder" ? "Reserved" : "Live"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <AccentCTA />
    </>
  );
}
