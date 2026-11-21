"use client";

import { useState } from "react";
import { CalendarSearch, ArrowRight, Info } from "lucide-react";
import { AGE_CLASSES, classify, fmtDate, sessionLabel, windowFor, type Result } from "@/lib/eligibility";

export default function ClassFinder() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const today = new Date().toISOString().slice(0, 10);

  function check(value: string) {
    setDob(value);
    if (!value) return setResult(null);
    const [y, m, d] = value.split("-").map(Number);
    if (y < 2000) return setResult(null);
    setResult(classify(new Date(y, m - 1, d)));
  }

  function enquire(label: string) {
    window.dispatchEvent(new CustomEvent("bsv:select-grade", { detail: label }));
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section id="class-finder" className="bg-forest-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_30px_60px_-30px_rgba(23,67,43,0.35)] ring-1 ring-forest-100 sm:p-10 lg:grid-cols-2">
          <div>
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-700 text-sun-300"><CalendarSearch className="h-6 w-6" /></span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-forest-900 sm:text-4xl">Which class is right for my child?</h2>
            <p className="mt-2 text-slate-600">Enter your child’s date of birth to see the class for the {sessionLabel()} session.</p>

            <label htmlFor="dob" className="mt-6 block text-sm font-semibold text-forest-900">Child’s date of birth</label>
            <input id="dob" type="date" value={dob} max={today} min="2000-01-01" onChange={(e) => check(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-[15px] outline-none transition focus:border-forest-500 focus:bg-white focus:ring-4 focus:ring-forest-100" />

            <div aria-live="polite" className="mt-5 min-h-[96px]">
              {result?.kind === "class" && (
                <div className="animate-fade-up rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-200">
                  <p className="text-sm font-semibold text-emerald-800">Your child is eligible for</p>
                  <p className="font-display text-3xl font-semibold text-forest-900">{result.label}</p>
                  <p className="mt-1 text-xs text-slate-600">Session {sessionLabel()} · born {fmtDate(result.start)} – {fmtDate(result.end)}</p>
                  <button onClick={() => enquire(result.label)} className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-sun-300 to-sun-500 px-5 py-2.5 text-sm font-bold text-forest-950 shadow">Enquire for {result.label} <ArrowRight className="h-4 w-4" /></button>
                </div>
              )}
              {result?.kind === "older" && (
                <div className="animate-fade-up rounded-2xl bg-sun-50 p-4 ring-1 ring-sun-200">
                  <p className="font-semibold text-forest-900">Class 2 or above</p>
                  <p className="mt-1 text-sm text-slate-600">Admission for higher classes depends on your child’s previous school record. Please contact us and we’ll guide you.</p>
                  <button onClick={() => enquire("Class 2")} className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-forest-700">Request a call back <ArrowRight className="h-4 w-4" /></button>
                </div>
              )}
              {result?.kind === "young" && (
                <div className="animate-fade-up rounded-2xl bg-sun-50 p-4 ring-1 ring-sun-200">
                  <p className="font-semibold text-forest-900">A little too young for {sessionLabel()}</p>
                  <p className="mt-1 text-sm text-slate-600">Your child becomes eligible for <b>{result.label}</b> in the {sessionLabel(result.year)} session. Leave your number and we’ll remind you when admissions open.</p>
                  <button onClick={() => enquire(result.label)} className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-forest-700">Notify me <ArrowRight className="h-4 w-4" /></button>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Age guide · {sessionLabel()}</h3>
            <ul className="mt-3 divide-y divide-forest-100 overflow-hidden rounded-2xl border border-forest-100">
              {AGE_CLASSES.map((c) => {
                const w = windowFor(c.age);
                const active = result?.kind === "class" && result.label === c.label;
                return (
                  <li key={c.label} className={`flex items-center justify-between gap-3 px-4 py-3 text-sm transition ${active ? "bg-sun-100" : "bg-white"}`}>
                    <span className="font-bold text-forest-900">{c.label}</span>
                    <span className="text-right text-slate-600">{fmtDate(w.start)} – {fmtDate(w.end)}</span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 flex gap-2 text-xs text-slate-500"><Info className="mt-0.5 h-3.5 w-3.5 shrink-0" /> Date of birth range for each class, as per the school’s admission guide.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
