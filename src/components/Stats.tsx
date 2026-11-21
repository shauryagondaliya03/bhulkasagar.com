"use client";

import { useEffect, useRef, useState } from "react";
import { SECTION_COPY, STATS } from "@/content";
import { useLang } from "./LangProvider";
import SectionHeader from "./SectionHeader";

function format(n: number, compact: boolean) {
  if (compact && n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  return Math.round(n).toLocaleString("en-IN");
}

function Counter({ value, suffix, compact }: { value: number; suffix: string; compact: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setN(value);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1800;
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        setN(value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value]);

  return <span ref={ref} aria-label={`${format(value, compact)}${suffix}`}><span aria-hidden>{format(n, compact)}{suffix}</span></span>;
}

export default function Stats() {
  const { t } = useLang();
  const c = SECTION_COPY.stats;
  return (
    <section id="stats" className="relative overflow-hidden bg-forest-900 py-20 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sun-400/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-forest-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} light />
        <dl className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label.en} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur sm:p-8">
              <dd className="font-display text-4xl font-semibold text-sun-300 sm:text-5xl"><Counter value={s.value} suffix={s.suffix} compact={s.compact} /></dd>
              <dt className="mt-2 text-sm font-medium text-forest-100 sm:text-base">{t(s.label)}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
