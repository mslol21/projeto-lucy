"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";
import { trackConversionEvent } from "@/lib/analytics";

export function MobileBookingBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handleScroll = () => setVisible(window.scrollY > 480);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  const url = "https://wa.me/" + NOVEMBER_BLUE_OFFER.whatsappNumber +
    "?text=" + encodeURIComponent(NOVEMBER_BLUE_OFFER.whatsappMessage);

  return (
    <aside aria-label="Agendamento rápido da campanha" className="fixed bottom-3 left-3 right-3 z-50 rounded-2xl border border-white/20 bg-[#17385B] p-3 text-white shadow-[0_10px_45px_rgba(0,0,0,0.23)] sm:hidden">
      <div className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <span className="block truncate text-[11px] font-bold uppercase tracking-wide text-[#B2DAE9]">1ª Sessão Avaliativa</span>
          <span className="block text-sm font-semibold">40 minutos • R$ 70,00</span>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversionEvent("novembro_azul_fotobiomodulacao_lead", { source: "sticky_mobile", channel: "whatsapp", campaign: "novembro_azul_2026" })}
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-[#176B51] px-3 text-xs font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Agendar
          </a>
          <button type="button" onClick={() => setDismissed(true)} aria-label="Fechar agendamento rápido" className="inline-flex h-11 w-9 items-center justify-center rounded-lg text-white/80 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white">
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </aside>
  );
}
