"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, Rocket, Award } from "lucide-react";
import { SITE, VISION, MISSION } from "@/site";

export default function About() {
  const [tab, setTab] = useState<"vision" | "mission">("vision");
  const t = tab === "vision" ? VISION : MISSION;
  const initials = SITE.founder.name.split(" ").map((w) => w[0]).slice(0, 2).join("");

  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative mx-auto w-full max-w-lg">
          <div aria-hidden className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-dashed border-sun-400" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
            <Image src="/images/assembly.jpg" alt="Students and the school band at morning assembly" width={1611} height={830} sizes="(min-width:1024px) 40vw, 100vw" className="h-[340px] w-full object-cover sm:h-[420px]" />
          </div>
          <div className="absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl bg-sun-400 px-5 py-4 text-forest-950 shadow-xl sm:-right-6">
            <Award className="h-8 w-8" aria-hidden />
            <p className="leading-tight"><b className="block font-display text-3xl">{SITE.yearsOfService} Years</b><span className="text-sm font-semibold">of Quality Service</span></p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sun-600">About Us</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">Where learning meets <span className="italic text-forest-600">values</span></h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {SITE.name} (BSV) has been serving families in {SITE.area}, {SITE.city} for {SITE.yearsOfService} years — with one belief: <b>“{SITE.motto}.”</b> From a child’s first day in Play Group to Science and Commerce in Class 12, we pair strong academics with values, discipline and joyful activity.
          </p>

          <div className="mt-8 rounded-3xl border border-forest-100 bg-forest-50/60 p-2">
            <div role="tablist" aria-label="Vision and Mission" className="grid grid-cols-2 gap-2">
              {(["vision", "mission"] as const).map((k) => (
                <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
                  className={`flex items-center justify-center gap-2 rounded-2xl py-3 text-sm font-bold transition ${tab === k ? "bg-forest-800 text-white shadow" : "text-forest-800 hover:bg-white"}`}>
                  {k === "vision" ? <Eye className="h-4 w-4" /> : <Rocket className="h-4 w-4" />} {k === "vision" ? "Our Vision" : "Our Mission"}
                </button>
              ))}
            </div>
            <div role="tabpanel" key={tab} className="animate-fade-up px-4 pb-4 pt-5">
              <p lang="gu" className="text-[17px] leading-loose text-forest-950">{t.gu}</p>
              <p className="mt-3 border-t border-forest-100 pt-3 text-[15px] leading-relaxed text-slate-600">{t.en}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-forest-100 p-4">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-to-br from-forest-600 to-forest-900 font-display text-xl font-semibold text-sun-300 ring-4 ring-sun-200">{initials}</span>
            <div>
              <p className="text-lg font-bold text-forest-900">{SITE.founder.name}</p>
              <p className="text-sm font-semibold text-sun-600">{SITE.founder.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
