"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Animates a numeric value. If the value is not purely numeric (for example a
 * placeholder such as "[XX]+"), it renders as-is so no figure is invented.
 */
export function Counter({ value, duration = 1400, className }: CounterProps) {
  const match = value.match(/^([^\d]*)(\d[\d,]*)(.*)$/);
  const target = match ? Number(match[2].replace(/,/g, "")) : null;
  const prefix = match ? match[1] : "";
  const suffix = match ? match[3] : "";

  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(target === null ? value : 0);
  const started = useRef(false);

  useEffect(() => {
    if (target === null) return;
    const node = ref.current;
    if (!node) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {target === null ? value : `${prefix}${display.toLocaleString()}${suffix}`}
    </span>
  );
}
