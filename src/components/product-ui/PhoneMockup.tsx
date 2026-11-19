import { ArrowDownLeft, ArrowUpRight, CreditCard, PiggyBank, Receipt } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-[248px] overflow-hidden rounded-[2.25rem] border border-white/15 bg-ink-950 p-2.5 shadow-lift",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900">
        {/* status bar */}
        <div className="flex items-center justify-between px-4 pt-3 text-[10px] text-ink-300">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Anchor
          </span>
        </div>

        <div className="px-4 pb-4 pt-3">
          <p className="text-[11px] text-ink-300">Member savings balance</p>
          <p className="mt-1 font-display text-2xl font-bold tracking-[-0.03em] text-white">
            ETB 42,580
          </p>
          <p className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-accent-300">
            <ArrowUpRight className="h-3 w-3" /> +2.4% this month
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              { icon: ArrowDownLeft, label: "Deposit" },
              { icon: Receipt, label: "Repay" },
              { icon: PiggyBank, label: "Shares" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 rounded-xl2 border border-white/10 bg-white/[0.04] py-2.5"
              >
                <Icon className="h-4 w-4 text-accent-300" />
                <span className="text-[10px] text-ink-200">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl2 border border-white/10 bg-white/[0.03] p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-white">Transactions</span>
              <CreditCard className="h-3.5 w-3.5 text-ink-300" />
            </div>
            <ul className="space-y-2">
              {[
                { label: "Savings deposit", amount: "+ 8,000" },
                { label: "Loan repayment", amount: "- 2,400" },
                { label: "Share purchase", amount: "+ 3,500" },
              ].map((tx) => (
                <li key={tx.label} className="flex items-center justify-between text-[11px]">
                  <span className="text-ink-200">{tx.label}</span>
                  <span className="font-semibold text-white">{tx.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
