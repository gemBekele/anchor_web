import { LogoMark } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function MemberCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-[300px] overflow-hidden rounded-[22px] border border-white/15 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-5 shadow-lift",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-accent/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.10)_50%,transparent_65%)]"
      />
      <div
        aria-hidden
        className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-accent-300 via-accent to-accent-700"
      />

      <div className="relative flex items-start justify-between">
        <LogoMark height={22} />
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-300">
          Member
        </span>
      </div>

      <div className="relative mt-7">
        <p className="text-[10px] uppercase tracking-[0.18em] text-ink-300">Savings balance</p>
        <p className="mt-1 font-display text-[26px] font-extrabold tracking-[-0.02em] text-white">
          ETB 42,580
        </p>
      </div>

      <div className="relative mt-6 flex items-end justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-[0.18em] text-ink-400">Member name</p>
          <p className="mt-0.5 text-[13px] font-medium text-white">Abebe K.</p>
        </div>
        <div className="text-right">
          <p className="text-[9px] uppercase tracking-[0.18em] text-ink-400">Account</p>
          <p className="mt-0.5 font-mono text-[13px] tracking-[0.15em] text-ink-100">
            4021 •••• 8842
          </p>
        </div>
      </div>
    </div>
  );
}
