import { howItWorks } from "@/content/home";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-anchor">
        <div className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-ink-900">
            From first conversation to long-term growth.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <div className="border-t border-paper-line pt-6">
                <p className="font-mono text-[12px] font-semibold text-accent">
                  {step.number}
                </p>
                <h3 className="mt-3 text-[16px] font-semibold tracking-[-0.01em] text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
