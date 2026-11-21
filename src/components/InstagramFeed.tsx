import { ExternalLink } from "lucide-react";
import { SITE } from "@/site";

// Shows Instagram posts / reels using Instagram's official embed (nothing is copied or re-hosted).
// Renders nothing until SITE.instagram.handle is set in src/site.ts.
function embedSrc(url: string) {
  try {
    const u = new URL(url);
    if (!u.hostname.endsWith("instagram.com")) return null;
    const m = u.pathname.match(/^\/(p|reel|tv)\/([A-Za-z0-9_-]+)/);
    return m ? `https://www.instagram.com/${m[1]}/${m[2]}/embed` : null;
  } catch {
    return null;
  }
}

export default function InstagramFeed() {
  const { handle, posts } = SITE.instagram;
  if (!handle) return null;
  const embeds = posts.map(embedSrc).filter((x): x is string => !!x);
  const profile = `https://www.instagram.com/${handle}/`;

  return (
    <section id="instagram" className="bg-forest-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sun-600">On Instagram</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">Our school, day by day</h2>
          <a href={profile} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest-800 px-6 py-3 font-semibold text-white transition hover:bg-forest-900">
            Follow @{handle} <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        {embeds.length === 0 && (
          <p className="mx-auto mt-6 max-w-md text-center text-slate-600">See classroom moments, events and celebrations on our Instagram page.</p>
        )}
        {embeds.length > 0 && (
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {embeds.map((src) => (
              <iframe key={src} src={src} title="Instagram post from the school" loading="lazy" allowFullScreen scrolling="no"
                className="h-[600px] w-full max-w-[400px] rounded-2xl border border-forest-100 bg-white shadow-sm" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
