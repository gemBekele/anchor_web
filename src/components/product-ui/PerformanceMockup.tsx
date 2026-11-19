import { Target, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { BarChart, Donut, SparkLine } from "./charts";

const indicators = [
  { label: "Savings growth", value: 86, target: "Target 80%" },
  { label: "Loan recovery", value: 92, target: "Target 90%" },
  { label: "Member growth", value: 74, target: "Target 70%" },
];

export function PerformanceMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-hero border border-white/10 bg-ink-900 shadow-lift",
        className,
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-teal-500/25 blur-3xl"
      />

      <div className="relative p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <p className="text-[13px] font-semibold text-white">Performance Management</p>
            <p className="text-[11px] text-ink-300">Institutional indicators</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-pill bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-300">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent" />
            Sample data
          </span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl2 border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-ink-300">Overall performance score</span>
              <TrendingUp className="h-4 w-4 text-accent-300" />
            </div>
            <p className="mt-2 font-display text-3xl font-extrabold tracking-[-0.03em] text-white">
              84<span className="text-lg text-ink-300">/100</span>
            </p>
            <SparkLine data={[5, 6, 6, 8, 7, 9, 11]} className="mt-2 h-8 w-full opacity-80" />
          </div>

          <div className="flex items-center gap-4 rounded-xl2 border border-white/10 bg-white/[0.03] p-4">
            <Donut value={84} label="84%" className="h-24 w-24 shrink-0" />
            <div className="space-y-1.5 text-[11px] text-ink-200">
              <p className="font-semibold text-white">On track</p>
              <p className="text-ink-400">Against institutional targets</p>
            </div>
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-[1.2fr_1fr]">
          <div className="rounded-xl2 border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[12px] font-semibold text-white">Monthly targets</span>
              <span className="inline-flex items-center gap-1 text-[10px] text-ink-300">
                <Target className="h-3 w-3" /> FY 2026
              </span>
            </div>
            <div className="h-24">
              <BarChart
                data={[42, 58, 50, 66, 61, 74, 70, 82, 76, 88, 84, 92]}
                accentIndex={11}
              />
            </div>
          </div>

          <div className="rounded-xl2 border border-white/10 bg-white/[0.03] p-4">
            <p className="mb-3 text-[12px] font-semibold text-white">Indicators</p>
            <ul className="space-y-3">
              {indicators.map((item) => (
                <li key={item.label}>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-ink-200">{item.label}</span>
                    <span className="font-semibold text-white">{item.value}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                  <p className="mt-1 text-[10px] text-ink-400">{item.target}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
