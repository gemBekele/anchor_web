import Link from "next/link";
import { ArrowUpRight, Boxes, Link2 } from "lucide-react";
import type { Product } from "@/content/types";
import { getProduct } from "@/content/products";
import { Icon } from "@/components/ui/Icon";

export function ProductEcosystem({ product }: { product: Product }) {
  const related = product.relatedProducts
    .map((slug) => getProduct(slug))
    .filter((item): item is Product => Boolean(item));

  return (
    <div className="relative overflow-hidden rounded-hero border border-white/10 bg-ink-950 p-6 sm:p-8">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-20" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="flex-1 rounded-card border border-accent/25 bg-accent/[0.06] p-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl2 bg-accent text-white">
            <Icon name={product.icon} />
          </span>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-300">
            This product
          </p>
          <p className="mt-1 font-display text-[17px] font-bold text-white">{product.name}</p>
        </div>

        <div className="flex items-center justify-center lg:px-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-accent-300">
            <Link2 className="h-4 w-4" />
          </span>
        </div>

        <div className="flex-1 space-y-3">
          {related.length > 0 ? (
            related.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="group flex items-center justify-between gap-4 rounded-card border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-300">
                    Connected product
                  </p>
                  <p className="mt-1 truncate font-display text-[16px] font-bold text-white">
                    {item.name}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-accent-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))
          ) : (
            <div className="flex items-center gap-4 rounded-card border border-dashed border-white/20 bg-white/[0.02] p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl2 bg-white/5 text-ink-300">
                <Boxes className="h-5 w-5" />
              </span>
              <p className="text-[13px] text-ink-300">
                Related products will appear here as the ecosystem expands.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
