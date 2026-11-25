import React from "react";
import Link from "next/link";
import { Quote, Heart, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/campaign-data";

export function TestimonialsPreviewSection() {
  const previewList = TESTIMONIALS.slice(0, 2);

  return (
    <section id="depoimentos" aria-labelledby="testimonials-title" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#EADBC8] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C0D8FF]/30 text-[#065176] text-xs font-semibold uppercase tracking-wider border border-[#5C88C5]/30">
            <Heart className="w-3.5 h-3.5 text-[#065176]" />
            <span>Vivências e Acolhimento</span>
          </div>
          <h2 id="testimonials-title" className="font-serif text-3xl sm:text-4xl text-[#065176]">
            O que dizem sobre nossa abordagem
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            Relatos autorizados sobre o ambiente, a precisão do toque e a experiência de cuidado na clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {previewList.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 sm:p-8 rounded-3xl rounded-tr-[44px] border border-[#EADBC8] shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <Quote className="w-6 h-6 text-[#5C88C5]" aria-hidden="true" />
                <p className="font-serif text-sm sm:text-base text-neutral-800 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#EADBC8]/60">
                <span className="block font-semibold text-xs sm:text-sm text-[#065176]">
                  {t.author}, {t.age} anos
                </span>
                <span className="block text-[11px] text-[#845924]">
                  {t.role} • {t.city}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/depoimentos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-neutral-50 text-[#065176] font-medium text-xs sm:text-sm border border-[#EADBC8] shadow-xs transition-colors group"
          >
            <span>Ver todos os relatos e depoimentos</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#5C88C5]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
