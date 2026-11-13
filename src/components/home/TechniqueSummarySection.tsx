import React from "react";
import Link from "next/link";
import { SunMedium, ArrowRight, Sparkles } from "lucide-react";
import { NOVEMBER_BLUE_OFFER } from "@/data/campaign-data";

export function TechniqueSummarySection() {
  const offer = NOVEMBER_BLUE_OFFER;

  return (
    <section
      id="apresentacao-tecnica"
      aria-labelledby="technique-title"
      className="py-14 sm:py-16 bg-white border-b border-stone-200/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F2EB]/80 rounded-3xl rounded-tr-[52px] border border-stone-200 p-8 sm:p-12 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17385B]/10 text-[#17385B] text-xs font-semibold uppercase tracking-wider">
              <SunMedium className="w-3.5 h-3.5 text-[#527fae]" aria-hidden="true" />
              <span>{offer.educationTitle}</span>
            </div>

            <h2 id="technique-title" className="font-serif text-2xl sm:text-3xl text-[#17385B] leading-snug">
              Cuidado celular através de luz suave de baixa intensidade
            </h2>

            <p className="text-sm sm:text-base text-[#415A77] leading-relaxed font-sans">
              {offer.educationText}
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/fotobiomodulacao"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#17385B] hover:bg-[#1f4a75] text-white font-medium text-xs sm:text-sm shadow-xs transition-colors group"
            >
              <span>Saiba mais sobre a técnica</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
