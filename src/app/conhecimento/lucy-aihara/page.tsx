import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import { TableOfContents } from "@/components/knowledge/TableOfContents";
import { EvidenceBadge } from "@/components/knowledge/EvidenceBadge";
import { getArticleBySlug } from "@/data/knowledge-data";
import {
  Calendar,
  Clock,
  UserCheck,
  ShieldCheck,
  ShieldAlert,
  Award,
  Hospital,
  MapPin,
  ExternalLink,
  BookOpen,
  ArrowRight
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const article = getArticleBySlug("lucy-aihara");
  if (!article) return { title: "Artigo não encontrado" };

  return {
    title: `${article.title} | Escola de Fasciaterapia`,
    description: article.summary,
    alternates: {
      canonical: `https://projeto-lucy.vercel.app/conhecimento/${article.slug}`
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://projeto-lucy.vercel.app/conhecimento/${article.slug}`,
      type: "profile"
    }
  };
}

export default function LucyAiharaPage() {
  const article = getArticleBySlug("lucy-aihara");
  if (!article) notFound();

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB] text-[#17385B]">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-white/60 border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Centro de Conhecimento", href: "/conhecimento" },
                { label: "Lucy Aihara" }
              ]}
            />
          </div>
        </div>

        {/* Hero Biográfico com Foto Oficial */}
        <header className="relative py-12 lg:py-16 border-b border-stone-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#527fae]/15 text-[#17385B]">
                    {article.category}
                  </span>
                  <EvidenceBadge level={3} customLabel="Perfil Profissional Oficial" />
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17385B] tracking-tight leading-tight">
                  Lucy Aihara
                </h1>

                <p className="text-lg sm:text-xl text-[#415A77] font-serif italic leading-relaxed">
                  {article.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-stone-100 text-xs text-[#415A77]">
                  <div className="flex items-center gap-2">
                    <Hospital className="w-4 h-4 text-[#527fae]" />
                    <span>Experiência InCor / HCFMUSP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#527fae]" />
                    <span>Fisioterapeuta e Fasciaterapeuta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#527fae]" />
                    <span>Higienópolis / Consolação, São Paulo - SP</span>
                  </div>
                </div>
              </div>

              {/* Foto Oficial Autorizada de Lucy Aihara */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative group max-w-xs">
                  <div className="relative rounded-2xl rounded-tr-[50px] overflow-hidden shadow-lg border-4 border-white bg-white">
                    <Image
                      src="/images/lucy-aihara-hcfmusp.jpg"
                      alt="Lucy Aihara com jaleco oficial do Instituto Central do HCFMUSP"
                      width={320}
                      height={400}
                      className="w-full h-auto object-cover object-top"
                      priority
                    />
                    <div className="p-3 bg-white text-center border-t border-stone-100">
                      <span className="block text-xs font-semibold text-[#17385B]">
                        Lucy Aihara
                      </span>
                      <span className="block text-[11px] text-[#415A77]">
                        Fisioterapeuta • InCor / HCFMUSP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo Biográfico com Coluna Lateral */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <article className="lg:col-span-8 space-y-10">
              {/* Síntese */}
              <div className="p-6 sm:p-8 rounded-2xl rounded-tr-[40px] bg-white border border-stone-200 shadow-2xs">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae] block mb-2">
                  Apresentação Institucional
                </span>
                <p className="text-base sm:text-lg text-[#17385B] leading-relaxed">
                  {article.summary}
                </p>
              </div>

              {/* Aviso Deontológico */}
              <div className="p-5 rounded-2xl border border-amber-300 bg-amber-50/70 text-amber-950 flex items-start gap-3.5">
                <ShieldAlert className="w-5 h-5 flex-shrink-0 text-amber-700 mt-0.5" aria-hidden="true" />
                <div className="text-xs sm:text-sm leading-relaxed">
                  <strong className="block font-semibold mb-1 text-amber-900">
                    Aviso Deontológico e Limites de Atuação
                  </strong>
                  <p>{article.medicalDisclaimer}</p>
                </div>
              </div>

              {/* Seções */}
              <div className="space-y-12">
                {article.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 space-y-4"
                  >
                    <div className="border-b border-stone-200 pb-2">
                      <h2 className="font-serif text-2xl sm:text-3xl text-[#17385B]">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-4 text-base sm:text-lg text-[#2A3F54] leading-relaxed font-sans">
                      {section.content.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Placa do Consultório */}
              <div className="p-6 sm:p-8 bg-white rounded-2xl rounded-tr-[44px] border border-stone-200 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-40 sm:w-48 flex-shrink-0">
                  <Image
                    src="/images/placa-acrilica-consultorio.jpg"
                    alt="Placa acrílica oficial do consultório da Escola de Fasciaterapia e Movimento"
                    width={200}
                    height={260}
                    className="rounded-xl shadow-xs border border-stone-200"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae]">
                    Atendimento Clínico em São Paulo
                  </span>
                  <h3 className="font-serif text-xl text-[#17385B]">
                    Consultório da Escola de Fasciaterapia e Movimento
                  </h3>
                  <p className="text-xs sm:text-sm text-[#415A77] leading-relaxed">
                    Sessões individuais de educação somática, toque fascial e ginástica sensorial conduzidas em ambiente tranquilo, seguro e privativo no coração de São Paulo (Consolação / Higienópolis).
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://www.escoladefasciaterapiaemovimento.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17385B] hover:text-[#527fae]"
                    >
                      <span>Visitar site oficial da escola</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Referências */}
              <section id="referencias" className="pt-8 border-t border-stone-300 space-y-4">
                <div className="flex items-center gap-2 text-[#17385B]">
                  <BookOpen className="w-5 h-5 text-[#527fae]" />
                  <h3 className="font-serif text-xl sm:text-2xl">Registros e Fontes</h3>
                </div>
                <ul className="space-y-2">
                  {article.references.map((ref, idx) => (
                    <li
                      key={idx}
                      className="p-3 bg-white rounded-xl border border-stone-200 text-xs sm:text-sm text-[#415A77]"
                    >
                      {ref.citation}
                    </li>
                  ))}
                </ul>
              </section>
            </article>

            {/* Coluna Lateral */}
            <aside className="lg:col-span-4 space-y-8">
              <TableOfContents items={article.tableOfContents} />

              <div className="p-5 bg-white rounded-2xl rounded-tr-[36px] border border-stone-200 space-y-4">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-[#17385B]">
                  Conheça o Método
                </h3>
                <p className="text-xs text-[#415A77] leading-relaxed">
                  Aprenda como a abordagem de Danis Bois é aplicada na prática e o que a literatura científica diz a respeito da fáscia.
                </p>
                <Link
                  href="/conhecimento/metodo-danis-bois"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#17385B] hover:text-[#527fae]"
                >
                  <span>Ler sobre o Método Danis Bois</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
