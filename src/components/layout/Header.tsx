"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, BookOpen } from "lucide-react";

const editorialNav = [
  { label: "Especial de novembro", href: "/#datas" },
  { label: "Diabetes", href: "/#diabetes" },
  { label: "Câncer de próstata", href: "/#saude-masculina" },
  { label: "História da Lucy", href: "/#historia" },
  { label: "Artigos de saúde", href: "/conhecimento" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#D6E1E7] bg-[#FDFDFB]/95 text-[#17385B] backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4" aria-label="Escola de Fasciaterapia e Movimento — página inicial" onClick={() => setMobileMenuOpen(false)}>
          <Image src="/images/logo-horizontal-hd.png" width={190} height={55} alt="Escola de Fasciaterapia e Movimento" priority className="h-10 w-auto object-contain" />
          <span className="hidden border-l border-[#CBD6DC] pl-3 text-xs font-semibold leading-5 xl:block">Especial<br />Novembro Azul</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {editorialNav.map((item) => (
            <Link key={item.href} href={item.href} className={`px-3 py-3 text-[13px] font-semibold transition-colors hover:bg-[#EAF1F3] hover:text-[#315F7B] ${item.href === "/conhecimento" ? "ml-2 inline-flex items-center gap-2 border border-[#C7D8E1]" : ""}`}>
              {item.href === "/conhecimento" && <BookOpen size={15} aria-hidden="true" />}
              {item.label}
            </Link>
          ))}
        </nav>
        <button type="button" onClick={() => setMobileMenuOpen((v) => !v)} aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"} aria-controls="mobile-editorial-menu" aria-expanded={mobileMenuOpen} className="inline-flex size-11 items-center justify-center border border-[#C7D8E1] lg:hidden">
          {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <nav id="mobile-editorial-menu" className="border-t border-[#D6E1E7] bg-white px-5 py-3 lg:hidden" aria-label="Navegação móvel">
          {editorialNav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block border-b border-[#E8EFF1] px-2 py-3 text-sm font-medium last:border-0">
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
