"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b bg-white/85 backdrop-blur-xl transition-all duration-300",
          scrolled ? "border-paper-line" : "border-transparent",
        )}
      >
        <nav
          className="container-anchor flex items-center justify-between gap-6 py-3.5"
          aria-label="Main"
        >
          <Logo size={52} />

          <ul className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <li key={item.href} className="group/nav relative">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-pill px-3.5 py-2 text-[14px] font-medium transition-colors duration-200",
                    isActive(item.href) ? "text-ink-900" : "text-ink-400 hover:text-ink-900",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover/nav:rotate-180" />
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-20 w-[300px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 ease-premium group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100">
                    <div className="overflow-hidden rounded-panel border border-paper-line bg-white p-2 shadow-card">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col gap-0.5 rounded-xl2 px-3.5 py-2.5 transition-colors hover:bg-paper"
                        >
                          <span className="text-[13.5px] font-medium text-ink-900">
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="text-[11.5px] text-ink-400">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <ButtonLink href="/contact" variant="dark" size="sm" withArrow>
              Get a Demo
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/12 text-ink-900 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile panel */}
      <div
        className={cn(
          "fixed inset-x-0 top-[80px] bottom-0 z-40 overflow-y-auto px-4 pb-8 lg:hidden",
          open ? "visible pointer-events-auto" : "invisible pointer-events-none",
        )}
      >
        <div
          className={cn(
            "rounded-panel border border-paper-line bg-white p-3 shadow-card transition-all duration-300 ease-premium",
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
          )}
        >
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl2 px-4 py-3 text-[15px] font-medium text-ink-900 transition-colors hover:bg-paper"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-1 ml-3 border-l border-paper-line pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-[13.5px] text-ink-400 transition-colors hover:text-ink-900"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-paper-line pt-3">
            <ButtonLink
              href="/contact"
              variant="primary"
              size="lg"
              withArrow
              className="w-full"
            >
              Get a Demo
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
