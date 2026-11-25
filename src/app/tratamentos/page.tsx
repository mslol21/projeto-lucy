import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import {
  Activity,
  SunMedium,
  Compass,
  ArrowRight,
  MessageCircle,
  Clock,
  CheckCircle2,
  HelpCircle,
  ShieldAlert,
  Sparkles,
  ShieldCheck,
  Target,
} from "lucide-react";
import {
  CONDITIONS_TREATED,
  TECHNIQUES,
  getWhatsAppLink,
  CLINIC_LOCATION,
  LUCY_PROFILE,
} from "@/data/institutional-data";

export const metadata: Metadata = {
  title: "Tratamentos e Condições Atendidas | Lucy Aihara — Fisioterapia na Consolação",
  description:
    "Conheça os tratamentos e condições atendidas por Lucy Mie Aihara em São Paulo: Dor lombar, cervical, dor crônica, reabilitação ortopédica, fisioterapia pélvica e Fasciaterapia.",
  alternates: {
    canonical: "/tratamentos",
  },
  openGraph: {
    title: "Tratamentos e Condições Atendidas | Lucy Aihara — Consolação, São Paulo",
    description:
      "Fisioterapia individualizada para o cuidado da dor, recuperação funcional e autonomia do movimento na Consolação / Higienópolis.",
    url: "/tratamentos",
  },
};

export default function TratamentosHubPage() {
  const whatsappUrl = getWhatsAppLink("painTreatment");

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2421]">
      <Header />

      <div className="bg-white/80 border-b border-[#EADBC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs items={[{ label: "Tratamentos e Condições Atendidas" }]} />
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FAF7F2] border-b border-[#EADBC8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#C0D8FF]/30 text-[#065176] border border-[#5C88C5]/30">
              Cuidado com a Dor • Liberdade para o Movimento
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#065176] font-normal tracking-tight">
              Condições Atendidas & Tratamentos
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-sans">
              Mais de 20 anos de experiência clínica no cuidado de dores na coluna, tensões cervicais,
              dor crônica e reabilitação funcional na Consolação e Higienópolis.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#065176] hover:bg-[#054362] text-white font-medium text-xs sm:text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#EFC89C]" />
                <span>Agendar Avaliação de Fisioterapia</span>
              </a>
            </div>
          </div>
        </section>

        {/* 1. Condições Atendidas */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#EADBC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#065176] block mb-2">
                Especialidades Clínicas
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#065176] font-normal">
                Qual desconforto ou condição você deseja cuidar?
              </h2>
              <p className="text-base text-neutral-600 mt-3">
                Clique na condição abaixo para entender o papel da fisioterapia, as abordagens indicadas e como funciona a consulta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CONDITIONS_TREATED.map((c) => (
                <article
                  key={c.id}
                  className="p-6 sm:p-7 rounded-2xl bg-[#FAF7F2] border border-[#EADBC8] hover:border-[#065176] transition-all flex flex-col justify-between shadow-xs hover:shadow-sm group"
                >
                  <div className="space-y-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#845924] bg-white px-2.5 py-1 rounded border border-[#EADBC8] inline-block">
                      {c.badge}
                    </span>
                    <h3 className="font-serif text-xl text-neutral-900 font-normal group-hover:text-[#065176] transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {c.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#EADBC8] flex items-center justify-between">
                    <span className="text-xs text-neutral-500">Sessão individual • 50 min</span>
                    <Link
                      href={c.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#065176] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Ver detalhes</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#5C88C5]" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Técnicas e Abordagens Terapêuticas */}
        <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EADBC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#065176] block mb-2">
                Recursos Terapêuticos
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#065176] font-normal">
                Técnicas e Abordagens Terapêuticas
              </h2>
              <p className="text-base text-neutral-600 mt-3">
                Recursos manuais, somáticos e bioestimuladores aplicados de acordo com a necessidade de cada paciente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECHNIQUES.map((t) => (
                <div
                  key={t.id}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-[#EADBC8] flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#065176] bg-[#FAF7F2] px-2.5 py-1 rounded border border-[#EADBC8] inline-block">
                      {t.badge}
                    </span>
                    <h3 className="font-serif text-xl text-neutral-900 font-normal">
                      {t.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {t.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#EADBC8]/60 flex items-center justify-between">
                    <span className="text-xs text-neutral-500">{t.durationMinutes} minutos</span>
                    <Link
                      href={t.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#065176] hover:text-[#5C88C5]"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#5C88C5]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Como funciona a avaliação */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#EADBC8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#065176]">
                Transparência e Cuidado
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#065176]">
                Como Funciona a Avaliação Fisioterapêutica Individual
              </h2>
              <p className="text-sm text-neutral-600">
                Cada atendimento é único e dedicado integralmente a você.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EADBC8] text-center space-y-2.5">
                <span className="w-8 h-8 rounded-full bg-[#065176] text-white text-xs font-bold inline-flex items-center justify-center">
                  1
                </span>
                <h3 className="font-serif text-base text-neutral-900 font-semibold">
                  Escuta Atenta e Histórico
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Conversamos com calma sobre a evolução da dor, rotinas de trabalho, estresse e exames prévios.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EADBC8] text-center space-y-2.5">
                <span className="w-8 h-8 rounded-full bg-[#065176] text-white text-xs font-bold inline-flex items-center justify-center">
                  2
                </span>
                <h3 className="font-serif text-base text-neutral-900 font-semibold">
                  Exame Palpatório da Fáscia
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Avaliação manual da viscoelasticidade tecidual, restrições e mobilidade das articulações envolvidas.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EADBC8] text-center space-y-2.5">
                <span className="w-8 h-8 rounded-full bg-[#065176] text-white text-xs font-bold inline-flex items-center justify-center">
                  3
                </span>
                <h3 className="font-serif text-base text-neutral-900 font-semibold">
                  Conduta e Plano sob Medida
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Início das técnicas manuais de alívio e definição clara da frequência e orientações práticas para o dia a dia.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EADBC8] flex items-start gap-3 text-xs text-neutral-600 leading-relaxed">
              <ShieldAlert className="w-5 h-5 text-[#845924] flex-shrink-0 mt-0.5" />
              <p>
                <strong>Aviso de responsabilidade ética:</strong> O acompanhamento fisioterapêutico é voltado à recuperação da mobilidade, alívio de tensões miofasciais e reabilitação funcional. Não substitui o diagnóstico clínico emitido por médicos especialistas.
              </p>
            </div>

            <div className="text-center pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#065176] font-bold text-sm sm:text-base shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Agendar Consulta de Fisioterapia no WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
