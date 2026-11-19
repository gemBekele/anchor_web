import { stats } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconTile, StatBlock } from "@/components/ui/Tiles";
import { Highlight } from "@/components/ui/Decor";

const rows = [
  {
    icon: "Landmark",
    title: "Clear operations",
    description:
      "One system for members, savings, loans, and transactions — configured around how your institution already works.",
  },
  {
    icon: "LineChart",
    title: "Promising oversight",
    description:
      "Management and boards track the indicators that matter, reviewed on a regular cadence rather than at month end.",
  },
];

export function StatsSection() {
  const featured = stats.slice(0, 2);

  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="container-anchor">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow>Why Anchor</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.06] tracking-[-0.035em] text-ink-900">
              Financial operations made <Highlight>simpler together.</Highlight>
            </h2>

            <div className="mt-10 flex flex-wrap gap-12">
              {featured.map((stat) => (
                <StatBlock
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </Reveal>

          <div>
            {rows.map((row, index) => (
              <Reveal key={row.title} delay={index * 90}>
                <div
                  className={index > 0 ? "border-t border-paper-line pt-8 mt-8" : undefined}
                >
                  <div className="flex items-start gap-5">
                    <IconTile icon={row.icon} />
                    <div>
                      <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-ink-900">
                        {row.title}
                      </h3>
                      <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-muted">
                        {row.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
