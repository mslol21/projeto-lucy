import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, CheckCircle2, Sparkles } from "lucide-react";
import { SCHOOL_INFO, SCHOOL_COURSES } from "@/data/institutional-data";

export function SchoolPreviewSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna Texto e Apresentação da Escola */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183B2B]/10 text-[#183B2B] text-xs font-semibold tracking-wider uppercase border border-[#183B2B]/15">
              <GraduationCap className="w-3.5 h-3.5 text-[#4A6B5D]" />
              <span>Braço Educacional & Docência</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A2421] font-normal tracking-tight leading-tight">
              Escola de Fasciaterapia e Movimento.
            </h2>

            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
              Fundada por Lucy Aihara, a escola é um polo de ensino e difusão da Fasciaterapia e
              da Educação Perceptiva do Movimento (Método Danis Bois) no Brasil, formando profissionais
              comprometidos com a precisão biomecânica e o cuidado humanizado.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A2421]">
                Nossos Pilares Pedagógicos:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SCHOOL_INFO.pedagogicalPillars.map((pillar, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E2DBD0]">
                    <div className="flex items-center gap-2 text-[#183B2B] mb-1 font-semibold text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4A6B5D]" />
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-[11px] text-[#556370] leading-snug">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/escola"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#183B2B] hover:bg-[#122c20] text-white font-medium text-xs sm:text-sm shadow-xs transition-colors text-center"
              >
                <BookOpen className="w-4 h-4 text-[#C5A880]" />
                <span>Conhecer a Escola</span>
              </Link>
              <Link
                href="/escola/cursos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-[#D5CDC2] text-[#1A2421] font-medium text-xs sm:text-sm transition-colors text-center"
              >
                <span>Cursos e Formações</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#4A6B5D]" />
              </Link>
            </div>
          </div>

          {/* Coluna Visual e Logo da Escola */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-white border border-[#E2DBD0] shadow-sm text-center space-y-6">
              <div className="relative w-44 h-24 mx-auto">
                <Image
                  src="/images/logo-horizontal-hd.png"
                  alt="Escola de Fasciaterapia e Movimento"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="pt-4 border-t border-[#F0EBE1] space-y-3">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FAF8F5] text-[#183B2B] border border-[#E8E2D9]">
                  Público-Alvo das Formações
                </span>
                <p className="text-xs text-[#556370] leading-relaxed">
                  {SCHOOL_INFO.targetAudience}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-left">
                <div className="flex items-center justify-between text-xs font-semibold text-[#183B2B] mb-1">
                  <span>Próximas Turmas</span>
                  <span className="text-[10px] text-[#C5A880] uppercase tracking-wider font-bold">
                    Vagas Limitadas
                  </span>
                </div>
                <p className="text-[11px] text-[#718096]">
                  Workshops imersivos e módulos de formação com prática clínica supervisionada em São Paulo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
