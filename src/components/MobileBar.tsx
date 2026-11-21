import { Phone, MessageCircle, ClipboardEdit } from "lucide-react";
import { SITE, WHATSAPP_LINK } from "@/site";

export default function MobileBar() {
  const base = "flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-bold";
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-50 flex divide-x divide-white/20 bg-forest-900 text-white shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.4)] sm:hidden">
      <a href={SITE.phone.href} className={base}><Phone className="h-4 w-4 text-sun-300" /> Call</a>
      {WHATSAPP_LINK && <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={base}><MessageCircle className="h-4 w-4 text-emerald-400" /> WhatsApp</a>}
      <a href="#enquiry" className={`${base} bg-sun-400 text-forest-950`}><ClipboardEdit className="h-4 w-4" /> Enquire</a>
    </nav>
  );
}
