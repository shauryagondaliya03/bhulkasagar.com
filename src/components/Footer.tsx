import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Logo from "./Logo";
import { SITE } from "@/site";

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1.3fr] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-forest-200/80">Nurturing confident, capable and caring learners in {SITE.area}, {SITE.city}.</p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-sun-300">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[["Admissions", "#enquiry"], ["Academics", "#academics"], ["Campus Life", "#campus-life"], ["Contact", "#contact"], ...(SITE.instagram.handle ? [["Instagram", `https://www.instagram.com/${SITE.instagram.handle}/`]] : [])].map(([l, h]) => (
              <li key={l}><a href={h} {...(h.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})} className="text-forest-200/80 transition hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-sun-300">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-forest-200/80">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun-300" />{SITE.address}</li>
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-sun-300" /><a href={SITE.phone.href} className="hover:text-white">{SITE.phone.label}</a></li>
            {SITE.email && <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-sun-300" /><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>}
            <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-sun-300" />{SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 pb-24 text-center text-xs text-forest-300/70 sm:pb-5">
        © {new Date().getFullYear()} {SITE.name}, {SITE.city}. All rights reserved.
      </div>
    </footer>
  );
}
