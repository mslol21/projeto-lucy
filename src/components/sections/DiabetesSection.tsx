import React from "react";
import Image from "next/image";
import { Droplet, AlertTriangle, Sparkles, CheckCircle, ShieldAlert } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DIABETES_DATA } from "@/data/campaign-data";

export function DiabetesSection() {
  return (
    <section
      id="diabetes"
      className="py-20 lg:py-28 bg-[#faf8f5] relative scroll-mt-20 border-t border-stone-200/60"
      aria-labelledby="diabetes-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="diabetes-title"
          eyebrow="14 de Novembro • Dia Mundial do Diabetes"
          title="Conhecendo o Diabetes com Consciência e Respeito"
          subtitle="O diabetes não precisa ser cercado de medo ou culpas. Compreender como a glicose e a insulina interagem com os tecidos do corpo é o primeiro passo para uma convivência serena e saudável."
        />

        {/* O que é o diabetes */}
        <div className="mb-16 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#17385B] bg-[#84B7CE]/20 px-3 py-1 rounded-full">
                <Droplet className="w-3.5 h-3.5 text-[#17385B]" aria-hidden="true" />
                Fisiologia em Linguagem Simples
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B] font-medium">
                O que acontece no nosso organismo?
              </h3>
              <p className="text-[#415A77] text-base sm:text-lg leading-relaxed">
                {DIABETES_DATA.definition}
              </p>
              <p className="text-sm text-[#415A77] leading-relaxed">
                Quando a insulina não atua adequadamente ou não é secretada em níveis suficientes, a glicose permanece circulando na corrente sanguínea em concentrações elevadas, enquanto as células ficam privadas dessa fonte de energia.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#F5F2EB] p-6 rounded-2xl border border-stone-200/60 space-y-3">
              <div className="flex items-center gap-2 text-[#17385B] font-semibold text-sm">
                <Sparkles className="w-4 h-4 text-[#84B7CE]" aria-hidden="true" />
                <span>Uma Forma de Cuidar</span>
              </div>
              <p className="text-xs text-[#415A77] leading-relaxed">
                O monitoramento não é uma vigilância punitiva, mas sim uma bússola biológica que permite ajustar escolhas, movimentos e alimentação a favor da vitalidade tecidual.
              </p>
            </div>
          </div>
        </div>

        {/* Diferenças entre Tipo 1 e Tipo 2 */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B] font-medium">
              Compreendendo as Diferenças
            </h3>
            <p className="text-[#415A77] text-sm sm:text-base mt-2">
              Cada tipo possui origens, necessidades de acompanhamento e manejos específicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {DIABETES_DATA.types.map((type) => (
              <div
                key={type.title}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-[#84B7CE] transition-colors"
              >
                <div className="space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#84B7CE]">
                    {type.nature}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#17385B] font-medium">
                    {type.title}
                  </h4>
                  <p className="text-sm text-[#415A77] leading-relaxed">
                    {type.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100">
                  <span className="text-xs font-semibold text-[#17385B] block mb-1 uppercase tracking-wider">
                    Eixos de Acompanhamento:
                  </span>
                  <p className="text-xs text-[#415A77] leading-relaxed">
                    {type.care}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infográfico Estratégico: Cetoacidose Diabética (Material Oficial da Escola) */}
        <div className="mb-16 bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Infográfico da Escola */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-50">
                <Image
                  src="/images/cetoacidose-diabetica-infografico.jpg"
                  alt="Infográfico oficial da Escola de Fasciaterapia e Movimento sobre Sintomas da Cetoacidose Diabética"
                  width={460}
                  height={580}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-102"
                />
              </div>
            </div>

            {/* Contextualização Clínica */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#17385B] bg-[#84B7CE]/20 px-3 py-1 rounded-full">
                <ShieldAlert className="w-3.5 h-3.5 text-[#17385B]" aria-hidden="true" />
                Material Educativo Oficial da Escola
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B] font-medium leading-snug">
                Cetoacidose Diabética: Reconhecendo Sinais de Alerta
              </h3>

              <p className="text-[#415A77] text-base leading-relaxed">
                A cetoacidose diabética (CAD) é uma complicação metabólica séria decorrente da escassez crítica de insulina. Sem insulina suficiente, o organismo utiliza ácidos graxos como fonte de energia, gerando corpos cetônicos que acidificam o sangue.
              </p>

              <div className="p-5 rounded-2xl bg-[#F5F2EB] border border-stone-200 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#17385B]">
                  Sintomas Chave do Material Educativo:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#415A77]">
                  <li className="flex items-center gap-1.5">• Sede e micção excessivas</li>
                  <li className="flex items-center gap-1.5">• Fraqueza intensa e náuseas</li>
                  <li className="flex items-center gap-1.5">• Hálito cetônico (odor frutuoso)</li>
                  <li className="flex items-center gap-1.5">• Respiração ofegante e taquicardia</li>
                  <li className="flex items-center gap-1.5">• Dor abdominal e desidratação</li>
                  <li className="flex items-center gap-1.5">• Sonolência e confusão mental</li>
                </ul>
              </div>

              <p className="text-xs text-[#415A77] italic">
                A presença desses sintomas requer avaliação e atendimento médico emergencial imediato.
              </p>
            </div>
          </div>
        </div>

        {/* Sintomas de Atenção (4 Ps + sinais periféricos) */}
        <div className="mb-16 bg-[#17385B] text-[#F5F2EB] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#84B7CE] bg-[#84B7CE]/20 px-3 py-1 rounded-full">
              <AlertTriangle className="w-3.5 h-3.5 text-[#84B7CE]" aria-hidden="true" />
              Sinais e Percepção Corporal
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-normal text-[#F5F2EB]">
              Sintomas Iniciais Que Merecem Sua Atenção
            </h3>
            <p className="text-[#C7D9D2] text-sm sm:text-base leading-relaxed">
              O corpo se comunica de formas discretas. Perceber essas alterações e relatar ao médico faz toda a diferença para um diagnóstico oportuno.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIABETES_DATA.symptoms.map((symptom, idx) => (
              <div
                key={symptom.name}
                className="bg-white/10 backdrop-blur-xs p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2 text-[#84B7CE]">
                  <span className="text-xs font-bold font-mono">0{idx + 1}</span>
                  <h4 className="text-base font-semibold text-white">{symptom.name}</h4>
                </div>
                <p className="text-xs font-medium text-[#C7D9D2] mb-2">{symptom.label}</p>
                <p className="text-xs text-stone-300/90 leading-relaxed">{symptom.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Importância do Acompanhamento */}
        <div className="bg-[#C7D9D2]/25 rounded-3xl p-8 sm:p-10 border border-[#C7D9D2]/60 flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 rounded-full bg-white text-[#17385B] shadow-xs flex-shrink-0">
            <CheckCircle className="w-8 h-8 text-[#17385B]" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-xl sm:text-2xl text-[#17385B] font-medium">
              Autonomia, Informação e Afeto
            </h4>
            <p className="text-sm sm:text-base text-[#17385B]/90 leading-relaxed">
              {DIABETES_DATA.careImportance}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
