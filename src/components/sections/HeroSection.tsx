import { HeroArt } from "@/components/sections/HeroArt";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="conteudo-principal" aria-labelledby="hero-title" className="scroll-mt-24 bg-[#eef5fb] text-[#17385B]">
      <div className="border-b border-[#D5E5EF] bg-[#17385B] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-3 text-xs sm:px-8">
          <span className="font-semibold uppercase tracking-[.16em]">Especial Novembro Azul 2026</span>
          <span className="text-[#DCEAF3]">Informação, histórias reais e cuidado em saúde</span>
        </div>
      </div>
      <div className="mx-auto max-w-[1500px]">
        <h1 id="hero-title" className="sr-only">Novembro Azul 2026: 14 de novembro, Dia Mundial do Diabetes, e 17 de novembro, Dia Nacional de Combate ao Câncer de Próstata</h1>
        <div className="relative aspect-[1672/941] w-full overflow-hidden bg-[#e7f3fc]">
          <HeroArt />
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-6 sm:px-8 sm:py-8">
        <p className="max-w-2xl text-sm leading-7 text-[#405A6D] sm:text-base">
          Duas datas, um convite para cuidar da vida. Conheça o especial de novembro e a trajetória de Lucy Aihara.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/#datas" className="inline-flex min-h-12 items-center gap-2 bg-[#17385B] px-5 py-3 text-sm font-semibold text-white hover:bg-[#28577c] focus-visible:outline-2 focus-visible:outline-offset-4">Explorar os conteúdos <ArrowRight size={17} aria-hidden="true" /></Link>
          <Link href="/#historia" className="inline-flex min-h-12 items-center gap-2 border border-[#98B7C8] px-5 py-3 text-sm font-semibold text-[#17385B] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4">A história da Lucy <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
