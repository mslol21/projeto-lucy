import React from "react";
import Image from "next/image";
import { Compass, Sparkles, Feather, HeartHandshake, ShieldAlert, Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BODY_AWARENESS_DATA, CAMPAIGN_INFO } from "@/data/campaign-data";

export function BodyAwarenessSection() {
  const { title, intro, pillars, ethicalDisclaimer } = BODY_AWARENESS_DATA;

  return (
    <section
      id="corpo-atencao"
      className="py-20 lg:py-28 bg-[#faf8f5] relative scroll-mt-20 border-t border-stone-200/60"
      aria-labelledby="corpo-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="corpo-title"
          eyebrow="A Abordagem Somática da Escola"
          title={title}
          subtitle={intro}
        />

        {/* Destaque Editorial com Foto de Lucy Aihara (HCFMUSP) */}
        <div className="mb-16 bg-[#17385B] text-[#F5F2EB] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Foto de Lucy Aihara */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#84B7CE] to-[#C7D9D2] rounded-3xl blur-xs opacity-70 group-hover:opacity-100 transition duration-300" />
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl max-w-xs sm:max-w-sm">
                  <Image
                    src="/images/lucy-aihara-hcfmusp.jpg"
                    alt="Lucy Aihara, Fisioterapeuta e Fasciaterapeuta com jaleco do Instituto Central HCFMUSP"
                    width={420}
                    height={520}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="p-4 bg-white text-[#17385B] border-t border-stone-200">
                    <p className="font-semibold text-sm">Lucy Aihara</p>
                    <p className="text-xs text-[#415A77] mt-0.5">
                      Fisioterapia e Condicionamento (InCor / HCFMUSP)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto & Filosofia Somática */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84B7CE]/20 text-[#84B7CE] text-xs font-semibold uppercase tracking-wider border border-[#84B7CE]/30">
                <Award className="w-3.5 h-3.5" aria-hidden="true" />
                Fundadora & Docente
              </div>

              <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-[#F5F2EB]">
                &ldquo;Aprender a escutar o corpo não é uma obrigação fria; é um gesto diário de reconciliação com a própria vida.&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-[#C7D9D2] leading-relaxed">
                Com mais de 16 anos dedicados à Fasciaterapia e à Educação Perceptiva do Movimento (Método Danis Bois), Lucy Aihara alia sólida formação acadêmica no complexo HCFMUSP à vivência sensível do autocuidado, incentivando cada pessoa a desenvolver autonomia e bem-estar.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#84B7CE]">
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/10">
                  Método Danis Bois (MDB)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/10">
                  Fáscia Você Mesmo
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/10">
                  Consolação / SP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pilares do Cuidado Somático */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const icons = [
              <Feather key="1" className="w-6 h-6 text-[#17385B]" aria-hidden="true" />,
              <Compass key="2" className="w-6 h-6 text-[#17385B]" aria-hidden="true" />,
              <HeartHandshake key="3" className="w-6 h-6 text-[#17385B]" aria-hidden="true" />,
              <Sparkles key="4" className="w-6 h-6 text-[#17385B]" aria-hidden="true" />,
            ];

            return (
              <div
                key={pillar.title}
                className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xs hover:border-[#84B7CE] transition-all duration-200 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#F5F2EB]">
                    {icons[idx]}
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#17385B]">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-[#415A77] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Nota Ética de Responsabilidade Médica */}
        <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-start gap-4">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-900 flex-shrink-0 mt-0.5">
            <ShieldAlert className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-amber-950 uppercase tracking-wider">
              Compromisso Ético & Rigor Científico
            </h4>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
              {ethicalDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
