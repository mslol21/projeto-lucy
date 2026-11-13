"use client";

import React from "react";
import { MessageCircle, Sparkles, MapPin, ShieldCheck } from "lucide-react";
import { NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";
import { trackConversionEvent } from "@/lib/analytics";

export function FinalCtaSection() {
  const offer = NOVEMBER_BLUE_OFFER;
  const whatsappUrl = `https://wa.me/${offer.whatsappNumber}?text=${encodeURIComponent(
    offer.whatsappMessage
  )}`;

  const handleWhatsAppClick = () => {
    trackConversionEvent("novembro_azul_fotobiomodulacao_lead", {
      source: "final_home_cta",
      channel: "whatsapp",
      campaign: "novembro_azul_2026",
    });
  };

  return (
    <section
      id="agendamento-final"
      aria-labelledby="final-cta-title"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#17385B] via-[#1b3b6f] to-[#17385B] text-white relative overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#84B7CE]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-emerald-300" />
          <span>Primeiro Atendimento Gratuito • Novembro Azul 2026</span>
        </div>

        <h2 id="final-cta-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
          Dê a si mesmo esse momento de atenção e cuidado
        </h2>

        <p className="text-base sm:text-lg text-[#C7D9D2] max-w-2xl mx-auto leading-relaxed">
          Experimente a fotobiomodulação sem custo na sua primeira sessão. Converse com Lucy Aihara e reserve um horário sob medida no consultório em São Paulo.
        </p>

        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] active:scale-[0.99] text-[#073322] font-semibold text-base shadow-xl transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Quero agendar meu atendimento gratuito</span>
          </a>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#84B7CE]">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Higienópolis / Consolação — São Paulo - SP
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            {offer.microtext}
          </span>
        </div>
      </div>
    </section>
  );
}
