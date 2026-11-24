import Link from "next/link";
import { ArrowRight, Sparkles, Activity, SunMedium, Compass, CheckCircle2 } from "lucide-react";
import { TREATMENTS, getWhatsAppLink } from "@/data/institutional-data";

export function TherapeuticAreasSection() {
  const iconMap: Record<string, typeof Activity> = {
    fasciaterapia: Activity,
    fotobiomodulacao: SunMedium,
    "educacao-perceptiva": Compass,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F4EFEA] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Editorial */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183B2B]/10 text-[#183B2B] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#183B2B]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#4A6B5D]" />
            <span>Abordagens Terapêuticas Confirmadas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2421] font-normal tracking-tight">
            Ciência da fáscia, regulação do tônus e educação do movimento.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#556370] leading-relaxed">
            Cada recurso é selecionado a partir da necessidade de cada paciente, combinando
            terapia manual profunda, bioestimulação celular por luz e refinamento da consciência
            postural.
          </p>
        </div>

        {/* Grade de Tratamentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment) => {
            const Icon = iconMap[treatment.slug] || Activity;
            return (
              <div
                key={treatment.id}
                className="flex flex-col bg-white rounded-2xl border border-[#E2DBD0] overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] flex items-center justify-center text-[#183B2B]">
                        <Icon className="w-6 h-6 text-[#183B2B]" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A880] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E8E2D9]">
                        {treatment.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421] font-normal leading-snug">
                      {treatment.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#4A5568] leading-relaxed font-sans">
                      {treatment.shortDescription}
                    </p>

                    {/* Principais Indicações */}
                    <div className="mt-6 pt-5 border-t border-[#F0EBE1]">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1A2421] mb-2.5">
                        Indicações Frequentes
                      </h4>
                      <ul className="space-y-2">
                        {treatment.indications.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#556370]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#4A6B5D] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 flex items-center justify-between">
                    <span className="text-xs text-[#718096]">
                      Sessão: {treatment.durationMinutes} min • 1 a 1
                    </span>
                    <Link
                      href={treatment.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#183B2B] hover:text-[#25523D] transition-colors"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Esclarecimento Ético */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-white/70 border border-[#E2DBD0] text-xs text-[#556370] leading-relaxed flex items-start sm:items-center gap-3">
          <span className="text-sm">ℹ️</span>
          <p>
            <strong>Aviso de responsabilidade ética em saúde:</strong> Os procedimentos fisioterapêuticos e
            integrativos descritos atuam no alívio de sobrecargas mecânicas e no aprimoramento da
            percepção corporal. Não substituem diagnósticos, cirurgias ou prescrições médicas.
          </p>
        </div>
      </div>
    </section>
  );
}
