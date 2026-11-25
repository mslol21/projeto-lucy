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
import { CLINIC_LOCATION, CONTACT_CHANNELS, getWhatsAppLink } from "@/data/institutional-data";
import { trackConversionEvent, trackDirectionsClick, trackPhoneClick } from "@/lib/analytics";

export function LocationSection() {
  const whatsappUrl = getWhatsAppLink("painTreatment");

  const handleDirections = () => {
    trackDirectionsClick("home_location_section");
  };

  const handlePhoneClickEvent = (phoneType: "main" | "secondary") => {
    trackPhoneClick(phoneType, "home_location_section");
  };

  return (
    <section
      id="localizacao"
      aria-labelledby="location-title"
      className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#E8E2D9] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183B2B]/10 text-[#183B2B] text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Consultório Presencial em São Paulo</span>
          </div>

          <h2
            id="location-title"
            className="font-serif text-3xl sm:text-4xl text-[#1A2421] font-normal tracking-tight"
          >
            Localização e Horários de Atendimento
          </h2>
          <p className="text-xs sm:text-sm text-[#556370] leading-relaxed">
            Consultório privativo na Consolação, com fácil acesso para moradores de Higienópolis,
            Santa Cecília, Vila Buarque, Bela Vista e região da Avenida Paulista.
          </p>
        </div>

        {/* Grade de Informações de Acesso + Horários */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Endereço & Referências */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2DBD0] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] flex items-center justify-center text-[#183B2B]">
              <Building2 className="w-5 h-5 text-[#183B2B]" />
            </div>
            <h3 className="font-serif text-base sm:text-lg text-[#1A2421] font-semibold">
              Endereço Completo
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              <strong>{CLINIC_LOCATION.street}, {CLINIC_LOCATION.suite}</strong>
              <br />
              {CLINIC_LOCATION.neighborhood} — São Paulo, SP
              <br />
              CEP {CLINIC_LOCATION.postalCode}
            </p>
            <p className="text-[11px] text-[#718096] pt-1">
              {CLINIC_LOCATION.landmarks}
            </p>
          </div>

          {/* Card 2: Horários de Atendimento */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2DBD0] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] flex items-center justify-center text-[#183B2B]">
              <Clock className="w-5 h-5 text-[#183B2B]" />
            </div>
            <h3 className="font-serif text-base sm:text-lg text-[#1A2421] font-semibold">
              Horários de Atendimento
            </h3>
            <div className="text-xs sm:text-sm text-[#4A5568] space-y-1">
              <p><strong>{CLINIC_LOCATION.officeHours.days}</strong></p>
              <p>Manhã: {CLINIC_LOCATION.officeHours.periodMorning}</p>
              <p>Tarde: {CLINIC_LOCATION.officeHours.periodAfternoon}</p>
            </div>
            <p className="text-[11px] text-[#718096] pt-1">
              *Atendimento individual exclusivo mediante agendamento prévio.
            </p>
          </div>

          {/* Card 3: Telefones e Acesso */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2DBD0] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] flex items-center justify-center text-[#183B2B]">
              <Phone className="w-5 h-5 text-[#183B2B]" />
            </div>
            <h3 className="font-serif text-base sm:text-lg text-[#1A2421] font-semibold">
              Telefones e Metrô
            </h3>
            <div className="text-xs sm:text-sm text-[#4A5568] space-y-1.5">
              <p>
                Principal:{" "}
                <a
                  href={`tel:+${CONTACT_CHANNELS.phoneMainRaw}`}
                  onClick={() => handlePhoneClickEvent("main")}
                  className="font-semibold text-[#183B2B] hover:underline"
                >
                  {CONTACT_CHANNELS.phoneMainDisplay}
                </a>
              </p>
              <p>
                Secundário:{" "}
                <a
                  href={`tel:+${CONTACT_CHANNELS.phoneSecondaryRaw}`}
                  onClick={() => handlePhoneClickEvent("secondary")}
                  className="font-semibold text-[#183B2B] hover:underline"
                >
                  {CONTACT_CHANNELS.phoneSecondaryDisplay}
                </a>
              </p>
            </div>
            <p className="text-[11px] text-[#718096] pt-1">
              🚇 {CLINIC_LOCATION.metroReference}
            </p>
          </div>
        </div>

        {/* Mapa Interativo e Bairros de Proximidade */}
        <div className="rounded-3xl overflow-hidden border border-[#E2DBD0] shadow-sm bg-white">
          <div className="h-[340px] sm:h-[400px] w-full relative">
            <iframe
              src={CLINIC_LOCATION.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Consultório de Fisioterapia Lucy Aihara na Rua Sergipe"
            />
          </div>
          <div className="p-6 sm:p-8 bg-[#FAF8F5] border-t border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#556370] text-center sm:text-left">
              <strong>Bairros atendidos no entorno:</strong> Consolação, Higienópolis, Santa Cecília, Vila Buarque, Bela Vista, Cerqueira César e Paulista.
            </div>
            <a
              href={CLINIC_LOCATION.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDirections}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-stone-50 border border-[#D5CDC2] text-[#1A2421] font-semibold text-xs transition-colors flex-shrink-0"
            >
              <Navigation className="w-3.5 h-3.5 text-[#183B2B]" />
              <span>Rotas no Google Maps</span>
              <ExternalLink className="w-3 h-3 text-[#718096]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
