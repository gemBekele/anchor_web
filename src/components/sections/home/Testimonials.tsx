"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { Avatar } from "@/components/ui/Tiles";
import { cn } from "@/lib/utils";

export function TestimonialCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const amount = card ? card.clientWidth + 24 : 340;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="max-w-xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink-900">
          What our clients have to say.
        </h2>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink-900/12 text-ink-900 transition-colors hover:border-ink-900/30 hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-white transition-colors hover:bg-ink-800"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {testimonials.map((item) => (
          <figure
            key={item.name}
            className={cn(
              "flex w-[85%] shrink-0 snap-start flex-col rounded-card border border-paper-line bg-white p-7",
              "shadow-soft sm:w-[420px]",
            )}
          >
            <div className="flex items-center gap-3">
              <Avatar name={item.name} size="md" />
              <div>
                <figcaption className="text-[14px] font-semibold text-ink-900">
                  {item.name}
                </figcaption>
                <p className="text-[12px] text-ink-400">{item.role}</p>
              </div>
            </div>

            <div className="mt-4 flex gap-0.5" aria-label={`${item.rating} out of 5`}>
              {Array.from({ length: item.rating }).map((_, index) => (
                <Star key={index} className="h-3.5 w-3.5 fill-accent text-accent" />
              ))}
            </div>

            <blockquote className="mt-4 text-[14px] leading-relaxed text-ink-500">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
          </figure>
        ))}
      </div>
    </div>
  );
}
