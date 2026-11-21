import { SITE, CLASSES_TEXT, MEDIUMS } from "@/site";
import { windowsText, sessionLabel } from "@/lib/eligibility";

// The 5 standard questions — used by the "Your Sathi" chat AND the FAQ section.
export type Faq = { id: string; chip: string; q: string; a: string; cta?: string; keywords: string[] };

export const FAQS: Faq[] = [
  {
    id: "classes",
    chip: "Classes & medium",
    q: "Which classes and mediums do you offer?",
    a: `We offer ${CLASSES_TEXT}.\n\nOur Science stream has a NEET/JEE focus, and Commerce prepares students for a successful career in the field.\n\nMedium of instruction: ${MEDIUMS.join(" and ")}.`,
    keywords: ["class", "grade", "medium", "english", "gujarati", "playgroup", "play group", "balvatika", "kg", "std", "standard", "secondary", "primary", "science", "commerce", "neet", "jee", "stream", "12th"],
  },
  {
    id: "age",
    chip: "Age for admission",
    q: "What is the age for admission?",
    a: `Admission age guide for the ${sessionLabel()} session:\n\n${windowsText()}\n\nFor Class 2 and above, admission depends on the child’s previous school record — please contact us.`,
    keywords: ["age", "old", "birth", "dob", "born", "eligib", "year old", "years"],
  },
  {
    id: "admission",
    chip: "Admission & fees",
    q: "How do I apply, and what are the fees?",
    a: `Admissions are open!\n\nFees differ by class, so our admissions team shares the exact fee structure, the documents list and the next steps for your child. Call us on ${SITE.phone.label} or fill the enquiry form and we’ll call you back.`,
    cta: "Tap “Book a callback” below and we’ll call you.",
    keywords: ["fee", "fees", "admission", "apply", "document", "form", "cost", "price", "seat"],
  },
  {
    id: "activities",
    chip: "Activities & campus",
    q: "What activities does the school offer?",
    a: "• Activity-based learning from Play Group to Class 12\n• Value-based education and life-skills programmes\n• Career festival and parent-participation programmes\n• Computer lab, sports and outdoor games\n• Morning assembly with the school band\n• Festival celebrations such as Ganesh Mahotsav and Independence Day",
    cta: "Tap “Book a callback” and we’ll tell you more about what’s right for your child’s class.",
    keywords: ["activit", "computer", "lab", "sport", "game", "band", "music", "facilit", "event", "festival", "play", "campus", "extra"],
  },
  {
    id: "location",
    chip: "Location & visit",
    q: "Where is the school, and can I visit?",
    a: `📍 ${SITE.address}\n\n🕕 ${SITE.hours}\n📞 ${SITE.phone.label}\n\nParents are always welcome to see the school and meet the teachers — call us to fix a visit time.`,
    cta: "Tap “Book a callback” and we’ll arrange a visit that suits you.",
    keywords: ["where", "location", "address", "map", "timing", "time", "hour", "open", "reach", "direction", "kapodra", "varachha", "visit", "tour", "meet", "contact", "phone", "call", "number"],
  },
];

export function matchFaq(text: string): Faq | undefined {
  const t = text.toLowerCase();
  let best: Faq | undefined, bestScore = 0;
  for (const f of FAQS) {
    const score = f.keywords.filter((k) => t.includes(k)).length;
    if (score > bestScore) { best = f; bestScore = score; }
  }
  return best;
}
