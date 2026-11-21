import { CalendarCheck, Phone } from "lucide-react";
import { SITE } from "@/site";

export default function VisitCTA() {
  return (
    <section id="visit" className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest-700 via-forest-800 to-forest-950 px-6 py-14 text-center sm:px-12">
        <div aria-hidden className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-sun-400/20 blur-3xl" />
        <h2 className="relative font-display text-3xl font-semibold text-white sm:text-5xl">See our campus. Meet our teachers.</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-forest-100/90">Book a guided campus visit and get every question answered in person.</p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#enquiry" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-sun-300 to-sun-500 px-8 py-3.5 font-bold text-forest-950 shadow-lg transition hover:-translate-y-0.5">
            <CalendarCheck className="h-5 w-5" /> Book Campus Visit
          </a>
          <a href={SITE.phone.href} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10">
            <Phone className="h-5 w-5" /> {SITE.phone.label}
          </a>
        </div>
      </div>
    </section>
  );
}
