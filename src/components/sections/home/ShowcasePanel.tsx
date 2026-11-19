import Link from "next/link";
import { Check } from "lucide-react";
import { getProduct } from "@/content/products";
import { ButtonLink } from "@/components/ui/Button";
import { NotchPill } from "@/components/ui/Tiles";
import { Reveal } from "@/components/ui/Reveal";
import { DashboardMockup } from "@/components/product-ui/DashboardMockup";

export function ShowcasePanel() {
  const product = getProduct("core-banking-system");
  if (!product) return null;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-anchor">
        <div className="relative">
          <NotchPill>Monitor operations easily</NotchPill>

          <div className="overflow-hidden rounded-hero bg-brand-panel px-6 pb-16 pt-20 sm:px-14 sm:pb-20 sm:pt-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-[0.16]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/25 blur-[110px]"
            />

          <div className="relative grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-300">
                Core Banking System
              </p>
              <h2 className="mt-5 text-[clamp(1.8rem,3.4vw,2.75rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-white">
                Everything your institution needs to run day to day.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-200">
                {product.shortDescription}
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {product.capabilities.slice(0, 4).map((capability) => (
                  <li
                    key={capability}
                    className="flex items-center gap-2.5 text-[14px] text-ink-100"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    {capability}
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <ButtonLink
                  href={`/products/${product.slug}`}
                  variant="primary"
                  size="lg"
                  withArrow
                >
                  Explore Product
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[40px] bg-accent/10 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-panel border border-white/10 shadow-card">
                <DashboardMockup className="!rounded-panel !border-0" />
              </div>
              <Link
                href="/products/performance-management-system"
                className="absolute -bottom-8 -left-8 hidden rounded-card border border-white/10 bg-ink-900/95 px-5 py-4 shadow-card backdrop-blur transition-transform duration-300 hover:-translate-y-1 lg:block"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-ink-300">
                  Performance score
                </p>
                <p className="mt-1 font-display text-xl font-extrabold text-white">
                  84<span className="text-sm text-ink-300">/100</span>
                </p>
              </Link>
            </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
