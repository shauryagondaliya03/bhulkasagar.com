import { MessageCircle } from "lucide-react";
import { SITE, WHATSAPP_LINK } from "@/site";

const svg = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className: "h-[18px] w-[18px]", "aria-hidden": true };

const Instagram = () => (<svg {...svg}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></svg>);
const Facebook = () => (<svg {...svg}><path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8z" /></svg>);
const Youtube = () => (<svg {...svg}><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" fill="currentColor" /></svg>);

export default function SocialIcons({ className = "" }: { className?: string }) {
  const items = [
    SITE.instagram.handle && { label: "Instagram", href: `https://www.instagram.com/${SITE.instagram.handle}/`, icon: <Instagram /> },
    SITE.social.facebook && { label: "Facebook", href: SITE.social.facebook, icon: <Facebook /> },
    SITE.social.youtube && { label: "YouTube", href: SITE.social.youtube, icon: <Youtube /> },
    WHATSAPP_LINK && { label: "WhatsApp", href: WHATSAPP_LINK, icon: <MessageCircle className="h-[18px] w-[18px]" aria-hidden /> },
  ].filter(Boolean) as { label: string; href: string; icon: React.ReactNode }[];
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {items.map((i) => (
        <li key={i.label}>
          <a href={i.href} target="_blank" rel="noreferrer" aria-label={i.label} className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition hover:bg-sun-400 hover:text-forest-950">{i.icon}</a>
        </li>
      ))}
    </ul>
  );
}
