"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle, ChevronRight, Phone } from "lucide-react";
import { getWhatsAppLink, CONTACT_CHANNELS } from "@/data/institutional-data";
import { trackConversionEvent, trackWhatsAppClick } from "@/lib/analytics";

interface NavLinkItem {
  label: string;
  href: string;
}

const INSTITUTIONAL_NAV_LINKS: NavLinkItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre Lucy", href: "/sobre" },
  { label: "Tratamentos", href: "/tratamentos" },
  { label: "Escola", href: "/escola" },
  { label: "Campanhas", href: "/campanhas" },
  { label: "Conhecimento", href: "/conhecimento" },
  { label: "Depoimentos", href: "/depoimentos" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = getWhatsAppLink("painTreatment");

  const handleWhatsAppHeaderClick = () => {
    trackWhatsAppClick("header_institutional_cta", "pain_treatment");
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#EADBC8] shadow-[0_2px_12px_rgba(6,81,118,0.04)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logotipo Oficial Horizontal — Proporções Preservadas */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065176] rounded-lg p-1.5"
            aria-label="Lucy Aihara — Fisioterapia, Dor e Movimento"
          >
            <div className="relative h-11 flex items-center">
              <Image
                src="/images/logo-horizontal-hd.png"
                alt="Logotipo oficial da Escola de Fasciaterapia e Movimento — Lucy Aihara"
                width={200}
                height={56}
                priority
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.01]"
              />
            </div>
            <div className="hidden xl:flex flex-col border-l border-[#EADBC8] pl-3">
              <span className="text-[11px] font-semibold text-[#065176] uppercase tracking-wider font-serif">
                Lucy Aihara
              </span>
              <span className="text-[10px] text-[#845924] font-medium tracking-tight">
                Fisioterapia, Dor e Movimento
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <nav className="flex items-center gap-1 xl:gap-1.5" aria-label="Navegação institucional">
              {INSTITUTIONAL_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium text-[#1A1A1A] hover:text-[#065176] hover:bg-[#FAF7F2] rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065176]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Destaque sutil para Novembro Azul (Área Independente) */}
            <Link
              href="/novembro-azul"
              className="hidden 2xl:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF7F2] text-[#065176] hover:bg-[#C0D8FF]/40 border border-[#C0D8FF] transition-colors"
            >
              <span>Novembro Azul</span>
            </Link>

            {/* CTA de Agendamento */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppHeaderClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#065176] hover:bg-[#5C88C5] text-white font-semibold text-xs shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#845924]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-[#C0D8FF]" aria-hidden="true" />
              <span>Agendar</span>
            </a>
          </div>

          {/* Botões Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppHeaderClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#065176] text-white font-bold text-xs shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-[#C0D8FF]" />
              <span>Agendar</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#065176] hover:bg-[#FAF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#065176]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Recolhível */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#EADBC8] bg-white px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2 border-b border-[#FAF7F2] mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wider text-[#845924] uppercase">
              Lucy Aihara — Fisioterapia
            </span>
            <span className="text-[10px] font-bold text-[#065176] bg-[#C0D8FF]/30 px-2 py-0.5 rounded-full">
              Consolação • SP
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {INSTITUTIONAL_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#1A1A1A] hover:bg-[#FAF7F2] hover:text-[#065176] rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#C0D8FF]" />
              </Link>
            ))}

            <Link
              href="/novembro-azul"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-3 py-2.5 text-xs font-semibold bg-[#FAF7F2] text-[#065176] border border-[#C0D8FF] rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Especial Novembro Azul (Campanha Independente)</span>
              <span className="text-[10px] bg-[#065176] text-white px-1.5 py-0.5 rounded">40 min</span>
            </Link>

            <div className="pt-3 border-t border-[#EADBC8] mt-2 space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleWhatsAppHeaderClick();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#065176] text-white font-semibold text-sm shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#C0D8FF]" />
                <span>Agendar Consulta de Fisioterapia</span>
              </a>
              <div className="text-center text-xs text-[#845924]">
                Telefone: {CONTACT_CHANNELS.phoneMainDisplay}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
