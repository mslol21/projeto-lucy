import { HeroArt } from "@/components/sections/HeroArt";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="conteudo-principal" aria-labelledby="hero-title" className="scroll-mt-20 bg-[#F1F7FB] text-[#17385B]">
      <div className="border-b border-[#D2E3ED] bg-[#17385B] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2 text-[11px] sm:px-6 sm:text-xs">
          <span className="font-semibold uppercase tracking-[.14em]">Especial Novembro Azul 2026</span>
          <span className="hidden text-[#E3EEF4] sm:inline">Informação, histórias reais e cuidado em saúde</span>
        </div>
      </div>
      <div className="mx-auto max-w-[880px] px-3 pt-3 sm:px-6 sm:pt-4 lg:max-w-[900px]">
        <h1 id="hero-title" className="sr-only">
          Novembro Azul 2026: 14 de novembro, Dia Mundial do Diabetes, e 17 de novembro, Dia Nacional de Combate ao Câncer de Próstata
        </h1>
        <div className="relative aspect-[1672/941] w-full overflow-hidden rounded-xl bg-[#E7F3FC] ring-1 ring-[#D5E5ED] sm:rounded-2xl">
          <HeroArt />
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-4 pt-3 sm:hidden" aria-label="Datas da campanha">
        <a href="/diabetes" className="rounded-xl border border-[#BED8E6] bg-white px-3 py-3 text-[#17385B] focus-visible:outline-2 focus-visible:outline-offset-2">
          <span className="block font-serif text-2xl font-bold">14/11</span>
          <span className="mt-1 block text-[13px] leading-5">Dia Mundial do Diabetes</span>
        </a>
        <a href="/cancer-de-prostata" className="rounded-xl border border-[#BED8E6] bg-white px-3 py-3 text-[#17385B] focus-visible:outline-2 focus-visible:outline-offset-2">
          <span className="block font-serif text-2xl font-bold">17/11</span>
          <span className="mt-1 block text-[13px] leading-5">Combate ao Câncer de Próstata</span>
        </a>
      </div>
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-5 gap-y-3 px-4 py-3 sm:px-6 sm:py-4">
        <p className="max-w-[46ch] text-sm leading-6 text-[#3B596C]">
          Duas datas, um convite para cuidar da vida. Conheça a campanha e a história de Lucy Aihara.
        </p>
        <nav aria-label="Acesso rápido ao conteúdo" className="flex flex-wrap gap-2">
          <Link href="/#temas" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#17385B] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#28577C] focus-visible:outline-2 focus-visible:outline-offset-3">
            Explorar a campanha <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/trajetoria-de-lucy" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#93B2C4] bg-white px-4 py-2.5 text-sm font-semibold text-[#17385B] transition-colors hover:bg-[#F8FCFE] focus-visible:outline-2 focus-visible:outline-offset-3">
            Conheça Lucy <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </section>
  );
}
