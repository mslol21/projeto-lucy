import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/knowledge/Breadcrumbs";
import {
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Users,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";
import { SCHOOL_INFO, SCHOOL_COURSES, getWhatsAppLink } from "@/data/institutional-data";

export const metadata: Metadata = {
  title: "Escola de Fasciaterapia e Movimento | Lucy Aihara",
  description:
    "Conheça a Escola de Fasciaterapia e Movimento em São Paulo. Formações profissionais, workshops imersivos e difusão do Método Danis Bois no Brasil por Lucy Aihara.",
  alternates: {
    canonical: "/escola",
  },
  openGraph: {
    title: "Escola de Fasciaterapia e Movimento — São Paulo",
    description:
      "Formações profissionais e vivências somáticas em Fasciaterapia e Educação Perceptiva do Movimento. Fundada pela Profa. Lucy Aihara.",
    url: "/escola",
    images: [
      {
        url: "/images/logo-horizontal-hd.png",
        width: 1200,
        height: 675,
        alt: "Escola de Fasciaterapia e Movimento",
      },
    ],
  },
};

export default function EscolaPage() {
  const whatsappUrl = getWhatsAppLink("schoolCourses");

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] text-[#1A2421]">
      <Header />

      <div className="bg-white/80 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Breadcrumbs items={[{ label: "Escola de Fasciaterapia e Movimento" }]} />
        </div>
      </div>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] border-b border-[#E8E2D9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183B2B]/10 text-[#183B2B] text-xs font-semibold tracking-wider uppercase border border-[#183B2B]/15">
                  <GraduationCap className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Ensino • Pesquisa • Prática Clínica</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl text-[#1A2421] font-normal tracking-tight leading-tight">
                  Escola de Fasciaterapia <br />
                  <span className="italic text-[#183B2B] font-serif">e Movimento</span>
                </h1>

                <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed max-w-2xl font-sans">
                  {SCHOOL_INFO.mission}
                </p>

                <div className="pt-2 flex flex-wrap gap-3.5">
                  <Link
                    href="/escola/cursos"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#183B2B] hover:bg-[#122c20] text-white font-medium text-xs sm:text-sm shadow-xs transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-[#C5A880]" />
                    <span>Ver Formações e Cursos</span>
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-[#D5CDC2] text-[#1A2421] font-medium text-xs sm:text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Falar com Secretaria Acadêmica</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-white border border-[#E2DBD0] shadow-md text-center space-y-6">
                  <div className="relative w-48 h-28 mx-auto">
                    <Image
                      src="/images/logo-horizontal-hd.png"
                      alt="Logo da Escola de Fasciaterapia e Movimento"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="pt-4 border-t border-[#F0EBE1] text-xs text-[#556370] leading-relaxed">
                    Referência no ensino do Método Danis Bois de Fasciaterapia no Brasil desde 2012.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* História e Metodologia */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E8E2D9]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A2421] font-normal mb-6">
                A história e o compromisso da Escola
              </h2>
              <div className="space-y-4 text-base text-[#4A5568] leading-relaxed">
                <p>
                  Criada sob a liderança de Lucy Aihara — pioneira na formação do Método Danis Bois
                  no Brasil — a Escola de Fasciaterapia e Movimento nasceu com um propósito claro:
                  superar a dicotomia entre técnica mecânica estrita e sensibilidade humana no cuidado.
                </p>
                <p>
                  Ao longo de anos de atuação docente e clínica em São Paulo, a instituição consolidou um
                  espaço permanente de transmissão do conhecimento fascial, acolhendo fisioterapeutas,
                  educadores físicos e profissionais corporais que buscam uma prática fundamentada no rigor
                  anatômico, na palpação precisa e na educação somática.
                </p>
              </div>
            </div>

            {/* Pilares Pedagógicos */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A2421]">
                Pilares Pedagógicos da Formação
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SCHOOL_INFO.pedagogicalPillars.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2DBD0] space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2DBD0] flex items-center justify-center text-[#183B2B] font-bold">
                      {idx + 1}
                    </div>
                    <h4 className="font-serif text-base text-[#183B2B] font-semibold">
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#556370] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Público-Alvo */}
            <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E2DBD0] space-y-4">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#183B2B]" />
                <h3 className="font-serif text-xl text-[#1A2421]">
                  A quem se destinam as formações?
                </h3>
              </div>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                {SCHOOL_INFO.targetAudience}
              </p>
              <div className="pt-2">
                <Link
                  href="/escola/cursos"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#183B2B] hover:text-[#25523D]"
                >
                  <span>Ver a grade de cursos disponíveis</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA para os Cursos */}
        <section className="py-16 sm:py-20 bg-[#183B2B] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-white">
              Expanda sua atuação clínica com a ciência da fáscia
            </h2>
            <p className="text-sm sm:text-base text-[#D2DFD8] max-w-xl mx-auto font-sans">
              Entre em contato com nossa equipe pedagógica para receber o cronograma de turmas,
              ementas detalhadas e informações sobre inscrições.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold text-sm sm:text-base shadow-sm transition-transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Conversar sobre os Cursos pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
