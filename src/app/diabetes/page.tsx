import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import { DiabetesSection } from "@/components/sections/DiabetesSection";
import { NeuropathySection } from "@/components/sections/NeuropathySection";
import { MessageCircle, ArrowRight, Activity } from "lucide-react";
import { NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";

export const metadata: Metadata = {
  title: "Diabetes e Sensibilidade Corporal | Novembro Azul 2026",
  description:
    "Compreendendo o diabetes tipo 1 e tipo 2, sintomas de alerta, controle e a importância da sensibilidade periférica conforme a Sociedade Brasileira de Diabetes.",
  alternates: {
    canonical: "https://novembroazul.escoladefasciaterapiaemovimento.com/diabetes",
  },
  openGraph: {
    title: "Diabetes e Cuidado Integral | Novembro Azul 2026",
    description:
      "Informações educativas e acolhedoras sobre diabetes, neuropatia periférica e prevenção.",
    url: "https://novembroazul.escoladefasciaterapiaemovimento.com/diabetes",
    type: "article",
  },
};

export default function DiabetesPage() {
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
            <Breadcrumbs items={[{ label: "Diabetes e Neuropatia" }]} />
          </div>
        </div>

        {/* Hero da Página */}
        <header className="py-12 sm:py-16 bg-white border-b border-stone-200 text-center">
          <div className="max-w-3xl mx-auto px-4 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#17385B]/10 text-[#17385B] text-xs font-semibold uppercase tracking-wider">
              14 de Novembro • Dia Mundial do Diabetes
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#17385B] font-normal tracking-tight">
              Conhecendo o Diabetes e Cuidando da Sensibilidade
            </h1>
            <p className="text-base sm:text-lg text-[#415A77] leading-relaxed">
              Diretrizes oficiais da SBD sobre diabetes tipo 1, tipo 2, sinais de alerta e o cuidado com a neuropatia periférica e os pés.
            </p>
          </div>
        </header>

        {/* Seções Educativas */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
          <DiabetesSection />
          <NeuropathySection />
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-[#17385B] text-white p-8 rounded-3xl rounded-tr-[52px] text-center space-y-4">
            <span className="inline-block text-xs font-bold text-emerald-300 uppercase tracking-wider">
              Primeiro Atendimento Gratuito
            </span>
            <h3 className="font-serif text-2xl text-white">
              Cuidado Acolhedor no Consultório em São Paulo
            </h3>
            <p className="text-xs sm:text-sm text-[#C7D9D2] max-w-lg mx-auto leading-relaxed">
              Conheça a fotobiomodulação em uma experiência inicial gratuita com Lucy Aihara.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-[#073322] font-semibold text-sm shadow hover:bg-[#1ebd5a] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar atendimento gratuito no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
