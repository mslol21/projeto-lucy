"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { MYTHS_AND_TRUTHS, MythTruthItem } from "@/data/campaign-data";
import { Filter } from "lucide-react";

export function FaqSection() {
  const [selectedFilter, setSelectedFilter] = useState<"todos" | "diabetes" | "prostata" | "corpo">("todos");

  const filteredItems = MYTHS_AND_TRUTHS.filter((item) => {
    if (selectedFilter === "todos") return true;
    return item.category === selectedFilter;
  });

  return (
    <section
      id="mitos-verdades"
      className="py-20 lg:py-28 bg-[#F5F2EB] relative scroll-mt-20 border-t border-stone-200/60"
      aria-labelledby="mitos-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="mitos-title"
          eyebrow="Esclarecimento Baseado em Ciência"
          title="Mitos e Verdades: Informar é Desmistificar"
          subtitle="Circulam muitas mensagens imprecisas e promessas milagrosas sobre diabetes e saúde masculina. Aqui, respondemos às dúvidas mais frequentes com base estrita nas evidências oficiais."
        />

        {/* Filtros de Categoria */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filtrar perguntas">
          <span className="text-xs font-semibold text-[#415A77] mr-2 hidden sm:inline-flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" aria-hidden="true" /> Filtrar:
          </span>
          <button
            type="button"
            onClick={() => setSelectedFilter("todos")}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedFilter === "todos"
                ? "bg-[#17385B] text-white shadow-xs"
                : "bg-white text-[#17385B] border border-stone-200 hover:bg-stone-50"
            }`}
          >
            Todas as dúvidas ({MYTHS_AND_TRUTHS.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter("diabetes")}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedFilter === "diabetes"
                ? "bg-[#17385B] text-white shadow-xs"
                : "bg-white text-[#17385B] border border-stone-200 hover:bg-stone-50"
            }`}
          >
            Diabetes
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter("prostata")}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedFilter === "prostata"
                ? "bg-[#17385B] text-white shadow-xs"
                : "bg-white text-[#17385B] border border-stone-200 hover:bg-stone-50"
            }`}
          >
            Saúde Masculina & Próstata
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter("corpo")}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              selectedFilter === "corpo"
                ? "bg-[#17385B] text-white shadow-xs"
                : "bg-white text-[#17385B] border border-stone-200 hover:bg-stone-50"
            }`}
          >
            Corpo & Terapias
          </button>
        </div>

        {/* Acordeão Interativo Acessível */}
        <Accordion items={filteredItems} />
      </div>
    </section>
  );
}
