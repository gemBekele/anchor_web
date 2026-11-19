import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

/** Dark rounded-square icon tile, as used for feature lists. */
export function IconTile({
  icon,
  tone = "dark",
  className,
  children,
}: {
  icon?: string;
  tone?: "dark" | "accent" | "light";
  className?: string;
  children?: ReactNode;
}) {
  const tones = {
    dark: "bg-ink-900 text-white",
    accent: "bg-accent text-white",
    light: "bg-white text-ink-900 shadow-soft",
  };
  return (
    <span
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl2",
        tones[tone],
        className,
      )}
    >
      {children ?? <Icon name={icon ?? "Sparkles"} className="h-5 w-5" />}
    </span>
  );
}

/** Small label that sits on the top edge of a panel. */
export function NotchPill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-pill bg-white px-5 py-2 text-[13px] font-semibold tracking-[-0.01em] text-ink-900 shadow-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Oversized figure with a label beneath. */
export function StatBlock({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="font-display text-[clamp(2.25rem,4vw,3.25rem)] font-extrabold leading-none tracking-[-0.04em] text-accent">
        {value}
      </span>
      <span className="text-[13.5px] text-ink-400">{label}</span>
    </div>
  );
}

/** Row of people, used for trust and social proof. */
export function Avatar({
  name,
  className,
  size = "md",
}: {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const sizes = {
    sm: "h-8 w-8 text-[10px]",
    md: "h-10 w-10 text-[11px]",
    lg: "h-12 w-12 text-[12px]",
  };

  return (
    <span
      aria-label={name}
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-ink-900 font-semibold text-white",
        sizes[size],
        className,
      )}
    >
      {initials}
    </span>
  );
}
