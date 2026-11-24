import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, Users, Sparkles } from "lucide-react";
import { LUCY_PROFILE } from "@/data/institutional-data";

export function LucyTrajectorySection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna Visual e Fotografia do Consultório / Placa */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-[#E2DBD0] shadow-md bg-white">
                <Image
                  src="/images/placa-acrilica-consultorio.jpg"
                  alt="Placa do consultório Lucy Aihara — Escola de Fasciaterapia e Movimento em São Paulo"
                  width={520}
                  height={380}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-white text-xs text-[#718096]">
                  Consultório na Rua Sergipe, 475 • Consolação / Higienópolis, São Paulo.
                </div>
              </div>

              {/* Destaque das credenciais */}
              <div className="p-5 rounded-2xl bg-white border border-[#E2DBD0] shadow-xs space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#183B2B] flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#C5A880]" />
                  <span>Formação e Experiência Hospitalar</span>
                </h3>
                <ul className="text-xs text-[#4A5568] space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A880] font-bold">•</span>
                    <span>Graduada em <strong>Fisioterapia</strong> e <strong>Educação Física</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A880] font-bold">•</span>
                    <span>Atuação no <strong>Instituto do Coração (InCor - HCFMUSP)</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A880] font-bold">•</span>
                    <span>Experiência no <strong>Instituto Central do HCFMUSP</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A880] font-bold">•</span>
                    <span>Formação direta no <strong>Método Danis Bois</strong> de Fasciaterapia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Coluna Narrativa E-E-A-T */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183B2B]/10 text-[#183B2B] text-xs font-semibold tracking-wider uppercase border border-[#183B2B]/15">
              <Sparkles className="w-3.5 h-3.5 text-[#4A6B5D]" />
              <span>Trajetória Profissional</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A2421] font-normal tracking-tight leading-tight">
              Mais de duas décadas dedicadas à arte, ciência e sensibilidade do movimento.
            </h2>

            <div className="space-y-4 text-base text-[#4A5568] leading-relaxed">
              <p>
                A formação multidisciplinar de Lucy Aihara, unindo <strong>Fisioterapia</strong> e{" "}
                <strong>Educação Física</strong>, permitiu construir um olhar raro sobre a saúde:
                compreender a mecânica do movimento sem perder a sensibilidade para as sutilezas da dor,
                do estresse e da respiração.
              </p>
              <p>
                Sua passagem pelos maiores centros hospitalares do país — o <strong>InCor</strong> e o{" "}
                <strong>Hospital das Clínicas da FMUSP</strong> — sedimentou o respeito pela medicina baseada
                em evidências e o rigor com a segurança clínica de cada paciente.
              </p>
              <p>
                Ao introduzir a Fasciaterapia em sua prática, Lucy encontrou a ponte definitiva entre o rigor
                biomecânico e a escuta perceptiva, fundando a <strong>Escola de Fasciaterapia e Movimento</strong>{" "}
                para transmitir esse conhecimento e acolher quem procura viver sem o peso de tensões permanentes.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#183B2B] hover:text-[#25523D] transition-colors group"
              >
                <span>Ler a biografia completa de Lucy Aihara</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
