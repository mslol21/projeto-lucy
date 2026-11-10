"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";
import { MythTruthItem } from "@/data/campaign-data";

interface AccordionProps {
  items: MythTruthItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    [items[0]?.id || ""]: true, // primeiro item aberto por padrão para convite visual
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getVerdictBadge = (verdict: MythTruthItem["verdict"]) => {
    if (verdict === "Verdade") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
          Verdade Científica
        </span>
      );
    }
    if (verdict === "Mito") {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-amber-50 text-amber-900 border border-amber-200">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
          Mito Frequente
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-900 border border-blue-200">
        <HelpCircle className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
        Atenção Especial
      </span>
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = !!openItems[item.id];
        const buttonId = `accordion-btn-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-white border-[#84B7CE]/60 shadow-sm"
                : "bg-white/60 border-stone-200 hover:border-stone-300 hover:bg-white"
            }`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full text-left px-5 sm:px-7 py-5 flex items-start justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17385B] focus-visible:ring-inset"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                      Pergunta {String(index + 1).padStart(2, "0")}
                    </span>
                    {getVerdictBadge(item.verdict)}
                  </div>
                  <p className="font-serif text-lg sm:text-xl font-medium text-[#17385B] leading-snug">
                    &ldquo;{item.statement}&rdquo;
                  </p>
                </div>
                <div
                  className={`mt-1 p-2 rounded-full transition-transform duration-300 text-[#17385B] ${
                    isOpen ? "rotate-180 bg-[#F5F2EB]" : "bg-stone-100"
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={`transition-all duration-300 ${isOpen ? "block" : "hidden"}`}
            >
              <div className="px-5 sm:px-7 pb-6 pt-2 text-[#415A77] border-t border-stone-100 space-y-4">
                <p className="text-base sm:text-lg leading-relaxed text-[#17385B]">
                  {item.explanation}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-semibold text-[#17385B]">Fonte de referência:</span>
                  <span>{item.officialRef}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
