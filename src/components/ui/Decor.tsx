import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Accent word inside a headline, rendered in the brand red. */
export function Highlight({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-accent",
        tone === "dark" && "text-accent-300",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Oversized decorative section index, e.g. 01, 02. */
export function SectionIndex({
  value,
  tone = "dark",
  className,
}: {
  value: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none select-none font-display text-[clamp(4rem,10vw,9rem)] font-extrabold leading-none",
        tone === "dark" ? "text-outline" : "text-outline-light",
        className,
      )}
    >
      {value}
    </span>
  );
}
