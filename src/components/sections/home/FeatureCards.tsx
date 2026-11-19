import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IconTile } from "@/components/ui/Tiles";
import { Reveal } from "@/components/ui/Reveal";

const cards = [
  {
    icon: "ShieldCheck",
    title: "Security and access control",
    description:
      "Role-based access, audit trails, and session controls so each team member has exactly the permissions their work requires.",
    href: "/products/core-banking-system",
  },
  {
    icon: "Network",
    title: "Integrations",
    description:
      "Products share data foundations and reporting, so member, savings, and performance information stays consistent across the institution.",
    href: "/products",
  },
];

export function FeatureCards() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="container-anchor">
        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 90}>
              <div className="flex h-full flex-col rounded-card border border-paper-line bg-paper p-8 transition-colors duration-500 hover:border-ink-900/15 hover:bg-white">
                <IconTile icon={card.icon} />
                <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.02em] text-ink-900">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-muted">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="group/link mt-7 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent"
                >
                  Learn More
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
