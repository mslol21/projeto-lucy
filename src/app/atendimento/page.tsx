import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import {
  Sparkles,
  MessageCircle,
  Clock,
  MapPin,
  CalendarCheck,
  ShieldCheck,
  Check,
  HelpCircle,
  Gift,
  ArrowRight,
  SunMedium,
  CheckCircle2,
} from "lucide-react";
import { COMMERCIAL_DATA, NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";
import { CommercialPricingCards } from "@/components/commercial/CommercialPricingCards";
import { PromotionShareCard } from "@/components/commercial/PromotionShareCard";

export const metadata: Metadata = {
  title: "Atendimento e Pacotes de Fotobiomodulação | Novembro Azul 2026",
  description:
    "Primeiro atendimento gratuito de fotobiomodulação (40 min) com Lucy Aihara em São Paulo. Conheça as opções de sessões avulsas e pacotes com transparência.",
  alternates: {
    canonical: "https://novembroazul.escoladefasciaterapiaemovimento.com/atendimento",
  },
  openGraph: {
    title: "Atendimento de Fotobiomodulação: Valores e Condições | Novembro Azul 2026",
    description:
      "Conheça a fotobiomodulação. Primeiro atendimento gratuito com aplicação incluída, sessões avulsas de R$ 120 e pacotes com até 28% de economia.",
    url: "https://novembroazul.escoladefasciaterapiaemovimento.com/atendimento",
    type: "website",
  },
};

export default function AtendimentoComercialPage() {
  const com = COMMERCIAL_DATA;
  const offer = NOVEMBER_BLUE_OFFER;
  const whatsappUrl = `https://wa.me/${offer.whatsappNumber}?text=${encodeURIComponent(
    com.whatsappMessage
  )}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: com.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fotobiomodulação",
    provider: {
      "@type": "LocalBusiness",
      name: "Escola de Fasciaterapia e Movimento — Lucy Aihara",
      telephone: "+55-11-99998-6082",
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
    },
    offers: com.plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.priceNumeric.toFixed(2),
      priceCurrency: "BRL",
      description: plan.features.join(", "),
      url: "https://novembroazul.escoladefasciaterapiaemovimento.com/atendimento",
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB] text-[#17385B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white/70 border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Atendimento e Pacotes" }]} />
          </div>
        </div>

        {/* 1. HERO COMERCIAL */}
        <header className="relative py-14 sm:py-20 bg-gradient-to-b from-[#17385B] via-[#1b3b6f] to-[#17385B] text-white overflow-hidden border-b border-[#84B7CE]/20">
          <div
            className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-[#84B7CE]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Coluna Esquerda: Comunicação Comercial da Oferta */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#84B7CE]/20 text-[#84B7CE] border border-[#84B7CE]/30 text-xs font-semibold tracking-wider uppercase">
                  <Gift className="w-3.5 h-3.5 text-[#84B7CE]" aria-hidden="true" />
                  <span>{com.eyebrow}</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight text-white">
                  {com.title}
                </h1>

                <p className="text-base sm:text-lg text-[#C7D9D2] leading-relaxed max-w-2xl font-sans">
                  {com.subtitle}
                </p>

                {/* Destaque do Primeiro Atendimento Gratuito */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 text-left">
                    <span className="block text-[11px] uppercase tracking-wider text-[#84B7CE] font-bold">
                      Condição Promocional
                    </span>
                    <strong className="block font-serif text-lg sm:text-xl text-white">
                      {com.badge}
                    </strong>
                    <span className="block text-xs text-[#C7D9D2]">
                      Duração: 40 minutos com aplicação da técnica incluída
                    </span>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] active:scale-[0.99] text-[#073322] font-semibold text-xs sm:text-sm shadow-md transition-all text-center flex-shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
                    <span>{com.ctaText}</span>
                  </a>
                </div>
              </div>

              {/* Coluna Direita: Fotografia Original de Lucy Aihara */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-3xl rounded-tr-[52px] p-5 sm:p-6 border border-white/20 shadow-xl space-y-4">
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

                  <div className="space-y-1 text-center sm:text-left">
                    <h2 className="font-serif text-lg font-semibold text-white">
                      Lucy Aihara
                    </h2>
                    <p className="text-xs text-[#C7D9D2]">
                      Fisioterapeuta • InCor / HCFMUSP
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[#84B7CE] pt-1">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Higienópolis / Consolação — São Paulo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 2. COMO FUNCIONA A EXPERIÊNCIA (3 ETAPAS) */}
        <section aria-labelledby="steps-title" className="py-14 sm:py-16 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae]">
                Passo a Passo
              </span>
              <h2 id="steps-title" className="font-serif text-2xl sm:text-3xl text-[#17385B]">
                Como funciona a experiência
              </h2>
              <p className="text-xs sm:text-sm text-[#415A77]">
                Três etapas simples e sem burocracia para você experimentar o cuidado com tranquilidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {com.steps.map((st) => (
                <div
                  key={st.number}
                  className="p-6 rounded-2xl rounded-tr-[36px] bg-[#F5F2EB]/60 border border-stone-200 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#17385B] text-white flex items-center justify-center font-serif font-bold text-base shadow-2xs">
                    0{st.number}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#17385B]">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#415A77] leading-relaxed">
                    {st.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-stone-100/90 border border-stone-200 text-center">
              <p className="text-xs sm:text-sm text-[#415A77]">
                <strong className="text-[#17385B] font-medium">Nota de Transparência:</strong> A participação na sessão experimental gratuita não estabelece qualquer obrigação ou fidelidade de contratação de pacotes posteriores.
              </p>
            </div>
          </div>
        </section>

        {/* 3. MODALIDADES E PREÇOS (4 CARDS COMERCIAIS) */}
        <section id="planos-precos" aria-labelledby="pricing-title" className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae]">
                Valores e Pacotes Confirmados
              </span>
              <h2 id="pricing-title" className="font-serif text-3xl sm:text-4xl text-[#17385B]">
                Escolha a modalidade de atendimento
              </h2>
              <p className="text-sm text-[#415A77]">
                Valores claros e transparentes. O primeiro atendimento é gratuito e pacotes contam com economia progressiva.
              </p>
            </div>

            {/* Componente Client com os 4 Cards e WhatsApp Tracking */}
            <CommercialPricingCards plans={com.plans} whatsappNumber={offer.whatsappNumber} />

            {/* Aviso sobre não superioridade clínica */}
            <div className="p-4 rounded-xl bg-white border border-stone-200/90 text-xs text-[#415A77] text-center max-w-3xl mx-auto">
              Nenhum pacote é apresentado como clinicamente superior ou necessário para todos os pacientes. A continuidade é sempre uma decisão conjunta baseada na sua resposta individual e avaliação com Lucy Aihara.
            </div>
          </div>
        </section>

        {/* 4. FREQUÊNCIA E INFORMAÇÕES PRÁTICAS */}
        <section aria-labelledby="practical-title" className="py-14 sm:py-16 bg-white border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl rounded-tr-[48px] bg-[#F5F2EB]/80 border border-stone-200 space-y-3">
              <div className="flex items-center gap-2 text-[#527fae]">
                <Clock className="w-5 h-5 text-[#527fae]" />
                <h3 className="text-xs font-semibold uppercase tracking-wider">
                  {com.frequencyNotice.title}
                </h3>
              </div>
              <p className="text-base sm:text-lg text-[#17385B] leading-relaxed font-serif">
                {com.frequencyNotice.description}
              </p>
              <p className="text-xs text-[#415A77] leading-relaxed">
                Não prometemos resultados milagrosos após um determinado número de atendimentos. O organismo humano responde de forma gradual e individualizada aos estímulos de luz e reeducação somática.
              </p>
            </div>

            {/* Informações Práticas em Grid */}
            <div className="space-y-4">
              <h3 id="practical-title" className="font-serif text-2xl text-[#17385B]">
                Informações práticas de atendimento
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="text-[11px] font-semibold text-[#527fae] uppercase block">Localização</span>
                  <p className="text-xs sm:text-sm font-medium text-[#17385B]">{com.practicalInfo.location}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="text-[11px] font-semibold text-[#527fae] uppercase block">Duração</span>
                  <p className="text-xs sm:text-sm font-medium text-[#17385B]">{com.practicalInfo.duration}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="text-[11px] font-semibold text-[#527fae] uppercase block">Agendamento</span>
                  <p className="text-xs sm:text-sm font-medium text-[#17385B]">{com.practicalInfo.scheduling}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                  <span className="text-[11px] font-semibold text-[#527fae] uppercase block">1º Atendimento</span>
                  <p className="text-xs sm:text-sm font-medium text-[#17385B]">{com.practicalInfo.freeSession}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1 sm:col-span-2">
                  <span className="text-[11px] font-semibold text-[#527fae] uppercase block">Continuidade</span>
                  <p className="text-xs sm:text-sm font-medium text-[#17385B]">{com.practicalInfo.continuity}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PERGUNTAS FREQUENTES COMERCIAIS */}
        <section aria-labelledby="faq-commercial-title" className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae]">
                Transparência Total
              </span>
              <h2 id="faq-commercial-title" className="font-serif text-3xl text-[#17385B]">
                Perguntas Frequentes sobre Valores e Agendamento
              </h2>
            </div>

            <div className="space-y-3">
              {com.faqs.map((faq) => (
                <div key={faq.id} className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-2">
                  <h3 className="font-serif font-semibold text-base text-[#17385B]">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#415A77] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Aviso ético médico */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
              <strong>Aviso de Saúde:</strong> A fotobiomodulação é uma técnica de suporte físico em reabilitação e bem-estar. Ela não substitui diagnósticos, tratamentos médicos, radioterapia, quimioterapia para neoplasias ou medicamentos para o controle glicêmico do diabetes.
            </div>
          </div>
        </section>

        {/* 6. COMPARTILHAR A PROMOÇÃO */}
        <section aria-label="Compartilhar promoção" className="py-14 sm:py-16 bg-[#F5F2EB]/60 border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <PromotionShareCard />
          </div>
        </section>

        {/* 7. CTA FINAL DE AGENDAMENTO */}
        <section className="bg-gradient-to-r from-[#17385B] to-[#1b3b6f] text-white py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>Novembro Azul 2026</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Pronto para agendar seu primeiro atendimento gratuito?
            </h2>

            <p className="text-sm sm:text-base text-[#C7D9D2] max-w-xl mx-auto leading-relaxed">
              Converse diretamente com Lucy Aihara pelo WhatsApp e reserve seu horário no consultório em Higienópolis / Consolação.
            </p>

            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] active:scale-[0.99] text-[#073322] font-semibold text-sm sm:text-base shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current flex-shrink-0" />
                <span>Agendar atendimento gratuito no WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
