// Central place for school details.
// Facts below come from the school's Google Maps listing. Items marked VERIFY are
// sensible defaults — please confirm / change them before launch.
export const SITE = {
  name: "Bhulka Sagar Vidhyabhavan",
  gujaratiName: "ભુલકા સાગર સ્કૂલ",
  city: "Surat",
  area: "Varachha",
  address: "Samrat Society, Varachha, Surat, Gujarat 395006",
  phone: { label: "+91 88665 55889", href: "tel:+918866555889" },
  email: "", // VERIFY: add the school email (leave empty to hide)
  hours: "Open until 6:00 pm", // Google listing: "Open · Closes 6 PM"
  assistantName: "Your Sathi",
  // Instagram: add the school's handle (without @) and paste the full URLs of posts / reels to show.
  // Example: handle: "bhulkasagar", posts: ["https://www.instagram.com/p/AbC123xyz/", "https://www.instagram.com/reel/DeF456uvw/"]
  instagram: { handle: "bhulka_sagar_vidhyabhavan", posts: [] as string[] },
  mapQuery: "Bhulka Sagar Vidhyabhavan, Samrat Society, Varachha, Surat",
};

export const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`;
export const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.mapQuery)}`;
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`;

// VERIFY: classes offered and medium(s). If only one medium, the medium choice is hidden automatically.
export const GRADES = ["Nursery", "Jr. KG", "Sr. KG", ...Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`)];
export const MEDIUMS: readonly string[] = ["Gujarati", "English"];
export const CLASSES_TEXT = "Pre-Primary (Nursery, Jr. KG, Sr. KG), Primary (Class 1–5) and Secondary (Class 6–10)";
