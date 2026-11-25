import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import {
  GraduationCap,
  Clock,
  MapPin,
  CheckCircle2,
  MessageCircle,
  HelpCircle,
  BookOpen,
} from "lucide-react";
import { SCHOOL_COURSES, getWhatsAppLink } from "@/data/institutional-data";

export const metadata: Metadata = {
  title: "Cursos e Formações em Fasciaterapia | Escola de Fasciaterapia",
  description:
    "Confira a grade de cursos, workshops imersivos e formação profissional em Fasciaterapia (Método Danis Bois) com Lucy Aihara em São Paulo.",
  alternates: {
    canonical: "/escola/cursos",
  },
  openGraph: {
    title: "Cursos e Formações em Fasciaterapia — Escola de Fasciaterapia e Movimento",
    description:
      "Capacitação para fisioterapeutas, educadores físicos e profissionais de movimento em São Paulo.",
    url: "/escola/cursos",
  },
};

export default function EscolaCursosPage() {
  const whatsappUrl = getWhatsAppLink("schoolCourses");

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2421]">
      <Header />

      <div className="bg-white/80 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            items={[
              { label: "Escola", href: "/escola" },
              { label: "Cursos e Formações" },
            ]}
          />
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FAF7F2] border-b border-[#EADBC8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#C0D8FF]/30 text-[#065176] border border-[#5C88C5]/30">
              Grade Acadêmica & Capacitação Profissional
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#065176] font-normal tracking-tight">
              Cursos, Workshops e Formações
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-sans">
              Programas estruturados para desenvolver a precisão palpatória, o raciocínio clínico
              miofascial e a sensibilidade somática em ambiente profissional ético.
            </p>
          </div>
        </section>

        {/* Lista de Cursos */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#EADBC8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {SCHOOL_COURSES.map((course) => (
              <article
                key={course.id}
                id={course.slug}
                className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-[#EADBC8] shadow-xs space-y-6 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EADBC8]/60">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#845924]">
                      {course.level}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#065176] font-normal">
                      {course.title}
                    </h2>
                  </div>

                  <span
                    className={`inline-block px-3 py-1.5 rounded-full text-xs font-semibold ${
                      course.status === "Inscrições Abertas"
                        ? "bg-[#C0D8FF]/40 text-[#065176] border border-[#5C88C5]/40"
                        : "bg-[#EADBC8] text-neutral-700"
                    }`}
                  >
                    {course.status}
                  </span>
                </div>

                <p className="text-base text-neutral-600 leading-relaxed">
                  {course.summary}
                </p>

                {/* Dados Rápidos */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-neutral-600">
                  <div className="p-3.5 rounded-xl bg-white border border-[#EADBC8] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#845924] flex-shrink-0" />
                    <span>Carga: {course.workload}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#EADBC8] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#845924] flex-shrink-0" />
                    <span>Formato: {course.format}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#EADBC8] flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#845924] flex-shrink-0" />
                    <span>Público: {course.targetAudience.slice(0, 30)}...</span>
                  </div>
                </div>

                {/* Conteúdo Programático */}
                <div className="p-5 rounded-2xl bg-white border border-[#EADBC8] space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#065176]">
                    Ementa e Tópicos Principais
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-600">
                    {course.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#5C88C5] mt-0.5 flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pré-requisitos e Inscrição */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-neutral-500">
                    <strong>Pré-requisito:</strong> {course.prerequisites}
                  </span>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#065176] hover:bg-[#054362] text-white font-medium text-xs sm:text-sm transition-colors text-center flex-shrink-0"
                  >
                    <MessageCircle className="w-4 h-4 text-[#EFC89C]" />
                    <span>Solicitar Ementa e Inscrição</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Informações sobre Turmas e Inscrições */}
        <section className="py-14 sm:py-20 bg-[#FAF7F2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#065176]">
              Dúvidas sobre o processo de inscrição?
            </h2>
            <p className="text-sm text-neutral-600 max-w-xl mx-auto">
              Nossa equipe pedagógica orienta sobre grade horária, opções de pagamento e
              adequação do seu perfil acadêmico para cada módulo.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-sm sm:text-base shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Conversar com a Secretaria Acadêmica</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
