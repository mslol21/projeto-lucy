import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, Award, HeartPulse, Sparkles } from "lucide-react";
import { LUCY_PROFILE, CLINIC_LOCATION, getWhatsAppLink } from "@/data/institutional-data";

export function InstitutionalHero() {
  const whatsappUrl = getWhatsAppLink("clinicEvaluation");

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E8E2D9]">
      {/* Elementos orgânicos sutis de fundo */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#EBE4D8]/60 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#E2EBE5]/50 rounded-full blur-3xl pointer-events-none -ml-24 -mb-24"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna de Texto e Apresentação */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#183B2B]/10 text-[#183B2B] text-xs font-semibold tracking-wider uppercase border border-[#183B2B]/15">
              <Sparkles className="w-3.5 h-3.5 text-[#4A6B5D]" aria-hidden="true" />
              <span>Fisioterapia • Fasciaterapia • Educação Somática</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1A2421] font-normal tracking-tight leading-[1.15]">
                Cuidado individualizado, <br className="hidden sm:inline" />
                <span className="italic text-[#183B2B] font-serif">ciência do movimento</span>{" "}
                e escuta sensível do corpo.
              </h1>
              <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed max-w-2xl font-sans font-normal">
                Lucy Aihara integra a experiência clínica de instituições de referência como{" "}
                <strong className="text-[#1A2421] font-semibold">InCor e HCFMUSP</strong> à sutileza e
                profundidade da Fasciaterapia (Método Danis Bois), promovendo alívio de tensões crônicas,
                reconhecimento somático e autonomia no autocuidado.
              </p>
            </div>

            {/* Badges de Autoridade */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-white/80 border border-[#E8E2D9] shadow-xs">
                <div className="flex items-center gap-2.5 text-[#183B2B]">
                  <Award className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1A2421]">
                    InCor & HCFMUSP
                  </span>
                </div>
                <p className="text-[11px] text-[#6B7280] mt-1 leading-snug">
                  Trajetória clínica em centros hospitalares de excelência
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 border border-[#E8E2D9] shadow-xs">
                <div className="flex items-center gap-2.5 text-[#183B2B]">
                  <HeartPulse className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1A2421]">
                    Método Danis Bois
                  </span>
                </div>
                <p className="text-[11px] text-[#6B7280] mt-1 leading-snug">
                  Especialista pioneira e docente em Fasciaterapia no Brasil
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 border border-[#E8E2D9] shadow-xs">
                <div className="flex items-center gap-2.5 text-[#183B2B]">
                  <ShieldCheck className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1A2421]">
                    Atendimento 1 a 1
                  </span>
                </div>
                <p className="text-[11px] text-[#6B7280] mt-1 leading-snug">
                  Sessões individuais de 50 minutos na Consolação / Higienópolis
                </p>
              </div>
            </div>

            {/* CTAs de Ação */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#183B2B] hover:bg-[#122c20] text-white font-medium text-sm sm:text-base shadow-sm transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 text-[#C5A880]" />
                <span>Agendar Avaliação no Consultório</span>
              </a>

              <Link
                href="/sobre"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-stone-50 border border-[#D5CDC2] text-[#1A2421] font-medium text-sm sm:text-base transition-all text-center"
              >
                <span>Conhecer a Trajetória</span>
                <ArrowRight className="w-4 h-4 text-[#4A6B5D]" />
              </Link>
            </div>

            {/* Endereço e Acesso Rápido */}
            <p className="text-xs text-[#718096] pt-1">
              📍 {CLINIC_LOCATION.fullAddress} • {CLINIC_LOCATION.metroReference}
            </p>
          </div>

          {/* Coluna da Imagem Oficial de Lucy Aihara */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Moldura elegante */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-[#183B2B]/20 to-[#C5A880]/30 rounded-3xl transform rotate-2 scale-[1.02] filter blur-[1px]"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E2DBD0] shadow-xl">
                <Image
                  src="/images/lucy-aihara-hcfmusp.jpg"
                  alt="Lucy Aihara — Fisioterapeuta e Fasciaterapeuta com histórico no InCor e HCFMUSP"
                  width={560}
                  height={680}
                  priority
                  className="w-full h-auto object-cover object-top filter contrast-[1.02]"
                />

                {/* Tarja de identificação profissional */}
                <div className="p-4 sm:p-5 bg-gradient-to-t from-[#183B2B] via-[#1F4634] to-[#25523D] text-white">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className="font-serif text-lg sm:text-xl font-normal text-white">
                        {LUCY_PROFILE.name}
                      </h2>
                      <p className="text-xs text-[#C5A880] font-sans font-medium">
                        {LUCY_PROFILE.professionalTitle}
                      </p>
                    </div>
                    <span className="inline-block text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-white/10 text-[#FAF8F5] border border-white/20">
                      SP • Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
