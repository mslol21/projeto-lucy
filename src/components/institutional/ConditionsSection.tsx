import Link from "next/link";
import { ArrowRight, CheckCircle2, Activity } from "lucide-react";
import { CONDITIONS_TREATED } from "@/data/institutional-data";

export function ConditionsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#EADBC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C0D8FF]/30 text-[#065176] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#5C88C5]/30">
            <Activity className="w-3.5 h-3.5 text-[#5C88C5]" />
            <span>Condições Atendidas no Consultório</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#065176] font-normal tracking-tight">
            Fisioterapia focada no alívio da dor e na recuperação da mobilidade.
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#4A5B6D] leading-relaxed">
            Abordagem individualizada para quem convive com dores na coluna, tensões persistentes ou
            busca recuperar a função articular sem tratamentos agressivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONDITIONS_TREATED.map((condition) => (
            <article
              key={condition.id}
              className="p-6 sm:p-7 rounded-[22px] bg-[#FAF7F2] border border-[#EADBC8] hover:border-[#5C88C5] transition-all flex flex-col justify-between shadow-xs hover:shadow-sm group"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#845924] bg-white px-2.5 py-1 rounded border border-[#EADBC8] inline-block">
                  {condition.badge}
                </span>
                <h3 className="font-serif text-xl text-[#065176] font-normal group-hover:text-[#5C88C5] transition-colors">
                  {condition.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5B6D] leading-relaxed">
                  {condition.shortDescription}
                </p>

                <ul className="pt-2 space-y-1.5 text-xs text-[#5A6A7A]">
                  {condition.commonSymptoms.slice(0, 2).map((sym, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5C88C5] mt-0.5 flex-shrink-0" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-[#EADBC8] flex items-center justify-between">
                <span className="text-xs text-[#5A6A7A]">Atendimento 1 a 1</span>
                <Link
                  href={condition.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#065176] group-hover:text-[#5C88C5] group-hover:translate-x-1 transition-all"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#845924]" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/tratamentos"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#EADBC8] text-[#065176] font-medium text-xs sm:text-sm transition-colors shadow-xs"
          >
            <span>Ver visão geral de todos os tratamentos e abordagens</span>
            <ArrowRight className="w-4 h-4 text-[#845924]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
