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
