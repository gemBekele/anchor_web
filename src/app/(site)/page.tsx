import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { ShowcasePanel } from "@/components/sections/home/ShowcasePanel";
import { FeatureCards } from "@/components/sections/home/FeatureCards";
import { SolutionsSection } from "@/components/sections/home/SolutionsSection";
import { ProductsSection } from "@/components/sections/home/ProductsSection";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { OrbitSection } from "@/components/sections/home/OrbitSection";
import { TestimonialCarousel } from "@/components/sections/home/Testimonials";
import { ClientsSection } from "@/components/sections/home/ClientsSection";
import { InsightsSection } from "@/components/sections/home/InsightsSection";
import { AccentCTA } from "@/components/sections/AccentCTA";
import { siteConfig } from "@/content/site";
import { JsonLd, webPageSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: siteConfig.seoTitle,
          description: siteConfig.seoDescription,
          path: "/",
        })}
      />
      <Hero />
      <StatsSection />
      <ShowcasePanel />
      <FeatureCards />
      <SolutionsSection />
      <ProductsSection />
      <HowItWorks />
      <OrbitSection />
      <section className="bg-white py-20 sm:py-24">
        <div className="container-anchor">
          <TestimonialCarousel />
        </div>
      </section>
      <ClientsSection />
      <InsightsSection />
      <AccentCTA />
    </>
  );
}
