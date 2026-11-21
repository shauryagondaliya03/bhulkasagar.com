import Image from "next/image";
import { Music, Medal, Blocks, Flag } from "lucide-react";
import { SITE } from "@/site";

const PHOTOS = [
  { src: "/images/assembly.jpg", alt: "Students in uniform at school assembly with the school band marching", cap: "Assembly with the school band", span: "md:col-span-2 md:row-span-2", w: 1611, h: 830 },
  { src: "/images/outdoor-games.jpg", alt: "Students playing an outdoor game in the school courtyard", cap: "Outdoor games in the courtyard", span: "", w: 1611, h: 830 },
  { src: "/images/school-building.jpg", alt: "The school building at Samrat Society, Varachha, Surat", cap: `Our school, ${SITE.area}`, span: "", w: 1302, h: 858 },
];

const ACTIVITIES = [
  { icon: Music, t: "Assembly & School Band", d: "A disciplined, joyful start to the day with music, prayer and the school band." },
  { icon: Medal, t: "Sports & Traditional Games", d: "Outdoor games that build fitness, teamwork and sportsmanship." },
  { icon: Blocks, t: "Activity-based Learning", d: "Toys, colours and hands-on play make the youngest learners’ first lessons fun." },
  { icon: Flag, t: "National Festivals", d: "Flag-hoisting and celebrations that teach pride, values and togetherness." },
];

export default function CampusLife() {
  return (
    <section id="campus-life" className="bg-forest-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sun-600">Campus Life</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">Learning, discipline and joy — every day</h2>
          <p className="mt-4 text-lg text-slate-600">A glimpse into life at {SITE.name}.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {PHOTOS.map((p) => (
            <figure key={p.src} className={`group relative overflow-hidden rounded-3xl bg-forest-100 ${p.span}`}>
              <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width:768px) 50vw, 100vw" className="h-full min-h-[220px] w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/85 to-transparent p-5 pt-14 text-sm font-semibold text-white">{p.cap}</figcaption>
            </figure>
          ))}
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
