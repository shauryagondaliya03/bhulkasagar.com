"use client";

import { Award, GraduationCap, Library, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FEATURES, SECTION_COPY } from "@/content";
import { useLang } from "./LangProvider";
import SectionHeader from "./SectionHeader";

const ICONS: Record<string, LucideIcon> = { Award, GraduationCap, Library, Wallet };

export default function Features() {
  const { t } = useLang();
  const c = SECTION_COPY.features;
  return (
    <section id="why-us" className="bg-forest-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader {...c} />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon] ?? Award;
            return (
              <li key={f.icon} style={{ animationDelay: `${i * 80}ms` }}
                className="group animate-fade-up rounded-[2rem] border border-forest-100 bg-white p-7 shadow-[0_30px_60px_-34px_rgba(23,67,43,0.35)] transition hover:-translate-y-1.5 hover:shadow-[0_36px_60px_-30px_rgba(23,67,43,0.45)]">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest-800 text-sun-300 transition group-hover:bg-sun-400 group-hover:text-forest-950">
                  <Icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-forest-900">{t(f.title)}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{t(f.text)}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
