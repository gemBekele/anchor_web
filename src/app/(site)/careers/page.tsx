import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Briefcase, MapPin, Clock } from "lucide-react";
import { openVacancies } from "@/content/vacancies";
import { siteConfig } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Highlight } from "@/components/ui/Decor";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Careers — Sales & Software Jobs in Addis Ababa",
  description:
    "Open roles at Anchor Financials in Addis Ababa. We hire people to sell, build and support core banking software for Ethiopian SACCOs and microfinance institutions.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        path="/careers"
        eyebrow="Careers"
        title={
          <>
            Build software that <Highlight>moves money</Highlight> for real institutions.
          </>
        }
        description="Anchor Financials builds core banking and performance software for SACCOs, microfinance institutions and cooperatives across Ethiopia. We are a small team, so the work you do shows up in the product quickly."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-anchor">
          <SectionHeading
            eyebrow="Open roles"
            title={openVacancies.length === 1 ? "One position open." : `${openVacancies.length} positions open.`}
            description="We review every application. If a role below fits what you do, apply directly by email."
          />

          <div className="mt-10 space-y-5">
            {openVacancies.map((vacancy, index) => (
              <Reveal key={vacancy.slug} delay={index * 80}>
                <Link
                  href={`/careers/${vacancy.slug}`}
                  className="group flex flex-col gap-5 rounded-card border border-paper-line bg-white p-7 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-ink-900/15 hover:shadow-card sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-pill bg-accent-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                        {vacancy.department}
                      </span>
                      <span className="text-[11.5px] text-ink-400">
                        Posted {formatDate(vacancy.posted)}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.02em] text-ink-900">
                      {vacancy.title}
                    </h3>

                    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-500">
                      <li className="inline-flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-ink-300" />
                        {vacancy.location}
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <Briefcase className="h-3.5 w-3.5 text-ink-300" />
                        {vacancy.employmentType}
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-ink-300" />
                        {vacancy.workMode}
                      </li>
                    </ul>
                  </div>

                  <span className="inline-flex shrink-0 items-center gap-1.5 text-[13.5px] font-semibold text-accent">
                    View role
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className="container-anchor grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="How we hire"
              title="A short, direct process."
              description="No long panel rounds. You will meet the people you would work with, and we will tell you where you stand."
            />
          </div>
          <ol className="space-y-5">
            {[
              {
                title: "Apply online",
                body: "Open the role and submit the application form with your CV attached.",
              },
              {
                title: "A conversation",
                body: "A first discussion about your experience and what you are looking for.",
              },
              {
                title: "Meet the team",
                body: "Talk through the work with the people you would be working alongside.",
              },
              {
                title: "Decision",
                body: "We come back to you either way, with a clear answer.",
              },
            ].map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 70}>
                <div className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-900 text-[11px] font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink-900">{step.title}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-muted">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white pb-20 pt-16 sm:pb-24">
        <div className="container-anchor">
          <div className="relative overflow-hidden rounded-hero bg-accent-panel px-6 py-14 sm:px-14 sm:py-16">
            <div className="relative max-w-xl">
              <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-white">
                Nothing open that fits you?
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/85">
                Send us your CV anyway and tell us what you would want to work on. We keep
                good applications on file.
              </p>
              <div className="mt-8">
                <ButtonLink
                  href={`mailto:${siteConfig.contact.email}?subject=Speculative%20application`}
                  variant="dark"
                  size="lg"
                  withArrow
                >
                  Send a speculative application
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
