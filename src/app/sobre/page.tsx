import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import {
  GraduationCap,
  Award,
  Building2,
  HeartHandshake,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { LUCY_PROFILE, CLINIC_LOCATION, getWhatsAppLink } from "@/data/institutional-data";

export const metadata: Metadata = {
  title: "Sobre Lucy Aihara | Trajetória, InCor, HCFMUSP e Fasciaterapia",
  description:
    "Conheça a trajetória de Lucy Aihara: Fisioterapeuta e Educadora Física com atuação no InCor e Hospital das Clínicas da FMUSP. Pioneira e docente no Método Danis Bois de Fasciaterapia no Brasil.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: "Lucy Aihara — Biografia e Trajetória Clínica em São Paulo",
    description:
      "Mais de duas décadas dedicadas ao cuidado fisioterapêutico integrado, reabilitação física e educação somática na Consolação/Higienópolis, São Paulo.",
    url: "/sobre",
    images: [
      {
        url: "/images/lucy-aihara-hcfmusp.jpg",
        width: 1200,
        height: 675,
        alt: "Lucy Aihara — Fisioterapeuta e Fasciaterapeuta",
      },
    ],
  },
};

export default function SobrePage() {
  const whatsappUrl = getWhatsAppLink("clinicEvaluation");

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2421]">
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-white/80 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs items={[{ label: "Sobre Lucy Aihara" }]} />
        </div>
      </div>

      <main className="flex-1">
        {/* Hero da Página Sobre */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] border-b border-[#E8E2D9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183B2B]/10 text-[#183B2B] text-xs font-semibold tracking-wider uppercase border border-[#183B2B]/15">
                  <Award className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Trajetória & Filosofia Clínica</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl text-[#1A2421] font-normal tracking-tight leading-tight">
                  Lucy Aihara
                </h1>

                <p className="text-lg sm:text-xl text-[#183B2B] font-serif italic">
                  {LUCY_PROFILE.professionalTitle}
                </p>

                <p className="text-base text-[#4A5568] leading-relaxed font-sans">
                  {LUCY_PROFILE.shortBio}
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#183B2B] hover:bg-[#122c20] text-white font-medium text-xs sm:text-sm shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                    <span>Agendar Consulta de Avaliação</span>
                  </a>

                  <Link
                    href="/tratamentos"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-[#D5CDC2] text-[#1A2421] font-medium text-xs sm:text-sm transition-colors"
                  >
                    <span>Conhecer Abordagens</span>
                    <ArrowRight className="w-4 h-4 text-[#4A6B5D]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-[#E2DBD0] shadow-lg bg-white">
                  <Image
                    src="/images/lucy-aihara-hcfmusp.jpg"
                    alt="Lucy Aihara no Hospital das Clínicas da FMUSP"
                    width={480}
                    height={600}
                    priority
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#183B2B] text-white text-xs text-center">
                    Lucy Aihara • Registro profissional e sólida formação acadêmica
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biografia Detalhada e Centros de Referência */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E8E2D9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A2421] font-normal mb-6">
                A união entre o rigor biomecânico e a percepção somática
              </h2>
              <div className="space-y-4 text-base text-[#4A5568] leading-relaxed">
                {LUCY_PROFILE.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Credenciais e Marcos Formativos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#F0EBE1]">
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2DBD0] space-y-3">
                <h3 className="font-serif text-lg text-[#1A2421] flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#C5A880]" />
                  <span>Experiência Hospitalar</span>
                </h3>
                <ul className="space-y-2 text-sm text-[#556370]">
                  {LUCY_PROFILE.credentials.hospitalExperience.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A6B5D] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2DBD0] space-y-3">
                <h3 className="font-serif text-lg text-[#1A2421] flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#C5A880]" />
                  <span>Especializações e Métodos</span>
                </h3>
                <ul className="space-y-2 text-sm text-[#556370]">
                  {LUCY_PROFILE.credentials.specializations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#4A6B5D] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pilares da Abordagem de Cuidado */}
            <div className="pt-8">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A2421] font-normal mb-4">
                Como Lucy Aihara conduz cada atendimento
              </h2>
              <p className="text-base text-[#556370] mb-8">
                {LUCY_PROFILE.approach.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {LUCY_PROFILE.approach.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E2DBD0] space-y-2"
                  >
                    <h3 className="font-serif text-base text-[#183B2B] font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#556370] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Localização e Atendimento */}
        <section className="py-14 sm:py-20 bg-[#FAF8F5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A2421] font-normal">
              Atendimento em Consultório Individual
            </h2>
            <p className="text-base text-[#556370] max-w-2xl mx-auto">
              {CLINIC_LOCATION.fullAddress} • {CLINIC_LOCATION.metroReference}
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-sm sm:text-base shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Agendar Avaliação pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
