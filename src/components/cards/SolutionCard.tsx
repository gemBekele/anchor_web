import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Solution } from "@/content/types";

export function SolutionCard({
  solution,
  image,
  className,
}: {
  solution: Solution;
  image?: string;
  className?: string;
}) {
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-card border border-paper-line bg-white transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-card ${className ?? ""}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {image && (
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover grayscale transition-all duration-700 ease-premium group-hover:scale-[1.04] group-hover:grayscale-0"
          />
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent"
        />
        <h3 className="absolute bottom-4 left-5 text-[17px] font-semibold tracking-[-0.01em] text-white">
          {solution.name}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[13.5px] leading-relaxed text-muted">
          {solution.shortDescription}
        </p>
        <ul className="mt-5 space-y-2">
          {solution.outcomes.slice(0, 2).map((outcome) => (
            <li key={outcome} className="flex items-start gap-2.5 text-[13px] text-ink-500">
              <span
                aria-hidden
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {outcome}
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13.5px] font-semibold text-accent">
          Learn More
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
