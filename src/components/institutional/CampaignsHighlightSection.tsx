import Link from "next/link";
import { ArrowRight, HeartHandshake, Sparkles, CheckCircle2 } from "lucide-react";
import { CAMPAIGNS_HUB } from "@/data/institutional-data";

export function CampaignsHighlightSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F4EFEA] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183B2B]/10 text-[#183B2B] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#183B2B]/15">
              <HeartHandshake className="w-3.5 h-3.5 text-[#4A6B5D]" />
              <span>Campanhas de Saúde & Conscientização</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A2421] font-normal tracking-tight">
              Informação de qualidade também é uma forma de cuidar.
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#556370] leading-relaxed">
              Iniciativas dedicadas a aproximar a comunidade de temas essenciais como prevenção,
              cuidado somático no diabetes e valorização da saúde integral.
            </p>
          </div>

          <Link
            href="/campanhas"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#183B2B] hover:text-[#25523D] transition-colors"
          >
            <span>Ver todas as campanhas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grade de Campanhas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAMPAIGNS_HUB.map((camp) => (
            <div
              key={camp.id}
              className={`flex flex-col justify-between rounded-2xl border p-7 sm:p-8 transition-all ${
                camp.id === "novembro-azul-2026"
                  ? "bg-gradient-to-br from-[#17385B] to-[#1E4A78] text-white border-[#84B7CE]/30 shadow-md"
                  : "bg-white text-[#1A2421] border-[#E2DBD0] shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      camp.id === "novembro-azul-2026"
                        ? "bg-[#84B7CE]/20 text-[#84B7CE] border border-[#84B7CE]/40"
                        : "bg-[#FAF8F5] text-[#183B2B] border border-[#E8E2D9]"
                    }`}
                  >
                    {camp.badge} • {camp.period}
                  </span>
                </div>

                <h3
                  className={`font-serif text-2xl sm:text-3xl font-normal leading-snug ${
                    camp.id === "novembro-azul-2026" ? "text-white" : "text-[#1A2421]"
                  }`}
                >
                  {camp.title}
                </h3>

                <p
                  className={`mt-2 text-xs sm:text-sm font-medium ${
                    camp.id === "novembro-azul-2026" ? "text-[#C7D9D2]" : "text-[#183B2B]"
                  }`}
                >
                  {camp.subtitle}
                </p>

                <p
                  className={`mt-4 text-xs sm:text-sm leading-relaxed ${
                    camp.id === "novembro-azul-2026" ? "text-blue-100" : "text-[#556370]"
                  }`}
                >
                  {camp.summary}
                </p>

                {/* Destaques da Campanha */}
                <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
                  {camp.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2 text-xs ${
                        camp.id === "novembro-azul-2026" ? "text-[#C7D9D2]" : "text-[#556370]"
                      }`}
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                          camp.id === "novembro-azul-2026" ? "text-[#84B7CE]" : "text-[#4A6B5D]"
                        }`}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href={camp.href}
                  className={`inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl font-semibold text-xs sm:text-sm transition-all text-center ${
                    camp.id === "novembro-azul-2026"
                      ? "bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] shadow-sm"
                      : "bg-[#183B2B] hover:bg-[#122c20] text-white"
                  }`}
                >
                  <span>Acessar Espaço da Campanha</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
