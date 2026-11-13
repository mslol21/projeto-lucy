"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle, Sparkles } from "lucide-react";
import { NAV_LINKS, CAMPAIGN_INFO, NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";
import { trackConversionEvent } from "@/lib/analytics";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const offer = NOVEMBER_BLUE_OFFER;
  const whatsappUrl = `https://wa.me/${offer.whatsappNumber}?text=${encodeURIComponent(
    offer.whatsappMessage
  )}`;

  const handleWhatsAppHeaderClick = () => {
    trackConversionEvent("novembro_azul_fotobiomodulacao_lead", {
      source: "header_cta",
      channel: "whatsapp",
      campaign: "novembro_azul_2026",
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F5F2EB]/95 backdrop-blur-md border-b border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(23,56,91,0.04)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Oficial HD da Escola */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B] rounded-lg p-1.5"
            aria-label="Escola de Fasciaterapia e Movimento — Lucy Aihara"
          >
            <div className="relative h-12 flex items-center">
              <Image
                src="/images/logo-horizontal-hd.png"
                alt="Logotipo oficial da Escola de Fasciaterapia e Movimento"
                width={220}
                height={64}
                priority
                className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </div>
            <div className="hidden xl:flex flex-col border-l border-stone-300 pl-3">
              <span className="text-[11px] font-semibold text-[#17385B] uppercase tracking-wider">
                Lucy Aihara
              </span>
              <span className="text-[10px] text-[#415A77] tracking-tight">
                Novembro Azul 2026
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            <nav className="flex items-center gap-1 xl:gap-2" aria-label="Navegação principal">
              {NAV_LINKS.map((link) => {
                const isOffer = link.href === "/#especial-novembro-azul";
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B] ${
                      isOffer
                        ? "bg-[#17385B] text-white hover:bg-[#1f4a75] shadow-2xs font-semibold"
                        : "text-[#17385B]/85 hover:text-[#17385B] hover:bg-white/80"
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA WhatsApp do Header */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppHeaderClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-xs shadow-2xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
              <span>Agendar</span>
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppHeaderClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] text-[#073322] font-bold text-xs shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Agendar</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#17385B] hover:bg-stone-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-[#F5F2EB] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2 border-b border-stone-200/60 mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wider text-[#415A77] uppercase">
              Menu de Navegação
            </span>
            <span className="text-[10px] font-bold text-[#17385B] bg-[#527fae]/20 px-2 py-0.5 rounded-full">
              2026
            </span>
          </div>
          <nav className="flex flex-col space-y-1" aria-label="Menu móvel">
            {NAV_LINKS.map((link) => {
              const isOffer = link.href === "/#especial-novembro-azul";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isOffer
                      ? "bg-[#17385B] text-white font-semibold"
                      : "text-[#17385B] hover:bg-white"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
      <div className="november-reading-progress" aria-hidden="true" />
    </header>
  );
}
