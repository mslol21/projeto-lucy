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
} from "lucide-react";
import { CLINIC_LOCATION, CONTACT_CHANNELS, getWhatsAppLink } from "@/data/institutional-data";

export const metadata: Metadata = {
  title: "Contato e Localização do Consultório | Lucy Aihara — São Paulo",
  description:
    "Entre em contato com Lucy Aihara e a Escola de Fasciaterapia e Movimento. Consultório na Rua Sergipe, 475, conj 114, Consolação / Higienópolis, São Paulo. Agende pelo WhatsApp.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    title: "Contato e Localização | Lucy Aihara — Consolação, São Paulo",
    description:
      "Agende seu atendimento de Fasciaterapia ou tire dúvidas sobre formações profissionais. Consultório na Rua Sergipe, próximo ao Metrô Mackenzie.",
    url: "/contato",
  },
};

export default function ContatoPage() {
  const clinicWhatsApp = getWhatsAppLink("clinicEvaluation");
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
        <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] border-b border-[#E8E2D9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#183B2B]/10 text-[#183B2B] border border-[#183B2B]/15">
              Canais Oficiais de Atendimento
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#1A2421] font-normal tracking-tight">
              Fale Conosco e Agende sua Visita
            </h1>
            <p className="text-base sm:text-lg text-[#556370] leading-relaxed max-w-2xl mx-auto font-sans">
              Estamos à disposição para esclarecer dúvidas sobre os atendimentos individuais em
              consultório e as formações profissionais da Escola.
            </p>
          </div>
        </section>

        {/* Canais Diretos por Interesse */}
        <section className="py-16 sm:py-20 bg-white border-b border-[#E8E2D9]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A2421] text-center mb-10">
              Escolha o canal de acordo com sua necessidade
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Consulta Individual */}
              <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#E2DBD0] flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E2DBD0] flex items-center justify-center text-[#183B2B]">
                    <Sparkles className="w-6 h-6 text-[#183B2B]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#1A2421]">
                    Atendimento Clínico
                  </h3>
                  <p className="text-xs sm:text-sm text-[#556370] leading-relaxed">
                    Agende sua avaliação de Fasciaterapia e cuidado postural individualizado com Lucy Aihara.
                  </p>
                </div>
                <a
                  href={clinicWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-xs sm:text-sm transition-transform active:scale-95 text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Agendar Consulta</span>
                </a>
              </div>

              {/* Card 2: Formações e Cursos */}
              <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#E2DBD0] flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E2DBD0] flex items-center justify-center text-[#183B2B]">
                    <Building2 className="w-6 h-6 text-[#183B2B]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#1A2421]">
                    Cursos da Escola
                  </h3>
                  <p className="text-xs sm:text-sm text-[#556370] leading-relaxed">
                    Informações sobre a formação no Método Danis Bois, cronograma de workshops e inscrições.
                  </p>
                </div>
                <a
                  href={schoolWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#183B2B] hover:bg-[#122c20] text-white font-medium text-xs sm:text-sm transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                  <span>Secretaria da Escola</span>
                </a>
              </div>

              {/* Card 3: Fotobiomodulação */}
              <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#E2DBD0] flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E2DBD0] flex items-center justify-center text-[#183B2B]">
                    <Phone className="w-6 h-6 text-[#183B2B]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#1A2421]">
                    Fotobiomodulação
                  </h3>
                  <p className="text-xs sm:text-sm text-[#556370] leading-relaxed">
                    Dúvidas sobre sessões de luz aplicada, pacotes de continuidade ou primeiro atendimento.
                  </p>
                </div>
                <a
                  href={photobioWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-[#D5CDC2] text-[#1A2421] font-semibold text-xs sm:text-sm transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Saber Mais</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Localização e Mapa Integrado */}
        <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D9]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Informações de Localização */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#183B2B]">
                    Consultório Presencial
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1A2421] mt-1">
                    Higienópolis & Consolação
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#4A5568]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A2421] block">Endereço Completo:</strong>
                      <span>{CLINIC_LOCATION.fullAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A2421] block">Acesso por Metrô:</strong>
                      <span>{CLINIC_LOCATION.metroReference}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A2421] block">Pontos de Referência:</strong>
                      <span>{CLINIC_LOCATION.landmarks}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A2421] block">Horário de Funcionamento:</strong>
                      <span>Segunda a Sexta-feira: 08h às 19h (hora marcada)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1A2421] block">Telefone e WhatsApp:</strong>
                      <span>{CONTACT_CHANNELS.whatsappDisplay}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={CLINIC_LOCATION.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#183B2B] hover:text-[#25523D]"
                  >
                    <span>Abrir no Google Maps</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Mapa Incorporado */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl overflow-hidden border border-[#E2DBD0] shadow-md bg-white h-[380px] sm:h-[420px] relative">
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
