"use client";

import { useRef } from "react";
import { CalendarDays, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { EVENTS, SECTION_COPY } from "@/content";
import { useLang } from "./LangProvider";
import SectionHeader from "./SectionHeader";

export default function Events() {
  const { t, lang } = useLang();
  const rail = useRef<HTMLUListElement>(null);
  const c = SECTION_COPY.events;

  const scroll = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 380), behavior: "smooth" });
  };

  return (
    <section id="events" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader {...c} />
        <div className="mt-10 flex justify-end gap-2">
          <button type="button" onClick={() => scroll(-1)} aria-label={lang === "gu" ? "પાછળ" : "Previous events"} className="grid h-11 w-11 place-items-center rounded-full border border-forest-100 text-forest-800 transition hover:bg-forest-800 hover:text-white"><ChevronLeft className="h-5 w-5" /></button>
          <button type="button" onClick={() => scroll(1)} aria-label={lang === "gu" ? "આગળ" : "Next events"} className="grid h-11 w-11 place-items-center rounded-full border border-forest-100 text-forest-800 transition hover:bg-forest-800 hover:text-white"><ChevronRight className="h-5 w-5" /></button>
        </div>
        <ul ref={rail} tabIndex={0} aria-label={t(c.title)} className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-forest-500">
          {EVENTS.map((e, i) => (
            <li key={e.id} className="w-[84%] shrink-0 snap-start sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.85rem)]">
              <article className="flex h-full flex-col rounded-[2rem] border border-forest-100 bg-white p-7 shadow-[0_30px_60px_-34px_rgba(23,67,43,0.35)]">
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${i === 0 ? "bg-sun-400 text-forest-950" : "bg-forest-50 text-forest-800"}`}>{t(e.tag)}</span>
                  {i === 0 && <span className="text-xs font-semibold text-sun-700">{lang === "gu" ? "આગામી" : "Upcoming"}</span>}
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-snug text-forest-900">{t(e.title)}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">{t(e.text)}</p>
                <dl className="mt-6 space-y-2 border-t border-forest-100 pt-4 text-sm text-slate-600">
                  <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-forest-600" aria-hidden /><dt className="sr-only">Date</dt><dd>{e.date}</dd></div>
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-forest-600" aria-hidden /><dt className="sr-only">Time</dt><dd>{e.time}</dd></div>
                </dl>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
