import Link from "next/link";
import { ArrowRight, Sparkles, Activity, SunMedium, Compass, CheckCircle2 } from "lucide-react";
import { TECHNIQUES } from "@/data/institutional-data";

export function TherapeuticAreasSection() {
  const iconMap: Record<string, typeof Activity> = {
    fasciaterapia: Activity,
    fotobiomodulacao: SunMedium,
    "educacao-perceptiva": Compass,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EADBC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Editorial */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C0D8FF]/30 text-[#065176] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#5C88C5]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#5C88C5]" />
            <span>Abordagens Terapêuticas e Técnicas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#065176] font-normal tracking-tight">
            Ciência da fáscia, regulação do tônus e educação do movimento.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#4A5B6D] leading-relaxed">
            Cada recurso é selecionado a partir da necessidade clínica de cada paciente, combinando
            terapia manual profunda, bioestimulação celular por luz e refinamento da consciência postural.
          </p>
        </div>

        {/* Grade de Técnicas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECHNIQUES.slice(0, 3).map((technique) => {
            const Icon = iconMap[technique.slug] || Activity;
            return (
              <div
                key={technique.id}
                className="flex flex-col bg-white rounded-[24px] border border-[#EADBC8] overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#EADBC8] flex items-center justify-center text-[#065176]">
                        <Icon className="w-6 h-6 text-[#065176]" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#845924] bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#EADBC8]">
                        {technique.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-[#065176] font-normal leading-snug">
                      {technique.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#4A5B6D] leading-relaxed font-sans">
                      {technique.shortDescription}
                    </p>

                    {/* Principais Indicações */}
                    <div className="mt-6 pt-5 border-t border-[#FAF7F2]">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#065176] mb-2.5">
                        Indicações Frequentes
                      </h4>
                      <ul className="space-y-2">
                        {technique.indications.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#5A6A7A]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5C88C5] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 flex items-center justify-between">
                    <span className="text-xs text-[#5A6A7A]">
                      Sessão: {technique.durationMinutes} min • 1 a 1
                    </span>
                    <Link
                      href={technique.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#065176] hover:text-[#5C88C5] transition-colors"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#845924]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de Esclarecimento Ético */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-[#EADBC8] text-xs text-[#4A5B6D] leading-relaxed flex items-start sm:items-center gap-3">
          <span className="text-base text-[#845924]">ℹ️</span>
          <p>
            <strong className="text-[#065176]">Aviso de responsabilidade ética em saúde:</strong> Os procedimentos fisioterapêuticos e
            integrativos descritos atuam no alívio de sobrecargas mecânicas e no aprimoramento da
            percepção corporal. Não substituem diagnósticos, cirurgias ou prescrições médicas.
          </p>
        </div>
      </div>
    </section>
  );
}
