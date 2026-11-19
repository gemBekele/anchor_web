import { Landmark, Network, ShieldCheck, TrendingUp, Users, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [Landmark, Wallet, Users, TrendingUp, ShieldCheck, Network];

const COLS = 4;
const ROWS = 4;

/**
 * A field of bare product icons that fade out gradually with distance from the
 * centre — no boxes, no hard edges. Each glyph gets an opacity and scale derived
 * from its position, so the field dissolves softly at its edges.
 */
export function RadialIconField({
  className,
  tone = "onDark",
}: {
  className?: string;
  tone?: "onDark" | "onLight";
}) {
  const cells = Array.from({ length: COLS * ROWS });

  return (
    <div aria-hidden className={cn("w-full", className)}>
      <div className="grid grid-cols-4 gap-x-6 gap-y-7 sm:gap-x-9 sm:gap-y-10">
        {cells.map((_, index) => {
          const col = index % COLS;
          const row = Math.floor(index / COLS);

          // Normalised distance from the centre of the field (-1 … 1).
          const x = ((col + 0.5) / COLS) * 2 - 1;
          const y = ((row + 0.5) / ROWS) * 2 - 1;
          const distance = Math.hypot(x, y);

          const fade = Math.max(0.04, 1 - Math.pow(distance / 1.18, 1.6));
          const scale = 0.84 + fade * 0.16;

          const Icon = icons[index % icons.length];
          const isAccent = tone === "onLight" ? index % 3 === 0 : index % 4 === 0;

          return (
            <span
              key={index}
              className="flex items-center justify-center"
              style={{ opacity: fade, transform: `scale(${scale})` }}
            >
              <Icon
                className={cn(
                  "h-7 w-7 sm:h-8 sm:w-8",
                  tone === "onLight"
                    ? isAccent
                      ? "text-accent"
                      : "text-ink-900"
                    : "text-white",
                )}
                strokeWidth={1.5}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
