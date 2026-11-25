import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Mail,
  Navigation,
  Train,
  ShieldCheck,
  Building2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { CLINIC_LOCATION, CONTACT_CHANNELS, LUCY_PROFILE, getWhatsAppLink } from "@/data/institutional-data";

export const metadata: Metadata = {
  title: "Contato e Agendamentos | Lucy Aihara — Fisioterapia na Consolação, SP",
  description:
    "Agende sua avaliação fisioterapêutica com Lucy Mie Aihara na Consolação / Higienópolis. Telefones: (11) 99998-6082 e (11) 99649-6082. Atendimento de seg a sex das 8h às 12h e 14h às 18h.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato e Agendamentos | Lucy Aihara — Consolação, São Paulo",
    description:
      "Consultório na Rua Sergipe, 475, conjunto 114. Fácil acesso pelo Metrô Higienópolis-Mackenzie. Atendimento com hora marcada.",
    url: "/contato",
  },
};

export default function ContatoPage() {
  const clinicWhatsApp = getWhatsAppLink("painTreatment");
  const schoolWhatsApp = getWhatsAppLink("schoolCourses");
  const photobioWhatsApp = getWhatsAppLink("photobiomodulation");

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2421]">
      <Header />

      <div className="bg-white/80 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs items={[{ label: "Contato e Localização" }]} />
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FAF7F2] border-b border-[#EADBC8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#C0D8FF]/30 text-[#065176] border border-[#5C88C5]/30">
              {LUCY_PROFILE.siteTitle}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#065176] font-normal tracking-tight">
              Agendamentos e Canais de Contato
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-sans">
              Entre em contato para agendar sua consulta de fisioterapia para dor na Consolação
              ou tirar dúvidas sobre as formações da Escola de Fasciaterapia e Movimento.
            </p>
          </div>
        </section>

        {/* Canais Diretos por Interesse */}
        <section className="py-16 sm:py-20 bg-white border-b border-[#EADBC8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#065176] text-center mb-10">
              Escolha o canal de acordo com sua necessidade
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Fisioterapia da Dor */}
              <div className="p-7 rounded-3xl bg-[#FAF7F2] border border-[#EADBC8] flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#EADBC8] flex items-center justify-center text-[#065176]">
                    <Sparkles className="w-6 h-6 text-[#065176]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#065176]">
                    Fisioterapia & Dor
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Avaliação fisioterapêutica individual para dor lombar, cervical, dor crônica e recuperação funcional.
                  </p>
                </div>
                <a
                  href={clinicWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#065176] font-bold text-xs sm:text-sm transition-transform active:scale-95 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Agendar Consulta</span>
                </a>
              </div>

              {/* Card 2: Formações da Escola */}
              <div className="p-7 rounded-3xl bg-[#FAF7F2] border border-[#EADBC8] flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#EADBC8] flex items-center justify-center text-[#065176]">
                    <Building2 className="w-6 h-6 text-[#065176]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#065176]">
                    Cursos da Escola
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Informações sobre a formação profissional no Método Danis Bois, workshops imersivos e inscrições.
                  </p>
                </div>
                <a
                  href={schoolWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#065176] hover:bg-[#054362] text-white font-medium text-xs sm:text-sm transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#EFC89C]" />
                  <span>Secretaria Acadêmica</span>
                </a>
              </div>

              {/* Card 3: Fotobiomodulação */}
              <div className="p-7 rounded-3xl bg-[#FAF7F2] border border-[#EADBC8] flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#EADBC8] flex items-center justify-center text-[#065176]">
                    <Phone className="w-6 h-6 text-[#065176]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#065176]">
                    Fotobiomodulação
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Sessões complementares de bioestimulação por luz celular, pacotes e primeiro atendimento.
                  </p>
                </div>
                <a
                  href={photobioWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#EADBC8] text-[#065176] font-semibold text-xs sm:text-sm transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#5C88C5]" />
                  <span>Saber Mais</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Localização, Telefones Oficiais e Mapa */}
        <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#EADBC8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Informações de Localização */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#065176]">
                    Consultório Presencial
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#065176] mt-1">
                    Consolação & Higienópolis
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-neutral-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#845924] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900 block">Endereço Completo:</strong>
                      <span>{CLINIC_LOCATION.fullAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#845924] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900 block">Horário de Funcionamento:</strong>
                      <span>{CLINIC_LOCATION.officeHours.display}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#845924] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900 block">Telefones Oficiais:</strong>
                      <p>Principal: <a href={`tel:+${CONTACT_CHANNELS.phoneMainRaw}`} className="font-semibold text-[#065176] hover:underline">{CONTACT_CHANNELS.phoneMainDisplay}</a></p>
                      <p>Secundário: <a href={`tel:+${CONTACT_CHANNELS.phoneSecondaryRaw}`} className="font-semibold text-[#065176] hover:underline">{CONTACT_CHANNELS.phoneSecondaryDisplay}</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 text-[#845924] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900 block">Acesso por Transporte:</strong>
                      <span>{CLINIC_LOCATION.metroReference}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-[#845924] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900 block">Pontos de Referência:</strong>
                      <span>{CLINIC_LOCATION.landmarks}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={CLINIC_LOCATION.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#065176] hover:text-[#5C88C5]"
                  >
                    <span>Abrir rota no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Mapa Incorporado */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl overflow-hidden border border-[#EADBC8] shadow-md bg-white h-[380px] sm:h-[420px] relative">
                  <iframe
                    src={CLINIC_LOCATION.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de Localização do Consultório Lucy Aihara na Rua Sergipe"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
