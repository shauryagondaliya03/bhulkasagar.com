import Image from "next/image";
import { SITE } from "@/site";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="grid h-12 w-10 shrink-0 place-items-center rounded-lg bg-white p-0.5 ring-2 ring-sun-400">
        <Image src="/images/logo.png" alt="" width={312} height={432} className="h-full w-auto object-contain" priority />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-[17px] font-semibold tracking-tight ${light ? "text-white" : "text-forest-900"}`}>{SITE.name}</span>
        <span className={`block text-[11px] font-semibold ${light ? "text-sun-300" : "text-forest-600"}`}>{SITE.gujaratiName} · {SITE.area}, {SITE.city}</span>
      </span>
    </span>
  );
}
