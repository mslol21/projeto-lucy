import { HelpCircle, ChevronRight } from "lucide-react";
import { INSTITUTIONAL_FAQS } from "@/data/institutional-data";

export function InstitutionalFaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: INSTITUTIONAL_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EADBC8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C0D8FF]/30 text-[#065176] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#5C88C5]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#065176]" />
            <span>Dúvidas Frequentes & Esclarecimentos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#065176] font-normal tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            Respostas claras e objetivas sobre o atendimento clínico, localização e formações.
          </p>
        </div>

        <div className="space-y-4">
          {INSTITUTIONAL_FAQS.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-2xl border border-[#EADBC8] overflow-hidden shadow-xs transition-all open:shadow-sm"
            >
              <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none text-left font-serif text-base sm:text-lg text-neutral-900 group-open:text-[#065176] transition-colors">
                <span className="pr-4">{faq.question}</span>
                <ChevronRight className="w-5 h-5 text-[#845924] transition-transform duration-200 group-open:rotate-90 flex-shrink-0" />
              </summary>
              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-[#EADBC8]/50 font-sans">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
