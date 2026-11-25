import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, Award, HeartPulse, Sparkles, Clock, MapPin } from "lucide-react";
import { LUCY_PROFILE, CLINIC_LOCATION, getWhatsAppLink } from "@/data/institutional-data";

export function InstitutionalHero() {
  const whatsappUrl = getWhatsAppLink("painTreatment");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAF7F2] to-white pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#EADBC8]">
      {/* Curvas orgânicas do manual da marca no fundo */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#C0D8FF]/25 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#EFC89C]/25 rounded-full blur-3xl pointer-events-none -ml-24 -mb-24"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna de Texto e Apresentação */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#C0D8FF]/30 text-[#065176] text-xs font-semibold tracking-wider uppercase border border-[#5C88C5]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#5C88C5]" aria-hidden="true" />
              <span>{LUCY_PROFILE.siteTitle}</span>
            </div>

            <div className="space-y-4">
              <span className="block text-sm sm:text-base font-semibold tracking-wide uppercase text-[#845924]">
                {LUCY_PROFILE.headlineEditorial}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#065176] font-normal tracking-tight leading-[1.15]">
                {LUCY_PROFILE.headlineH1}
              </h1>
              <p className="text-base sm:text-lg text-[#4A5B6D] leading-relaxed max-w-2xl font-sans font-normal">
                Com <strong className="text-[#065176] font-semibold">{LUCY_PROFILE.experienceYears}</strong> e
                passagem por centros hospitalares de excelência como{" "}
                <strong className="text-[#065176] font-semibold">InCor e HCFMUSP</strong>, Lucy Mie Aihara
                oferece atendimento fisioterapêutico 1 a 1 para alívio da dor, reabilitação funcional e
                autonomia do movimento na Consolação e Higienópolis.
              </p>
            </div>

            {/* Badges de Autoridade e Segurança Clínica */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#EADBC8] shadow-xs">
                <div className="flex items-center gap-2.5 text-[#065176]">
                  <Award className="w-4 h-4 text-[#845924] flex-shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#065176]">
                    +20 Anos de Prática
                  </span>
                </div>
                <p className="text-[11px] text-[#4A5B6D] mt-1 leading-snug">
                  Experiência clínica sólida no InCor e Hospital das Clínicas (HCFMUSP)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EADBC8] shadow-xs">
                <div className="flex items-center gap-2.5 text-[#065176]">
                  <HeartPulse className="w-4 h-4 text-[#845924] flex-shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#065176]">
                    Cuidado da Dor
                  </span>
                </div>
                <p className="text-[11px] text-[#4A5B6D] mt-1 leading-snug">
                  Abordagem manual suave nas fáscias, sem manobras de estalos agressivos
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EADBC8] shadow-xs">
                <div className="flex items-center gap-2.5 text-[#065176]">
                  <ShieldCheck className="w-4 h-4 text-[#845924] flex-shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#065176]">
                    Atendimento 1 a 1
                  </span>
                </div>
                <p className="text-[11px] text-[#4A5B6D] mt-1 leading-snug">
                  Sessões de 50 minutos em consultório privativo na Rua Sergipe, 475
                </p>
              </div>
            </div>

            {/* CTAs de Ação */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#065176] hover:bg-[#5C88C5] active:scale-[0.99] text-white font-semibold text-sm sm:text-base shadow-sm transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 fill-current text-[#C0D8FF]" />
                <span>Agendar Consulta de Avaliação</span>
              </a>

              <Link
                href="/tratamentos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#EADBC8] text-[#065176] font-medium text-sm sm:text-base transition-all text-center"
              >
                <span>Ver Condições Atendidas</span>
                <ArrowRight className="w-4 h-4 text-[#845924]" />
              </Link>
            </div>

            {/* Endereço e Horários de Atendimento */}
            <div className="pt-1 text-xs text-[#5A6A7A] space-y-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#845924] flex-shrink-0" />
                <span>{CLINIC_LOCATION.fullAddress} • {CLINIC_LOCATION.metroReference}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#845924] flex-shrink-0" />
                <span>{CLINIC_LOCATION.officeHours.display}</span>
              </p>
            </div>
          </div>

          {/* Coluna da Imagem Oficial de Lucy Aihara */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Moldura com curvas orgânicas do manual */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-[#065176]/20 via-[#5C88C5]/20 to-[#EFC89C]/30 rounded-[32px] transform rotate-1 scale-[1.02] filter blur-[1px]"
                aria-hidden="true"
              />

              <div className="relative rounded-[28px] overflow-hidden bg-white border border-[#EADBC8] shadow-xl">
                <Image
                  src="/images/lucy-aihara-hcfmusp.jpg"
                  alt="Lucy Mie Aihara — Fisioterapeuta e Educadora Física com atuação no InCor e HCFMUSP"
                  width={560}
                  height={680}
                  priority
                  className="w-full h-auto object-cover object-top filter contrast-[1.02]"
                />

                <div className="p-4 sm:p-5 bg-gradient-to-t from-[#065176] via-[#08628e] to-[#0a6e9f] text-white">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className="font-serif text-lg sm:text-xl font-normal text-white">
                        {LUCY_PROFILE.name}
                      </h2>
                      <p className="text-xs text-[#EFC89C] font-sans font-medium">
                        {LUCY_PROFILE.professionalTitle}
                      </p>
                    </div>
                    <span className="inline-block text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-white/10 text-[#C0D8FF] border border-white/20">
                      Consolação • SP
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
