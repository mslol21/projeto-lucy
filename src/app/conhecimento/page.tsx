import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import { EvidenceBadge } from "@/components/knowledge/EvidenceBadge";
import { getAllArticles, EVIDENCE_LEVELS_INFO } from "@/data/knowledge-data";
import { BookOpen, ArrowRight, ShieldCheck, HeartPulse, Sparkles, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Centro de Conhecimento | Escola de Fasciaterapia e Movimento",
  description:
    "Portal educativo e científico permanente sobre Fasciaterapia, Método Danis Bois, dor crônica, diabetes e neuropatia diabética. Transparência metodológica e rigor ético.",
  openGraph: {
    title: "Centro de Conhecimento | Escola de Fasciaterapia e Movimento",
    description:
      "Artigos editoriais aprofundados sobre educação somática, fáscia, neuropatia diabética e a prática de Lucy Aihara.",
    url: "https://projeto-lucy.vercel.app/conhecimento",
    type: "website"
  }
};

export default function KnowledgeHubPage() {
  const articles = getAllArticles();

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB] text-[#17385B]">
      <Header />

      <main className="flex-1">
        {/* Barra Superior de Breadcrumb */}
        <div className="bg-white/60 border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Centro de Conhecimento" }]} />
          </div>
        </div>

        {/* Hero Editorial do Hub */}
        <header className="relative py-16 lg:py-24 bg-white border-b border-stone-200/80 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-[#84B7CE]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-[#C7D9D2]/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17385B]/10 text-[#17385B] text-xs font-semibold tracking-widest uppercase">
                <BookOpen className="w-3.5 h-3.5 text-[#527fae]" aria-hidden="true" />
                <span>Centro Permanente de Conhecimento</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17385B] tracking-tight leading-tight">
                Ciência, Fáscia e Consciência Corporal
              </h1>

              <p className="text-base sm:text-lg text-[#415A77] leading-relaxed">
                Um espaço dedicado a conectar pesquisas científicas em saúde, diretrizes médicas oficiais e a abordagem somática francesa do Método Danis Bois. Conteúdo educativo transparente, acolhedor e fundamentado.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#415A77]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#527fae]" />
                  4 Níveis de Classificação de Evidência
                </span>
                <span className="flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-[#527fae]" />
                  Curadoria Lucy Aihara (InCor/HCFMUSP)
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Grade de Artigos */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="space-y-4 mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
              Artigos e Guias Educativos
            </h2>
            <p className="text-sm text-[#415A77]">
              Selecione um dos temas abaixo para acessar o artigo aprofundado com sumário, fontes e notas de rigor ético.
            </p>
          </div>

          <section aria-labelledby="renal-destaque" className="mb-10 grid gap-5 rounded-2xl border border-[#C9DEE7] bg-[#EFF6F9] p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.14em] text-[#3D7794]">Novo artigo · Anatomia e saúde renal</p>
              <h3 id="renal-destaque" className="mt-2 font-serif text-2xl text-[#17385B]">A fáscia também envolve os rins?</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#415A77]">Entenda a fáscia renal, sua organização anatômica e os cuidados recomendados com os rins em pessoas com diabetes.</p>
            </div>
            <Link href="/conhecimento/fascia-renal" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#17385B] px-5 py-3 text-sm font-semibold text-white hover:bg-[#28577c]">Ler artigo <ArrowRight size={17} aria-hidden="true" /></Link>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl rounded-tr-[44px] border border-stone-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between p-6 sm:p-7 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#527fae]/15 text-[#17385B]">
                      {article.category}
                    </span>
                    <span className="text-xs text-stone-500 font-sans">
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#17385B] group-hover:text-[#527fae] transition-colors leading-snug">
                    <Link href={`/conhecimento/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#415A77] line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>

                  <div className="pt-2">
                    <EvidenceBadge
                      level={article.evidenceBadge.level}
                      customLabel={article.evidenceBadge.label}
                    />
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500">
                    Por {article.author.name}
                  </span>
                  <Link
                    href={`/conhecimento/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17385B] group-hover:text-[#527fae] transition-colors"
                  >
                    <span>Ler artigo</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Seção Explicativa: Nossos 4 Níveis de Evidência */}
          <section className="mt-16 lg:mt-24 bg-white p-8 lg:p-12 rounded-3xl rounded-tr-[60px] border border-stone-200 shadow-2xs">
            <div className="max-w-3xl space-y-3 mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae]">
                Transparência Científica
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
                Como classificamos nossas informações
              </h2>
              <p className="text-sm text-[#415A77] leading-relaxed">
                Para que você possa tomar decisões informadas e seguras sobre sua saúde, cada seção e artigo do Centro de Conhecimento é catalogado de acordo com seu nível de validação:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[1, 2, 3, 4].map((lvl) => {
                const info = EVIDENCE_LEVELS_INFO[lvl as 1 | 2 | 3 | 4];
                return (
                  <div
                    key={lvl}
                    className="p-5 rounded-2xl border border-stone-200/90 bg-[#F5F2EB]/50 flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#17385B] text-white mb-2">
                        Nível {lvl}
                      </span>
                      <h3 className="font-serif text-base font-semibold text-[#17385B]">
                        {info.title.split("—")[1]}
                      </h3>
                    </div>
                    <p className="text-xs text-[#415A77] leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#415A77] max-w-xl">
                A Escola de Fasciaterapia e Movimento não substitui consultas médicas, diagnósticos ou condutas farmacológicas prescritas por seus profissionais assistentes.
              </p>
              <Link
                href="/conhecimento/evidencias-cientificas"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#17385B] hover:text-[#527fae] transition-colors"
              >
                <span>Ver metodologia detalhada</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* Convite Especial Novembro Azul */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#17385B] to-[#1f4a75] text-[#F5F2EB] rounded-3xl rounded-tr-[56px] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase tracking-wider text-[#84B7CE] font-semibold">
                Campanha Novembro Azul 2026
              </span>
              <h3 className="font-serif text-2xl text-white">
                Experimente a Fasciaterapia: Primeiro Atendimento Gratuito
              </h3>
              <p className="text-xs sm:text-sm text-[#C7D9D2] leading-relaxed">
                Neste mês especial de conscientização, novos interessados podem vivenciar o cuidado somático sem custo no consultório de Lucy Aihara em São Paulo.
              </p>
            </div>
            <Link
              href="/#especial-novembro-azul"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#17385B] hover:bg-stone-100 font-medium text-xs sm:text-sm transition-colors flex-shrink-0 shadow-xs"
            >
              <span>Conhecer a oportunidade</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
