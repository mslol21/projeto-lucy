"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/data/campaign-data";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const base = isHome
    ? "border-white/10 bg-[#081629]/95 text-[#F5F0E8]"
    : "border-stone-200/70 bg-[#F5F2EB]/95 text-[#17385B]";
  const defaultLink = isHome
    ? "text-[#e3eaf0] hover:bg-white/10 hover:text-white"
    : "text-[#17385B] hover:bg-white/80";
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur-xl ${base}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between gap-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4"
            aria-label="Escola de Fasciaterapia e Movimento — início"
          >
            <span className="flex shrink-0 items-center rounded-xl bg-[#F5F0E8] px-2 py-1.5">
              <Image
                src="/images/logo-horizontal-hd.png"
                alt="Escola de Fasciaterapia e Movimento"
                width={188}
                height={55}
                priority
                className="h-9 w-auto object-contain sm:h-10"
              />
            </span>
            <span className="hidden max-w-[148px] flex-col border-l border-current/20 pl-3 xl:flex">
              <span className="text-[11px] font-semibold tracking-wide">Lucy Aihara</span>
              <span className={`text-[10px] ${isHome ? "text-[#B6D6EA]" : "text-[#415A77]"}`}>
                Uma história de movimento
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {isHome && (
              <Link href="/#historia" className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${defaultLink}`}>
                A história
              </Link>
            )}
            {isHome && (
              <Link href="/#metodo" className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${defaultLink}`}>
                O método
              </Link>
            )}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  link.href === "/conhecimento"
                    ? isHome
                      ? "bg-white text-[#081629] hover:bg-[#B6D6EA]"
                      : "bg-[#17385B] text-white hover:bg-[#28577c]"
                    : defaultLink
                }`}
              >
                <span className="inline-flex items-center gap-1.5">
                  {link.href === "/conhecimento" && <BookOpen size={14} aria-hidden="true" />}
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-current/20 lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="lucy-mobile-nav"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav
          id="lucy-mobile-nav"
          aria-label="Navegação para dispositivos móveis"
          className={`border-t px-4 pb-5 pt-3 lg:hidden ${isHome ? "border-white/10 bg-[#081629]" : "border-stone-200 bg-[#F5F2EB]"}`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {isHome && (
              <>
                <Link href="/#historia" onClick={closeMenu} className={`rounded-xl px-3 py-3 text-sm ${defaultLink}`}>A história da Lucy</Link>
                <Link href="/#metodo" onClick={closeMenu} className={`rounded-xl px-3 py-3 text-sm ${defaultLink}`}>O Método Danis Bois</Link>
              </>
            )}
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm ${defaultLink}`}>
                {link.label}
                {link.href === "/conhecimento" && <ArrowUpRight size={16} aria-hidden="true" />}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
