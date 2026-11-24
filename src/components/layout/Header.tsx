"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle, Sparkles, ChevronDown } from "lucide-react";
import { getWhatsAppLink } from "@/data/institutional-data";
import { trackConversionEvent } from "@/lib/analytics";

interface NavLinkItem {
  label: string;
  href: string;
  highlight?: boolean;
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
  const whatsappUrl = getWhatsAppLink("clinicEvaluation");

  const handleWhatsAppHeaderClick = () => {
    trackConversionEvent("click_whatsapp", {
      source: "header_institutional_cta",
      channel: "whatsapp",
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D9] shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Oficial da Escola & Lucy Aihara */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B] rounded-lg p-1.5"
            aria-label="Lucy Aihara — Escola de Fasciaterapia e Movimento"
          >
            <div className="relative h-11 flex items-center">
              <Image
                src="/images/logo-horizontal-hd.png"
                alt="Logotipo oficial da Escola de Fasciaterapia e Movimento"
                width={200}
                height={56}
                priority
                className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </div>
            <div className="hidden xl:flex flex-col border-l border-[#D5CDC2] pl-3">
              <span className="text-[11px] font-semibold text-[#183B2B] uppercase tracking-wider">
                Lucy Aihara
              </span>
              <span className="text-[10px] text-[#556370] tracking-tight">
                Fisioterapia & Fasciaterapia
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
                  className="px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium text-[#1A2421]/85 hover:text-[#183B2B] hover:bg-white rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Destaque para Campanha Ativa */}
            <Link
              href="/novembro-azul"
              className="hidden 2xl:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#17385B] text-white hover:bg-[#1f4a75] transition-colors"
            >
              <span>Novembro Azul</span>
            </Link>

            {/* CTA WhatsApp de Agendamento */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppHeaderClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] active:scale-95 text-[#073322] font-semibold text-xs shadow-xs transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-[#073322] font-bold text-xs shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Agendar</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1A2421] hover:bg-[#E8E2D9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B]"
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
        <div className="lg:hidden border-b border-[#E8E2D9] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2 border-b border-[#E8E2D9] mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wider text-[#556370] uppercase">
              Plataforma Institucional
            </span>
            <span className="text-[10px] font-bold text-[#183B2B] bg-[#183B2B]/10 px-2 py-0.5 rounded-full">
              Consolação • SP
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {INSTITUTIONAL_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#1A2421] hover:bg-white rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
              </Link>
            ))}

            <Link
              href="/novembro-azul"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-3 py-2.5 text-xs font-semibold bg-[#17385B] text-white rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Especial Novembro Azul (Campanha)</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white">40 min</span>
            </Link>

            <div className="pt-3 border-t border-[#E8E2D9] mt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleWhatsAppHeaderClick();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-[#073322] font-semibold text-sm shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar Avaliação via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
