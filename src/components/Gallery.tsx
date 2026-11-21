"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { GALLERY, SECTION_COPY } from "@/content";
import { useLang } from "./LangProvider";
import SectionHeader from "./SectionHeader";

export default function Gallery() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const c = SECTION_COPY.gallery;
  const n = GALLERY.length;

  const close = useCallback(() => { setOpen(null); opener.current?.focus(); }, []);
  const step = useCallback((d: number) => setOpen((x) => (x === null ? x : (x + d + n) % n)), [n]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab") { e.preventDefault(); closeBtn.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, close, step]);

  const current = open !== null ? GALLERY[open] : null;

  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader {...c} />
        <ul className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-3 sm:auto-rows-[240px]">
          {GALLERY.map((g, idx) => (
            <li key={g.src} className={g.span}>
              <button type="button" onClick={(e) => { opener.current = e.currentTarget; setOpen(idx); }} aria-label={`${t(g.alt)} — ${t(SECTION_COPY.gallery.sub)}`}
                className="group relative block h-full w-full overflow-hidden rounded-[1.75rem] border border-forest-100 shadow-[0_24px_50px_-30px_rgba(23,67,43,0.5)]">
                <Image src={g.src} alt="" fill sizes="(min-width:640px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left text-sm font-semibold text-white">
                  {t(g.alt)}
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 backdrop-blur transition group-hover:bg-sun-400 group-hover:text-forest-950"><Expand className="h-4 w-4" aria-hidden /></span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {current && (
        <div role="dialog" aria-modal="true" aria-label={t(current.alt)} className="fixed inset-0 z-[80] flex items-center justify-center bg-forest-950/90 p-4 backdrop-blur-sm" onClick={close}>
          <button ref={closeBtn} type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30"><X className="h-5 w-5" /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo" className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30"><ChevronLeft className="h-5 w-5" /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo" className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30"><ChevronRight className="h-5 w-5" /></button>
          <figure className="relative h-[75vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image key={current.src} src={current.src} alt={t(current.alt)} fill sizes="100vw" className="rounded-2xl object-contain" priority />
            <figcaption className="absolute -bottom-9 left-0 right-0 text-center text-sm text-white/90">{t(current.alt)} · {(open ?? 0) + 1}/{n}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
