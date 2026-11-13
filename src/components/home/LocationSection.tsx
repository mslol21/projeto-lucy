"use client";

import React from "react";
import {
  MapPin,
  Navigation,
  Train,
  Clock,
  Phone,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { CAMPAIGN_INFO, NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";
import { trackConversionEvent } from "@/lib/analytics";

export function LocationSection() {
  const inst = CAMPAIGN_INFO.institution;
  const offer = NOVEMBER_BLUE_OFFER;
  const whatsappUrl = `https://wa.me/${offer.whatsappNumber}?text=${encodeURIComponent(
    "Olá, Lucy! Gostaria de informações sobre o consultório na Consolação e agendamento de horário."
  )}`;

  const handleDirectionsClick = () => {
    trackConversionEvent("click_directions", {
      location: "Rua Sergipe, 475, conjunto 114",
      neighborhood: "Consolação / Higienópolis",
      city: "São Paulo",
    });
  };

  const handleWhatsAppLocationClick = () => {
    trackConversionEvent("click_whatsapp", {
      source: "location_section",
      channel: "whatsapp",
    });
  };

  return (
    <section
      id="localizacao"
      aria-labelledby="location-title"
      className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-stone-200/90 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17385B]/10 text-[#17385B] text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#527fae]" />
            <span>Atendimento Presencial em São Paulo</span>
          </div>

          <h2
            id="location-title"
            className="font-serif text-3xl sm:text-4xl text-[#17385B] font-semibold tracking-tight"
          >
            Consultório na Consolação e Higienópolis
          </h2>

          <p className="text-sm sm:text-base text-[#415A77] leading-relaxed">
            Ambiente privativo, acessível e acolhedor, planejado para o cuidado focado no corpo, no movimento e na escuta sensível do tecido fascial.
          </p>
        </div>

        {/* Card Principal de Localização em Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Coluna Esquerda: Endereço Semântico e Acessos */}
          <div className="lg:col-span-7 bg-white rounded-3xl rounded-tr-[52px] p-6 sm:p-8 lg:p-10 border border-stone-200/90 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-semibold text-[#527fae] uppercase tracking-wider block">
                  Endereço Oficial
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#17385B]">
                  Lucy Aihara — Fisioterapeuta e Fasciaterapeuta
                </h3>
                <p className="text-xs text-[#556987]">
                  {inst.name}
                </p>
              </div>

              {/* Tag Semântica address */}
              <address className="not-italic text-sm sm:text-base text-[#2C4058] space-y-2 bg-[#F5F2EB]/60 p-4 sm:p-5 rounded-2xl border border-stone-200/70">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#527fae] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#17385B] font-medium">
                      {inst.address.street}
                    </strong>
                    <span className="block text-xs sm:text-sm text-[#415A77]">
                      Bairro: Consolação (região de Higienópolis)
                    </span>
                    <span className="block text-xs text-[#556987]">
                      São Paulo — SP • CEP: {inst.address.postalCode}
                    </span>
                  </div>
                </div>
              </address>

              {/* Destaques de Transporte e Referências Locais */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-[#415A77]">
                  <Train className="w-4 h-4 text-[#527fae] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#17385B] font-semibold">
                      Metrô Próximo
                    </strong>
                    <span>Estação Higienópolis-Mackenzie (Linha 4-Amarela)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-[#415A77]">
                  <Clock className="w-4 h-4 text-[#527fae] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#17385B] font-semibold">
                      Agendamento
                    </strong>
                    <span>Sessões individuais de 40 min com hora marcada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ações: Google Maps e WhatsApp */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={inst.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectionsClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#17385B] hover:bg-[#0E253F] active:scale-[0.99] text-white font-medium text-xs sm:text-sm shadow-md transition-all"
              >
                <Navigation className="w-4 h-4 text-[#84B7CE]" />
                <span>Abrir rotas no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppLocationClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] active:scale-[0.99] text-[#073322] font-semibold text-xs sm:text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Solicitar horário no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita: Orientações de Acesso e Responsabilidade */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            {/* Card de Informações Úteis de Chegada */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-md space-y-4">
              <h4 className="font-serif text-lg font-semibold text-[#17385B] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                <span>Orientações para o seu atendimento</span>
              </h4>

              <ul className="space-y-3 text-xs sm:text-sm text-[#415A77] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#527fae] mt-2 flex-shrink-0" />
                  <span>
                    <strong>Pontualidade:</strong> reserve 10 minutos de antecedência para preenchimento de ficha e acolhimento inicial sem pressa.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#527fae] mt-2 flex-shrink-0" />
                  <span>
                    <strong>Vestimenta:</strong> recomenda-se o uso de roupas confortáveis e flexíveis que permitam movimentos e testes de mobilidade corporal.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#527fae] mt-2 flex-shrink-0" />
                  <span>
                    <strong>Acessibilidade:</strong> edifício comercial moderno com portaria, identificação e elevadores na Rua Sergipe.
                  </span>
                </li>
              </ul>
            </div>

            {/* Card com Telefone e Canal Direto */}
            <div className="bg-gradient-to-br from-[#17385B] to-[#122A45] text-white rounded-3xl rounded-tr-[44px] p-6 sm:p-7 shadow-lg space-y-3">
              <span className="text-[11px] font-bold text-[#84B7CE] uppercase tracking-wider">
                Contato Direto do Consultório
              </span>
              <p className="font-serif text-xl sm:text-2xl font-medium text-white">
                {inst.telephone}
              </p>
              <p className="text-xs text-[#C7D9D2] leading-relaxed">
                Canal exclusivo para agendamento de sessões, dúvidas sobre a campanha e orientações prévias de atendimento.
              </p>
              <div className="pt-1">
                <span className="inline-block text-[11px] text-[#84B7CE] bg-white/10 px-3 py-1 rounded-full">
                  Atendimento presencial individualizado em São Paulo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
