import { HeroArt } from "@/components/sections/HeroArt";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="conteudo-principal" aria-labelledby="hero-title" className="scroll-mt-24 bg-[#eef5fb] text-[#17385B]">
      <div className="border-b border-[#D5E5EF] bg-[#17385B] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-2 text-[11px] sm:px-8 sm:text-xs">
          <span className="font-semibold uppercase tracking-[.16em]">Especial Novembro Azul 2026</span>
          <span className="text-[#DCEAF3]">Informação, histórias reais e cuidado em saúde</span>
        </div>
      </div>
      <div className="mx-auto max-w-[900px] px-3 pt-3 sm:px-5 sm:pt-4 xl:max-w-[940px]">
        <h1 id="hero-title" className="sr-only">Novembro Azul 2026: 14 de novembro, Dia Mundial do Diabetes, e 17 de novembro, Dia Nacional de Combate ao Câncer de Próstata</h1>
        <div className="relative aspect-[1672/941] w-full overflow-hidden rounded-xl bg-[#e7f3fc] ring-1 ring-[#D4E5EF] sm:rounded-2xl">
          <HeroArt />
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-5 pt-3 sm:hidden" aria-label="Datas em destaque">
        <a href="/#diabetes" className="rounded-xl border border-[#C8DFEB] bg-white px-3 py-3 focus-visible:outline-2 focus-visible:outline-offset-2">
          <span className="block font-serif text-2xl font-bold">14/11</span>
          <span className="mt-1 block text-sm leading-5">Dia Mundial do Diabetes</span>
        </a>
        <a href="/#saude-masculina" className="rounded-xl border border-[#C8DFEB] bg-white px-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2">
          <span className="block font-serif text-2xl font-bold">17/11</span>
          <span className="mt-1 block text-sm leading-5">Combate ao Câncer de Próstata</span>
        </a>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8 sm:py-5">
        <p className="max-w-[47ch] text-sm leading-6 text-[#405A6D]">
          Duas datas, um convite para cuidar da vida. Conheça o especial de novembro e a trajetória de Lucy Aihara.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/#datas" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#17385B] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#28577c] focus-visible:outline-2 focus-visible:outline-offset-4">Explorar os conteúdos <ArrowRight size={17} aria-hidden="true" /></Link>
          <Link href="/#historia" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[#98B7C8] px-4 py-2.5 text-sm font-semibold text-[#17385B] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4">A história da Lucy <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
