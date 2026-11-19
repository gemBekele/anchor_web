import { ArrowRight } from "lucide-react";
import { hero } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Highlight } from "@/components/ui/Decor";
import { RadialIconField } from "@/components/ui/RadialIconField";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-16 sm:pb-24 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent/[0.06] blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[340px] w-[340px] rounded-full bg-ink-900/[0.05] blur-[110px]"
      />

      <div className="container-anchor relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-7 max-w-2xl text-[clamp(2.2rem,4.4vw,3.6rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-ink-900">
                {hero.headlineBefore}{" "}
                <Highlight>{hero.headlineHighlight}</Highlight>{" "}
                {hero.headlineAfter}
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16.5px]">
                {hero.support}
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href={hero.primaryCta.href} variant="primary" size="lg" withArrow>
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="dark" size="lg">
                {hero.secondaryCta.label}
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative mx-auto w-full max-w-[420px] py-6">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.05] blur-[90px]"
              />
              <RadialIconField tone="onLight" className="relative" />
            </div>
          </Reveal>
        </div>

        {/* Compact platform bar, echoing the reference's badge block */}
        <Reveal delay={260} className="mt-16">
          <div className="inline-flex flex-col gap-5 rounded-card border border-paper-line bg-paper p-6 sm:flex-row sm:items-center sm:gap-7">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl2 bg-ink-900">
              <span className="font-display text-[15px] font-extrabold text-white">CBS</span>
            </div>
            <div>
              <p className="text-[13.5px] font-semibold text-ink-900">
                One connected platform, six products
              </p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-muted">
                Core banking, performance management, member app, reporting, messaging and
                branch management.
              </p>
            </div>
            <ButtonLink
              href="/products"
              variant="ghost"
              size="sm"
              icon={<ArrowRight className="h-4 w-4" />}
              className="shrink-0"
            >
              Explore
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
