import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="conteudo-principal"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[min(850px,100svh)] overflow-hidden bg-[#081629] text-[#F5F0E8]"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_35%,#295987_0%,#102d4d_30%,#081629_70%)]" />
        <div className="absolute -right-32 top-16 h-[640px] w-[640px] rounded-full border border-[#b6d6ea]/15 opacity-70" />
        <div className="absolute -right-16 top-28 h-[500px] w-[500px] rounded-full border border-[#b6d6ea]/15" />
        <div className="absolute left-[45%] -bottom-40 h-[420px] w-[420px] rounded-full bg-[#84B7CE]/10 blur-[110px]" />
      </div>
      <div className="relative mx-auto grid min-h-[min(850px,100svh)] max-w-7xl items-center gap-10 px-5 pb-24 pt-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
        <div className="relative z-10">
          <p className="mb-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#B6D6EA]">
            <span aria-hidden="true" className="h-px w-8 bg-[#B6D6EA]" />
            Novembro Azul 2026 · Uma história real
          </p>
          <h1 id="hero-title" className="max-w-[12ch] font-serif text-[clamp(3.1rem,7vw,6.9rem)] leading-[1.03] tracking-[-0.045em]">
            Minha história <em className="font-normal text-[#B6D6EA]">não termina</em> no diagnóstico.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#e3eaf0] sm:text-lg">
            Lucy Aihara convive com diabetes tipo 1 desde 1980. Ao longo da vida, encontrou no estudo, no movimento e na atenção ao corpo caminhos que também moldaram sua profissão.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#b5c9d9]">
            Uma trajetória sobre escolhas, descobertas e o valor de continuar cuidando de si.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#historia" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#F5F0E8] px-6 py-3 font-semibold text-[#081629] transition hover:bg-[#B6D6EA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Conheça a história <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a href="#datas" className="inline-flex min-h-12 items-center gap-2 border-b border-[#B6D6EA]/60 px-2 py-3 font-medium text-[#e4eff7] transition hover:text-white">
              Sobre a campanha <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="relative mx-auto w-full max-w-[440px] self-end lg:self-center">
          <div className="absolute -inset-5 rounded-[48%_48%_20%_20%] border border-white/20" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_18px_18px] bg-[#20415f] shadow-[0_25px_90px_rgba(0,0,0,.3)]">
            <Image
              src="/images/lucy-aihara-hcfmusp.jpg"
              alt="Fotografia institucional de Lucy Aihara, fisioterapeuta e fasciaterapeuta"
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover object-top"
              priority
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#081629]/70 via-transparent to-transparent" />
          </div>
          <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
            <span className="text-sm font-medium">Lucy Aihara <span className="block text-xs text-[#D2E5F0]">Fisioterapeuta e fasciaterapeuta</span></span>
            <span className="text-xs tracking-[0.15em] text-[#D2E5F0]">DESDE 1980</span>
          </figcaption>
        </figure>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-[#081629]/35 pointer-events-none" aria-hidden="true" />
    </section>
  );
}
