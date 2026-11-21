"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS, SECTION_COPY } from "@/content";
import { useLang } from "./LangProvider";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  const c = SECTION_COPY.faq;
  return (
    <section id="faq" className="bg-forest-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader {...c} />
        <ul className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q.en} className="overflow-hidden rounded-2xl border border-forest-100 bg-white shadow-sm">
                <h3>
                  <button type="button" id={`faq-q-${i}`} aria-expanded={isOpen} aria-controls={`faq-a-${i}`} onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-forest-900 sm:px-6 sm:text-lg">
                    {t(f.q)}
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${isOpen ? "rotate-45 bg-sun-400 text-forest-950" : "bg-forest-50 text-forest-800"}`}><Plus className="h-4 w-4" aria-hidden /></span>
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden"><p className="px-5 pb-5 leading-relaxed text-slate-600 sm:px-6">{t(f.a)}</p></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
