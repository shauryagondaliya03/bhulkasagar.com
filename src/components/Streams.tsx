"use client";

import { useState } from "react";
import { Baby, Shapes, BookOpen, GraduationCap, Check, ArrowRight, FlaskConical, LineChart, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { MEDIUMS } from "@/site";

type Stage = { id: string; label: string; classes: string; icon: LucideIcon; tagline: string; blurb: string; points: string[]; tint: string };

// Stage names follow the school's own branding: Balbhavan | Primary | Secondary | Science | Commerce.
// VERIFY the class ranges and details against the school's actual structure.
const STAGES: Stage[] = [
  {
    id: "pre", label: "Pre-school", classes: "Play Group · Jr. KG · Sr. KG", icon: Baby,
    tagline: "Joyful first steps into learning",
    blurb: "Play-based, activity-led classrooms where curiosity comes first — building language, creativity and confidence in a warm, safe environment.",
    points: ["Learning through play and hands-on activity", "Language development & early numeracy", "Creative activities and storytelling", "Confidence-building, joyful classroom"],
    tint: "from-amber-100 to-sun-200",
  },
  {
    id: "primary", label: "Primary", classes: "Balvatika · Std 1 – 5", icon: Shapes,
    tagline: "Strong foundations, big imagination",
    blurb: "Activity-based teaching that makes reading, maths and science feel like discovery — with value-based education and regular parent connect.",
    points: ["Activity-based learning", "Value-based education", "Festival celebrations & life-skills programmes", "Parent-participation programmes"],
    tint: "from-lime-100 to-forest-200",
  },
  {
    id: "upper", label: "Upper-Primary", classes: "Std 6 – 8", icon: Lightbulb,
    tagline: "Curiosity grows into understanding",
    blurb: "Concept-first teaching in Maths, Science, Languages and Social Science, with practical work, regular assessments and strong values.",
    points: ["Concept-first teaching", "Practical & activity-based learning", "Computer lab practice", "Regular tests and parent connect"],
    tint: "from-teal-100 to-forest-300",
  },
  {
    id: "secondary", label: "Secondary", classes: "Std 9 – 10", icon: BookOpen,
    tagline: "Building thinkers and problem solvers",
    blurb: "Disciplined study habits, regular tests and career guidance to prepare students for the board exams and beyond.",
    points: ["Concept clarity with periodic tests", "Career festival & guidance", "Life-skills programmes", "Discipline and leadership through assembly culture"],
    tint: "from-emerald-100 to-forest-300",
  },
  {
    id: "hs", label: "Higher Secondary", classes: "Std 11 – 12 · Science & Commerce", icon: GraduationCap,
    tagline: "Science & Commerce, taken seriously",
    blurb: "Choose the stream that fits your goals — with experienced faculty, structured practice and mentoring.",
    points: [],
    tint: "from-forest-200 to-forest-400",
  },
];

const HS = {
  science: {
    label: "Science", icon: FlaskConical,
    note: "A strong Science stream with a NEET / JEE focus for medical, engineering and pure-science pathways.",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology", "English", "Computer"],
  },
  commerce: {
    label: "Commerce", icon: LineChart,
    note: "A Commerce stream that prepares students for a successful career in CA, CS, B.Com, BBA and management.",
    subjects: ["Accountancy", "Business Studies", "Economics", "English", "Computer / Statistics"],
  },
} as const;

export default function Streams() {
  const [active, setActive] = useState(0);
  const [hs, setHs] = useState<keyof typeof HS>("science");
  const stage = STAGES[active];
  const Icon = stage.icon;

  return (
    <section id="academics" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sun-600">Academics</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">A clear path from Play Group to Class 12</h2>
          <p className="mt-4 text-lg text-slate-600">Choose a stage to see how learning grows with your child — in {MEDIUMS.join(" or ")} medium.</p>
        </div>

        <div role="tablist" aria-label="Academic stages" className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-2 rounded-2xl bg-forest-50 p-2 sm:grid-cols-5">
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

            {stage.id === "hs" ? (
              <div className="mt-6">
                <div className="inline-flex rounded-xl bg-slate-100 p-1" role="group" aria-label="Stream">
                  {(Object.keys(HS) as (keyof typeof HS)[]).map((k) => {
                    const SIcon = HS[k].icon;
                    return (
                      <button key={k} onClick={() => setHs(k)} aria-pressed={hs === k}
                        className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${hs === k ? "bg-sun-400 text-forest-950 shadow" : "text-slate-600 hover:text-forest-800"}`}>
                        <SIcon className="h-4 w-4" /> {HS[k].label}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-4 text-sm text-slate-600">{HS[hs].note}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {HS[hs].subjects.map((s) => <li key={s} className="rounded-full border border-forest-100 bg-forest-50 px-4 py-1.5 text-sm font-medium text-forest-800">{s}</li>)}
                </ul>
              </div>
            ) : (
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {stage.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 text-[15px] text-slate-700">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sun-400 text-forest-950"><Check className="h-3 w-3" strokeWidth={3} /></span>
                    {p}
                  </li>
                ))}
              </ul>
            )}
            <a href="#enquiry" className="mt-8 inline-flex items-center gap-2 font-semibold text-forest-700 hover:text-forest-900">Enquire for {stage.label} <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
