"use client";

import { useState } from "react";
import { Baby, Shapes, BookOpen, Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { MEDIUMS } from "@/site";

type Stage = { id: string; label: string; classes: string; icon: LucideIcon; tagline: string; blurb: string; points: string[]; tint: string };

// VERIFY: edit the classes / points to match the school's actual offering.
const STAGES: Stage[] = [
  {
    id: "pre", label: "Pre-Primary", classes: "Nursery · Jr. KG · Sr. KG", icon: Baby,
    tagline: "Joyful first steps into learning",
    blurb: "Play-based, activity-led classrooms where curiosity comes first — building language, motor skills and confidence in a warm, safe environment.",
    points: ["Play-way & activity-based learning", "Phonics, early numeracy & storytelling", "Art, music & movement", "Learning through toys, colours and hands-on play"],
    tint: "from-amber-100 to-sun-200",
  },
  {
    id: "primary", label: "Primary", classes: "Class 1 – 5", icon: Shapes,
    tagline: "Strong foundations, big imagination",
    blurb: "A balanced curriculum that makes reading, maths and science feel like discovery — with regular assessments and plenty of room for creativity.",
    points: ["Reading, writing & number fluency", "Hands-on EVS & basic computer skills", "Sports, games & life-skills periods", "Regular parent–teacher connect"],
    tint: "from-lime-100 to-forest-200",
  },
  {
    id: "secondary", label: "Secondary", classes: "Class 6 – 10", icon: BookOpen,
    tagline: "Building thinkers and problem solvers",
    blurb: "Concept-first teaching in Maths, Science, Languages and Social Science, with disciplined study habits and focused exam preparation.",
    points: ["Concept clarity with periodic tests", "Maths & Science practice", "Discipline, leadership & assembly culture", "Career guidance & counselling"],
    tint: "from-emerald-100 to-forest-300",
  },
];

export default function Streams() {
  const [active, setActive] = useState(0);
  const stage = STAGES[active];
  const Icon = stage.icon;

  return (
    <section id="academics" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sun-600">Academics</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">A clear path from Nursery to Class 10</h2>
          <p className="mt-4 text-lg text-slate-600">Choose a stage to see how learning grows with your child — in {MEDIUMS.join(" or ")} medium.</p>
        </div>

        <div role="tablist" aria-label="Academic stages" className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-2 rounded-2xl bg-forest-50 p-2">
          {STAGES.map((s, i) => (
            <button key={s.id} role="tab" id={`tab-${s.id}`} aria-selected={i === active} aria-controls={`panel-${s.id}`} onClick={() => setActive(i)}
              className={`rounded-xl px-3 py-3 text-sm font-semibold transition sm:text-[15px] ${i === active ? "bg-forest-800 text-white shadow-lg" : "text-forest-800 hover:bg-white"}`}>
              {s.label}
            </button>
          ))}
        </div>

        <div role="tabpanel" id={`panel-${stage.id}`} aria-labelledby={`tab-${stage.id}`} key={stage.id}
          className="mx-auto mt-8 grid max-w-6xl animate-fade-up gap-8 overflow-hidden rounded-[2rem] border border-forest-100 bg-white p-6 shadow-[0_30px_60px_-30px_rgba(23,67,43,0.35)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className={`relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${stage.tint} p-8`}>
            <Icon aria-hidden className="absolute -right-6 -top-6 h-48 w-48 text-white/40" strokeWidth={1.2} />
            <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white text-forest-700 shadow-md"><Icon className="h-7 w-7" /></span>
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-forest-800/70">{stage.classes}</p>
              <p className="mt-2 font-display text-3xl font-semibold leading-tight text-forest-950">{stage.tagline}</p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-3xl font-semibold text-forest-900">{stage.label}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{stage.blurb}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {stage.points.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 text-[15px] text-slate-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sun-400 text-forest-950"><Check className="h-3 w-3" strokeWidth={3} /></span>
                  {p}
                </li>
              ))}
            </ul>
            <a href="#enquiry" className="mt-8 inline-flex items-center gap-2 font-semibold text-forest-700 hover:text-forest-900">Enquire for {stage.label} <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
