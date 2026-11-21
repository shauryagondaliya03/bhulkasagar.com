# Bhulka Sagar Vidhyabhavan, Varachha, Surat — Website

Next.js (App Router) + Tailwind CSS v4 + lucide-react.

```bash
npm install
npm run dev     # http://localhost:3000
```

- `src/site.ts` — school name, address, phone, hours, classes, mediums. **Items marked VERIFY need checking.**
- `src/components/Streams.tsx` — Pre-Primary / Primary / Secondary content.
- `src/components/CampusLife.tsx` — photos (in `public/images/`) and activity cards.
- `src/components/Sathi.tsx` — "Your Sathi" chat assistant: asks parent name + mobile, answers 5 standard
  questions (edit the `FAQS` list), then collects child's name, class and medium.
- Leads (hero form + chat) are saved by `src/lib/leads.ts`: printed in the server console, appended to
  `data/leads.jsonl` on your own server, and POSTed to `LEADS_WEBHOOK_URL` if you set that environment
  variable (use this on Vercel with a Google Sheets / Zapier / Make webhook).
- Colours (forest green + sun yellow) are in `src/app/globals.css`.

## v3 additions
- **Class finder** (`ClassFinder.tsx`, `src/lib/eligibility.ts`): enter a date of birth → eligible class for the session; fills the enquiry form.
  Age windows come from the school's admission guide. **Update `admissionYear` in `src/site.ts` every year.**
- **Gallery** (`Gallery.tsx`): filter buttons + full-screen viewer. Add photos to `public/images/` and list them in `PHOTOS`.
- **About, Vision & Mission, Founder** (`About.tsx`), top contact bar, FAQ accordion, mobile Call/WhatsApp/Enquire bar.
- **FAQs** are shared by the FAQ section and the "Your Sathi" chat: edit them in `src/faqs.ts`.
- **Hidden until configured** (in `src/site.ts`): documentary video (`video.youtubeId`), Facebook/YouTube icons (`social`), WhatsApp (`whatsapp`).
