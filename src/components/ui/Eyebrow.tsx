import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow",
        tone === "light" ? "text-ink-400" : "text-ink-200",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "light" ? "bg-accent" : "bg-accent-300",
        )}
      />
      {children}
    </span>
  );
}

export function Tag({
  children,
  className,
  tone = "neutral",
}: {
  children: ReactNode;
  className?: string;
  tone?: "neutral" | "accent" | "dark" | "outline";
}) {
  const tones = {
    neutral: "bg-paper text-ink-500",
    accent: "bg-accent-100 text-accent-700",
    dark: "bg-ink-900/8 text-ink-500",
    outline: "border border-paper-line text-muted",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
