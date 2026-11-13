import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { NovemberBlueOfferSection } from "@/components/sections/NovemberBlueOfferSection";
import { TechniqueSummarySection } from "@/components/home/TechniqueSummarySection";
import { CampaignThemesSection } from "@/components/home/CampaignThemesSection";
import { LucySummarySection } from "@/components/home/LucySummarySection";
import { TestimonialsPreviewSection } from "@/components/home/TestimonialsPreviewSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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

        {/* 6. Depoimentos: prévia dos relatos e link para página completa */}
        <TestimonialsPreviewSection />

        {/* 7. CTA final: convite para agendamento */}
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
