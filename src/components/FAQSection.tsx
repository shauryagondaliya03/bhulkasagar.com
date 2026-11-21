import { ChevronDown } from "lucide-react";
import { FAQS } from "@/faqs";

export default function FAQSection() {
  return (
    <section id="faq" className="bg-forest-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sun-600">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">Questions parents ask</h2>
        </div>
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <details key={f.id} open={i === 0} className="group rounded-2xl border border-forest-100 bg-white p-1 shadow-sm open:shadow-md">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 text-left text-[17px] font-bold text-forest-900 marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-forest-600 transition group-open:rotate-180" />
              </summary>
              <p className="whitespace-pre-line px-5 pb-5 leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
