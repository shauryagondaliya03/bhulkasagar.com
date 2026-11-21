import { MapPin, Mail, Phone } from "lucide-react";
import { SITE } from "@/site";
import SocialIcons from "./SocialIcons";

export default function TopBar() {
  return (
    <div className="hidden bg-forest-900 text-[13px] text-forest-100 md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6 lg:px-8">
        <SocialIcons />
        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-sun-300" />{SITE.name} · L.H. Road, {SITE.area}, {SITE.city}</li>
          <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="h-3.5 w-3.5 text-sun-300" />{SITE.email}</a></li>
          <li><a href={SITE.phone.href} className="flex items-center gap-2 font-semibold text-white"><Phone className="h-3.5 w-3.5 text-sun-300" />{SITE.phone.label}</a></li>
        </ul>
      </div>
    </div>
  );
}
