import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { footerNav, siteConfig } from "@/content/site";
import { Logo } from "@/components/ui/Logo";

const columns = [
  { title: "About", links: footerNav.company },
  { title: "Products", links: footerNav.products },
  { title: "Resources", links: footerNav.resources },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-anchor py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <Logo tone="light" size={32} variant="full" />
            <p className="mt-6 text-[14px] leading-relaxed text-ink-200">
              {siteConfig.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-ink-200 transition-colors hover:border-accent-300/50 hover:text-accent-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-ink-200 transition-colors hover:border-accent-300/50 hover:text-accent-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-[13px] font-semibold text-white">{column.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="link-underline text-[13.5px] text-ink-300 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-[13px] font-semibold text-white">Contact</p>
              <ul className="mt-4 space-y-3 text-[13.5px] text-ink-300">
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="link-underline break-all">
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
                  <a href={`tel:${siteConfig.contact.phone}`} className="link-underline">
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
                  <span>{siteConfig.contact.location}</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-300"
              >
                Get a demo <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[12.5px] text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="link-underline hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="link-underline hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
