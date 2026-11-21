// Extra website content (events, testimonials, FAQ, stats…), gathered from the original
// site bhulkasagarschool.com. Everything marked VERIFY should be confirmed by the school.

export type Bi = { en: string; gu: string };

export const SECTION_COPY = {
  features: {
    eyebrow: { en: "Why Bhulka Sagar", gu: "શા માટે ભુલકા સાગર" },
    title: { en: "A school where every child is seen", gu: "જ્યાં દરેક બાળક પર ધ્યાન અપાય છે" },
    sub: { en: "Warm teachers, a safe campus and steady guidance — the things parents tell us matter most.", gu: "સ્નેહભર્યા શિક્ષકો, સુરક્ષિત કેમ્પસ અને સતત માર્ગદર્શન — જે વાલીઓ માટે સૌથી મહત્વનું છે." },
  },
  stats: {
    eyebrow: { en: "Our journey", gu: "અમારી સફર" },
    title: { en: "Numbers that reflect our care", gu: "અમારી મહેનત, આંકડાઓમાં" },
  },
  events: {
    eyebrow: { en: "Events & Notices", gu: "કાર્યક્રમો અને સૂચનાઓ" },
    title: { en: "What's happening at school", gu: "શાળામાં શું ચાલી રહ્યું છે" },
    sub: { en: "Celebrations, competitions and important dates for parents.", gu: "ઉજવણીઓ, સ્પર્ધાઓ અને વાલીઓ માટે મહત્વની તારીખો." },
  },
  testimonials: {
    eyebrow: { en: "Parent voices", gu: "વાલીઓના અનુભવ" },
    title: { en: "What parents say about us", gu: "વાલીઓ અમારા વિશે શું કહે છે" },
  },
  gallery: {
    eyebrow: { en: "Photo gallery", gu: "ફોટો ગેલેરી" },
    title: { en: "A glimpse of school life", gu: "શાળા જીવનની ઝલક" },
    sub: { en: "Tap any photo to view it larger.", gu: "મોટું જોવા માટે કોઈ પણ ફોટો પર ક્લિક કરો." },
  },
  faq: {
    eyebrow: { en: "Admissions FAQ", gu: "પ્રવેશ પ્રશ્નો" },
    title: { en: "Parents often ask", gu: "વાલીઓ વારંવાર પૂછે છે" },
    sub: { en: "Can't find your answer? Call us or ask Your Sathi in the chat.", gu: "જવાબ ન મળે તો અમને ફોન કરો અથવા ચેટમાં Your Sathi ને પૂછો." },
  },
} satisfies Record<string, Record<string, Bi>>;

export const NAV_LABELS = {
  academics: { en: "Academics", gu: "અભ્યાસ" },
  events: { en: "Events", gu: "કાર્યક્રમો" },
  gallery: { en: "Gallery", gu: "ગેલેરી" },
  faq: { en: "FAQ", gu: "પ્રશ્નો" },
  contact: { en: "Contact", gu: "સંપર્ક" },
} satisfies Record<string, Bi>;

// VERIFY: the original site shows placeholder text for these four cards; wording below is a sensible draft.
export const FEATURES = [
  { icon: "Award", title: { en: "Scholarship support", gu: "શિષ્યવૃત્તિ સહાય" }, text: { en: "Encouragement and support for bright, deserving students.", gu: "તેજસ્વી અને જરૂરિયાતમંદ વિદ્યાર્થીઓ માટે પ્રોત્સાહન અને સહાય." } },
  { icon: "GraduationCap", title: { en: "Caring, skilled teachers", gu: "અનુભવી અને સ્નેહાળ શિક્ષકો" }, text: { en: "Teachers who know every child by name and teach concepts, not just chapters.", gu: "દરેક બાળકને નામથી ઓળખતા શિક્ષકો, જે માત્ર પાઠ નહીં પણ સમજ શીખવે છે." } },
  { icon: "Library", title: { en: "Library & reading habit", gu: "પુસ્તકાલય અને વાંચનની ટેવ" }, text: { en: "A growing book collection to build reading from the very first years.", gu: "નાનપણથી જ વાંચનની ટેવ કેળવવા માટે પુસ્તકોનો સંગ્રહ." } },
  { icon: "Wallet", title: { en: "Affordable fees", gu: "પરવડે તેવી ફી" }, text: { en: "Quality education that stays within a family's reach.", gu: "દરેક પરિવારને પોસાય તેવું ગુણવત્તાસભર શિક્ષણ." } },
] as const;

// VERIFY: the original site shows 29.3K+ students, 32.4K+ classes, 354+ lecturers, 30+ awards, which looks like
// template placeholder data. Replace with the school's real figures before launch.
export const STATS = [
  { value: 29300, suffix: "+", decimals: 0, compact: true, label: { en: "Students taught", gu: "ભણેલા વિદ્યાર્થીઓ" } },
  { value: 354, suffix: "+", decimals: 0, compact: false, label: { en: "Skilled teachers", gu: "કુશળ શિક્ષકો" } },
  { value: 32400, suffix: "+", decimals: 0, compact: true, label: { en: "Classes conducted", gu: "લેવાયેલા વર્ગો" } },
  { value: 30, suffix: "+", decimals: 0, compact: false, label: { en: "Awards won", gu: "જીતેલા પુરસ્કારો" } },
];

// VERIFY: date taken from the original website's event card.
export const EVENTS = [
  { id: "independence", tag: { en: "Celebration", gu: "ઉજવણી" }, title: { en: "Independence Day Celebration", gu: "સ્વતંત્રતા દિવસની ઉજવણી" }, date: "15 Aug 2026", time: "8:05 AM",
    text: { en: "Celebrating the spirit of freedom, patriotism and national unity through cultural performances and student activities.", gu: "સાંસ્કૃતિક કાર્યક્રમો અને વિદ્યાર્થી પ્રવૃત્તિઓ દ્વારા સ્વતંત્રતા, દેશભક્તિ અને રાષ્ટ્રીય એકતાની ઉજવણી." } },
  { id: "admissions", tag: { en: "Admissions", gu: "પ્રવેશ" }, title: { en: "Admissions open — Nursery to Class 10", gu: "પ્રવેશ ચાલુ — નર્સરીથી ધોરણ 10" }, date: "Ongoing", time: "Open until 6:00 pm",
    text: { en: "Visit the campus, meet our teachers and reserve a seat for your child. Gujarati and English medium available.", gu: "કેમ્પસની મુલાકાત લો, શિક્ષકોને મળો અને તમારા બાળક માટે બેઠક નોંધાવો. ગુજરાતી અને અંગ્રેજી માધ્યમ ઉપલબ્ધ." } },
  { id: "ptm", tag: { en: "Parents", gu: "વાલીઓ" }, title: { en: "Parent–Teacher Meetings", gu: "વાલી–શિક્ષક મુલાકાત" }, date: "Every term", time: "Dates shared via school",
    text: { en: "Regular conversations on your child's progress, strengths and next steps.", gu: "તમારા બાળકની પ્રગતિ, શક્તિઓ અને આગળના પગલાં વિશે નિયમિત ચર્ચા." } },
  { id: "annual", tag: { en: "Annual", gu: "વાર્ષિક" }, title: { en: "Annual Day & Sports Day", gu: "વાર્ષિકોત્સવ અને રમતોત્સવ" }, date: "To be announced", time: "—",
    text: { en: "Dance, drama, music and races — a day when every child gets a stage.", gu: "નૃત્ય, નાટક, સંગીત અને દોડ — એક દિવસ જ્યારે દરેક બાળકને મંચ મળે છે." } },
];

// Quotes are from the original website (Gujarati), English is a faithful paraphrase.
export const TESTIMONIALS = [
  { name: "Jagdishbhai", role: { en: "Parent", gu: "વાલી" },
    gu: "ભૂલકા સાગર વિદ્યાભવનમાં શિક્ષણ માત્ર પુસ્તકો પૂરતું નથી, પરંતુ જીવન જીવવાની સાચી કળા શીખવવામાં આવે છે. અહીં મારા બાળકનો આત્મવિશ્વાસ અને પ્રતિભા બંને વિકસ્યા છે.",
    en: "At Bhulka Sagar Vidhyabhavan, learning goes beyond books — children are taught the real art of living. My child's confidence and talent have both grown here." },
  { name: "Babubhai", role: { en: "Parent", gu: "વાલી" },
    gu: "આ શાળામાં શિક્ષકો વિદ્યાર્થીઓને હંમેશા પ્રોત્સાહિત કરે છે. મારા બાળકમાં સકારાત્મકતા અને શિસ્ત અહીંથી જ શીખાઈ છે.",
    en: "The teachers here always encourage the students. My child learned positivity and discipline right here." },
];

export const GALLERY = [
  { src: "/images/school-building.jpg", alt: { en: "Bhulka Sagar school building", gu: "ભુલકા સાગર શાળાની ઇમારત" }, span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/assembly.jpg", alt: { en: "Morning assembly", gu: "સવારની પ્રાર્થનાસભા" }, span: "" },
  { src: "/images/outdoor-games.jpg", alt: { en: "Outdoor games", gu: "મેદાની રમતો" }, span: "" },
];

export const FAQS = [
  { q: { en: "Which classes and mediums are available?", gu: "કયા ધોરણો અને માધ્યમ ઉપલબ્ધ છે?" }, a: { en: "We teach Nursery, Jr. KG, Sr. KG and Class 1 to 10, in Gujarati and English medium.", gu: "નર્સરી, જુનિયર કેજી, સિનિયર કેજી અને ધોરણ 1 થી 10 — ગુજરાતી અને અંગ્રેજી માધ્યમમાં." } },
  { q: { en: "How do I apply for admission?", gu: "પ્રવેશ માટે કેવી રીતે અરજી કરવી?" }, a: { en: "Fill the enquiry form at the top of this page, call us, or book a campus visit. Our team will guide you through the next steps.", gu: "પેજ પરનું enquiry ફોર્મ ભરો, અમને ફોન કરો અથવા કેમ્પસ વિઝિટ બુક કરો. અમારી ટીમ આગળની પ્રક્રિયામાં માર્ગદર્શન આપશે." } },
  { q: { en: "What are the school timings?", gu: "શાળાનો સમય શું છે?" }, a: { en: "The office is open until 6:00 pm. Please call to confirm class timings for your child's grade.", gu: "ઓફિસ સાંજે 6:00 વાગ્યા સુધી ખુલ્લી રહે છે. તમારા બાળકના ધોરણના સમય માટે કૃપા કરી ફોન કરીને ખાતરી કરો." } },
  { q: { en: "Can I visit the campus before deciding?", gu: "નક્કી કરતા પહેલાં શું હું કેમ્પસ જોઈ શકું?" }, a: { en: "Of course. Use “Book Campus Visit” and we'll arrange a time to show you the classrooms and meet the teachers.", gu: "ચોક્કસ. “Book Campus Visit” પર ક્લિક કરો, અમે સમય નક્કી કરીને વર્ગખંડો બતાવીશું અને શિક્ષકો સાથે મુલાકાત કરાવીશું." } },
  { q: { en: "Is there any scholarship or fee support?", gu: "શું શિષ્યવૃત્તિ કે ફી સહાય છે?" }, a: { en: "We support deserving students. Please speak to the office for current details.", gu: "અમે લાયક વિદ્યાર્થીઓને સહાય કરીએ છીએ. વર્તમાન વિગતો માટે ઓફિસનો સંપર્ક કરો." } },
  { q: { en: "How can I reach the school?", gu: "શાળા સુધી કેવી રીતે પહોંચવું?" }, a: { en: "We are in Surat. See the map in the Contact section for directions, or call +91 88665 55889.", gu: "અમે સુરતમાં છીએ. દિશા માટે સંપર્ક વિભાગનો નકશો જુઓ અથવા +91 88665 55889 પર ફોન કરો." } },
];
