"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Bi } from "@/content";

export type Lang = "en" | "gu";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (b: Bi) => string };

const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (b) => b.en });
const KEY = "bsv-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "gu" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch {}
  }, []);

  const value = useMemo<Ctx>(() => ({ lang, setLang, t: (b) => b[lang] }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const opt = (l: Lang, label: string) => (
    <button type="button" onClick={() => setLang(l)} aria-pressed={lang === l} lang={l}
      className={`rounded-full px-3 py-1 text-xs font-bold transition ${lang === l ? "bg-forest-800 text-white shadow" : "text-forest-800 hover:bg-white"}`}>
      {label}
    </button>
  );
  return (
    <div role="group" aria-label="Language" className={`inline-flex items-center gap-0.5 rounded-full bg-forest-50 p-1 ${className}`}>
      {opt("en", "EN")}
      {opt("gu", "ગુજ")}
    </div>
  );
}
