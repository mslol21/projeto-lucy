"use client";

import type { ReactNode } from "react";
import { NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";
import { trackConversionEvent } from "@/lib/analytics";

interface CampaignWhatsAppLinkProps {
  source: string;
  className?: string;
  children: ReactNode;
}

export function CampaignWhatsAppLink({ source, className, children }: CampaignWhatsAppLinkProps) {
  const offer = NOVEMBER_BLUE_OFFER;
  const url = "https://wa.me/" + offer.whatsappNumber + "?text=" +
    encodeURIComponent(offer.whatsappMessage);

  const handleClick = () => {
    // Preserva o nome do evento anterior para manter a conversão já configurada no GTM/GA4.
    trackConversionEvent("novembro_azul_fotobiomodulacao_lead", {
      source,
      channel: "whatsapp",
      campaign: "novembro_azul_2026",
      service: "tratamento_laser",
      offer: "sessao_avaliativa_70",
    });
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
