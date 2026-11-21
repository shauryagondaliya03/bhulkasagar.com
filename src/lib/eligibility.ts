import { SITE } from "@/site";

// Admission age table from the school website: a child is eligible for a class if born
// between 2 June (year - age - 1) and 1 June (year - age), for the session starting in `year`.
export const AGE_CLASSES = [
  { label: "Play Group", age: 2 },
  { label: "Jr. KG", age: 3 },
  { label: "Sr. KG", age: 4 },
  { label: "Balvatika", age: 5 },
  { label: "Class 1", age: 6 },
] as const;

export const sessionLabel = (year = SITE.admissionYear) => `${year}-${String(year + 1).slice(2)}`;

export function windowFor(age: number, year = SITE.admissionYear) {
  return { start: new Date(year - age - 1, 5, 2), end: new Date(year - age, 5, 1) };
}

export const fmtDate = (d: Date) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export type Result =
  | { kind: "class"; label: string; start: Date; end: Date }
  | { kind: "older" }
  | { kind: "young"; label: string; year: number };

export function classify(dob: Date, year = SITE.admissionYear): Result {
  for (const c of AGE_CLASSES) {
    const w = windowFor(c.age, year);
    if (dob >= w.start && dob <= w.end) return { kind: "class", label: c.label, ...w };
  }
  const oldest = windowFor(AGE_CLASSES[AGE_CLASSES.length - 1].age, year);
  if (dob < oldest.start) return { kind: "older" };
  // Too young this year: find the year in which the child falls into the Play Group window.
  const pg = AGE_CLASSES[0].age;
  const y = dob >= new Date(dob.getFullYear(), 5, 2) ? dob.getFullYear() + pg + 1 : dob.getFullYear() + pg;
  return { kind: "young", label: AGE_CLASSES[0].label, year: y };
}

export function windowsText(year = SITE.admissionYear) {
  return AGE_CLASSES.map((c) => {
    const w = windowFor(c.age, year);
    return `• ${c.label}: born ${fmtDate(w.start)} – ${fmtDate(w.end)}`;
  }).join("\n");
}
