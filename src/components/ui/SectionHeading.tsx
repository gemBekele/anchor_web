import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
  children,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={tone === "dark" ? "dark" : "light"}>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          "max-w-3xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.06] tracking-[-0.035em]",
          tone === "dark" ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-[15px] leading-relaxed",
            tone === "dark" ? "text-ink-200" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
