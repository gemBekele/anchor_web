import { OrbitAvatars } from "@/components/sections/home/OrbitAvatars";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Highlight } from "@/components/ui/Decor";

export function OrbitSection() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="container-anchor grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <OrbitAvatars />
        </Reveal>

        <Reveal delay={100}>
          <Eyebrow>Ecosystem</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-ink-900">
            Connecting every part of your institution for{" "}
            <Highlight>the same purpose.</Highlight>
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
            Members, savings, loans, branches, and performance live in one connected ecosystem —
            so every team works from the same information and every report lines up.
          </p>
          <div className="mt-9">
            <ButtonLink href="/products" variant="dark" size="lg" withArrow>
              Explore the ecosystem
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
