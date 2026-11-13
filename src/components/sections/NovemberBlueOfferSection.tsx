"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  CalendarCheck,
  ShieldCheck,
  Info,
  ChevronDown,
  Gift,
  HeartHandshake,
  MapPin,
  X,
  CheckCircle2,
  SunMedium,
  BookOpen,
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
    trackConversionEvent("novembro_azul_fotobiomodulacao_lead", {
      source,
      channel: "whatsapp",
      campaign: "novembro_azul_2026",
      technique: "fotobiomodulacao",
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
      setShowStickyBar(scrollY > 420);
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
      aria-labelledby="offer-headline"
      className="bg-gradient-to-b from-[#17385B] via-[#1b3b6f] to-[#17385B] text-[#F5F2EB] relative overflow-hidden border-b border-[#84B7CE]/20 scroll-mt-20"
    >
      {/* Script JSON-LD de FAQ para AEO/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Elementos visuais sutis que remetem à difusão de luz e biofotônica */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#84B7CE]/15 via-[#2563eb]/10 to-transparent rounded-full blur-3xl pointer-events-none -mt-40 animate-pulse duration-1000 motion-reduce:animate-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-[#C7D9D2]/10 via-[#38bdf8]/10 to-transparent rounded-full blur-3xl pointer-events-none -mb-32"
        aria-hidden="true"
      />

      {/* BLOCO PRINCIPAL DA OFERTA (Alto Impacto em Azul-Marinho e Cobalto) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Coluna Esquerda: Comunicação CRO de Alto Impacto */}
          <div className="lg:col-span-7 space-y-6">
            {/* Selo Oficial da Campanha */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#84B7CE]/15 text-[#84B7CE] border border-[#84B7CE]/30 text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-2xs">
              <Gift className="w-3.5 h-3.5 text-[#84B7CE]" aria-hidden="true" />
              <span>{offer.eyebrow}</span>
            </div>

            {/* Headline Principal */}
            <h2
              id="offer-headline"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight leading-tight"
            >
              {offer.headline}
            </h2>

            {/* Subheadline Técnica e Acolhedora */}
            <p className="text-base sm:text-lg text-[#C7D9D2] leading-relaxed max-w-2xl font-sans">
              {offer.subheadline}
            </p>

            {/* Card de Destaque da Oferta de Gratuidade */}
            <div className="p-5 sm:p-6 rounded-2xl rounded-tr-[40px] bg-white/10 backdrop-blur-md border border-white/20 space-y-3 shadow-lg relative overflow-hidden">
              {/* Feixe sutil de iluminação */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl from-amber-300/10 via-emerald-400/10 to-transparent rounded-full blur-xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs sm:text-sm font-bold tracking-wider uppercase">
                <Sparkles className="w-4 h-4 text-emerald-300" aria-hidden="true" />
                <span>{offer.offerHeadline}</span>
              </div>

              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-sans">
                {offer.complement}
              </p>

              {/* Informações rápidas em grid 2x2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-white/10 text-xs sm:text-sm text-[#C7D9D2]">
                {offer.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conexão com as Datas Oficiais do Novembro Azul */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-[#84B7CE]">
              <SunMedium className="w-4 h-4 text-[#84B7CE] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="leading-relaxed">
                Conectando a conscientização do <strong>14 de Novembro (Dia Mundial do Diabetes)</strong> e do <strong>17 de Novembro (Combate ao Câncer de Próstata)</strong> à valorização do autocuidado e da escuta dos sinais do corpo.
              </p>
            </div>

            {/* CTAs de Conversão com Contraste Máximo */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleWhatsAppClick("high_impact_offer_cta")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] active:scale-[0.99] text-[#073322] font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 motion-reduce:transition-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageCircle className="w-5 h-5 fill-[#073322] text-[#073322] transition-transform group-hover:scale-110 motion-reduce:transition-none" aria-hidden="true" />
                  <span>{offer.ctaText}</span>
                </a>

                <Link
                  href="/atendimento"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 transition-all duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Ver valores e opções</span>
                  <ArrowRight className="w-4 h-4 text-[#84B7CE]" aria-hidden="true" />
                </Link>
              </div>

              {/* Microtexto anti-fricção */}
              <p className="text-xs text-[#84B7CE] font-sans">
                {offer.microtext}
              </p>
            </div>
          </div>

          {/* Coluna Direita: Fotografia Original de Lucy Aihara (Sem modificações) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-3xl rounded-tr-[52px] p-5 sm:p-6 border border-white/20 shadow-xl space-y-4">
              {/* Fotografia original de Lucy Aihara rigorosamente preservada */}
              <div className="relative rounded-2xl rounded-tr-[40px] overflow-hidden border-2 border-white/30 bg-[#17385B] aspect-[4/5] max-h-[340px]">
                <Image
                  src="/images/lucy-aihara-hcfmusp.jpg"
                  alt="Fotografia original de Lucy Aihara com jaleco oficial do Instituto Central do HCFMUSP"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Identificação Institucional de Lucy */}
              <div className="space-y-1.5 pt-1 text-center sm:text-left">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg font-semibold text-white">
                    Lucy Aihara
                  </h3>
                  <span className="text-[10px] font-bold text-[#17385B] bg-[#84B7CE] px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Presencial
                  </span>
                </div>
                <p className="text-xs text-[#C7D9D2] leading-tight">
                  Fisioterapeuta • InCor / HCFMUSP
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#84B7CE] pt-1">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                  <span>Consolação / Higienópolis — São Paulo</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/15">
                <Link
                  href="/conhecimento/lucy-aihara"
                  className="text-xs text-[#84B7CE] hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Ver trajetória e formação de Lucy</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ÁREA EDUCATIVA COMPLEMENTAR: O Que É Fotobiomodulação */}
      <div
        id="o-que-e-fotobiomodulacao"
        className="bg-[#FAF8F5] text-[#17385B] py-14 sm:py-16 border-t border-stone-200 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Card Conceitual Curto e Objetivo */}
          <div className="bg-white rounded-3xl rounded-tr-[48px] border border-stone-200/90 p-6 sm:p-10 shadow-2xs">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#527fae]">
                <SunMedium className="w-4 h-4 text-[#527fae]" aria-hidden="true" />
                <span>Educação em Saúde e Biofotônica</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
                {offer.educationTitle}
              </h3>

              <p className="text-base sm:text-lg text-[#415A77] leading-relaxed font-sans">
                {offer.educationText}
              </p>

              {/* Aviso Ético Importante sobre Diabetes e Câncer */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 text-xs sm:text-sm space-y-1">
                <strong className="block font-semibold text-amber-900">
                  Aviso Ético de Responsabilidade Médica:
                </strong>
                <p className="leading-relaxed text-amber-900/90">
                  A fotobiomodulação é um recurso terapêutico de suporte. Ela <strong>não previne, não cura e não substitui</strong> o tratamento médico convencional para o diabetes mellitus ou o câncer de próstata. Não há promessas de alívio instantâneo de sintomas ou resultados garantidos.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={offer.educationLink}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#17385B] text-white hover:bg-[#1f4a75] font-medium text-xs sm:text-sm transition-colors shadow-xs group"
                >
                  <BookOpen className="w-4 h-4 text-[#84B7CE]" aria-hidden="true" />
                  <span>Acessar artigo científico completo sobre fotobiomodulação</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* 3 Etapas de Agendamento */}
          <div>
            <div className="text-center max-w-xl mx-auto mb-8 space-y-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae]">
                Passo a Passo Simples
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
                Como funciona seu primeiro atendimento
              </h3>
              <p className="text-xs sm:text-sm text-[#415A77]">
                Acolhimento, respeito ao seu tempo e transparência do primeiro contato à sessão presencial.
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
                    <span>Acolhimento e avaliação atenta</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-200/80 text-center">
              <p className="text-xs text-[#415A77]">
                <strong className="text-[#17385B] font-medium">Nota de Transparência:</strong> {offer.clarificationText}
              </p>
            </div>
          </div>

          {/* Dúvidas Frequentes & Condições da Campanha */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* FAQ da Gratuidade */}
            <div className="lg:col-span-7 bg-white rounded-2xl rounded-tr-[36px] border border-stone-200/90 p-5 sm:p-6 shadow-2xs space-y-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#527fae] block">
                  Perguntas e Respostas
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-[#17385B]">
                  Dúvidas sobre o Atendimento Gratuito
                </h4>
              </div>

              <div className="space-y-2.5" role="region" aria-label="Perguntas Frequentes da Fotobiomodulação">
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

            {/* Condições da Campanha */}
            <div className="lg:col-span-5 bg-[#F5F2EB]/90 border border-stone-200/90 rounded-2xl p-5 sm:p-6 space-y-3">
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
      </div>

      {/* Barra de CTA Fixa Discreta no Mobile (Sticky Mobile Bottom Bar) */}
      {showStickyBar && !stickyDismissed && (
        <aside
          aria-label="Barra de agendamento rápido no WhatsApp"
          className="fixed bottom-3 inset-x-3 z-50 sm:hidden bg-[#17385B]/95 text-white p-3 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 animate-in slide-in-from-bottom-3 duration-200 motion-reduce:transition-none"
        >
          <div className="flex items-center justify-between gap-2.5">
            <div className="flex-1 min-w-0 pr-1">
              <span className="block text-[11px] font-bold text-[#84B7CE] uppercase tracking-wider truncate">
                1º Atendimento Gratuito
              </span>
              <span className="block text-xs text-white/90 truncate">
                Fotobiomodulação • Lucy Aihara
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
