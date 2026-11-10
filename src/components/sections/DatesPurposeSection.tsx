import React from "react";
import Image from "next/image";
import { Calendar, ArrowRight, Activity, ShieldAlert, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { CAMPAIGN_INFO } from "@/data/campaign-data";

export function DatesPurposeSection() {
  const { diabetes, menHealth } = CAMPAIGN_INFO.dates;

  return (
    <section
      id="datas"
      className="py-20 lg:py-28 bg-[#F5F2EB] relative scroll-mt-20 border-t border-stone-200/60"
      aria-labelledby="datas-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="datas-title"
          eyebrow="Propósito da Campanha"
          title="Duas Datas, Um Só Olhar de Cuidado"
          subtitle="O mês de novembro une duas importantes frentes mundiais de conscientização. Nosso convite é transformar lembretes do calendário em hábitos contínuos de respeito ao próprio corpo."
        />

        {/* Dois Cartões Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {/* Cartão 1: 14 de Novembro — Diabetes */}
          <article className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xs hover:border-[#84B7CE] transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#84B7CE]/10 rounded-bl-[80px] pointer-events-none transition-transform group-hover:scale-110" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#84B7CE]/20 text-[#17385B]">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  {diabetes.day}
                </span>
                <div className="p-3 rounded-2xl bg-[#F5F2EB] text-[#17385B] group-hover:bg-[#17385B] group-hover:text-[#F5F2EB] transition-colors">
                  <Activity className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>

              <div>
                <span className="text-xs font-medium text-[#84B7CE] uppercase tracking-wider block mb-1">
                  {diabetes.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B] font-medium leading-tight">
                  {diabetes.title}
                </h3>
              </div>

              <p className="text-[#415A77] text-base leading-relaxed">
                {diabetes.summary} Compreender o funcionamento da glicose e os sinais que o corpo emite é o alicerce para uma vida plena, com qualidade e segurança.
              </p>
            </div>

            <div className="pt-8">
              <Button
                asAnchor
                href={diabetes.href}
                variant="outline"
                size="md"
                className="w-full justify-between group-hover:border-[#17385B] group-hover:bg-[#17385B] group-hover:text-white"
              >
                <span>Aprofundar sobre o diabetes</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </article>

          {/* Cartão 2: 17 de Novembro — Câncer de Próstata */}
          <article className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xs hover:border-[#17385B] transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#17385B]/10 rounded-bl-[80px] pointer-events-none transition-transform group-hover:scale-110" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#17385B]/10 text-[#17385B]">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  {menHealth.day}
                </span>
                <div className="p-3 rounded-2xl bg-[#F5F2EB] text-[#17385B] group-hover:bg-[#17385B] group-hover:text-[#F5F2EB] transition-colors">
                  <ShieldAlert className="w-6 h-6" aria-hidden="true" />
                </div>
              </div>

              <div>
                <span className="text-xs font-medium text-[#17385B] uppercase tracking-wider block mb-1">
                  {menHealth.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B] font-medium leading-tight">
                  {menHealth.title}
                </h3>
              </div>

              <p className="text-[#415A77] text-base leading-relaxed">
                {menHealth.summary} Quebrar a cultura do silêncio, promover o diálogo franco com o médico e tomar decisões conscientes e informadas sobre a saúde da próstata.
              </p>
            </div>

            <div className="pt-8">
              <Button
                asAnchor
                href={menHealth.href}
                variant="outline"
                size="md"
                className="w-full justify-between group-hover:border-[#17385B] group-hover:bg-[#17385B] group-hover:text-white"
              >
                <span>Aprofundar sobre saúde masculina</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </article>
        </div>

        {/* Bloco de Apresentação Editorial Institucional com o Caderno Oficial */}
        <div className="bg-white/80 rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group max-w-[220px] rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-white">
                <Image
                  src="/images/escola-material-institucional.png"
                  alt="Caderno institucional educativo da Escola de Fasciaterapia e Movimento"
                  width={240}
                  height={320}
                  className="w-full h-auto object-contain transition-transform group-hover:scale-103"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#84B7CE]">
                <BookOpen className="w-4 h-4 text-[#84B7CE]" aria-hidden="true" />
                <span>Educação Somática & Consciência em Saúde</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#17385B] font-medium">
                Conhecimento para o Dia a Dia
              </h3>
              <p className="text-[#415A77] text-sm sm:text-base leading-relaxed">
                A Escola de Fasciaterapia e Movimento desenvolve materiais e metodologias autorais para que você compreenda as respostas do seu corpo, estimulando a autorregulação e a autonomia no cuidado preventivo.
              </p>
              <div className="pt-1">
                <a
                  href={CAMPAIGN_INFO.institution.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17385B] hover:text-[#84B7CE] transition-colors"
                >
                  <span>Conhecer publicações da Escola</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
