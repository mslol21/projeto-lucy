import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="conteudo-principal" aria-labelledby="hero-title" className="bg-[#F7F7F4] text-[#19344A]">
      <div className="border-b border-[#DCE4E7] bg-[#17385B] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-5 py-3 text-xs sm:px-8">
          <span className="font-semibold uppercase tracking-[.16em]">Especial Novembro Azul 2026</span>
          <span className="text-[#DBE9F1]">Informação, histórias reais e cuidado em saúde</span>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14">
        <div className="mb-7 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[.15em] text-[#456C86]">
          <span className="inline-flex items-center gap-2 bg-[#DDEAF1] px-3 py-1.5"><svg aria-hidden="true" viewBox="0 0 36 44" className="h-5 w-4 fill-none text-[#276C9C]"><path d="M18 3C6 3 5 12 7 19c2 7 11 16 18 22l6-6C22 28 12 19 13 13c1-4 6-5 9-2 3 3 3 8 0 12l-6 8" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></svg>Edição especial</span>
          <span>Saúde e bem-estar</span><span aria-hidden="true">•</span><span>Novembro de 2026</span>
        </div>
        <div className="grid gap-9 border-b border-[#DCE4E7] pb-11 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-14">
          <div>
            <p className="mb-4 text-sm font-semibold text-[#315F7B]">14 de novembro · Diabetes | 17 de novembro · Câncer de próstata</p>
            <h1 id="hero-title" className="max-w-[15ch] font-serif text-[clamp(2.8rem,5.9vw,5.7rem)] leading-[1.08] tracking-[-.035em]">
              Novembro Azul: duas datas, um convite para cuidar da vida.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#405A6D]">
              O Dia Mundial do Diabetes e o Dia Nacional de Combate ao Câncer de Próstata nos lembram da importância de conversar, conhecer e buscar orientação de saúde.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#datas" className="inline-flex min-h-12 items-center gap-2 bg-[#17385B] px-5 py-3 text-sm font-semibold text-white hover:bg-[#28577c] focus-visible:outline-2 focus-visible:outline-offset-4">
                Explore as duas datas <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href="#historia" className="inline-flex min-h-12 items-center gap-2 border border-[#AABFCC] px-5 py-3 text-sm font-semibold text-[#17385B] hover:bg-[#EAF1F3]">
                Conheça Lucy Aihara <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <figure className="relative overflow-hidden bg-[#D9E6EA]">
            <div className="relative aspect-[5/4] lg:aspect-[4/5]">
              <Image src="/images/lucy-aihara-hcfmusp.jpg" alt="Fotografia institucional de Lucy Aihara" fill priority sizes="(max-width: 1024px) 100vw, 480px" className="object-cover object-top" />
            </div>
            <figcaption className="bg-[#17385B] px-5 py-4 text-sm text-white">
              <span className="block font-semibold">Lucy Aihara</span>
              <span className="text-[#DBE9F1]">Uma trajetória de vida, movimento e atenção ao corpo</span>
            </figcaption>
          </figure>
        </div>
        <div className="grid gap-6 pt-8 md:grid-cols-[1fr_1fr_1.1fr] md:divide-x md:divide-[#DCE4E7]">
          <a href="#diabetes" className="group block md:pr-5">
            <span className="text-xs font-bold uppercase tracking-[.12em] text-[#47738C]">14 NOV · Dia Mundial do Diabetes</span>
            <h2 className="mt-2 font-serif text-xl leading-snug group-hover:underline">Entenda o diabetes e seus cuidados</h2>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold">Ler matéria <ArrowRight size={14} /></span>
          </a>
          <a href="#saude-masculina" className="group block md:px-5">
            <span className="text-xs font-bold uppercase tracking-[.12em] text-[#47738C]">17 NOV · Câncer de próstata</span>
            <h2 className="mt-2 font-serif text-xl leading-snug group-hover:underline">Saúde masculina começa com informação</h2>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold">Ler matéria <ArrowRight size={14} /></span>
          </a>
          <Link href="/conhecimento" className="group block md:pl-5">
            <span className="text-xs font-bold uppercase tracking-[.12em] text-[#47738C]">Biblioteca de saúde</span>
            <h2 className="mt-2 font-serif text-xl leading-snug group-hover:underline">Neuropatia, movimento e fasciaterapia</h2>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold">Explorar artigos <ArrowRight size={14} /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
