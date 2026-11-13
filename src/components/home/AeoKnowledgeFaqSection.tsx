"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles, ShieldCheck } from "lucide-react";
import { AEO_QUESTIONS, AeoFaqItem } from "@/data/campaign-data";
import { trackConversionEvent } from "@/lib/analytics";

export function AeoKnowledgeFaqSection() {
  const [openId, setOpenId] = useState<string | null>("aeo-1");

  const toggleFaq = (id: string, question: string) => {
    const isOpening = openId !== id;
    setOpenId(isOpening ? id : null);

    if (isOpening) {
      trackConversionEvent("faq_expand", {
        faq_id: id,
        question,
      });
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AEO_QUESTIONS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="perguntas-frequentes"
      aria-labelledby="aeo-faq-title"
      className="py-16 sm:py-24 bg-white border-t border-stone-200/90 scroll-mt-20"
    >
      {/* Schema.org FAQPage para AEO/GEO e Rastreabilidade por IA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17385B]/10 text-[#17385B] text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#527fae]" />
            <span>Perguntas Frequentes & Esclarecimentos</span>
          </div>

          <h2
            id="aeo-faq-title"
            className="font-serif text-3xl sm:text-4xl text-[#17385B] font-semibold tracking-tight"
          >
            Tudo o que você precisa saber sobre a campanha e o atendimento
          </h2>

          <p className="text-sm sm:text-base text-[#415A77] leading-relaxed">
            Respostas diretas e transparentes sobre Lucy Aihara, a abordagem da fotobiomodulação, localização do consultório e condições do primeiro atendimento gratuito.
          </p>
        </div>

        {/* Lista de Perguntas (Acordeão Acessível) */}
        <div
          className="space-y-3"
          role="region"
          aria-label="Lista de perguntas frequentes sobre a campanha e a profissional"
        >
          {AEO_QUESTIONS.map((item: AeoFaqItem, index: number) => {
            const isOpen = openId === item.id;
            const itemNumber = (index + 1).toString().padStart(2, "0");

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#527fae]/50 bg-[#F5F2EB]/50 shadow-xs"
                    : "border-stone-200/90 bg-white hover:border-stone-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id, item.question)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B]"
                  aria-expanded={isOpen}
                  aria-controls={`aeo-answer-${item.id}`}
                  id={`aeo-question-${item.id}`}
                >
                  <div className="flex items-start sm:items-center gap-3 min-w-0">
                    <span className="font-mono text-xs font-semibold text-[#84B7CE] flex-shrink-0 pt-0.5 sm:pt-0">
                      {itemNumber}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base font-semibold text-[#17385B] leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "bg-[#17385B] text-white rotate-180"
                        : "bg-stone-100 text-[#415A77]"
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`aeo-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`aeo-question-${item.id}`}
                    className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#415A77] leading-relaxed border-t border-stone-200/60 pt-3"
                  >
                    <p className="font-sans pl-6 sm:pl-7">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Nota Ética de Responsabilidade */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-xs sm:text-sm flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-800 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed text-amber-900">
            <strong>Aviso Ético e Legal em Saúde:</strong> A fotobiomodulação é um procedimento fisioterapêutico de apoio ao bem-estar e à integridade tecidual. Ela não substitui diagnósticos médicos, cirurgias, tratamentos oncológicos ou medicações para controle glicêmico no diabetes mellitus.
          </p>
        </div>
      </div>
    </section>
  );
}
