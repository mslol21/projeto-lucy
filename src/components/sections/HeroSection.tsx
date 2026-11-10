import React from "react";
import Image from "next/image";
import { ArrowDown, Heart, Shield, Activity, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AcrylicCard, BrandEmblem } from "@/components/ui/BrandEmblem";
import { CAMPAIGN_INFO } from "@/data/campaign-data";

export function HeroSection() {
  return (
    <section
      id="conteudo-principal"
      className="relative overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#F5F2EB] via-[#F5F2EB] to-[#edf3f0]"
      aria-labelledby="hero-title"
    >
      {/* Forma de fundo inspirada no corte em arco da logo oficial */}
      <div
        className="absolute top-0 right-0 w-[500px] sm:w-[650px] h-[550px] bg-gradient-to-bl from-[#527fae]/10 via-[#84B7CE]/10 to-transparent rounded-bl-[180px] pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#C7D9D2]/25 rounded-tr-[160px] pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Coluna de Texto Principal */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Oficial com o Símbolo */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-[#527fae]/30 shadow-2xs backdrop-blur-xs">
              <BrandEmblem className="w-3.5 h-4.5" blueColor="#527fae" darkColor="#17385B" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#17385B]">
                NOVEMBRO AZUL {CAMPAIGN_INFO.year}
              </span>
              <span className="text-stone-300">•</span>
              <span className="text-xs font-medium text-[#415A77]">
                {CAMPAIGN_INFO.slogan}
              </span>
            </div>

            {/* H1 Principal com a mensagem central */}
            <h1
              id="hero-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#17385B] leading-[1.14] tracking-tight"
            >
              &ldquo;{CAMPAIGN_INFO.centralMessage}&rdquo;
            </h1>

            {/* Texto de acolhimento */}
            <p className="text-base sm:text-lg text-[#415A77] font-normal leading-relaxed max-w-xl">
              Neste mês de novembro, a <strong className="text-[#17385B] font-semibold">Escola de Fasciaterapia e Movimento</strong> convida você a olhar para a saúde com mais atenção e carinho. Informação, acolhimento e consciência para cuidar da vida.
            </p>

            {/* CTAs de Navegação Suave */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                asAnchor
                href="#diabetes"
                variant="primary"
                size="lg"
                className="rounded-2xl rounded-tr-[36px] bg-[#17385B] hover:bg-[#10263f] shadow-md"
              >
                <Activity className="w-5 h-5 text-[#84B7CE]" aria-hidden="true" />
                <span>Conhecer sobre diabetes</span>
              </Button>

              <Button
                asAnchor
                href="#saude-masculina"
                variant="outline"
                size="lg"
                className="rounded-2xl rounded-tr-[36px] border-[#17385B] bg-white/70 hover:bg-white backdrop-blur-xs"
              >
                <Shield className="w-5 h-5 text-[#17385B]" aria-hidden="true" />
                <span>Saúde masculina</span>
              </Button>
            </div>

            {/* Badges de Filosofia da Escola */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#415A77]">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Sparkles className="w-4 h-4 text-[#84B7CE]" aria-hidden="true" />
                Diretrizes Oficiais INCA & SBD
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-[#84B7CE]" aria-hidden="true" />
                Consolação / Higienópolis, SP
              </span>
            </div>
          </div>

          {/* Coluna Visual: A Placa de Acrílico Flutuante Oficial da Escola */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              {/* Sombra de projeção e halo da placa */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#527fae]/20 via-[#84B7CE]/15 to-[#C7D9D2]/25 rounded-[44px] blur-md opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Placa em Acrílico com Espaçadores Reais */}
              <div className="relative rounded-[36px] overflow-hidden bg-white/90 shadow-[0_20px_50px_rgba(23,56,91,0.12)] border border-white/80 p-3 sm:p-4">
                <div className="relative rounded-[28px] overflow-hidden bg-stone-100">
                  <Image
                    src="/images/placa-acrilica-consultorio.jpg"
                    alt="Placa institucional da Escola de Fasciaterapia e Movimento em acrílico com espaçadores cromados"
                    width={480}
                    height={680}
                    priority
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  {/* Legenda sutil sobre o consultório */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#17385B]/90 via-[#17385B]/60 to-transparent p-5 text-white">
                    <p className="text-xs font-semibold tracking-wider uppercase text-[#84B7CE]">
                      Escola de Fasciaterapia e Movimento
                    </p>
                    <p className="text-sm font-medium mt-0.5">
                      Lucy Aihara • Método Danis Bois
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Cartões de Acolhimento em formato de Placa Acrílica */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          <AcrylicCard className="p-6">
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-2xl bg-[#527fae]/15 text-[#17385B] flex-shrink-0">
                <Heart className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-[#17385B]">Acolhimento Real</h2>
                <p className="text-xs text-[#415A77] mt-1 leading-relaxed">
                  Cuidado sem julgamentos, baseado na escuta e no respeito aos ritmos biológicos de cada corpo.
                </p>
              </div>
            </div>
          </AcrylicCard>

          <AcrylicCard className="p-6">
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-2xl bg-[#C7D9D2]/40 text-[#17385B] flex-shrink-0">
                <Activity className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-[#17385B]">Educação & Ciência</h2>
                <p className="text-xs text-[#415A77] mt-1 leading-relaxed">
                  Conteúdos fundamentados rigorosamente nas diretrizes do INCA e da Sociedade Brasileira de Diabetes.
                </p>
              </div>
            </div>
          </AcrylicCard>

          <AcrylicCard className="p-6">
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-2xl bg-[#17385B]/10 text-[#17385B] flex-shrink-0">
                <Shield className="w-5 h-5 text-[#17385B]" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-[#17385B]">Consciência Somática</h2>
                <p className="text-xs text-[#415A77] mt-1 leading-relaxed">
                  Aprender a reconhecer os sinais internos e cultivar autonomia e serenidade no autocuidado.
                </p>
              </div>
            </div>
          </AcrylicCard>
        </div>

        {/* Indicador de rolagem suave */}
        <div className="pt-10 flex justify-center">
          <a
            href="#datas"
            className="inline-flex items-center gap-1.5 text-xs text-[#415A77] hover:text-[#17385B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B] rounded-full p-2"
            aria-label="Rolar para a seção de propósitos da campanha"
          >
            <span>Explorar a campanha</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
