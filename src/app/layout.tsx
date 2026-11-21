import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";
import { SITE } from "@/site";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const gujarati = Noto_Sans_Gujarati({ subsets: ["gujarati"], variable: "--font-gujarati", display: "swap" });

export const metadata: Metadata = {
  title: `${SITE.name}, ${SITE.area} Surat | Admissions Open`,
  description: `${SITE.name} (${SITE.gujaratiName}), ${SITE.area}, Surat — Balvatika to Class 12, Science & Commerce. Activity-based, value-based education. Admissions open. Book a campus visit today.`,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: SITE.name,
  alternateName: SITE.gujaratiName,
  telephone: SITE.phone.label,
  address: { "@type": "PostalAddress", streetAddress: SITE.address, addressLocality: SITE.city, addressRegion: "Gujarat", addressCountry: "IN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable} ${gujarati.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
