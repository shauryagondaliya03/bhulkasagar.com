import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { SITE, MAP_EMBED, MAP_DIRECTIONS } from "@/site";

export default function Contact() {
  const items = [
    { icon: MapPin, label: "Address", body: <>{SITE.name}<br />{SITE.address}</> },
    { icon: Phone, label: "Phone", body: <a href={SITE.phone.href} className="font-semibold text-forest-700 hover:underline">{SITE.phone.label}</a> },
    ...(SITE.email ? [{ icon: Mail, label: "Email", body: <a href={`mailto:${SITE.email}`} className="font-semibold text-forest-700 hover:underline">{SITE.email}</a> }] : []),
    { icon: Clock, label: "School office", body: SITE.hours },
  ];
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sun-600">Visit Us</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest-900">Find us in {SITE.area}, {SITE.city}</h2>
          <ul className="mt-8 space-y-5">
            {items.map(({ icon: Icon, label, body }) => (
              <li key={label} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-50 text-forest-700 ring-1 ring-forest-100"><Icon className="h-5 w-5" /></span>
                <div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p><p className="mt-0.5 leading-relaxed text-slate-700">{body}</p></div>
              </li>
            ))}
          </ul>
          <a href={MAP_DIRECTIONS} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 font-semibold text-white transition hover:bg-forest-900">
            <Navigation className="h-4 w-4" /> Get Directions
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl bg-forest-50 shadow-xl ring-1 ring-forest-100">
          <iframe title={`Map to ${SITE.name}, ${SITE.city}`} src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[380px] w-full border-0" />
        </div>
      </div>
    </section>
  );
}
