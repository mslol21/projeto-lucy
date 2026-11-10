import React from "react";
import { ShieldCheck, HelpCircle, AlertCircle, FileText, UserCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROSTATE_DATA } from "@/data/campaign-data";

export function MenHealthSection() {
  return (
    <section
      id="saude-masculina"
      className="py-20 lg:py-28 bg-[#F5F2EB] relative scroll-mt-20 border-t border-stone-200/60"
      aria-labelledby="men-health-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="men-health-title"
          eyebrow="17 de Novembro • Dia Nacional de Combate ao Câncer de Próstata"
          title="Saúde Masculina: Quebrando o Silêncio com Ciência e Respeito"
          subtitle="O cuidado com a saúde masculina vai muito além de um único exame. Envolve escuta, autoconhecimento, eliminação de tabus e decisões médicas fundamentadas em evidências confiáveis."
        />

        {/* O que é o Câncer de Próstata */}
        <div className="mb-16 bg-white/90 backdrop-blur-xs rounded-3xl rounded-tr-[56px] p-8 sm:p-10 border border-stone-200/90 shadow-[0_4px_25px_rgba(23,56,91,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#17385B] bg-[#527fae]/15 px-3 py-1 rounded-full border border-[#527fae]/25">
                <ShieldCheck className="w-3.5 h-3.5 text-[#17385B]" aria-hidden="true" />
                Informação Anatômica & Clínica
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B] font-medium leading-tight">
                Entendendo a próstata e o desenvolvimento tumoral
              </h3>
              <p className="text-[#415A77] text-base leading-relaxed">
                {PROSTATE_DATA.definition}
              </p>
              <p className="text-[#415A77] text-sm leading-relaxed">
                {PROSTATE_DATA.cancerInfo} Na maioria das vezes, o crescimento tumoral é lento e indolente, levando anos para se manifestar. Por outro lado, existem variantes que demandam intervenção célere. Daí a importância vital da individualização de cada caso.
              </p>
            </div>

            {/* Fatores de Risco */}
            <div className="lg:col-span-5 bg-[#faf8f5] p-6 sm:p-7 rounded-2xl rounded-tr-[36px] border border-stone-200/80 space-y-4">
              <h4 className="font-serif text-lg font-medium text-[#17385B] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#527fae]" aria-hidden="true" />
                Principais Fatores de Risco
              </h4>
              <ul className="space-y-3">
                {PROSTATE_DATA.riskFactors.map((rf) => (
                  <li key={rf.factor} className="text-xs leading-relaxed text-[#415A77]">
                    <strong className="text-[#17385B] block font-semibold">{rf.factor}:</strong>
                    <span>{rf.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Destaque Ético Central: Decisão Compartilhada segundo o INCA */}
        <div className="mb-16 bg-[#17385B] text-[#F5F2EB] rounded-3xl rounded-tr-[64px] p-8 sm:p-12 relative overflow-hidden shadow-xl border border-white/10">
          <div className="relative z-10 space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#84B7CE]/20 text-[#84B7CE] text-xs font-semibold uppercase tracking-wider border border-[#84B7CE]/30">
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              Diretriz Técnica Oficial do INCA
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug">
              {PROSTATE_DATA.sharedDecisionInfo.title}
            </h3>

            <div className="p-5 sm:p-6 rounded-2xl rounded-tr-[36px] bg-white/10 backdrop-blur-xs border border-white/15">
              <p className="font-serif text-lg sm:text-xl text-[#F5F2EB] italic leading-relaxed">
                &ldquo;{PROSTATE_DATA.sharedDecisionInfo.highlight}&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#C7D9D2] leading-relaxed">
              {PROSTATE_DATA.sharedDecisionInfo.text}
            </p>

            <div className="pt-2 flex items-start gap-3 bg-[#84B7CE]/15 p-4 rounded-xl rounded-tr-[24px] border border-[#84B7CE]/20">
              <UserCheck className="w-5 h-5 text-[#84B7CE] flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                <strong className="text-white font-semibold">A conduta médica ética: </strong>
                {PROSTATE_DATA.sharedDecisionInfo.recommendation}
              </p>
            </div>
          </div>
        </div>

        {/* Sintomas que exigem investigação imediata */}
        <div className="bg-white/90 backdrop-blur-xs rounded-3xl rounded-tr-[56px] p-8 sm:p-10 border border-stone-200/90 shadow-[0_4px_25px_rgba(23,56,91,0.04)]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae] block mb-1">
              Sinais Funcionais
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B] font-medium">
              Sinais e Sintomas Urinários que Demandam Consulta
            </h3>
            <p className="text-[#415A77] text-sm mt-2">
              Homens de qualquer idade que apresentem as queixas abaixo devem procurar avaliação médica para diagnóstico diferencial (como infecções ou hiperplasia prostática benigna):
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROSTATE_DATA.symptoms.map((symptom) => (
              <div
                key={symptom}
                className="p-4 rounded-2xl rounded-tr-[28px] bg-[#faf8f5] border border-stone-200/70 flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-[#527fae] mt-2 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-[#17385B] leading-relaxed font-medium">
                  {symptom}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-stone-100 flex items-center gap-2 text-xs text-[#415A77]">
            <HelpCircle className="w-4 h-4 text-[#527fae] flex-shrink-0" aria-hidden="true" />
            <span>
              A presença desses sinais não significa diagnóstico de câncer, mas indica a necessidade de acolhimento e investigação clínica oportuna.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
