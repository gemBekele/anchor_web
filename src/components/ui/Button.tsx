import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "outline" | "ghost" | "ghost-light";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-[-0.01em] transition-all duration-300 ease-premium disabled:cursor-not-allowed disabled:opacity-50 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-400 hover:shadow-glow active:translate-y-px",
  dark: "bg-ink-900 text-white hover:bg-ink-800 active:translate-y-px",
  outline:
    "border border-ink-900/15 bg-white text-ink-900 hover:border-ink-900/35 hover:bg-paper-soft",
  ghost: "bg-ink-900/[0.04] text-ink-900 hover:bg-ink-900/[0.08]",
  "ghost-light":
    "border border-white/20 bg-white/[0.06] text-white backdrop-blur hover:bg-white/[0.12]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[14px]",
  lg: "h-[52px] px-7 text-[15px]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps & ComponentPropsWithoutRef<"button">;
type LinkProps = CommonProps & ComponentPropsWithoutRef<typeof Link>;

function Inner({
  children,
  withArrow,
  icon,
}: Pick<CommonProps, "children" | "withArrow" | "icon">) {
  return (
    <>
      {icon}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5" />
      )}
    </>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  withArrow,
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      <Inner withArrow={withArrow} icon={icon}>
        {children}
      </Inner>
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  withArrow,
  icon,
  className,
  children,
  ...props
}: LinkProps) {
  const external = typeof href === "string" && href.startsWith("http");
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      <Inner withArrow={withArrow} icon={icon}>
        {children}
      </Inner>
    </Link>
  );
}
