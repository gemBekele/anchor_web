import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-24 pt-40 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-teal-600/25 blur-3xl"
      />
      <div className="container-anchor relative max-w-2xl">
        <Eyebrow tone="dark">Error 404</Eyebrow>
        <h1 className="mt-5 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1] tracking-[-0.04em]">
          This page could not be found.
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-ink-200 sm:text-[17px]">
          The page you are looking for may have moved. Explore our products or return to the
          homepage.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="primary" size="lg" withArrow>
            Back to Home
          </ButtonLink>
          <ButtonLink href="/products" variant="ghost" size="lg">
            Explore Products
          </ButtonLink>
        </div>
        <p className="mt-10 text-[13px] text-ink-400">
          Or{" "}
          <Link href="/contact" className="link-underline text-accent-300">
            contact our team
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
