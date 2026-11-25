import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import {
  CONDITIONS_TREATED,
  CLINIC_LOCATION,
  LUCY_PROFILE,
  getWhatsAppLink,
  ClinicalCondition,
} from "@/data/institutional-data";
import {
  Activity,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CONDITIONS_TREATED.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const condition = CONDITIONS_TREATED.find((c) => c.slug === slug);

  if (!condition) {
    return {
      title: "Tratamento não encontrado | Lucy Aihara",
    };
  }

  const title = `${condition.title} | Lucy Aihara — Fisioterapia na Consolação, SP`;
  const description = `${condition.shortDescription} Atendimento fisioterapêutico individualizado com Lucy Mie Aihara na Rua Sergipe, 475, Consolação / Higienópolis.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/tratamentos/${condition.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/tratamentos/${condition.slug}`,
      images: [
        {
          url: "/images/lucy-aihara-hcfmusp.jpg",
          width: 1200,
          height: 675,
          alt: `Fisioterapia para ${condition.title} — Lucy Aihara`,
        },
      ],
    },
  };
}

export default async function ConditionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const condition = CONDITIONS_TREATED.find((c) => c.slug === slug);

  if (!condition) {
    notFound();
  }

  const messageKeyMap: Record<string, "lumbarPain" | "cervicalPain" | "chronicPain" | "orthopedicRehab" | "pelvicPhysio" | "neuropathyCare" | "painTreatment"> = {
    dor: "painTreatment",
    "dor-lombar": "lumbarPain",
    "dor-cervical": "cervicalPain",
    "dor-cronica": "chronicPain",
    "dores-musculares-articulares": "painTreatment",
    "reabilitacao-ortopedica": "orthopedicRehab",
    "recuperacao-funcional": "orthopedicRehab",
    "fisioterapia-pelvica": "pelvicPhysio",
    neuropatia: "neuropathyCare",
  };

  const messageKey = messageKeyMap[condition.slug] || "painTreatment";
  const whatsappUrl = getWhatsAppLink(messageKey);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: condition.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: condition.title,
    description: condition.shortDescription,
    url: `https://novembroazul.escoladefasciaterapiaemovimento.com/tratamentos/${condition.slug}`,
    author: {
      "@type": "Person",
      name: LUCY_PROFILE.name,
      jobTitle: "Fisioterapeuta",
    },
  };

  const otherConditions = CONDITIONS_TREATED.filter((c) => c.slug !== condition.slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2421]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Header />

      <div className="bg-white/80 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            items={[
              { label: "Tratamentos", href: "/tratamentos" },
              { label: condition.title },
            ]}
          />
        </div>
      </div>

      <main className="flex-1">
        {/* Hero da Condição */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] border-b border-[#E8E2D9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#183B2B]/10 text-[#183B2B] border border-[#183B2B]/15">
              {condition.badge} • Fisioterapia Especializada
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#1A2421] font-normal tracking-tight">
              {condition.title}
            </h1>
            <p className="text-base sm:text-lg text-[#556370] leading-relaxed max-w-2xl mx-auto font-sans">
              {condition.shortDescription}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-xs sm:text-sm shadow-xs transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar Avaliação para {condition.title}</span>
              </a>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-[#D5CDC2] text-[#1A2421] font-medium text-xs sm:text-sm transition-colors"
              >
                <span>Conhecer Lucy Aihara</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Conteúdo Completo */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E8E2D9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* O que é a condição */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A2421] font-normal mb-4">
                Compreendendo a queixa e os tecidos envolvidos
              </h2>
              <p className="text-base text-[#4A5568] leading-relaxed">
                {condition.fullDescription}
              </p>
            </div>

            {/* Sintomas e Manifestações Frequentes */}
            <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#E2DBD0] space-y-4">
              <h3 className="font-serif text-xl text-[#1A2421]">
                Sinais e Sintomas Frequentemente Relatados
              </h3>
              <p className="text-xs text-[#718096]">
                *Atenção: A presença de sintomas não constitui diagnóstico médico automático. Cada pessoa deve ser avaliada individualmente.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4A5568]">
                {condition.commonSymptoms.map((sym, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-3 bg-white rounded-xl border border-[#E8E2D9]">
                    <CheckCircle2 className="w-4 h-4 text-[#4A6B5D] mt-0.5 flex-shrink-0" />
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* O Papel da Fisioterapia */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A2421] font-normal">
                O Papel da Fisioterapia no Cuidado
              </h2>
              <p className="text-base text-[#4A5568] leading-relaxed">
                {condition.physioRole}
              </p>
            </div>

            {/* Como Funciona a Avaliação Fisioterapêutica */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421]">
                Como Funciona a Avaliação Fisioterapêutica Individual
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {condition.evaluationProcess.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E2DBD0] space-y-1">
                    <span className="w-6 h-6 rounded-full bg-[#183B2B] text-white text-xs font-bold inline-flex items-center justify-center mb-1">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#556370] leading-snug">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Abordagens Terapêuticas Possíveis */}
            <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#E2DBD0] space-y-4">
              <h3 className="font-serif text-xl text-[#1A2421]">
                Abordagens Terapêuticas que Podem ser Utilizadas
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A5568]">
                {condition.possibleApproaches.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-[#C5A880] mt-0.5 flex-shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Limitações Éticas */}
            <div className="p-5 rounded-2xl bg-[#E2DBD0]/30 border border-[#D5CDC2] flex items-start gap-3 text-xs text-[#556370] leading-relaxed">
              <ShieldAlert className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1A2421] block mb-1">Esclarecimento Ético e Limitações:</strong>
                <span>{condition.ethicalLimitations}</span>
              </div>
            </div>

            {/* FAQ da Condição */}
            {condition.faqs.length > 0 && (
              <div className="space-y-4 pt-4">
                <h3 className="font-serif text-2xl text-[#1A2421] font-normal mb-4">
                  Dúvidas Frequentes sobre {condition.title}
                </h3>
                <div className="space-y-3">
                  {condition.faqs.map((f, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9] space-y-2">
                      <h4 className="font-serif text-base text-[#183B2B] font-semibold">
                        {f.q}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#556370] leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outras Condições Relacionadas */}
            <div className="pt-8 border-t border-[#F0EBE1]">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#183B2B] mb-4">
                Outras Condições Atendidas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherConditions.map((other) => (
                  <Link
                    key={other.id}
                    href={other.href}
                    className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DBD0] hover:border-[#183B2B] transition-colors block group"
                  >
                    <span className="text-[10px] uppercase font-bold text-[#C5A880] block mb-1">
                      {other.badge}
                    </span>
                    <strong className="font-serif text-sm text-[#1A2421] group-hover:text-[#183B2B] transition-colors block">
                      {other.title}
                    </strong>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA de Agendamento */}
            <div className="pt-6 text-center space-y-4">
              <h3 className="font-serif text-2xl text-[#1A2421]">
                Deseja agendar sua avaliação para {condition.title}?
              </h3>
              <p className="text-xs sm:text-sm text-[#556370] max-w-xl mx-auto">
                Atendimento individualizado de 50 minutos na {CLINIC_LOCATION.fullAddress}. {CLINIC_LOCATION.metroReference}.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-sm sm:text-base shadow-sm transition-transform active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Agendar Consulta pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
