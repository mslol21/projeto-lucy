import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InstitutionalHero } from "@/components/institutional/InstitutionalHero";
import { ConditionsSection } from "@/components/institutional/ConditionsSection";
import { TherapeuticAreasSection } from "@/components/institutional/TherapeuticAreasSection";
import { LucyTrajectorySection } from "@/components/institutional/LucyTrajectorySection";
import { EvaluationStepsSection } from "@/components/institutional/EvaluationStepsSection";
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
  title: "Lucy Aihara — Fisioterapia, Dor e Movimento | Consolação, São Paulo",
  description:
    "Fisioterapia especializada no cuidado da dor, reabilitação ortopédica e recuperação do movimento na Consolação e Higienópolis. Mais de 20 anos de experiência clínica com Lucy Mie Aihara (InCor / HCFMUSP).",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lucy Aihara — Fisioterapia, Dor e Movimento na Consolação",
    description:
      "Cuidado com a dor. Liberdade para o movimento. Atendimento fisioterapêutico individualizado de 50 minutos na Rua Sergipe, 475, Consolação / Higienópolis, São Paulo.",
    url: "/",
    images: [
      {
        url: "/images/lucy-aihara-hcfmusp.jpg",
        width: 1200,
        height: 675,
        alt: "Lucy Mie Aihara — Fisioterapeuta Especialista em Dor e Movimento",
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
        "@id": "https://novembroazul.escoladefasciaterapiaemovimento.com/#lucy-mie-aihara",
        name: LUCY_PROFILE.name,
        alternateName: LUCY_PROFILE.professionalName,
        jobTitle: LUCY_PROFILE.professionalTitle,
        description: LUCY_PROFILE.shortBio,
        image: "https://novembroazul.escoladefasciaterapiaemovimento.com/images/lucy-aihara-hcfmusp.jpg",
        sameAs: [
          CONTACT_CHANNELS.social.instagram,
          CONTACT_CHANNELS.social.facebook,
          CONTACT_CHANNELS.social.linkedin,
          CONTACT_CHANNELS.social.youtube,
          CONTACT_CHANNELS.social.officialWix,
        ],
        worksFor: {
          "@type": "MedicalBusiness",
          name: CLINIC_LOCATION.clinicName,
        },
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "Faculdade de Medicina da Universidade de São Paulo (HCFMUSP / InCor)",
          },
        ],
        knowsAbout: [
          "Fisioterapia para Dor",
          "Dor Lombar e Cervical",
          "Dor Crônica",
          "Fasciaterapia Método Danis Bois",
          "Reabilitação Ortopédica",
          "Recuperação Funcional",
          "Educação Somática",
          "Fotobiomodulação",
        ],
      },
      {
        "@type": ["MedicalBusiness", "PhysiotherapyClinic", "LocalBusiness"],
        "@id": "https://novembroazul.escoladefasciaterapiaemovimento.com/#consultorio",
        name: CLINIC_LOCATION.clinicName,
        image: "https://novembroazul.escoladefasciaterapiaemovimento.com/images/placa-acrilica-consultorio.jpg",
        telephone: ["+55-11-99998-6082", "+55-11-99649-6082"],
        url: "https://novembroazul.escoladefasciaterapiaemovimento.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${CLINIC_LOCATION.street}, ${CLINIC_LOCATION.suite}`,
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
        areaServed: [
          "Consolação",
          "Higienópolis",
          "Santa Cecília",
          "Vila Buarque",
          "Bela Vista",
          "Avenida Paulista",
          "São Paulo",
        ],
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "12:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "14:00",
            closes: "18:00",
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
        {/* 1. Hero Institucional: H1, Headline, Foto Real e CTA */}
        <InstitutionalHero />

        {/* 2. Seção de Condições Atendidas na Fisioterapia da Dor */}
        <ConditionsSection />

        {/* 3. Seção de Técnicas e Abordagens Terapêuticas */}
        <TherapeuticAreasSection />

        {/* 4. Formação e Trajetória (+20 anos, InCor, HCFMUSP, Método Danis Bois) */}
        <LucyTrajectorySection />

        {/* 5. Como Funciona a Avaliação Fisioterapêutica Individual (50 min) */}
        <EvaluationStepsSection />

        {/* 6. Diferenciais Profissionais (1 a 1, tempo de escuta, consultório privativo) */}
        <CareDifferentialsSection />

        {/* 7. Depoimentos Autorizados de Pacientes */}
        <TestimonialsPreviewSection />

        {/* 8. Apresentação da Escola de Fasciaterapia e Movimento */}
        <SchoolPreviewSection />

        {/* 9. Campanhas de Saúde e Conscientização (Novembro Azul isolado) */}
        <CampaignsHighlightSection />

        {/* 10. Central de Conhecimento Científico */}
        <KnowledgeArticlesSection />

        {/* 11. FAQ Institucional com AEO / Respostas Canônicas */}
        <InstitutionalFaqSection />

        {/* 12. Localização, Horários Oficiais e Acessos */}
        <LocationSection />

        {/* CTA de Fechamento Integrado à Localização e Agendamento */}
        <InstitutionalFinalCta />
      </main>

      {/* 13. Footer Institucional Completo */}
      <Footer />
    </div>
  );
}
