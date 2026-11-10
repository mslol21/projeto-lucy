import React from "react";
import { ExternalLink, BookOpen, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { OFFICIAL_REFERENCES } from "@/data/campaign-data";

export function ReferencesSection() {
  return (
    <section
      id="fontes"
      className="py-20 lg:py-28 bg-[#F5F2EB] relative scroll-mt-20 border-t border-stone-200/60"
      aria-labelledby="fontes-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="fontes-title"
          eyebrow="Transparência & Rigor Científico"
          title="Fontes Oficiais e Referências Técnicas"
          subtitle="A credibilidade da informação em saúde é um pilar inegociável. Todas as diretrizes abordadas nesta campanha educativa baseiam-se nos consensos das principais instituições públicas e sociedades científicas do Brasil."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {OFFICIAL_REFERENCES.map((ref) => (
            <article
              key={ref.title}
              className="bg-white/90 backdrop-blur-xs rounded-3xl rounded-tr-[48px] p-7 sm:p-8 border border-stone-200/90 shadow-[0_4px_20px_rgba(23,56,91,0.04)] flex flex-col justify-between hover:border-[#527fae] transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae]">
                    {ref.institution}
                  </span>
                  <div className="p-2.5 rounded-2xl bg-[#F5F2EB] text-[#17385B]">
                    <BookOpen className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="font-serif text-xl text-[#17385B] font-medium leading-snug">
                  {ref.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#415A77] leading-relaxed">
                  {ref.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100">
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-[#17385B] hover:text-[#527fae] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B] rounded-lg py-1.5"
                >
                  <span>Acessar portal oficial</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Compromisso de integridade da informação */}
        <div className="mt-12 p-6 rounded-2xl rounded-tr-[36px] bg-white/80 border border-stone-200/80 text-center max-w-2xl mx-auto flex items-center justify-center gap-3 shadow-2xs">
          <ShieldCheck className="w-5 h-5 text-[#17385B] flex-shrink-0" aria-hidden="true" />
          <p className="text-xs text-[#415A77] leading-relaxed">
            Revisado e curado institucionalmente em conformidade com as diretrizes do Ministério da Saúde e do INCA para 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
