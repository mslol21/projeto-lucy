"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import { TableOfContents } from "@/components/knowledge/TableOfContents";
import { EvidenceBadge } from "@/components/knowledge/EvidenceBadge";
import { KnowledgeArticle, getArticleBySlug } from "@/data/knowledge-data";
import {
  Calendar,
  Clock,
  UserCheck,
  ShieldAlert,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Share2
} from "lucide-react";

interface ArticleLayoutProps {
  article: KnowledgeArticle;
}

export function ArticleLayout({ article }: ArticleLayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    author: {
      "@type": "Organization",
      name: article.author.name,
      url: "https://www.escoladefasciaterapiaemovimento.com/"
    },
    publisher: {
      "@type": "Organization",
      name: "Escola de Fasciaterapia e Movimento",
      logo: {
        "@type": "ImageObject",
        url: "https://projeto-lucy.vercel.app/images/logo-horizontal-hd.png"
      }
    },
    datePublished: "2026-11-01",
    dateModified: "2026-11-09",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://projeto-lucy.vercel.app/conhecimento/${article.slug}`
    }
  };

  const relatedArticles = article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is KnowledgeArticle => Boolean(a));

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB] text-[#17385B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Barra Superior de Breadcrumb */}
        <div className="bg-white/60 border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Centro de Conhecimento", href: "/conhecimento" },
                { label: article.title }
              ]}
            />
          </div>
        </div>

        {/* Hero do Artigo */}
        <header className="relative py-12 lg:py-16 border-b border-stone-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Categoria e Selo de Evidência */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#527fae]/15 text-[#17385B]">
                  {article.category}
                </span>
                <EvidenceBadge
                  level={article.evidenceBadge.level}
                  customLabel={article.evidenceBadge.label}
                />
              </div>

              {/* Título Principal H1 */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17385B] tracking-tight leading-tight mb-4">
                {article.title}
              </h1>

              {/* Subtítulo */}
              <p className="text-lg sm:text-xl text-[#415A77] font-serif italic mb-6 leading-relaxed">
                {article.subtitle}
              </p>

              {/* Metadados Editoriais (Autor, Datas, Leitura) */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-stone-100 text-xs text-[#415A77]">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#527fae]" aria-hidden="true" />
                  <span>
                    Autoria: <strong className="text-[#17385B]">{article.author.name}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#527fae]" aria-hidden="true" />
                  <span>Atualizado em: {article.updatedAt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#527fae]" aria-hidden="true" />
                  <span>{article.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo Principal com Barra Lateral */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Coluna Central do Artigo */}
            <article className="lg:col-span-8 space-y-10">
              {/* Resumo Introdutório */}
              <div className="p-6 sm:p-8 rounded-2xl rounded-tr-[40px] bg-white border border-stone-200 shadow-2xs">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae] block mb-2">
                  Síntese Editorial
                </span>
                <p className="text-base sm:text-lg text-[#17385B] leading-relaxed">
                  {article.summary}
                </p>
              </div>

              {/* Aviso Médico Obrigatório */}
              <div className="p-5 rounded-2xl border border-amber-300 bg-amber-50/70 text-amber-950 flex items-start gap-3.5">
                <ShieldAlert className="w-5 h-5 flex-shrink-0 text-amber-700 mt-0.5" aria-hidden="true" />
                <div className="text-xs sm:text-sm leading-relaxed">
                  <strong className="block font-semibold mb-1 text-amber-900">
                    Aviso Ético de Responsabilidade Médica
                  </strong>
                  <p>{article.medicalDisclaimer}</p>
                </div>
              </div>

              {/* Seções do Artigo */}
              <div className="space-y-12">
                {article.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-2">
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
                        {section.title}
                      </h2>
                      {section.evidenceLevel && (
                        <EvidenceBadge level={section.evidenceLevel} />
                      )}
                    </div>

                    <div className="space-y-4 text-base sm:text-lg text-[#2A3F54] leading-relaxed font-sans">
                      {section.content.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>

                    {section.subsections && (
                      <div className="space-y-6 pt-4">
                        {section.subsections.map((sub, sIdx) => (
                          <div key={sIdx} className="bg-white/80 p-5 rounded-xl border border-stone-200/80 space-y-2">
                            <h3 className="font-serif text-lg font-semibold text-[#17385B]">
                              {sub.title}
                            </h3>
                            {sub.content.map((subP, spIdx) => (
                              <p key={spIdx} className="text-sm sm:text-base text-[#415A77] leading-relaxed">
                                {subP}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Referências Bibliográficas */}
              <section
                id="referencias-artigo"
                className="pt-8 border-t border-stone-300 space-y-4"
              >
                <div className="flex items-center gap-2 text-[#17385B]">
                  <BookOpen className="w-5 h-5 text-[#527fae]" aria-hidden="true" />
                  <h3 className="font-serif text-xl sm:text-2xl">
                    Fontes Bibliográficas e Diretrizes
                  </h3>
                </div>
                <p className="text-xs text-[#415A77]">
                  Referências citadas ou consultadas na elaboração deste artigo, organizadas por rigor acadêmico:
                </p>
                <ul className="space-y-3">
                  {article.references.map((ref, rIdx) => (
                    <li
                      key={rIdx}
                      className="p-3.5 bg-white rounded-xl border border-stone-200 text-xs sm:text-sm text-[#415A77] flex items-start justify-between gap-3"
                    >
                      <span>{ref.citation}</span>
                      {ref.url && (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 text-[#17385B] hover:text-[#527fae]"
                          aria-label={`Acessar fonte externa: ${ref.citation}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Botão de Retorno e Compartilhamento */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/conhecimento"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#17385B] hover:text-[#527fae]"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  <span>Voltar ao índice do Centro de Conhecimento</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#17385B] text-white text-xs font-medium hover:bg-[#1f4a75] transition-colors"
                >
                  <span>Conhecer a Campanha Novembro Azul 2026</span>
                </Link>
              </div>
            </article>

            {/* Coluna Lateral: Sumário + Artigos Relacionados */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Sumário Dinâmico */}
              <TableOfContents items={article.tableOfContents} />

              {/* Níveis de Evidência Didáticos */}
              <div className="p-5 bg-white rounded-2xl rounded-tr-[36px] border border-stone-200 space-y-3">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-[#17385B]">
                  Critérios de Evidência
                </h3>
                <p className="text-xs text-[#415A77] leading-relaxed">
                  Este artigo é regido pela Matriz de Classificação Científica da Escola, assegurando diferenciação entre dados médicos consolidados e pesquisas somáticas.
                </p>
                <Link
                  href="/conhecimento/evidencias-cientificas"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#527fae] hover:underline pt-1"
                >
                  <span>Entenda nossos 4 níveis de evidência</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Artigos Relacionados */}
              {relatedArticles.length > 0 && (
                <div className="p-5 bg-white rounded-2xl rounded-tr-[36px] border border-stone-200 space-y-4">
                  <h3 className="text-xs font-semibold tracking-wider uppercase text-[#17385B]">
                    Conteúdos Relacionados
                  </h3>
                  <div className="space-y-3">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/conhecimento/${rel.slug}`}
                        className="block p-3 rounded-xl hover:bg-stone-50 border border-stone-100 transition-colors group"
                      >
                        <span className="text-[10px] uppercase font-semibold text-[#527fae] tracking-wider block">
                          {rel.category}
                        </span>
                        <h4 className="text-sm font-serif text-[#17385B] group-hover:text-[#527fae] transition-colors line-clamp-2">
                          {rel.title}
                        </h4>
                        <span className="text-xs text-[#415A77] mt-1 block">
                          {rel.readingTime}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
