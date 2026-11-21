import { ArrowRight, BookOpenCheck, Languages, Blocks, Medal, Sparkles } from "lucide-react";
import EnquiryForm from "./EnquiryForm";
import { MEDIUMS } from "@/site";

const TRUST = [
  { icon: BookOpenCheck, text: "Nursery to Class 10" },
  { icon: Languages, text: `${MEDIUMS.join(" & ")} Medium` },
  { icon: Blocks, text: "Activity-based Learning" },
  { icon: Medal, text: "Sports & Games" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-forest-950">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_85%_-10%,rgba(47,131,80,0.55),transparent),radial-gradient(40rem_30rem_at_-5%_110%,rgba(249,201,53,0.2),transparent)]" />
      <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-28 pt-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-sun-400/40 bg-sun-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-sun-300">
            <Sparkles className="h-3.5 w-3.5" /> Admissions Open
          </span>
          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
            Nurturing little minds,{" "}
            <span className="bg-gradient-to-r from-sun-200 via-sun-300 to-sun-500 bg-clip-text italic text-transparent">building big futures.</span>
          </h1>
          <p className="mt-3 text-xl font-medium text-forest-100/90">ભુલકા સાગર સ્કૂલ · Varachha, Surat</p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-forest-100/90">
            A caring neighbourhood school where children learn through activity, play and discipline — from their very first day in Nursery. Visit us and see the difference.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#enquiry" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-sun-300 to-sun-500 px-7 py-3.5 font-bold text-forest-950 shadow-[0_12px_30px_-10px_rgba(249,201,53,1)] transition hover:-translate-y-0.5 lg:hidden">
              Apply Now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#academics" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">Explore Academics</a>
          </div>

          <ul className="mt-10 grid max-w-xl grid-cols-2 gap-3">
            {TRUST.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-forest-50 backdrop-blur">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sun-400/15 text-sun-300"><Icon className="h-[18px] w-[18px]" /></span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div id="enquiry" className="relative animate-fade-up [animation-delay:150ms] lg:translate-y-10">
          <div aria-hidden className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-sun-300/50 via-transparent to-forest-400/40 blur-xl" />
          <div aria-hidden className="absolute -right-3 -top-5 z-10 hidden animate-float items-center gap-2 rounded-2xl bg-sun-400 px-4 py-2.5 text-xs font-bold text-forest-950 shadow-xl sm:flex">
            <Sparkles className="h-4 w-4" /> Apply in 30 seconds
          </div>
          <div className="relative rounded-3xl bg-white p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/20 sm:p-8">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-semibold text-forest-900">Admission Enquiry</h2>
              <p className="mt-1 text-sm text-slate-500">Takes 30 seconds. We’ll call you back.</p>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </div>

      <svg aria-hidden viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-10 w-full text-white lg:h-14">
        <path fill="currentColor" d="M0 60V28C240 0 480 0 720 22s480 30 720 6v32z" />
      </svg>
    </section>
  );
}
