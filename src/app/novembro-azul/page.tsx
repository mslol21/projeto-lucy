import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { NovemberBlueOfferSection } from "@/components/sections/NovemberBlueOfferSection";
import { TechniqueSummarySection } from "@/components/home/TechniqueSummarySection";
import { CampaignThemesSection } from "@/components/home/CampaignThemesSection";
import { LucySummarySection } from "@/components/home/LucySummarySection";
import { TestimonialsPreviewSection } from "@/components/home/TestimonialsPreviewSection";
import { AeoKnowledgeFaqSection } from "@/components/home/AeoKnowledgeFaqSection";
import { LocationSection } from "@/components/home/LocationSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";

export const metadata: Metadata = {
  title: "Especial Novembro Azul 2026 | Fotobiomodulação e Saúde Integral",
  description:
    "Campanha Especial Novembro Azul 2026 com Lucy Aihara: primeiro atendimento gratuito de fotobiomodulação (40 min), educação em saúde no diabetes e saúde do homem em São Paulo.",
  alternates: {
    canonical: "/novembro-azul",
  },
  openGraph: {
    title: "Especial Novembro Azul 2026 | Lucy Aihara — Fotobiomodulação Gratuita",
    description:
      "Aproveite a oferta de primeiro atendimento gratuito de fotobiomodulação individualizado de 40 minutos com Lucy Aihara na Consolação, São Paulo.",
    url: "/novembro-azul",
    images: [
      {
        url: "/images/novembro-azul-hero.webp",
        width: 1200,
        height: 675,
        alt: "Especial Novembro Azul 2026 — Lucy Aihara",
      },
    ],
  },
};

export default function NovembroAzulPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />
      <div className="bg-white/80 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            items={[
              { label: "Campanhas", href: "/campanhas" },
              { label: "Novembro Azul 2026" },
            ]}
          />
        </div>
      </div>
      <main className="flex-1">
        {/* 1. Hero: apresentação da campanha Novembro Azul 2026 */}
        <HeroSection />

        {/* 2. Oferta: primeiro atendimento gratuito de fotobiomodulação */}
        <NovemberBlueOfferSection />

        {/* 3. Apresentação da técnica: resumo e botão Saiba Mais */}
        <TechniqueSummarySection />

        {/* 4. Temas do Novembro Azul: cards curtos e links individuais */}
        <CampaignThemesSection />

        {/* 5. Lucy Aihara: apresentação profissional resumida */}
        <LucySummarySection />

        {/* 6. GEO & AEO: Perguntas e Respostas Canônicas para Assistentes de IA e Motores de Busca */}
        <AeoKnowledgeFaqSection />

        {/* 7. SEO Local: Consultório na Consolação/Higienópolis, Rotas e Acessos */}
        <LocationSection />

        {/* 8. Depoimentos: prévia dos relatos e link para página completa */}
        <TestimonialsPreviewSection />

        {/* 9. CTA final: convite para agendamento */}
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
