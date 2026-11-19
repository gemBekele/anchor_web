import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Anchor Financials handles personal and organizational information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information we collect",
    body: "We collect information you provide directly — such as your name, organization, email address, and phone number when you submit an inquiry or request a demo — as well as information generated when you use our website and products.",
  },
  {
    title: "How we use information",
    body: "We use information to respond to inquiries, provide and support our products, improve our services, and communicate with you about updates. We do not sell personal information.",
  },
  {
    title: "Data we process on behalf of institutions",
    body: "When we provide software to a financial institution, that institution remains responsible for the member and customer data processed in the system. We process such data only to deliver and support the service, under the terms of our agreement.",
  },
  {
    title: "Security",
    body: "We apply administrative, technical, and organizational measures designed to protect information against unauthorized access, loss, or misuse. Access to production systems is restricted and monitored.",
  },
  {
    title: "Your rights",
    body: "You may request access to, correction of, or deletion of the personal information we hold about you, subject to legal and contractual obligations. To make a request, contact us using the details below.",
  },
  {
    title: "Retention",
    body: "We retain information for as long as necessary to provide our services, meet legal and regulatory requirements, and resolve disputes.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains how Anchor Financials collects, uses, and protects information."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="container-anchor max-w-3xl space-y-8">
          <p className="text-[15px] leading-[1.75] text-ink-600">
            Last updated: 1 March 2026
          </p>
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-[18px] font-bold text-ink">{section.title}</h2>
              <p className="mt-2 text-[15px] leading-[1.75] text-ink-600">{section.body}</p>
            </div>
          ))}
          <div>
            <h2 className="font-display text-[18px] font-bold text-ink">Contact</h2>
            <p className="mt-2 text-[15px] leading-[1.75] text-ink-600">
              Questions about this policy can be sent to{" "}
              <a href="mailto:hello@anchorfinancials.com" className="link-underline font-medium text-ink">
                hello@anchorfinancials.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
