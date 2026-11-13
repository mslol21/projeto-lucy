"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  Check,
  CalendarCheck,
  ShieldCheck,
  Info,
  ChevronDown,
  Gift,
  HeartHandshake,
  MapPin,
  X,
} from "lucide-react";
import { NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";
import { trackConversionEvent } from "@/lib/analytics";

export function NovemberBlueOfferSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [stickyDismissed, setStickyDismissed] = useState(false);

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

  // Monitora rolagem para exibir CTA fixo no mobile de forma discreta
  useEffect(() => {
    const handleScroll = () => {
      if (stickyDismissed) return;
      const scrollY = window.scrollY;
      // Mostra a barra quando passar dos 380px e esconde se voltar ao topo
      setShowStickyBar(scrollY > 380);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stickyDismissed]);

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
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F5F2EB] to-[#FAF8F5] relative overflow-hidden border-b border-stone-200/80 scroll-mt-20"
    >
      {/* Script JSON-LD de FAQ para AEO/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Elementos orgânicos sutis de fundo */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#84B7CE]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C7D9D2]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bloco Promocional Compacto — Composição Horizontal Desktop */}
        <div className="bg-white rounded-3xl rounded-tr-[52px] border border-stone-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-8 lg:p-10 mb-12 relative overflow-hidden">
          {/* Fita decorativa sutil no canto superior */}
          <div
            className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#84B7CE]/20 via-[#527fae]/10 to-transparent rounded-bl-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Coluna Esquerda: Selo, Título, Descrição, Bullet Points e CTAs */}
            <div className="lg:col-span-7 space-y-5">
              {/* Selo Oficial */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17385B]/10 text-[#17385B] text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                <Gift className="w-3.5 h-3.5 text-[#527fae]" aria-hidden="true" />
                <span>{offer.eyebrow}</span>
              </div>

              {/* Título Principal */}
              <h2
                id="offer-title"
                className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#17385B] tracking-tight leading-tight"
              >
                {offer.title}
              </h2>

              {/* Subtítulo Objetivo */}
              <p className="text-sm sm:text-base text-[#415A77] leading-relaxed">
                {offer.subtitle}
              </p>

              {/* Informações Rápidas de Apoio (Grid 2x2 com alta legibilidade) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {offer.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#17385B]">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 stroke-[2.5]" aria-hidden="true" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* CTAs de Conversão */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleWhatsAppClick("hero_offer_primary_cta")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#075E54] hover:bg-[#128C7E] text-white font-medium text-sm sm:text-base shadow-sm hover:shadow transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075E54]"
                >
                  <MessageCircle className="w-5 h-5 text-white transition-transform group-hover:scale-110" aria-hidden="true" />
                  <span>{offer.ctaPrimaryText}</span>
                </a>

                <a
                  href="#como-funciona-experiencia"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#17385B] hover:text-[#527fae] font-medium text-sm border border-stone-300 hover:border-[#84B7CE] hover:bg-stone-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B]"
                >
                  <span>{offer.ctaSecondaryText}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Coluna Direita: Card Profissional Compacto de Lucy Aihara */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-[#F5F2EB]/90 p-5 sm:p-6 rounded-2xl rounded-tr-[40px] border border-stone-200/90 shadow-2xs space-y-4">
                <div className="flex items-center gap-3.5 pb-3 border-b border-stone-200/80">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-2xs flex-shrink-0">
                    <Image
                      src="/images/lucy-aihara-hcfmusp.jpg"
                      alt="Lucy Aihara com jaleco oficial do Instituto Central do HCFMUSP"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover object-top"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-semibold text-[#17385B]">
                      Lucy Aihara
                    </h3>
                    <span className="text-xs text-[#415A77] block">
                      Fisioterapeuta • InCor / HCFMUSP
                    </span>
                    <span className="text-[11px] text-[#527fae] font-medium block">
                      Especialista em Fasciaterapia
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#415A77] leading-relaxed">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#527fae] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Consolação / Higienópolis, São Paulo - SP</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CalendarCheck className="w-3.5 h-3.5 text-[#527fae] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Sessões presenciais com horário reservado</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-xs">
                  <Link
                    href="/conhecimento/lucy-aihara"
                    className="font-medium text-[#17385B] hover:text-[#527fae] inline-flex items-center gap-1 group"
                  >
                    <span>Conhecer a trajetória de Lucy</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco: Como Funciona a Experiência (3 Etapas) */}
        <div id="como-funciona-experiencia" className="scroll-mt-24 mb-12">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae]">
              Processo de Agendamento
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
              Como funciona o agendamento
            </h3>
            <p className="text-xs sm:text-sm text-[#415A77]">
              Três passos simples para participar da oportunidade de Novembro Azul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {offer.steps.map((step) => (
              <div
                key={step.number}
                className="bg-white p-6 rounded-2xl rounded-tr-[32px] border border-stone-200/90 shadow-2xs flex flex-col justify-between space-y-3 hover:border-[#84B7CE]/60 transition-all"
              >
                <div className="space-y-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#17385B] text-white flex items-center justify-center font-serif font-bold text-sm shadow-2xs">
                    {step.number}
                  </div>
                  <h4 className="font-serif text-base font-semibold text-[#17385B]">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#415A77] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 text-[11px] text-[#527fae] font-medium flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Acolhimento profissional e seguro</span>
                </div>
              </div>
            ))}
          </div>

          {/* Nota de Transparência Ética */}
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-200/80 text-center">
            <p className="text-xs text-[#415A77]">
              <strong className="text-[#17385B] font-medium">Nota de Transparência:</strong> {offer.clarificationText}
            </p>
          </div>
        </div>

        {/* Dúvidas Frequentes da Oferta (Accordion Compacto) & Condições Discretas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FAQ da Gratuidade */}
          <div className="lg:col-span-7 bg-white rounded-2xl rounded-tr-[36px] border border-stone-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#527fae] block">
                Tire suas dúvidas
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-[#17385B]">
                Perguntas Frequentes sobre a Gratuidade
              </h3>
            </div>

            <div className="space-y-2.5" role="region" aria-label="Perguntas Frequentes do Atendimento Gratuito">
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
                      className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 bg-stone-50/60 hover:bg-stone-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B]"
                      aria-expanded={isOpen}
                      aria-controls={`faq-offer-answer-${faq.id}`}
                    >
                      <span className="font-serif text-xs sm:text-sm font-medium text-[#17385B]">
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
                        id={`faq-offer-answer-${faq.id}`}
                        className="p-3.5 sm:p-4 text-xs text-[#415A77] leading-relaxed bg-white border-t border-stone-100"
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
          <div className="lg:col-span-5 bg-[#F5F2EB]/80 border border-stone-200/90 rounded-2xl p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2 text-[#17385B]">
              <Info className="w-4 h-4 text-[#527fae] flex-shrink-0" aria-hidden="true" />
              <h4 className="text-xs font-semibold uppercase tracking-wider">
                Condições Importantes da Campanha
              </h4>
            </div>

            <ul className="space-y-2 text-xs text-[#415A77] leading-relaxed list-disc list-inside">
              {offer.conditions.map((cond, idx) => (
                <li key={idx} className="pl-0.5">
                  {cond.text}
                </li>
              ))}
            </ul>

            <div className="pt-2 border-t border-stone-200/60 text-[11px] text-[#415A77] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" aria-hidden="true" />
              <span>Respeito integral aos limites e à autonomia corporal de cada pessoa.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de CTA Fixa Discreta no Mobile (Sticky Mobile Bottom Bar) */}
      {showStickyBar && !stickyDismissed && (
        <aside
          aria-label="Barra de agendamento rápido no WhatsApp"
          className="fixed bottom-3 inset-x-3 z-50 sm:hidden bg-[#17385B]/95 text-white p-3 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 animate-in slide-in-from-bottom-3 duration-200"
        >
          <div className="flex items-center justify-between gap-2.5">
            <div className="flex-1 min-w-0 pr-1">
              <span className="block text-[11px] font-bold text-[#84B7CE] uppercase tracking-wider truncate">
                1º Atendimento Gratuito
              </span>
              <span className="block text-xs text-white/90 truncate">
                Novembro Azul • Lucy Aihara
              </span>
            </div>

            <div className="flex items-center gap-1.5 flex-shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick("sticky_mobile_bottom_bar")}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-xs shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
                <span>Agendar</span>
              </a>

              <button
                type="button"
                onClick={() => setStickyDismissed(true)}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 focus-visible:outline-none"
                aria-label="Fechar barra de agendamento rápido"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>
      )}
    </section>
  );
}
