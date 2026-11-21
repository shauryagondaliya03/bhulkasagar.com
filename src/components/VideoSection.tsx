"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { SITE } from "@/site";

// Shows the school documentary. Renders nothing until SITE.video.youtubeId is set in src/site.ts.
export default function VideoSection() {
  const id = SITE.video.youtubeId;
  const [play, setPlay] = useState(false);
  if (!id) return null;

  return (
    <section id="video" className="bg-forest-950 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-sun-300">Watch</p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Experience {SITE.name}</h2>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-white/10">
          {play ? (
            <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title="Bhulka Sagar Vidhyabhavan documentary" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen className="absolute inset-0 h-full w-full" />
          ) : (
            <button onClick={() => setPlay(true)} aria-label="Play documentary video" className="group absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100" />
              <span className="absolute inset-0 grid place-items-center"><span className="grid h-20 w-20 place-items-center rounded-full bg-sun-400 text-forest-950 shadow-xl transition group-hover:scale-110"><Play className="h-9 w-9 translate-x-0.5 fill-current" /></span></span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
