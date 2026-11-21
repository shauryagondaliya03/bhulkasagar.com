import { Music, Medal, Blocks, PartyPopper, Compass, HeartHandshake, Users, ShieldCheck } from "lucide-react";
import { SITE } from "@/site";

const ACTIVITIES = [
  { icon: Blocks, t: "Activity-based Learning", d: "Hands-on, activity-led teaching from Balvatika all the way to Class 12." },
  { icon: HeartHandshake, t: "Value-based Education", d: "Sanskar with education — respect, discipline and good character in everyday school life." },
  { icon: Compass, t: "Career Festival & Life Skills", d: "Programmes that help students discover their strengths and plan their future." },
  { icon: Users, t: "Parent Participation", d: "Events and programmes that bring parents and teachers together for every child." },
  { icon: ShieldCheck, t: "Safe & Caring Campus", d: "A secure, well-looked-after school environment where every child feels at home." },
  { icon: Music, t: "Assembly & School Band", d: "A disciplined, joyful start to the day with music, prayer and the school band." },
  { icon: Medal, t: "Sports & Games", d: "Outdoor games that build fitness, teamwork and sportsmanship." },
  { icon: PartyPopper, t: "Festivals & Celebrations", d: "From Ganesh Mahotsav to national days — celebrations that build togetherness." },
];

export default function CampusLife() {
  return (
    <section id="campus-life" className="bg-forest-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sun-600">Campus Life</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">Learning, discipline and joy — every day</h2>
          <p className="mt-4 text-lg text-slate-600">What makes a day at {SITE.name} special.</p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ACTIVITIES.map(({ icon: Icon, t, d }) => (
            <li key={t} className="rounded-3xl border border-forest-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-700 text-sun-300"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-4 text-lg font-bold text-forest-900">{t}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
