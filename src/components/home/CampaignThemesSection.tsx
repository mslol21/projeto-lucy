import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Activity, Shield, Sparkles, Heart } from "lucide-react";

export function CampaignThemesSection() {
  const themes = [
    {
      badge: "14 de Novembro",
      title: "Dia Mundial do Diabetes",
      description:
        "Sinais de alerta, controle da glicemia e a importância de cuidar da sensibilidade dos pés para prevenir a neuropatia periférica.",
      href: "/diabetes",
      icon: Activity,
      color: "bg-[#84B7CE]/15 text-[#17385B] border-[#84B7CE]/30",
    },
    {
      badge: "17 de Novembro",
      title: "Saúde Masculina e Próstata",
      description:
        "Quebrando preconceitos no cuidado masculino: fatores de risco, sintomas e a decisão compartilhada com base nas diretrizes do INCA.",
      href: "/saude-masculina",
      icon: Shield,
      color: "bg-[#17385B]/10 text-[#17385B] border-[#17385B]/20",
    },
    {
      badge: "Fáscia e Movimento",
      title: "O Corpo Merece Atenção",
      description:
        "Como o estresse e a dor crônica afetam a rede fascial e de que modo a percepção corporal e o movimento suave auxiliam no alívio de tensões.",
      href: "/conhecimento/fasciaterapia-e-dor",
      icon: Heart,
      color: "bg-[#C7D9D2]/30 text-[#17385B] border-[#C7D9D2]/40",
    },
    {
      badge: "Abordagem Somática",
      title: "O Método Danis Bois",
      description:
        "A origem francesa da psicopedagogia perceptiva, a escuta do movimento interno e o toque manual sutil na reeducação corporal.",
      href: "/conhecimento/metodo-danis-bois",
      icon: Sparkles,
      color: "bg-emerald-50 text-emerald-900 border-emerald-200",
    },
  ];

  return (
    <section id="temas" aria-labelledby="themes-title" className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-stone-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#527fae]">
            Eixos Educativos da Campanha
          </span>
          <h2 id="themes-title" className="font-serif text-3xl sm:text-4xl text-[#17385B]">
            Temas do Novembro Azul 2026
          </h2>
          <p className="text-sm sm:text-base text-[#415A77]">
            Conhecimento qualificado, acolhedor e baseado em evidências para você e sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, idx) => {
            const Icon = theme.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl rounded-tr-[40px] border border-stone-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${theme.color}`}>
                      {theme.badge}
                    </span>
                    <Icon className="w-4 h-4 text-[#527fae]" aria-hidden="true" />
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#17385B] group-hover:text-[#527fae] transition-colors">
                    {theme.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#415A77] leading-relaxed">
                    {theme.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <Link
                    href={theme.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17385B] group-hover:text-[#527fae] transition-colors"
                  >
                    <span>Ler conteúdo completo</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
