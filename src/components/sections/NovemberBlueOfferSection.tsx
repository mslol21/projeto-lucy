"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  CalendarCheck,
  ShieldCheck,
  Info,
  ChevronDown,
  Gift,
  HeartHandshake,
  UserCheck,
} from "lucide-react";
import { NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";
import { trackConversionEvent } from "@/lib/analytics";

export function NovemberBlueOfferSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const offer = NOVEMBER_BLUE_OFFER;
  const whatsappUrl = `https://wa.me/${offer.whatsappNumber}?text=${encodeURIComponent(
    offer.whatsappMessage
  )}`;

  const handleWhatsAppClick = (source: string) => {
    trackConversionEvent("novembro_azul_agendamento_gratuito", {
      source,
      channel: "whatsapp",
      campaign: "novembro_azul_2026",
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Schema.org FAQPage para AEO e SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: offer.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="especial-novembro-azul"
      aria-labelledby="offer-title"
      className="py-20 lg:py-28 bg-[#faf8f5] relative overflow-hidden border-t border-stone-200/80 scroll-mt-20"
    >
      {/* Script JSON-LD de FAQ para AEO/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Elementos orgânicos sutis de fundo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#84B7CE]/15 via-[#C7D9D2]/15 to-transparent rounded-full blur-3xl pointer-events-none -mt-32"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17385B]/10 text-[#17385B] text-xs font-semibold tracking-widest uppercase shadow-2xs">
            <Gift className="w-3.5 h-3.5 text-[#527fae]" aria-hidden="true" />
            <span>{offer.eyebrow}</span>
          </div>

          <h2
            id="offer-title"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17385B] tracking-tight leading-tight"
          >
            {offer.title}
          </h2>

          <p className="text-base sm:text-lg text-[#415A77] leading-relaxed">
            {offer.subtitle}
          </p>
        </div>

        {/* Card Principal da Oferta Especial (CRO Acolhedor) */}
        <div className="bg-white rounded-3xl rounded-tr-[56px] border border-stone-200/90 shadow-md p-6 sm:p-10 lg:p-12 mb-16 relative overflow-hidden">
          {/* Fita decorativa suave no canto superior */}
          <div
            className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#84B7CE]/20 via-[#527fae]/10 to-transparent rounded-bl-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Coluna de Conteúdo da Oferta */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                <span>{offer.badge}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#17385B] leading-snug">
                Uma oportunidade especial para conhecer o trabalho de{" "}
                <strong className="font-semibold text-[#17385B]">Lucy Aihara</strong>, sem custo na primeira sessão.
              </h3>

              <p className="text-sm sm:text-base text-[#415A77] leading-relaxed">
                {offer.highlightText} Convidamos você a experimentar a escuta tecidual da fáscia, o toque suave e a ginástica sensorial em um ambiente acolhedor no consultório em Higienópolis / Consolação (São Paulo - SP).
              </p>

              {/* Destaques Rápidos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-xs sm:text-sm text-[#17385B]">
                    Atendimento presencial individualizado
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-xs sm:text-sm text-[#17385B]">
                    Sem compromisso ou fidelidade posterior
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-xs sm:text-sm text-[#17385B]">
                    Abordagem somática respeitosa e sutil
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-xs sm:text-sm text-[#17385B]">
                    Conduzido por Fisioterapeuta InCor/HCFMUSP
                  </span>
                </div>
              </div>

              {/* Botões de Ação (CTAs) */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleWhatsAppClick("main_card_primary_cta")}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#075E54] hover:bg-[#128C7E] text-white font-medium text-sm sm:text-base shadow-sm hover:shadow transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075E54]"
                >
                  <MessageCircle className="w-5 h-5 text-white transition-transform group-hover:scale-110" aria-hidden="true" />
                  <span>{offer.ctaPrimaryText}</span>
                </a>

                <Link
                  href="/conhecimento/metodo-danis-bois"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white text-[#17385B] hover:text-[#527fae] font-medium text-sm sm:text-base border border-stone-300 hover:border-[#84B7CE] hover:bg-stone-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B]"
                >
                  <span>{offer.ctaSecondaryText}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              {/* Link de Apoio Institucional */}
              <p className="text-xs text-[#415A77] pt-1">
                Quer saber mais sobre quem conduzirá seu atendimento?{" "}
                <Link
                  href="/conhecimento/lucy-aihara"
                  className="font-medium text-[#17385B] hover:text-[#527fae] underline underline-offset-2"
                >
                  Conheça a formação e trajetória de Lucy Aihara
                </Link>
                .
              </p>
            </div>

            {/* Coluna Visual do Consultório e Lucy */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm bg-[#F5F2EB] p-6 rounded-2xl rounded-tr-[44px] border border-stone-200/90 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-2xs flex-shrink-0">
                    <Image
                      src="/images/lucy-aihara-hcfmusp.jpg"
                      alt="Lucy Aihara"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#17385B]">
                      Lucy Aihara
                    </h4>
                    <span className="text-xs text-[#415A77] block">
                      Fisioterapeuta & Fasciaterapeuta
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#415A77] leading-relaxed">
                  &ldquo;Nossa proposta é oferecer um momento seguro para que você sinta o movimento interno da sua fáscia e descubra como o corpo pode relaxar sem esforço agressivo.&rdquo;
                </p>

                <div className="p-3 bg-white rounded-xl border border-stone-200/70 text-[11px] text-[#17385B] flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4 text-[#527fae] flex-shrink-0" aria-hidden="true" />
                  <span>Atendimentos de Segunda a Sexta, sob agendamento prévio.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Como Funciona a Experiência (3 Etapas) */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae]">
              Transparência e Praticidade
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
              Como funciona a sua experiência
            </h3>
            <p className="text-xs sm:text-sm text-[#415A77]">
              Três passos simples para participar da campanha com tranquilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {offer.steps.map((step) => (
              <div
                key={step.number}
                className="bg-white p-7 rounded-2xl rounded-tr-[36px] border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-4 hover:border-[#84B7CE]/60 transition-all"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#17385B] text-white flex items-center justify-center font-serif font-bold text-base shadow-2xs">
                    {step.number}
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[#17385B]">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#415A77] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 text-[11px] text-[#527fae] font-medium flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Acolhimento profissional e humanizado</span>
                </div>
              </div>
            ))}
          </div>

          {/* Esclarecimento Ético Obrigatório sobre Sessões Posteriores */}
          <div className="mt-6 p-4 rounded-xl bg-stone-100/80 border border-stone-200 text-center">
            <p className="text-xs sm:text-sm text-[#415A77]">
              <strong className="text-[#17385B] font-medium">Nota de Transparência:</strong> {offer.clarificationText}
            </p>
          </div>
        </div>

        {/* Perguntas Frequentes da Campanha (Accordion) */}
        <div className="bg-white rounded-3xl rounded-tr-[48px] border border-stone-200/90 p-6 sm:p-10 mb-16 shadow-2xs">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae]">
              Dúvidas Sobre o Atendimento
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
              Perguntas Frequentes sobre a Campanha
            </h3>
            <p className="text-xs sm:text-sm text-[#415A77]">
              Respostas diretas e transparentes sobre a oferta comemorativa de Novembro Azul.
            </p>
          </div>

          <div className="space-y-3" role="region" aria-label="Perguntas Frequentes do Atendimento Gratuito">
            {offer.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-stone-200 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-stone-50/50 hover:bg-stone-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B]"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="font-serif text-sm sm:text-base font-medium text-[#17385B]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#527fae] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="p-4 sm:p-5 text-xs sm:text-sm text-[#415A77] leading-relaxed bg-white border-t border-stone-100 animate-in fade-in duration-150"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Condições da Campanha (Área Discreta e Ética) */}
        <div className="bg-[#F5F2EB]/70 border border-stone-200/90 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#17385B]">
            <Info className="w-4 h-4 text-[#527fae] flex-shrink-0" aria-hidden="true" />
            <h4 className="text-xs font-semibold uppercase tracking-wider">
              Condições e Informações Importantes da Campanha
            </h4>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#415A77] leading-relaxed list-disc list-inside">
            {offer.conditions.map((cond, idx) => (
              <li key={idx} className="pl-1">
                {cond.text}
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#415A77]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" aria-hidden="true" />
              Atendimento com respeito integral aos limites e à autonomia de cada participante.
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick("conditions_footer_cta")}
              className="font-medium text-[#17385B] hover:text-[#527fae] underline"
            >
              Falar com Lucy pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
