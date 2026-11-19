import { ArrowDownRight, ArrowUpRight, Search, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { AreaChart, Donut, SparkLine } from "./charts";

const kpis = [
  { label: "Total Members", value: "24,850", delta: "+3.2%", up: true, spark: [4, 6, 5, 8, 7, 10, 12] },
  { label: "Active Loans", value: "ETB 18.4M", delta: "+5.1%", up: true, spark: [6, 5, 7, 6, 9, 8, 11] },
  { label: "Collections", value: "ETB 4.2M", delta: "-0.8%", up: false, spark: [8, 9, 7, 8, 6, 7, 6] },
  { label: "Deposits", value: "ETB 12.8M", delta: "+2.4%", up: true, spark: [5, 6, 6, 8, 9, 9, 11] },
];

const activity = [
  { member: "Member · 4821", action: "Loan repayment", amount: "ETB 2,400", tone: "in" },
  { member: "Member · 1193", action: "Savings deposit", amount: "ETB 8,000", tone: "in" },
  { member: "Member · 7740", action: "Loan disbursement", amount: "ETB 45,000", tone: "out" },
  { member: "Member · 3012", action: "Share purchase", amount: "ETB 3,500", tone: "in" },
];

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-hero border border-white/10 bg-ink-900 shadow-lift",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="rounded-md bg-white/5 px-2 py-1 text-[11px] font-medium text-ink-100">
                Overview
              </span>
              <span className="px-2 py-1 text-[11px] font-medium text-ink-300">Members</span>
              <span className="px-2 py-1 text-[11px] font-medium text-ink-300">Loans</span>
              <span className="px-2 py-1 text-[11px] font-medium text-ink-300">Reports</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-2 rounded-pill border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-ink-300 sm:flex">
              <Search className="h-3.5 w-3.5" /> Search
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-pill bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-300">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent" />
              Sample data
            </span>
          </div>
        </div>

        <div className="grid gap-3 p-4 sm:p-5 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-3">
            {/* KPI grid */}
            <div className="grid grid-cols-2 gap-3">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl2 border border-white/10 bg-white/[0.03] p-3.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-ink-300">{kpi.label}</span>
                    <span
                      className={cn(
                        "inline-flex items-center gap-0.5 text-[11px] font-semibold",
                        kpi.up ? "text-accent-300" : "text-orange-300",
                      )}
                    >
                      {kpi.up ? (
                        <ArrowUpRight className="h-3 w-3" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3" />
                      )}
                      {kpi.delta}
                    </span>
                  </div>
                  <div className="mt-2 flex items-end justify-between gap-2">
                    <span className="font-display text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
                      {kpi.value}
                    </span>
                    <SparkLine data={kpi.spark} className="h-6 w-16 shrink-0 opacity-80" />
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="rounded-xl2 border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-semibold text-white">Portfolio performance</p>
                  <p className="text-[11px] text-ink-300">Savings &amp; loans · last 7 months</p>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-ink-300">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-accent" /> Savings
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/30" /> Loans
                  </span>
                </div>
              </div>
              <div className="h-32 w-full sm:h-36">
                <AreaChart data={[28, 34, 31, 42, 39, 52, 61]} id="hero-savings" />
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-ink-400">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Side column */}
          <div className="space-y-3">
            <div className="rounded-xl2 border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[13px] font-semibold text-white">Loan portfolio health</p>
              <div className="mt-3 flex items-center gap-4">
                <Donut value={92} label="92%" className="h-20 w-20 shrink-0" />
                <div className="space-y-2 text-[11px]">
                  <div className="flex items-center gap-2 text-ink-200">
                    <span className="h-2 w-2 rounded-full bg-accent" /> Performing
                  </div>
                  <div className="flex items-center gap-2 text-ink-200">
                    <span className="h-2 w-2 rounded-full bg-white/25" /> At risk
                  </div>
                  <p className="pt-1 text-ink-400">Portfolio at risk indicator</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl2 border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[13px] font-semibold text-white">Recent activity</p>
                <UserPlus className="h-4 w-4 text-ink-300" />
              </div>
              <ul className="space-y-3">
                {activity.map((row) => (
                  <li key={row.member} className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-[12px] font-medium text-ink-100">{row.member}</p>
                      <p className="truncate text-[11px] text-ink-400">{row.action}</p>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 text-[11px] font-semibold",
                        row.tone === "in" ? "text-accent-300" : "text-ink-200",
                      )}
                    >
                      {row.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
