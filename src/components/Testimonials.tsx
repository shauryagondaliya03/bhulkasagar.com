"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Languages, Quote } from "lucide-react";
import { SECTION_COPY, TESTIMONIALS } from "@/content";
import { useLang } from "./LangProvider";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  const { t, lang } = useLang();
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const [paused, setPaused] = useState(false);
  const n = TESTIMONIALS.length;
  const c = SECTION_COPY.testimonials;
  const item = TESTIMONIALS[i];
  const quoteLang = flip ? (lang === "en" ? "gu" : "en") : lang;

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((x) => (x + 1) % n), 8000);
    return () => clearInterval(id);
  }, [paused, n]);

  const go = (d: number) => setI((x) => (x + d + n) % n);

  return (
    <section id="testimonials" className="bg-forest-50/60 py-20 sm:py-28" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        <figure key={i} aria-live="polite" className="mx-auto mt-12 max-w-3xl animate-fade-up rounded-[2rem] border border-forest-100 bg-white p-8 text-center shadow-[0_30px_60px_-30px_rgba(23,67,43,0.35)] sm:p-12">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sun-400 text-forest-950"><Quote className="h-6 w-6" aria-hidden /></span>
          <blockquote lang={quoteLang} className="mt-6 font-display text-xl leading-relaxed text-forest-900 sm:text-2xl">“{item[quoteLang]}”</blockquote>
          <figcaption className="mt-6">
            <span className="block font-semibold text-forest-900">{item.name}</span>
            <span className="text-sm text-slate-500">{t(item.role)}</span>
          </figcaption>
        </figure>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-forest-200 bg-white text-forest-800 transition hover:bg-forest-800 hover:text-white"><ChevronLeft className="h-5 w-5" /></button>
          <div className="flex gap-2" role="tablist" aria-label="Testimonials">
            {TESTIMONIALS.map((x, idx) => (
              <button key={x.name} role="tab" aria-selected={idx === i} aria-label={x.name} onClick={() => setI(idx)} className={`h-2.5 rounded-full transition-all ${idx === i ? "w-8 bg-forest-800" : "w-2.5 bg-forest-300 hover:bg-forest-500"}`} />
            ))}
          </div>
          <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="grid h-11 w-11 place-items-center rounded-full border border-forest-200 bg-white text-forest-800 transition hover:bg-forest-800 hover:text-white"><ChevronRight className="h-5 w-5" /></button>
        </div>
        <div className="mt-5 text-center">
          <button type="button" onClick={() => setFlip((f) => !f)} aria-pressed={flip} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-forest-700 hover:bg-white">
            <Languages className="h-4 w-4" aria-hidden /> {quoteLang === "gu" ? "Read in English" : "ગુજરાતીમાં વાંચો"}
          </button>
        </div>
      </div>
    </section>
  );
}
