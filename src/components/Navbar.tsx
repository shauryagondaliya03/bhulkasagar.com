"use client";

import { useEffect, useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? "border-forest-100 bg-white/90 shadow-sm backdrop-blur-lg" : "border-transparent bg-white"}`}>
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8" aria-label="Main">
        <a href="#top" aria-label="Bhulka Sagar Vidhyabhavan — home"><Logo /></a>

        <ul className="hidden items-center gap-1 lg:flex">
          <li>
            <a href="#enquiry" className="mr-2 inline-flex items-center gap-2 rounded-full border border-sun-300 bg-sun-50 px-3.5 py-1.5 text-sm font-semibold text-forest-900 transition hover:bg-sun-100">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Admissions Open
            </a>
          </li>
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-forest-50 hover:text-forest-700">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#visit" className="hidden items-center gap-2 rounded-full bg-gradient-to-b from-sun-300 to-sun-500 px-5 py-2.5 text-sm font-bold text-forest-950 shadow-[0_6px_18px_-6px_rgba(230,168,23,0.9)] transition hover:-translate-y-0.5 sm:inline-flex">
            <CalendarCheck className="h-4 w-4" aria-hidden /> Book Campus Visit
          </a>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-xl border border-forest-100 text-forest-800 lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-forest-100 bg-white px-4 pb-5 pt-3 lg:hidden">
          <a href="#enquiry" onClick={() => setOpen(false)} className="mb-2 flex items-center gap-2 rounded-xl bg-sun-50 px-4 py-3 text-sm font-semibold text-forest-900">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Admissions Open
          </a>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-[15px] font-medium text-slate-700 hover:bg-forest-50">{l.label}</a>
          ))}
          <a href="#visit" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-sun-300 to-sun-500 px-5 py-3.5 text-sm font-bold text-forest-950">
            <CalendarCheck className="h-4 w-4" /> Book Campus Visit
          </a>
        </div>
      )}
    </header>
  );
}
