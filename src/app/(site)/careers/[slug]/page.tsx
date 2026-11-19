import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Briefcase, CalendarCheck, CalendarClock, MapPin, Send } from "lucide-react";
import { getVacancy, vacancies } from "@/content/vacancies";
import { siteConfig } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, jobPostingSchema } from "@/components/seo/JsonLd";
import { ApplicationForm } from "@/components/careers/ApplicationForm";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return vacancies.map((vacancy) => ({ slug: vacancy.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vacancy = getVacancy(slug);
  if (!vacancy) return { title: "Vacancy not found" };

  return {
    title: vacancy.seoTitle ?? vacancy.title,
    description: vacancy.metaDescription ?? vacancy.summary,
    alternates: { canonical: `/careers/${vacancy.slug}` },
    openGraph: {
      type: "article",
      title: vacancy.seoTitle ?? vacancy.title,
      description: vacancy.metaDescription ?? vacancy.summary,
    },
  };
}

export default async function VacancyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vacancy = getVacancy(slug);
  if (!vacancy) notFound();

  const facts = [
    { icon: MapPin, label: "Location", value: vacancy.location },
    { icon: Briefcase, label: "Type", value: `${vacancy.employmentType} · ${vacancy.workMode}` },
    { icon: CalendarClock, label: "Posted", value: formatDate(vacancy.posted) },
    {
      icon: CalendarCheck,
      label: "Apply by",
      value: formatDate(vacancy.validThrough),
    },
  ];

  return (
    <>
      <JsonLd data={jobPostingSchema(vacancy)} />

      <PageHero
        path={`/careers/${vacancy.slug}`}
        eyebrow={vacancy.department}
        title={vacancy.title}
        description={vacancy.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
          { label: vacancy.title },
        ]}
      >
        <ButtonLink href="#apply" variant="primary" size="lg" icon={<Send className="h-4 w-4" />}>
          Apply for this role
        </ButtonLink>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-anchor grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <article className="max-w-2xl">
            <Reveal>
              <h2 className="text-[22px] font-extrabold tracking-[-0.025em] text-ink-900">
                Key responsibilities
              </h2>
              <ul className="mt-5 space-y-3">
                {vacancy.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-[15.5px] leading-relaxed text-ink-600">
                    <span aria-hidden className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-12 text-[22px] font-extrabold tracking-[-0.025em] text-ink-900">
                What we are looking for
              </h2>
              <ul className="mt-5 space-y-3">
                {vacancy.requirements.map((item) => (
                  <li key={item} className="flex gap-3 text-[15.5px] leading-relaxed text-ink-600">
                    <span aria-hidden className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {vacancy.niceToHave.length > 0 && (
              <Reveal delay={140}>
                <h2 className="mt-12 text-[22px] font-extrabold tracking-[-0.025em] text-ink-900">
                  An advantage
                </h2>
                <ul className="mt-5 space-y-3">
                  {vacancy.niceToHave.map((item) => (
                    <li key={item} className="flex gap-3 text-[15.5px] leading-relaxed text-ink-600">
                      <span
                        aria-hidden
                        className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-300"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal delay={200}>
              <div id="apply" className="mt-12 scroll-mt-28">
                <h2 className="text-[22px] font-extrabold tracking-[-0.025em] text-ink-900">
                  Apply for this role
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                  Fill in your details and attach your CV. Applications are open until{" "}
                  {formatDate(vacancy.validThrough)}. We review every application and reply if
                  there is a fit.
                </p>
                <div className="mt-6">
                  <ApplicationForm
                    vacancySlug={vacancy.slug}
                    vacancyTitle={vacancy.title}
                  />
                </div>
                <p className="mt-4 text-[12.5px] text-ink-400">
                  Prefer email? Send your CV to{" "}
                  <a
                    href={`mailto:${vacancy.applyEmail}`}
                    className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
                  >
                    {vacancy.applyEmail}
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </article>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-card border border-paper-line bg-paper p-7">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                Role details
              </h2>
              <dl className="mt-5 space-y-5">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl2 bg-white text-ink-900 shadow-soft">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <dt className="text-[11.5px] uppercase tracking-[0.12em] text-ink-400">
                        {label}
                      </dt>
                      <dd className="mt-0.5 text-[14px] font-medium text-ink-900">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-4 rounded-card border border-paper-line bg-white p-7">
              <h2 className="text-[15px] font-bold text-ink-900">About Anchor Financials</h2>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                {siteConfig.description}
              </p>
              <Link
                href="/about"
                className="link-underline mt-4 inline-block text-[13px] font-semibold text-accent"
              >
                More about us
              </Link>
            </div>

            <div className="mt-4 rounded-card border border-paper-line bg-white p-7">
              <h2 className="text-[15px] font-bold text-ink-900">Explore the products</h2>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">
                Read what you would be selling before you apply.
              </p>
              <Link
                href="/products"
                className="link-underline mt-4 inline-block text-[13px] font-semibold text-accent"
              >
                See the product range
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
