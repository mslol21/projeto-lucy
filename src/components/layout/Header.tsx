"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CAMPAIGN_INFO } from "@/data/campaign-data";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F5F2EB]/95 backdrop-blur-md border-b border-stone-200/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Oficial da Escola */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B] rounded-lg p-1"
            aria-label="Escola de Fasciaterapia e Movimento — Lucy Aihara"
          >
            <div className="relative h-12 w-auto flex items-center">
              <Image
                src="/images/logo-escola-fasciaterapia.png"
                alt="Logotipo da Escola de Fasciaterapia e Movimento"
                width={160}
                height={52}
                priority
                className="h-11 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-stone-300 pl-3">
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
                  className="px-3 py-1.5 text-sm font-medium text-[#17385B]/80 hover:text-[#17385B] rounded-full hover:bg-stone-200/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-[#84B7CE]/20 text-[#17385B] border border-[#84B7CE]/40">
              {CAMPAIGN_INFO.year}
            </span>
          </div>

          {/* Botão Mobile */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#17385B] hover:bg-stone-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B]"
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
                className="px-3 py-2.5 rounded-xl text-base font-medium text-[#17385B] hover:bg-stone-200/60 transition-colors"
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
