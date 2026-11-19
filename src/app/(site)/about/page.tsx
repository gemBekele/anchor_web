import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Compass, Eye, Handshake, Target } from "lucide-react";
import { team } from "@/content/team";
import { images } from "@/content/images";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Highlight } from "@/components/ui/Decor";
import { AccentCTA } from "@/components/sections/AccentCTA";

export const metadata: Metadata = {
  title: "About — Technology With a Purpose",
  description:
    "Anchor Financials builds core banking and performance software so SACCOs and microfinance institutions can operate accurately, grow and serve members.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Target,
    title: "Purpose",
    description: "We build technology that helps institutions serve their members better.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We work as a long-term partner, not a one-off vendor.",
  },
  {
    icon: Compass,
    title: "Practicality",
    description: "We design around real operations, not idealised ones.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Technology With a <Highlight tone="light">Purpose.</Highlight>
          </>
        }
        description="Anchor Financials exists to help financial institutions modernize the way they operate, manage information, and serve their members."
        path="/about"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        aside={
          <div className="relative overflow-hidden rounded-hero border border-white/10">
            <Image
              src={images.collaboration}
              alt="Anchor Financials team collaborating"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent"
            />
          </div>
        }
      />

      {/* Story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-anchor grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
              Built by people who understand financial institutions.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                Anchor Financials was founded to solve a problem we saw again and again: financial
                institutions running critical operations on fragmented spreadsheets and
                disconnected tools. As membership and lending grow, that approach becomes slower,
                riskier, and harder to manage.
              </p>
              <p>
                We build software infrastructure for SACCOs, microfinance institutions,
                cooperatives, and growing financial organizations — designed around the operational
                realities these institutions face every day, and connected so information stays
                consistent across the institution.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-anchor grid gap-5 md:grid-cols-2">
          {[
            {
              icon: Target,
              label: "Mission",
              text: "To give financial institutions the technology infrastructure they need to operate accurately, grow confidently, and serve their members well.",
            },
            {
              icon: Eye,
              label: "Vision",
              text: "A future where every SACCO, microfinance institution, and cooperative can run on modern, connected software — regardless of size.",
            },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 90}>
              <div className="h-full rounded-card border border-paper-line bg-white p-8 shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl2 bg-ink text-accent-300">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-[19px] font-bold text-ink">{item.label}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-anchor">
          <SectionHeading eyebrow="Values" title="How we work." />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="h-full rounded-card border border-paper-line bg-paper p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl2 bg-white text-ink shadow-soft">
                    <value.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[16px] font-bold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-anchor">
          <SectionHeading
            eyebrow="Team"
            title="The people behind Anchor."
            description="A team with deep experience in financial operations, engineering, and client success."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => {
              const initials = member.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("");
              return (
                <Reveal key={index} delay={(index % 4) * 60}>
                  <div className="overflow-hidden rounded-card border border-paper-line bg-white shadow-soft">
                    <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-ink-900 to-ink-700">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] font-display text-[22px] font-bold text-accent-300">
                        {initials}
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="font-display text-[15px] font-bold text-ink">{member.name}</p>
                      <p className="mt-0.5 text-[12.5px] text-muted">{member.position}</p>
                      <p className="mt-3 text-[12.5px] leading-relaxed text-ink-400">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach + Partnerships */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-anchor grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.4rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink">
              Configure, deploy, and grow with you.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              We start by understanding your institution, then configure the right products around
              your workflows. Implementation is followed by support through adoption, and a
              technology ecosystem that continues to evolve as you grow.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="dark" size="md" withArrow>
                Start a conversation
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div id="careers" className="scroll-mt-28 rounded-card border border-paper-line bg-paper p-8">
              <Eyebrow>Partnerships &amp; careers</Eyebrow>
              <h3 className="mt-4 font-display text-[19px] font-bold text-ink">
                Grow with us.
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">
                We partner with technology and infrastructure providers who share our commitment to
                financial institutions, and we are always interested in people who want to build
                software that matters.
              </p>
              <div className="mt-6 flex flex-wrap gap-5">
                <Link
                  href="/careers"
                  className="link-underline text-[13.5px] font-semibold text-ink"
                >
                  See open roles
                </Link>
                <a
                  href="mailto:careers@anchorfinancials.com"
                  className="link-underline text-[13.5px] font-semibold text-ink"
                >
                  careers@anchorfinancials.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AccentCTA />
    </>
  );
}
