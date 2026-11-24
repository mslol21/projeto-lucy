import { HelpCircle, ChevronRight, Sparkles } from "lucide-react";
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
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183B2B]/10 text-[#183B2B] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#183B2B]/15">
            <HelpCircle className="w-3.5 h-3.5 text-[#4A6B5D]" />
            <span>Dúvidas Frequentes & Esclarecimentos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2421] font-normal tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#556370]">
            Respostas claras e objetivas sobre o atendimento clínico, localização e formações.
          </p>
        </div>

        <div className="space-y-4">
          {INSTITUTIONAL_FAQS.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-2xl border border-[#E2DBD0] overflow-hidden shadow-xs transition-all open:shadow-sm"
            >
              <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none text-left font-serif text-base sm:text-lg text-[#1A2421] group-open:text-[#183B2B] transition-colors">
                <span className="pr-4">{faq.question}</span>
                <ChevronRight className="w-5 h-5 text-[#C5A880] transition-transform duration-200 group-open:rotate-90 flex-shrink-0" />
              </summary>
              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#4A5568] leading-relaxed border-t border-[#F5F2EB] font-sans">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
