"use client";

import type { Bi } from "@/content";
import { useLang } from "./LangProvider";

export default function SectionHeader({ eyebrow, title, sub, light = false }: { eyebrow: Bi; title: Bi; sub?: Bi; light?: boolean }) {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={`text-sm font-bold uppercase tracking-[0.18em] ${light ? "text-sun-300" : "text-sun-600"}`}>{t(eyebrow)}</p>
      <h2 className={`mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl ${light ? "text-white" : "text-forest-900"}`}>{t(title)}</h2>
      {sub && <p className={`mt-4 text-lg ${light ? "text-forest-100" : "text-slate-600"}`}>{t(sub)}</p>}
    </div>
  );
}
