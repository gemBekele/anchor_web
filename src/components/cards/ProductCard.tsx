import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/content/types";
import { Icon } from "@/components/ui/Icon";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group flex h-full flex-col rounded-card border border-paper-line bg-white p-6 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-ink-900/15 hover:shadow-card sm:p-7 ${className ?? ""}`}
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

      {product.capabilities.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {product.capabilities.slice(0, 4).map((capability) => (
            <li
              key={capability}
              className="rounded-pill bg-paper px-2.5 py-1 text-[11px] font-medium text-ink-500"
            >
              {capability}
            </li>
          ))}
        </ul>
      )}

      <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[13px] font-semibold text-accent">
        Explore Product
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
