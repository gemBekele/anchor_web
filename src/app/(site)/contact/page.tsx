import type { Metadata } from "next";
import { Clock, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Highlight } from "@/components/ui/Decor";

export const metadata: Metadata = {
  title: "Contact — Talk to Anchor Financials",
  description:
    "Talk to the Anchor Financials team about core banking for your SACCO or microfinance institution. Request a demo, pricing, or a product walkthrough.",
  alternates: { canonical: "/contact" },
};

const details = [
  { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
  { icon: MapPin, label: "Office", value: siteConfig.contact.location },
  { icon: Linkedin, label: "LinkedIn", value: siteConfig.contact.linkedin, href: siteConfig.contact.linkedin },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s Build Better <Highlight tone="light">Financial Infrastructure.</Highlight>
          </>
        }
        description="Tell us about your institution, your current challenges, and the technology you're looking for. Our team will take it from there."
        path="/contact"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-paper py-16 sm:py-20">
        <div className="container-anchor grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div>
            <Eyebrow>Send an inquiry</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.6rem,2.6vw,2.1rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-ink">
              Start the conversation.
            </h2>
            <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-muted">
              Share a few details and we will get back to you. Fields marked required help us route
              your inquiry to the right person.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-card border border-paper-line bg-white p-6 shadow-soft">
              <h3 className="font-display text-[16px] font-bold text-ink">Contact details</h3>
              <ul className="mt-5 space-y-4">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="link-underline block break-words text-[14px] text-ink">
                          {value}
                        </a>
                      ) : (
                        <p className="break-words text-[14px] text-ink">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-card border border-paper-line bg-ink-950 p-6 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent-300">
                <Clock className="h-4 w-4" />
              </span>
              <h3 className="mt-4 font-display text-[16px] font-bold">Business hours</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-200">
                Monday to Friday, 8:30 AM – 5:30 PM (EAT). Hosted institutions have access to
                critical-issue support outside these hours.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
