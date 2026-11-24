import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";
import { KNOWLEDGE_ARTICLES } from "@/data/knowledge-data";

export function KnowledgeArticlesSection() {
  const featuredArticles = KNOWLEDGE_ARTICLES.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183B2B]/10 text-[#183B2B] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#183B2B]/15">
              <BookOpen className="w-3.5 h-3.5 text-[#4A6B5D]" />
              <span>Central de Conhecimento Científico</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2421] font-normal tracking-tight">
              Artigos, pesquisas e fundamentos explicados com clareza.
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#556370] leading-relaxed">
              Compreenda a ciência das fáscias, a regulação da dor crônica e os benefícios de
              abordagens integrativas baseadas em evidências.
            </p>
          </div>

          <Link
            href="/conhecimento"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#183B2B] hover:text-[#25523D] transition-colors"
          >
            <span>Explorar acervo completo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between bg-white rounded-2xl border border-[#E2DBD0] p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#718096] mb-3">
                  <span className="font-semibold text-[#183B2B] uppercase tracking-wider text-[11px] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E8E2D9]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3 text-[#C5A880]" />
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl text-[#1A2421] font-normal leading-snug line-clamp-2 mt-2">
                  <Link
                    href={`/conhecimento/${article.slug}`}
                    className="hover:text-[#183B2B] transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#556370] leading-relaxed line-clamp-3 font-sans">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                <span className="text-[11px] text-[#A0AEC0]">
                  Por {article.author.name}
                </span>
                <Link
                  href={`/conhecimento/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#183B2B] hover:text-[#25523D]"
                >
                  <span>Ler artigo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
