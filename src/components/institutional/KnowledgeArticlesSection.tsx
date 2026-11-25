import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { KNOWLEDGE_ARTICLES } from "@/data/knowledge-data";

export function KnowledgeArticlesSection() {
  const featuredArticles = KNOWLEDGE_ARTICLES.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EADBC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C0D8FF]/30 text-[#065176] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#5C88C5]/30">
              <BookOpen className="w-3.5 h-3.5 text-[#065176]" />
              <span>Central de Conhecimento Científico</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#065176] font-normal tracking-tight">
              Artigos, pesquisas e fundamentos explicados com clareza.
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Compreenda a ciência das fáscias, a regulação da dor crônica e os benefícios de
              abordagens integrativas baseadas em evidências.
            </p>
          </div>

          <Link
            href="/conhecimento"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#065176] hover:text-[#5C88C5] transition-colors"
          >
            <span>Explorar acervo completo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between bg-white rounded-2xl border border-[#EADBC8] p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                  <span className="font-semibold text-[#065176] uppercase tracking-wider text-[11px] bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#EADBC8]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-neutral-500">
                    <Clock className="w-3 h-3 text-[#845924]" />
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl text-neutral-900 font-normal leading-snug line-clamp-2 mt-2">
                  <Link
                    href={`/conhecimento/${article.slug}`}
                    className="hover:text-[#065176] transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3 font-sans">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EADBC8]/60 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400">
                  Por {article.author.name}
                </span>
                <Link
                  href={`/conhecimento/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#065176] hover:text-[#5C88C5]"
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
