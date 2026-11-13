import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import {
  Heart,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  MapPin,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import { TESTIMONIALS, NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";

export const metadata: Metadata = {
  title: "Depoimentos e Relatos de Experiência | Escola de Fasciaterapia e Movimento",
  description:
    "Conheça os relatos de pacientes e alunos que vivenciaram a abordagem de escuta corporal, movimento consciente e acolhimento com Lucy Aihara.",
  alternates: {
    canonical: "https://novembroazul.escoladefasciaterapiaemovimento.com/depoimentos",
  },
  openGraph: {
    title: "Depoimentos e Vivências | Escola de Fasciaterapia e Movimento",
    description:
      "Histórias de quem aprendeu a desacelerar, escutar o próprio corpo e cultivar o autocuidado com Lucy Aihara.",
    url: "https://novembroazul.escoladefasciaterapiaemovimento.com/depoimentos",
    type: "website",
  },
};

export default function DepoimentosPage() {
  const offer = NOVEMBER_BLUE_OFFER;
  const whatsappUrl = `https://wa.me/${offer.whatsappNumber}?text=${encodeURIComponent(
    offer.whatsappMessage
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB] text-[#17385B]">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white/70 border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Depoimentos" }]} />
          </div>
        </div>

        {/* Hero */}
        <header className="relative py-14 sm:py-20 bg-white border-b border-stone-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17385B]/10 text-[#17385B] text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-[#527fae]" />
              <span>Experiências e Vivências Somáticas</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17385B] tracking-tight leading-tight">
              Relatos de quem aprendeu a escutar o próprio corpo
            </h1>

            <p className="text-base sm:text-lg text-[#415A77] leading-relaxed">
              Compartilhamos aqui as percepções de participantes e pacientes que encontraram na Escola de Fasciaterapia e Movimento um espaço seguro de acolhimento, desaceleração e reconexão com o bem-estar físico.
            </p>
          </div>
        </header>

        {/* Grade de Depoimentos */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-7 sm:p-8 rounded-3xl rounded-tr-[48px] border border-stone-200 shadow-2xs flex flex-col justify-between space-y-6 relative overflow-hidden group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#84B7CE]/20 text-[#17385B] flex items-center justify-center">
                    <Quote className="w-5 h-5 text-[#527fae]" />
                  </div>

                  <p className="font-serif text-base sm:text-lg text-[#17385B] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                  <div>
                    <h2 className="font-sans font-semibold text-sm text-[#17385B]">
                      {t.author}, {t.age} anos
                    </h2>
                    <span className="text-xs text-[#415A77] block">
                      {t.role} • {t.city}
                    </span>
                    <span className="text-[11px] text-[#527fae] font-medium block mt-1">
                      {t.context}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nota Ética Rigorosa */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 text-xs text-[#415A77] space-y-2">
            <div className="flex items-center gap-2 text-[#17385B]">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <strong className="font-semibold uppercase tracking-wider text-[11px]">
                Nota Ética de Responsabilidade em Saúde
              </strong>
            </div>
            <p className="leading-relaxed">
              Os relatos acima expressam a percepção subjetiva e a experiência individual de cada pessoa com as práticas educativas e somáticas conduzidas na Escola. Cada organismo é único. As sessões têm finalidade de promoção de bem-estar, consciência corporal e reabilitação funcional, não constituindo garantia de cura ou substituição de diagnósticos e tratamentos médicos especializados.
            </p>
          </div>

          {/* CTA de Agendamento */}
          <div className="bg-[#17385B] text-white p-8 sm:p-10 rounded-3xl rounded-tr-[52px] shadow-md text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>Novembro Azul 2026</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white max-w-xl mx-auto">
              Venha vivenciar essa experiência de cuidado no seu primeiro atendimento gratuito
            </h3>

            <p className="text-xs sm:text-sm text-[#C7D9D2] max-w-md mx-auto leading-relaxed">
              Entre em contato pelo WhatsApp e reserve seu horário no consultório em Higienópolis / Consolação (São Paulo - SP).
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Quero agendar meu atendimento gratuito</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
