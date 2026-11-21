"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTools() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(window.scrollY / h, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  const show = progress > 0.08;
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[65] h-1">
        <div className="h-full origin-left bg-gradient-to-r from-sun-400 to-sun-500" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" tabIndex={show ? 0 : -1}
        className={`fixed bottom-4 left-4 z-[55] grid h-12 w-12 place-items-center rounded-full bg-forest-800 text-white shadow-lg transition hover:bg-forest-700 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>
        <ArrowUp className="h-5 w-5" aria-hidden />
      </button>
    </>
  );
}
