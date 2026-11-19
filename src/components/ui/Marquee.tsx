import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  speed = 40,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

export function PlaceholderLogo({
  label = "Client",
  compact = false,
}: {
  label?: string;
  compact?: boolean;
}) {
  const initials = label
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (compact) {
    return (
      <div className="flex min-w-0 items-center gap-2.5 opacity-80 transition-opacity duration-300 hover:opacity-100">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink text-[10px] font-bold text-accent-300">
          {initials}
        </span>
        <span className="truncate font-display text-[13px] font-semibold tracking-[-0.01em] text-ink-600">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 opacity-80 transition-opacity duration-300 hover:opacity-100">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-[11px] font-bold text-accent-300">
        {initials}
      </span>
      <span className="whitespace-nowrap font-display text-[15px] font-semibold tracking-[-0.01em] text-ink-600">
        {label}
      </span>
    </div>
  );
}
