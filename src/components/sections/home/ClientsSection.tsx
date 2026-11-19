import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clients } from "@/content/clients";
import { caseStudies } from "@/content/posts";
import { imagesBySlug } from "@/content/resourceImages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PostCard } from "@/components/cards/PostCard";
import { PlaceholderLogo } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

export function ClientsSection() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="container-anchor">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Clients"
            title="Trusted by financial organizations."
            description="SACCOs, microfinance institutions, and cooperatives across the region run their operations on Anchor Financials."
          />
          <Link
            href="/clients"
            className="group inline-flex shrink-0 items-center gap-1.5 text-[13.5px] font-semibold text-accent"
          >
            View all clients
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, index) => (
            <Reveal key={index} delay={index * 50}>
              <div className="flex h-20 min-w-0 items-center rounded-xl2 border border-paper-line bg-white px-4">
                <PlaceholderLogo label={client.name} compact />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {caseStudies.slice(0, 2).map((post, index) => (
            <Reveal key={post.slug} delay={index * 90}>
              <PostCard post={post} image={imagesBySlug[post.slug]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
