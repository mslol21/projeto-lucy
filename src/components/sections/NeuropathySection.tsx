"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, ShieldCheck, HeartPulse, Sparkles, BookOpen } from "lucide-react";

export function NeuropathySection() {
  return (
    <section
      id="neuropatia"
      aria-labelledby="neuropatia-title"
      className="py-20 lg:py-28 bg-[#F5F2EB] text-[#17385B] relative overflow-hidden border-t border-stone-200/80"
    >
      {/* Elementos visuais sutis orgânicos de fundo inspirados na identidade */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#84B7CE]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#C7D9D2]/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17385B]/10 text-[#17385B] text-xs font-semibold tracking-widest uppercase">
            <HeartPulse className="w-3.5 h-3.5 text-[#527fae]" aria-hidden="true" />
            <span>Educação em Saúde e Sensibilidade</span>
          </div>

          <h2
            id="neuropatia-title"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17385B] tracking-tight leading-tight"
          >
            Quando a dor vai além do que podemos ver
          </h2>

          <p className="text-base sm:text-lg text-[#415A77] leading-relaxed">
            Uma das facetas mais delicadas do diabetes ocorre nas terminações nervosas. Entender os sinais, as dores invisíveis e o silêncio da perda de sensibilidade é o primeiro passo para preservar sua autonomia e bem-estar.
          </p>
        </div>

        {/* Grid Principal: Conceito, Sintomas e O Perigo Silencioso */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Card 1: O que é a Neuropatia Diabética */}
          <div className="lg:col-span-4 bg-white p-8 rounded-2xl rounded-tr-[44px] shadow-sm border border-stone-200/80 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-[#527fae] uppercase tracking-wider block">
                Compreensão Clínica
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#17385B]">
                O que é a neuropatia diabética?
              </h3>
              <p className="text-sm text-[#415A77] leading-relaxed">
                Níveis elevados de glicose no sangue por tempo prolongado afetam os minúsculos vasos sanguíneos que nutrem as fibras nervosas. Com a oxigenação e nutrição reduzidas, os nervos periféricos (especialmente nos pés e pernas) sofrem microlesões progressivas.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-stone-100 flex items-center gap-2 text-xs text-[#17385B] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#84B7CE]" />
              <span>Acomete até 50% das pessoas com diabetes ao longo da vida</span>
            </div>
          </div>

          {/* Card 2: Queimação, Formigamento e Dor */}
          <div className="lg:col-span-4 bg-white p-8 rounded-2xl rounded-tr-[44px] shadow-sm border border-stone-200/80 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-[#527fae] uppercase tracking-wider block">
                Manifestações Sensoriais
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#17385B]">
                Queimação, choques e dormência
              </h3>
              <p className="text-sm text-[#415A77] leading-relaxed">
                Muitas pessoas descrevem uma sensação de agulhadas, formigamento persistente, queimação profunda na sola dos pés ou um incômodo doloroso ao simples toque do lençol durante a noite. Essas queixas não são imaginárias: são sinais de alarme das fibras sensoriais irritadas.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-stone-100 flex items-center gap-2 text-xs text-[#17385B] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C7D9D2]" />
              <span>Geralmente se inicia nas extremidades em formato de &ldquo;meia&rdquo;</span>
            </div>
          </div>

          {/* Card 3: O Perigo da Neuropatia Silenciosa */}
          <div className="lg:col-span-4 bg-[#17385B] text-[#F5F2EB] p-8 rounded-2xl rounded-tr-[44px] shadow-md border border-[#84B7CE]/20 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#84B7CE]">
                <AlertCircle className="w-4 h-4" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Alerta Essencial
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white">
                A neuropatia sem sintomas
              </h3>
              <p className="text-sm text-[#C7D9D2] leading-relaxed">
                O risco mais severo ocorre quando a neuropatia avança sem dor: a perda da <strong>sensibilidade protetora</strong>. Sem sentir dor, a pessoa não percebe uma pedrinha no calçado, calos ou queimaduras térmicas, propiciando feridas e o temido pé diabético.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-[#84B7CE] font-medium">
              <span>Avaliação anual com teste do monofilamento 10g é indispensável</span>
            </div>
          </div>
        </div>

        {/* Bloco: Avaliação Médica + A Abordagem Somática da Escola */}
        <div className="bg-white p-8 lg:p-12 rounded-3xl rounded-tr-[60px] shadow-sm border border-stone-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#17385B] bg-[#C7D9D2]/30 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#17385B]" aria-hidden="true" />
              <span>Percepção Corporal e Cuidado Humano</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B] leading-snug">
              Avaliação profissional, escuta somática e qualidade de vida
            </h3>
            <p className="text-sm sm:text-base text-[#415A77] leading-relaxed">
              O controle do diabetes exige acompanhamento com médico endocrinologista e equipe de saúde. Paralelamente, na <strong>Escola de Fasciaterapia e Movimento</strong>, acolhemos a pessoa em sua integralidade: não prometemos cura clínica ou regeneração de nervos lesados, mas ensinamos o paciente a restabelecer um contato seguro, atento e acolhedor com seu próprio corpo através do Método Danis Bois.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#527fae]/15 text-[#17385B] mt-0.5">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#17385B]">Prevenção Ativa</h4>
                  <p className="text-xs text-[#415A77]">Inspeção visual diária dos pés e calçados confortáveis.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#C7D9D2]/40 text-[#17385B] mt-0.5">
                  <HeartPulse className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#17385B]">Consciência Perceptiva</h4>
                  <p className="text-xs text-[#415A77]">Alívio de tensões miofasciais e redução do estresse associado à dor.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA para o Centro de Conhecimento */}
          <div className="lg:col-span-5 bg-[#F5F2EB] p-6 sm:p-8 rounded-2xl rounded-tr-[40px] border border-stone-200 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#527fae]">
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>Centro de Conhecimento</span>
              </div>
              <h4 className="font-serif text-xl text-[#17385B]">
                Aprofunde seus conhecimentos no artigo científico completo
              </h4>
              <p className="text-xs sm:text-sm text-[#415A77] leading-relaxed">
                Leia o guia detalhado sobre a fisiopatologia da neuropatia diabética, o teste de monofilamento de 10 gramas, medidas de proteção e a perspectiva somática da fáscia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/conhecimento/neuropatia-diabetica"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#17385B] text-white text-sm font-medium hover:bg-[#1f4a75] transition-colors shadow-xs group"
              >
                <span>Ler artigo sobre neuropatia</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                href="/conhecimento"
                className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-white text-[#17385B] text-sm font-medium border border-stone-300 hover:bg-stone-50 transition-colors"
              >
                <span>Explorar todos os artigos</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
