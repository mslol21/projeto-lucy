import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import {
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";
import { CAMPAIGNS_HUB } from "@/data/institutional-data";

export const metadata: Metadata = {
  title: "Campanhas de Saúde e Conscientização | Lucy Aihara",
  description:
    "Conheça as campanhas e ações de conscientização promovidas por Lucy Aihara e a Escola de Fasciaterapia e Movimento: Especial Novembro Azul 2026, saúde integral e prevenção.",
  alternates: {
    canonical: "/campanhas",
  },
  openGraph: {
    title: "Campanhas de Saúde e Conscientização — Lucy Aihara",
    description:
      "Ações educativas dedicadas à prevenção, diabetes, saúde masculina e cuidado somático.",
    url: "/campanhas",
  },
};

export default function CampanhasPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2421]">
      <Header />

      <div className="bg-white/80 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs items={[{ label: "Campanhas de Conscientização" }]} />
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FAF7F2] border-b border-[#EADBC8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#C0D8FF]/30 text-[#065176] border border-[#5C88C5]/30">
              Responsabilidade Social & Educação em Saúde
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#065176] font-normal tracking-tight">
              Campanhas de Conscientização
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-sans">
              Acreditamos que a informação qualificada transforma hábitos. Desenvolvemos campanhas
              temáticas que aproximam a ciência médica e a educação somática do cotidiano das pessoas.
            </p>
          </div>
        </section>

        {/* Grade de Campanhas */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#EADBC8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {CAMPAIGNS_HUB.map((camp) => (
              <article
                key={camp.id}
                className={`p-8 sm:p-10 rounded-3xl border transition-all ${
                  camp.id === "novembro-azul-2026"
                    ? "bg-gradient-to-br from-[#065176] via-[#103E58] to-[#065176] text-white border-[#5C88C5]/40 shadow-lg"
                    : "bg-[#FAF7F2] text-neutral-900 border-[#EADBC8] shadow-xs"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="space-y-1">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full inline-block ${
                        camp.id === "novembro-azul-2026"
                          ? "bg-[#C0D8FF]/20 text-[#C0D8FF] border border-[#C0D8FF]/30"
                          : "bg-white text-[#065176] border border-[#EADBC8]"
                      }`}
                    >
                      {camp.badge} • {camp.period}
                    </span>
                    <h2
                      className={`font-serif text-2xl sm:text-4xl font-normal pt-2 ${
                        camp.id === "novembro-azul-2026" ? "text-white" : "text-[#065176]"
                      }`}
                    >
                      {camp.title}
                    </h2>
                  </div>

                  <span
                    className={`text-xs ${
                      camp.id === "novembro-azul-2026" ? "text-[#EFC89C]" : "text-[#845924]"
                    }`}
                  >
                    {camp.subtitle}
                  </span>
                </div>

                <p
                  className={`mt-6 text-base leading-relaxed ${
                    camp.id === "novembro-azul-2026" ? "text-blue-100" : "text-neutral-600"
                  }`}
                >
                  {camp.summary}
                </p>

                {/* Destaques */}
                <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
                  <h3
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      camp.id === "novembro-azul-2026" ? "text-[#C0D8FF]" : "text-[#065176]"
                    }`}
                  >
                    Ações incluídas na campanha:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                    {camp.highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2 ${
                          camp.id === "novembro-azul-2026" ? "text-[#C0D8FF]" : "text-neutral-600"
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            camp.id === "novembro-azul-2026" ? "text-[#EFC89C]" : "text-[#5C88C5]"
                          }`}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 flex justify-end">
                  <Link
                    href={camp.href}
                    className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                      camp.id === "novembro-azul-2026"
                        ? "bg-[#5C88C5] hover:bg-[#4b77b2] text-white shadow-sm"
                        : "bg-[#065176] hover:bg-[#054362] text-white"
                    }`}
                  >
                    <span>Acessar Campanha Completa</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
