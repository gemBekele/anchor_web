import { LogoMark } from "@/components/ui/Logo";
import { Avatar } from "@/components/ui/Tiles";
import { clients } from "@/content/clients";

/** Central brand mark ringed by connected client avatars. */
export function OrbitAvatars() {
  const people = clients.slice(0, 6).map((client) => client.name);
  const radius = 132;
  const center = 160;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <svg
        viewBox="0 0 320 320"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ink-900/10"
          strokeDasharray="3 7"
        />
        {people.map((name, index) => {
          const angle = (index / people.length) * Math.PI * 2 - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <line
              key={name}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="1"
              className="text-ink-900/10"
            />
          );
        })}
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-card bg-white shadow-card">
        <LogoMark height={44} />
      </div>

      {people.map((name, index) => {
        const angle = (index / people.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + (radius / 320) * 100 * Math.cos(angle);
        const y = 50 + (radius / 320) * 100 * Math.sin(angle);
        return (
          <div
            key={name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <Avatar
              name={name}
              size="lg"
              className="ring-4 ring-paper"
            />
          </div>
        );
      })}
    </div>
  );
}
