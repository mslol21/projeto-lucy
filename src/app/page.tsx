import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InstitutionalHero } from "@/components/institutional/InstitutionalHero";
import { TherapeuticAreasSection } from "@/components/institutional/TherapeuticAreasSection";
import { LucyTrajectorySection } from "@/components/institutional/LucyTrajectorySection";
import { CareDifferentialsSection } from "@/components/institutional/CareDifferentialsSection";
import { SchoolPreviewSection } from "@/components/institutional/SchoolPreviewSection";
import { CampaignsHighlightSection } from "@/components/institutional/CampaignsHighlightSection";
import { KnowledgeArticlesSection } from "@/components/institutional/KnowledgeArticlesSection";
import { InstitutionalFaqSection } from "@/components/institutional/InstitutionalFaqSection";
import { InstitutionalFinalCta } from "@/components/institutional/InstitutionalFinalCta";
import { LocationSection } from "@/components/home/LocationSection";
import { TestimonialsPreviewSection } from "@/components/home/TestimonialsPreviewSection";
import { LUCY_PROFILE, CLINIC_LOCATION, CONTACT_CHANNELS } from "@/data/institutional-data";

export const metadata: Metadata = {
  title: "Lucy Aihara | Fisioterapia, Fasciaterapia e Movimento em São Paulo",
  description:
    "Consultório de Fisioterapia e Fasciaterapia de Lucy Aihara em São Paulo (Consolação/Higienópolis). Atendimento individualizado com experiência no InCor e HCFMUSP. Fundadora da Escola de Fasciaterapia e Movimento.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lucy Aihara | Fisioterapia, Fasciaterapia e Movimento em São Paulo",
    description:
      "Cuidado individualizado, ciência da fáscia e escuta sensível do corpo na Consolação/Higienópolis, São Paulo. Agende sua avaliação com Lucy Aihara.",
    url: "/",
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

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://novembroazul.escoladefasciaterapiaemovimento.com/#lucy-aihara",
        name: LUCY_PROFILE.name,
        jobTitle: LUCY_PROFILE.professionalTitle,
        description: LUCY_PROFILE.shortBio,
        image: "https://novembroazul.escoladefasciaterapiaemovimento.com/images/lucy-aihara-hcfmusp.jpg",
        worksFor: {
          "@type": "MedicalBusiness",
          name: CLINIC_LOCATION.clinicName,
        },
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "Faculdade de Medicina da USP (HCFMUSP / InCor)",
          },
        ],
        knowsAbout: [
          "Fasciaterapia",
          "Método Danis Bois",
          "Fisioterapia",
          "Educação Somática",
          "Fotobiomodulação",
          "Dor Crônica",
        ],
      },
      {
        "@type": ["MedicalBusiness", "PhysiotherapyClinic", "LocalBusiness"],
        "@id": "https://novembroazul.escoladefasciaterapiaemovimento.com/#consultorio",
        name: CLINIC_LOCATION.clinicName,
        image: "https://novembroazul.escoladefasciaterapiaemovimento.com/images/placa-acrilica-consultorio.jpg",
        telephone: "+55-11-99998-6082",
        url: "https://novembroazul.escoladefasciaterapiaemovimento.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: CLINIC_LOCATION.street + ", " + CLINIC_LOCATION.suite,
          addressLocality: CLINIC_LOCATION.city,
          addressRegion: CLINIC_LOCATION.state,
          postalCode: CLINIC_LOCATION.postalCode,
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CLINIC_LOCATION.coordinates.lat,
          longitude: CLINIC_LOCATION.coordinates.lng,
        },
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "19:00",
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2421]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />

      <main className="flex-1">
        {/* 1. Hero Institucional Premium */}
        <InstitutionalHero />

        {/* 2. Áreas de Atuação e Abordagens Clínicas */}
        <TherapeuticAreasSection />

        {/* 3. Trajetória Profissional (InCor, HCFMUSP, Método Danis Bois) */}
        <LucyTrajectorySection />

        {/* 4. Diferenciais do Atendimento Individualizado */}
        <CareDifferentialsSection />

        {/* 5. Escola de Fasciaterapia e Movimento */}
        <SchoolPreviewSection />

        {/* 6. Campanhas de Saúde e Conscientização */}
        <CampaignsHighlightSection />

        {/* 7. Depoimentos Autorizados */}
        <TestimonialsPreviewSection />

        {/* 8. Artigos em Destaque da Central de Conhecimento */}
        <KnowledgeArticlesSection />

        {/* 9. Perguntas Frequentes Institucionais (AEO) */}
        <InstitutionalFaqSection />

        {/* 10. Localização e Acessos (Consolação / Higienópolis) */}
        <LocationSection />

        {/* 11. CTA Final para Agendamento via WhatsApp */}
        <InstitutionalFinalCta />
      </main>

      <Footer />
    </div>
  );
}
