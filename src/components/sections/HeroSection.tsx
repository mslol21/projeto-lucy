import React from "react";
import { ArrowDown, Heart, Shield, Activity, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { OrganicShape } from "@/components/ui/OrganicBackground";
import { CAMPAIGN_INFO } from "@/data/campaign-data";

export function HeroSection() {
  return (
    <section
      id="conteudo-principal"
      className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 bg-gradient-to-b from-[#F5F2EB] via-[#F5F2EB] to-[#eef4f1]"
      aria-labelledby="hero-title"
    >
      {/* Elementos decorativos orgânicos de fundo */}
      <OrganicShape
        variant="fascia-wave"
        className="absolute -top-24 -right-24 w-[600px] h-[500px] text-[#84B7CE] opacity-40 -rotate-12"
      />
      <OrganicShape
        variant="gentle-cell"
        className="absolute -bottom-20 -left-20 w-[450px] h-[450px] text-[#C7D9D2] opacity-50"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#84B7CE]/40 shadow-xs backdrop-blur-xs">
            <Sparkles className="w-4 h-4 text-[#84B7CE]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#17385B]">
              NOVEMBRO AZUL {CAMPAIGN_INFO.year}
            </span>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span className="hidden sm:inline text-xs font-medium text-[#415A77]">
              {CAMPAIGN_INFO.slogan}
            </span>
          </div>

          {/* H1 Principal */}
          <h1
            id="hero-title"
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#17385B] leading-[1.12] tracking-tight"
          >
            &ldquo;{CAMPAIGN_INFO.centralMessage}&rdquo;
          </h1>

          {/* Texto de acolhimento */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#415A77] font-normal leading-relaxed">
            Neste mês de novembro, a <strong className="text-[#17385B] font-semibold">Escola de Fasciaterapia e Movimento</strong> convida você a olhar para a saúde com mais atenção e carinho. Informação, acolhimento e consciência para cuidar da vida.
          </p>

          {/* CTAs de Navegação Suave */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asAnchor
              href="#diabetes"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Activity className="w-5 h-5 text-[#84B7CE]" aria-hidden="true" />
              <span>Conhecer sobre diabetes</span>
            </Button>

            <Button
              asAnchor
              href="#saude-masculina"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white/50 backdrop-blur-xs"
            >
              <Shield className="w-5 h-5 text-[#17385B]" aria-hidden="true" />
              <span>Saúde masculina</span>
            </Button>
          </div>

          {/* Cards Sutis de Acolhimento e Filosofia */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-white/75 border border-stone-200/80 shadow-xs backdrop-blur-xs flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#84B7CE]/15 text-[#17385B] flex-shrink-0">
                <Heart className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-[#17385B]">Acolhimento Real</h2>
                <p className="text-xs text-[#415A77] mt-1 leading-normal">
                  Cuidado sem julgamentos, baseado na escuta e no respeito aos ritmos de cada corpo.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/75 border border-stone-200/80 shadow-xs backdrop-blur-xs flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#C7D9D2]/30 text-[#17385B] flex-shrink-0">
                <Activity className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-[#17385B]">Educação & Ciência</h2>
                <p className="text-xs text-[#415A77] mt-1 leading-normal">
                  Conteúdos fundamentados nas diretrizes do INCA e da Sociedade Brasileira de Diabetes.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/75 border border-stone-200/80 shadow-xs backdrop-blur-xs flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#17385B]/10 text-[#17385B] flex-shrink-0">
                <Shield className="w-5 h-5 text-[#17385B]" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-[#17385B]">Consciência Somática</h2>
                <p className="text-xs text-[#415A77] mt-1 leading-normal">
                  Aprender a reconhecer os sinais internos e cultivar a autonomia na sua saúde.
                </p>
              </div>
            </div>
          </div>

          {/* Indicador de rolagem suave */}
          <div className="pt-6 flex justify-center">
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
      </div>
    </section>
  );
}
