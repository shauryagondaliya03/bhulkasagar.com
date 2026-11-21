import { Sprout } from "lucide-react";
import { SITE } from "@/site";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-forest-600 to-forest-900 shadow-md ring-2 ring-sun-400">
        <Sprout className="h-6 w-6 text-sun-300" aria-hidden />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-[17px] font-semibold tracking-tight ${light ? "text-white" : "text-forest-900"}`}>{SITE.name}</span>
        <span className={`block text-[11px] font-semibold ${light ? "text-sun-300" : "text-forest-600"}`}>{SITE.gujaratiName} · {SITE.area}, {SITE.city}</span>
      </span>
    </span>
  );
}
