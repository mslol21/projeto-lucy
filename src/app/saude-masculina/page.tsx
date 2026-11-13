import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import { MenHealthSection } from "@/components/sections/MenHealthSection";
import { Shield, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";

export const metadata: Metadata = {
  title: "Saúde Masculina e Prevenção do Câncer de Próstata | Novembro Azul 2026",
  description:
    "Informações oficiais e humanizadas sobre a saúde integral masculina, prevenção e detecção precoce do câncer de próstata conforme diretrizes do INCA e Ministério da Saúde.",
  alternates: {
    canonical: "https://novembroazul.escoladefasciaterapiaemovimento.com/saude-masculina",
  },
  openGraph: {
    title: "Saúde Masculina e Conscientização | Novembro Azul 2026",
    description:
      "Desmistificando o cuidado com a saúde do homem: fatores de risco, sintomas e decisão compartilhada com base nas diretrizes do INCA.",
    url: "https://novembroazul.escoladefasciaterapiaemovimento.com/saude-masculina",
    type: "article",
  },
};

export default function SaudeMasculinaPage() {
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
            <Breadcrumbs items={[{ label: "Saúde Masculina" }]} />
          </div>
        </div>

        {/* Hero da Página */}
        <header className="py-12 sm:py-16 bg-white border-b border-stone-200 text-center">
          <div className="max-w-3xl mx-auto px-4 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#17385B]/10 text-[#17385B] text-xs font-semibold uppercase tracking-wider">
              17 de Novembro • Conscientização Nacional
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#17385B] font-normal tracking-tight">
              Saúde Masculina e Cuidado Integral
            </h1>
            <p className="text-base sm:text-lg text-[#415A77] leading-relaxed">
              Quebrando tabus e promovendo a decisão compartilhada com profissionais de saúde, com embasamento nas diretrizes oficiais do INCA e Ministério da Saúde.
            </p>
          </div>
        </header>

        {/* Seção Educativa Completa */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <MenHealthSection />
        </div>

        {/* Bloco de Agendamento */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-[#17385B] text-white p-8 rounded-3xl rounded-tr-[52px] text-center space-y-4">
            <span className="inline-block text-xs font-bold text-emerald-300 uppercase tracking-wider">
              Oportunidade Especial Novembro Azul
            </span>
            <h3 className="font-serif text-2xl text-white">
              Dê o primeiro passo para cuidar do seu corpo
            </h3>
            <p className="text-xs sm:text-sm text-[#C7D9D2] max-w-lg mx-auto leading-relaxed">
              Conheça a fotobiomodulação em uma experiência inicial gratuita no consultório de Lucy Aihara em São Paulo.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-[#073322] font-semibold text-sm shadow hover:bg-[#1ebd5a] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar primeiro atendimento gratuito</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
