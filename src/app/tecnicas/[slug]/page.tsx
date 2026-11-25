import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import {
  TECHNIQUES,
  CLINIC_LOCATION,
  LUCY_PROFILE,
  getWhatsAppLink,
  TherapeuticTechnique,
} from "@/data/institutional-data";
import {
  Activity,
  CheckCircle2,
  Clock,
  MessageCircle,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TECHNIQUES.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const technique = TECHNIQUES.find((t) => t.slug === slug);

  if (!technique) {
    return {
      title: "Técnica não encontrada | Lucy Aihara",
    };
  }

  const title = `${technique.title} | Lucy Aihara — Fisioterapia na Consolação, SP`;
  const description = `${technique.shortDescription} Atendimento individualizado com Lucy Mie Aihara na Rua Sergipe, 475, Consolação / Higienópolis.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/tecnicas/${technique.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/tecnicas/${technique.slug}`,
      images: [
        {
          url: "/images/lucy-aihara-hcfmusp.jpg",
          width: 1200,
          height: 675,
          alt: `${technique.title} — Lucy Aihara`,
        },
      ],
    },
  };
}

export default async function TechniqueDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const technique = TECHNIQUES.find((t) => t.slug === slug);

  if (!technique) {
    notFound();
  }

  const whatsappUrl = getWhatsAppLink(
    technique.slug === "fasciaterapia"
      ? "fasciatherapy"
      : technique.slug === "fotobiomodulacao"
      ? "photobiomodulation"
      : "painTreatment"
  );

  const otherTechniques = TECHNIQUES.filter((t) => t.slug !== technique.slug).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2421]">
      <Header />

      <div className="bg-white/80 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs
            items={[
              { label: "Tratamentos", href: "/tratamentos" },
              { label: technique.title },
            ]}
          />
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FAF7F2] border-b border-[#EADBC8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#C0D8FF]/30 text-[#065176] border border-[#5C88C5]/30">
              {technique.badge} • Fisioterapia Especializada
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#065176] font-normal tracking-tight">
              {technique.title}
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-sans">
              {technique.shortDescription}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#065176] font-bold text-xs sm:text-sm shadow-xs transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar Sessão de {technique.title}</span>
              </a>
              <Link
                href="/tratamentos"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-50 border border-[#EADBC8] text-[#065176] font-medium text-xs sm:text-sm transition-colors"
              >
                <span>Ver Condições Atendidas</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#5C88C5]" />
              </Link>
            </div>
          </div>
        </section>

        {/* Detalhes da Técnica */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#EADBC8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#065176] font-normal mb-4">
                Como a técnica atua no organismo
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed">
                {technique.fullDescription}
              </p>
            </div>

            {/* Etapas do Procedimento */}
            <div className="p-7 rounded-3xl bg-[#FAF7F2] border border-[#EADBC8] space-y-4">
              <h3 className="font-serif text-xl text-[#065176]">
                Como Acontece a Sessão ({technique.durationMinutes} minutos)
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-600">
                {technique.howItWorks.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#065176] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Indicações */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-[#065176]">
                Principais Indicações Clínicas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {technique.indications.map((ind, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EADBC8] flex items-start gap-2 text-xs sm:text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-[#5C88C5] mt-0.5 flex-shrink-0" />
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fundamentação Científica */}
            <div className="p-6 rounded-2xl bg-white border border-[#EADBC8] shadow-xs space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#845924] block">
                Fundamentação Científica
              </span>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {technique.scientificContext}
              </p>
            </div>

            {/* Esclarecimento Ético */}
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#EADBC8] flex items-start gap-3 text-xs text-neutral-600 leading-relaxed">
              <ShieldAlert className="w-5 h-5 text-[#845924] flex-shrink-0 mt-0.5" />
              <p>
                <strong>Esclarecimento ético:</strong> As técnicas manuais e bioestimulatórias são recursos fisioterapêuticos complementares de suporte e recuperação funcional, conduzidos sob responsabilidade de Lucy Mie Aihara. Não substituem tratamentos médicos para afecções sistêmicas.
              </p>
            </div>

            {/* Outras Técnicas */}
            <div className="pt-8 border-t border-[#EADBC8]/60">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#065176] mb-4">
                Outras Abordagens Terapêuticas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherTechniques.map((other) => (
                  <Link
                    key={other.id}
                    href={other.href}
                    className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EADBC8] hover:border-[#065176] transition-colors block group"
                  >
                    <span className="text-[10px] uppercase font-bold text-[#845924] block mb-1">
                      {other.badge}
                    </span>
                    <strong className="font-serif text-sm text-neutral-900 group-hover:text-[#065176] transition-colors block">
                      {other.title}
                    </strong>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 text-center space-y-4">
              <h3 className="font-serif text-2xl text-[#1A2421]">
                Deseja experimentar a técnica de {technique.title}?
              </h3>
              <p className="text-xs sm:text-sm text-[#556370] max-w-xl mx-auto">
                Atendimento individualizado de 50 minutos na {CLINIC_LOCATION.fullAddress}.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-sm sm:text-base shadow-sm transition-transform active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Agendar Sessão pelo WhatsApp</span>
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
