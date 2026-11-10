"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CAMPAIGN_INFO } from "@/data/campaign-data";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F5F2EB]/92 backdrop-blur-md border-b border-stone-200/70 shadow-[0_4px_20px_-4px_rgba(23,56,91,0.04)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Oficial HD da Escola */}
          <a
            href="#"
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
          </a>

          {/* Navegação Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-1 xl:gap-2" aria-label="Navegação principal">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-[#17385B]/85 hover:text-[#17385B] rounded-full hover:bg-white/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <span className="inline-flex items-center px-3.5 py-1 text-xs font-semibold rounded-full bg-[#527fae]/15 text-[#17385B] border border-[#527fae]/30 shadow-2xs">
              {CAMPAIGN_INFO.year}
            </span>
          </div>

          {/* Botão Mobile */}
          <div className="flex items-center lg:hidden">
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

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-[#F5F2EB] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2 border-b border-stone-200/60 mb-2">
            <span className="text-xs font-semibold tracking-wider text-[#415A77] uppercase">
              Campanha Novembro Azul 2026
            </span>
          </div>
          <nav className="flex flex-col space-y-1" aria-label="Menu móvel">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-base font-medium text-[#17385B] hover:bg-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
