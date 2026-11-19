import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of the Anchor Financials website and services.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Acceptance of terms",
    body: "By accessing this website, you agree to these terms of use. If you do not agree, please do not use the site.",
  },
  {
    title: "Use of the website",
    body: "You may use this website for lawful purposes only. You agree not to interfere with its operation, attempt to gain unauthorized access, or use it in a way that could damage or impair it.",
  },
  {
    title: "Intellectual property",
    body: "The content, branding, software, and design on this website are owned by Anchor Financials or its licensors and are protected by applicable intellectual property laws. They may not be reproduced without permission.",
  },
  {
    title: "Product services",
    body: "Use of Anchor Financials software products is governed by the applicable service agreement between Anchor Financials and your institution, not by these website terms.",
  },
  {
    title: "Disclaimers",
    body: "This website and its content are provided on an \"as is\" basis without warranties of any kind. Information on the site is for general purposes and does not constitute financial, legal, or professional advice.",
  },
  {
    title: "Limitation of liability",
    body: "To the extent permitted by law, Anchor Financials is not liable for indirect, incidental, or consequential damages arising from your use of this website.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms that govern your use of the Anchor Financials website."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="container-anchor max-w-3xl space-y-8">
          <p className="text-[15px] leading-[1.75] text-ink-600">Last updated: 1 March 2026</p>
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-[18px] font-bold text-ink">{section.title}</h2>
              <p className="mt-2 text-[15px] leading-[1.75] text-ink-600">{section.body}</p>
            </div>
          ))}
          <div>
            <h2 className="font-display text-[18px] font-bold text-ink">Contact</h2>
            <p className="mt-2 text-[15px] leading-[1.75] text-ink-600">
              Questions about these terms can be sent to{" "}
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
