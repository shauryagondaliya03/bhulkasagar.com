"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type Cat = "Celebrations" | "Sports" | "Classrooms & Labs" | "Campus";
type Photo = { src: string; alt: string; cap: string; cat: Cat; w: number; h: number };

// Replace / add photos in public/images and list them here. Use originals from the school for best quality.
const PHOTOS: Photo[] = [
  { src: "/images/assembly.jpg", alt: "Students and the school band at assembly", cap: "Assembly with the school band", cat: "Campus", w: 1611, h: 830 },
  { src: "/images/colour-day.jpg", alt: "Young students with their teacher on colour day", cap: "Colour Day — Red", cat: "Celebrations", w: 439, h: 521 },
  { src: "/images/computer-lab.jpg", alt: "Students working in the computer lab", cap: "Computer lab", cat: "Classrooms & Labs", w: 839, h: 565 },
  { src: "/images/costume-day.jpg", alt: "Children in costumes at a festival celebration", cap: "Festival celebration", cat: "Celebrations", w: 439, h: 521 },
  { src: "/images/sports-relay.jpg", alt: "Students taking part in a team race on sports day", cap: "Sports day — team race", cat: "Sports", w: 437, h: 284 },
  { src: "/images/classroom.jpg", alt: "A classroom lesson with a smart display", cap: "Smart classroom", cat: "Classrooms & Labs", w: 599, h: 396 },
  { src: "/images/outdoor-games.jpg", alt: "Students playing an outdoor game in the courtyard", cap: "Outdoor games", cat: "Sports", w: 1611, h: 830 },
  { src: "/images/flag-hoisting.jpg", alt: "Flag hoisting ceremony at school", cap: "Flag hoisting", cat: "Celebrations", w: 437, h: 270 },
  { src: "/images/sports-day.jpg", alt: "Students at a sports day activity on the ground", cap: "Sports day", cat: "Sports", w: 439, h: 618 },
  { src: "/images/young-learners.jpg", alt: "Little learners doing a movement activity", cap: "Pre-school activity time", cat: "Classrooms & Labs", w: 439, h: 263 },
];

const CATS = ["All", "Celebrations", "Sports", "Classrooms & Labs", "Campus"] as const;

export default function Gallery() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const shown = PHOTOS.filter((p) => cat === "All" || p.cat === cat);

  const move = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, move]);

  const cur = open === null ? null : shown[open];

  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sun-600">Gallery</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">Moments from our school</h2>
          <p className="mt-4 text-lg text-slate-600">Celebrations, sports, classrooms and more. Tap a photo to see it bigger.</p>
        </div>

        <div role="tablist" aria-label="Gallery filter" className="mt-8 flex flex-wrap justify-center gap-2">
          {CATS.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${cat === c ? "bg-forest-800 text-white shadow" : "bg-forest-50 text-forest-800 hover:bg-forest-100"}`}>{c}</button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {shown.map((p, i) => (
            <button key={p.src} onClick={() => setOpen(i)} className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-3xl bg-forest-100 text-left" aria-label={`Open photo: ${p.cap}`}>
              <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="h-auto w-full transition duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 grid place-items-center bg-forest-900/0 transition group-hover:bg-forest-900/45"><ZoomIn className="h-9 w-9 scale-75 text-white opacity-0 transition group-hover:scale-100 group-hover:opacity-100" /></span>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/80 to-transparent p-4 pt-10 text-sm font-semibold text-white">{p.cap}</span>
            </button>
          ))}
        </div>
      </div>

      {cur && (
        <div role="dialog" aria-modal="true" aria-label={cur.cap} className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-forest-950/95 p-4" onClick={() => setOpen(null)}>
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><X className="h-6 w-6" /></button>
          <button onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Previous photo" className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><ChevronLeft className="h-6 w-6" /></button>
          <button onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Next photo" className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><ChevronRight className="h-6 w-6" /></button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cur.src} alt={cur.alt} onClick={(e) => e.stopPropagation()} className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl" style={{ maxWidth: `min(100%, ${cur.w * 1.6}px)` }} />
          <p className="mt-4 text-center font-semibold text-white" onClick={(e) => e.stopPropagation()}>{cur.cap} <span className="ml-2 text-sm font-normal text-forest-200">{(open ?? 0) + 1} / {shown.length}</span></p>
        </div>
      )}
    </section>
  );
}
