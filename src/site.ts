// Central place for school details.
// Facts below come from the school's Google Maps listing. Items marked VERIFY are
// sensible defaults — please confirm / change them before launch.
export const SITE = {
  name: "Bhulka Sagar Vidhyabhavan",
  motto: "Knowledge is Power",
  gujaratiName: "ભુલકા સાગર વિદ્યાભવન",
  city: "Surat",
  area: "Kapodra",
  address: "Samrat Society, L.H. Road, Kapodra, Surat, Gujarat – 395006",
  phone: { label: "+91 88665 55889", href: "tel:+918866555889" },
  email: "bhulkasagar@gmail.com", // from the school's Instagram post
  hours: "Open until 6:00 pm", // Google listing: "Open · Closes 6 PM"
  assistantName: "Your Sathi",
  // Instagram: add the school's handle (without @) and paste the full URLs of posts / reels to show.
  // Example: handle: "bhulkasagar", posts: ["https://www.instagram.com/p/AbC123xyz/", "https://www.instagram.com/reel/DeF456uvw/"]
  instagram: { handle: "bhulka_sagar_vidhyabhavan", posts: ["https://www.instagram.com/p/DRXD5SNjLKN/"] as string[] },
  mapQuery: "Bhulka Sagar Vidhyabhavan, Samrat Society, L.H. Road, Kapodra, Surat",
};

export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`;
export const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapQuery)}`;
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`;

// Classes: from the school's Instagram posts (Balbhavan | Primary | Secondary | Science | Commerce).
// VERIFY the exact class ranges below (Gujarat convention: Primary 1–8, Secondary 9–10).
export const GRADES = ["Balvatika", "Jr. KG", "Sr. KG", ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)];
// VERIFY: medium(s). If only one medium, the medium choice is hidden automatically.
export const MEDIUMS: readonly string[] = ["Gujarati", "English"];
export const CLASSES_TEXT = "Balbhavan (Balvatika, Jr. KG, Sr. KG), Primary (Class 1–8), Secondary (Class 9–10) and Higher Secondary in Science & Commerce (Class 11–12)";
