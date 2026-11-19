import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getPublishedProducts } from "@/content/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ProductsSection() {
  const products = getPublishedProducts();

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-anchor">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Products"
            title="One technology partner. Multiple financial solutions."
            description="Six connected products covering core operations, performance oversight, and member self-service."
          />
          <Link
            href="/products"
            className="group inline-flex shrink-0 items-center gap-1.5 text-[13.5px] font-semibold text-accent"
          >
            View all products
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={(index % 3) * 70}>
              <Link
                href={`/products/${product.slug}`}
                className="group flex h-full flex-col rounded-card border border-paper-line bg-white p-6 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-ink-900/15 hover:shadow-card sm:p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl2 bg-ink-900 text-white transition-colors duration-500 group-hover:bg-accent">
                  <Icon name={product.icon} className="h-5 w-5" />
                </span>

                <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.02em] text-ink-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                  {product.shortDescription}
                </p>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[13px] font-semibold text-accent">
                  Explore Product
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
