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
} from "lucide-react";
import { TREATMENTS, getWhatsAppLink, CLINIC_LOCATION } from "@/data/institutional-data";

export const metadata: Metadata = {
  title: "Tratamentos e Abordagens Terapêuticas | Lucy Aihara",
  description:
    "Conheça os tratamentos e abordagens integrativas de Lucy Aihara em São Paulo: Fasciaterapia (Método Danis Bois), Fotobiomodulação e Educação Perceptiva do Movimento.",
  alternates: {
    canonical: "/tratamentos",
  },
  openGraph: {
    title: "Tratamentos e Abordagens Terapêuticas | Lucy Aihara",
    description:
      "Cuidado somático individualizado, regulação fascial e estimulação celular por luz para alívio de tensões crônicas na Consolação / Higienópolis, SP.",
    url: "/tratamentos",
  },
};

export default function TratamentosPage() {
  const whatsappUrl = getWhatsAppLink("clinicEvaluation");

  const iconMap: Record<string, typeof Activity> = {
    fasciaterapia: Activity,
    fotobiomodulacao: SunMedium,
    "educacao-perceptiva": Compass,
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2421]">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white/80 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs items={[{ label: "Tratamentos e Abordagens" }]} />
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] border-b border-[#E8E2D9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#183B2B]/10 text-[#183B2B] border border-[#183B2B]/15">
              Fisioterapia & Terapias Manuais Integradas
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#1A2421] font-normal tracking-tight">
              Abordagens Terapêuticas
            </h1>
            <p className="text-base sm:text-lg text-[#556370] leading-relaxed max-w-2xl mx-auto font-sans">
              Intervenções planejadas para agir na causa mecânica e sensorial da dor, restaurando
              a fluidez da rede fascial e estimulando os recursos naturais de autorregulação do corpo.
            </p>
          </div>
        </section>

        {/* Detalhamento dos Tratamentos */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E8E2D9]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {TREATMENTS.map((treatment) => {
              const Icon = iconMap[treatment.slug] || Activity;
              return (
                <article
                  key={treatment.id}
                  id={treatment.slug}
                  className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E2DBD0] shadow-xs space-y-6 scroll-mt-24"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E2D9]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#E2DBD0] flex items-center justify-center text-[#183B2B]">
                        <Icon className="w-6 h-6 text-[#183B2B]" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A880]">
                          {treatment.badge}
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl text-[#1A2421] font-normal">
                          {treatment.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#556370] bg-white px-3 py-1.5 rounded-lg border border-[#E2DBD0]">
                      <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{treatment.durationMinutes} minutos por sessão</span>
                    </div>
                  </div>

                  <p className="text-base text-[#4A5568] leading-relaxed">
                    {treatment.fullDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="p-5 rounded-2xl bg-white border border-[#E2DBD0] space-y-3">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#183B2B]">
                        Indicações Clínicas Frequentes
                      </h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#556370]">
                        {treatment.indications.map((ind, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#4A6B5D] mt-0.5 flex-shrink-0" />
                            <span>{ind}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-[#E2DBD0] space-y-3">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#183B2B]">
                        Etapas da Sessão
                      </h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#556370]">
                        {treatment.howItWorks.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#183B2B]/10 text-[#183B2B] text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/70 border border-[#E8E2D9] text-xs text-[#556370] leading-relaxed">
                    <strong>Contexto Científico:</strong> {treatment.scientificContext}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <Link
                      href={treatment.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#183B2B] hover:text-[#25523D]"
                    >
                      <span>Ver página detalhada de {treatment.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#183B2B] hover:bg-[#122c20] text-white font-medium text-xs sm:text-sm transition-colors text-center"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                      <span>Agendar esta modalidade</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Como funciona o primeiro atendimento */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#E8E2D9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A2421]">
                Como funciona a sua primeira consulta de avaliação?
              </h2>
              <p className="text-sm text-[#556370]">
                Transparência e acolhimento desde o primeiro contato.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E2DBD0] text-center space-y-3">
                <span className="w-8 h-8 rounded-full bg-[#183B2B] text-white text-xs font-bold inline-flex items-center justify-center mx-auto">
                  1
                </span>
                <h3 className="font-serif text-base text-[#1A2421] font-normal">
                  Escuta e Anamnese
                </h3>
                <p className="text-xs text-[#556370] leading-relaxed">
                  Conversamos detalhadamente sobre suas queixas, histórico de dores, cirurgias,
                  hábitos de trabalho e rotina física.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E2DBD0] text-center space-y-3">
                <span className="w-8 h-8 rounded-full bg-[#183B2B] text-white text-xs font-bold inline-flex items-center justify-center mx-auto">
                  2
                </span>
                <h3 className="font-serif text-base text-[#1A2421] font-normal">
                  Avaliação Palpatória e Funcional
                </h3>
                <p className="text-xs text-[#556370] leading-relaxed">
                  Avaliação manual da mobilidade fascial, identificando áreas de densificação,
                  bloqueio e restrição de movimento.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E2DBD0] text-center space-y-3">
                <span className="w-8 h-8 rounded-full bg-[#183B2B] text-white text-xs font-bold inline-flex items-center justify-center mx-auto">
                  3
                </span>
                <h3 className="font-serif text-base text-[#1A2421] font-normal">
                  Plano Individualizado
                </h3>
                <p className="text-xs text-[#556370] leading-relaxed">
                  Definição conjunta dos passos seguintes: frequência indicada, orientações
                  para casa e integração com seu médico.
                </p>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-[#E2DBD0]/30 border border-[#D5CDC2] flex items-start gap-3 text-xs text-[#556370]">
              <ShieldAlert className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
              <p>
                <strong>Esclarecimento ético:</strong> Os atendimentos fisioterapêuticos individuais
                são realizados sob responsabilidade profissional de Lucy Aihara (CREFITO). Não realizamos
                diagnósticos médicos patológicos. O acompanhamento é complementar e voltado para a
                recuperação funcional e educação para a saúde.
              </p>
            </div>

            <div className="mt-8 text-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-sm sm:text-base shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Solicitar Horário no Consultório</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
