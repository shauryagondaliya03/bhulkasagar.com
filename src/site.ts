// Central place for school details.
// Sources: Google Maps listing, the school's Instagram posts and the official website.
// Items marked VERIFY need confirming before launch.
export const SITE = {
  name: "Bhulka Sagar Vidhyabhavan",
  motto: "Knowledge is Power",
  gujaratiName: "ભુલકા સાગર વિદ્યાભવન",
  city: "Surat",
  area: "Kapodra",
  address: "Samrat Society, L.H. Road, Kapodra, Surat, Gujarat – 395006",
  phone: { label: "+91 88665 55889", href: "tel:+918866555889" },
  whatsapp: "918866555889", // VERIFY: the official site shows a WhatsApp icon (assumed same number). Empty = hide.
  email: "bhulkasagar@gmail.com",
  hours: "Open until 6:00 pm", // Google listing: "Open · Closes 6 PM"
  assistantName: "Your Sathi",
  yearsOfService: 30, // official website: "30 Years of Quality Service"
  founder: { name: "Jayantibhai Tarapara", title: "Founder & Director" },
  // Instagram: handle + post / reel links to embed (nothing is copied or re-hosted).
  instagram: { handle: "bhulka_sagar_vidhyabhavan", posts: ["https://www.instagram.com/p/DRXD5SNjLKN/"] as string[] },
  // Other social pages — paste the full URL to show an icon (empty = hidden).
  social: { facebook: "", youtube: "" },
  // YouTube video id of the school documentary (the part after v= in the link). Empty = section hidden.
  video: { youtubeId: "" },
  // Admission age table (school website). Year = the year the session starts (June). VERIFY each new year.
  admissionYear: 2026,
  mapQuery: "Bhulka Sagar Vidhyabhavan, Samrat Society, L.H. Road, Kapodra, Surat",
};

export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`;
export const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapQuery)}`;
export const WHATSAPP_LINK = SITE.whatsapp
  ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hello! I'd like to know about admissions at ${SITE.name}.`)}`
  : "";

// Classes: Pre-school (Play Group, Jr. KG, Sr. KG), Primary (Balvatika, Std 1–5) per the official website.
// VERIFY: Upper-Primary (6–8) / Secondary (9–10) ranges and Higher Secondary (Science & Commerce, from Instagram).
export const GRADES = ["Play Group", "Jr. KG", "Sr. KG", "Balvatika", ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)];
// VERIFY: medium(s). If only one medium, the medium choice is hidden automatically.
export const MEDIUMS: readonly string[] = ["Gujarati", "English"];
export const CLASSES_TEXT =
  "Pre-school (Play Group, Jr. KG, Sr. KG), Primary (Balvatika, Std 1–5), Upper-Primary (Std 6–8), Secondary (Std 9–10) and Higher Secondary in Science & Commerce (Std 11–12)";

// Vision & Mission — the school's own words (Gujarati) from the official website, with English translation.
export const VISION = {
  gu: "એક ગુણવત્તાસભર શિક્ષણ પ્રણાલીનું નિર્માણ કરવું કે જે તમામ વિદ્યાર્થીઓને વૈશ્વિક સ્પર્ધાત્મક ક્ષેત્રમાં સફળ થવા અને ઉજ્જવળ કારકિર્દી ઘડવા માટે તૈયાર કરે.",
  en: "To build a quality education system that prepares every student to succeed in the global, competitive world and to shape a bright career.",
};
export const MISSION = {
  gu: "B.S.V. ના પ્રત્યેક બાળકને શૈક્ષણિક, શારીરિક અને માનસિક રીતે સક્ષમ બનાવવા તેમજ તેનામાં વૈશ્વિક, રાષ્ટ્રીય, સામાજિક, સાંસ્કૃતિક અને નૈતિક મૂલ્યોનું સિંચન કરવું તથા તેના ગુણવત્તાયુક્ત જીવનનું નિર્માણ કરવું.",
  en: "To make every BSV child capable academically, physically and mentally, to instil global, national, social, cultural and moral values, and to build a life of quality.",
};
