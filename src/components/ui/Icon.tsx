import {
  Boxes,
  Building2,
  HandCoins,
  Landmark,
  LineChart,
  Layers,
  ShieldCheck,
  Network,
  Users,
  TrendingUp,
  Workflow,
  Sparkles,
  Database,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const registry: Record<string, LucideIcon> = {
  Landmark,
  TrendingUp,
  Boxes,
  Users,
  HandCoins,
  Building2,
  LineChart,
  Layers,
  ShieldCheck,
  Network,
  Workflow,
  Sparkles,
  Database,
  Wallet,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Component = registry[name] ?? Boxes;
  return <Component className={cn("h-5 w-5", className)} aria-hidden />;
}
