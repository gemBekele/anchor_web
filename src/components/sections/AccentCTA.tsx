import { ButtonLink } from "@/components/ui/Button";
import { RadialIconField } from "@/components/ui/RadialIconField";
import { Reveal } from "@/components/ui/Reveal";

export function AccentCTA({
  eyebrow = "Get started",
  title = "Ready to modernise your financial operations?",
  description = "Tell us about your institution, your current challenges, and the technology you are looking for.",
  primaryLabel = "Get a Demo",
  primaryHref = "/contact",
  secondaryLabel = "Explore Products",
  secondaryHref = "/products",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-white pb-20 sm:pb-28">
      <div className="container-anchor">
        <Reveal>
          <div className="relative overflow-hidden rounded-hero bg-accent-panel px-6 py-14 sm:px-14 sm:py-16">
            <RadialIconField className="pointer-events-none absolute right-6 top-1/2 hidden w-[330px] -translate-y-1/2 lg:block xl:right-10 xl:w-[360px]" />

            <div className="relative max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                {eyebrow}
              </p>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-white">
                {title}
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/85">
                {description}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink
                  href={primaryHref}
                  variant="dark"
                  size="lg"
                  withArrow
                >
                  {primaryLabel}
                </ButtonLink>
                <ButtonLink
                  href={secondaryHref}
                  variant="ghost-light"
                  size="lg"
                >
                  {secondaryLabel}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
