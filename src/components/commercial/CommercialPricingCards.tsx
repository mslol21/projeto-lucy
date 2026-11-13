"use client";

import React from "react";
import { Check, MessageCircle, Sparkles, Clock, ArrowRight, ShieldCheck, Tag } from "lucide-react";
import type { CommercialPlanItem } from "@/data/campaign-data";
import { trackConversionEvent } from "@/lib/analytics";

interface CommercialPricingCardsProps {
  plans: CommercialPlanItem[];
  whatsappNumber: string;
}

export function CommercialPricingCards({ plans, whatsappNumber }: CommercialPricingCardsProps) {
  const handlePlanClick = (plan: CommercialPlanItem) => {
    trackConversionEvent(plan.conversionEvent, {
      plan_id: plan.id,
      plan_name: plan.name,
      price: plan.priceNumeric,
      currency: "BRL",
      is_free: !!plan.isFree,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
      {plans.map((plan) => {
        const isFree = !!plan.isFree;
        const isBestValue = plan.id === "plano-pacote-8";
        const isPackage4 = plan.id === "plano-pacote-4";

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          plan.whatsappMessage
        )}`;

        return (
          <div
            key={plan.id}
            className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
              isFree
                ? "bg-gradient-to-b from-[#17385B] to-[#122A45] text-white shadow-xl shadow-[#17385B]/20 border-2 border-[#527fae]/40 rounded-tr-[52px]"
                : isBestValue
                ? "bg-white text-[#17385B] shadow-lg border-2 border-[#527fae] rounded-tr-[44px] hover:shadow-xl ring-2 ring-[#527fae]/15"
                : "bg-white text-[#17385B] shadow-md border border-stone-200/90 rounded-tr-[36px] hover:shadow-lg"
            }`}
          >
            {/* Top Badge */}
            {plan.badge && (
              <div className="mb-4">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase ${
                    isFree
                      ? "bg-[#527fae] text-white"
                      : isBestValue
                      ? "bg-[#17385B] text-white"
                      : "bg-[#EBF2F7] text-[#17385B]"
                  }`}
                >
                  {isFree && <Sparkles className="w-3 h-3 text-[#FFDF00]" />}
                  {isBestValue && <Tag className="w-3 h-3 text-[#84B7CE]" />}
                  <span>{plan.badge}</span>
                </span>
              </div>
            )}

            {/* Header info */}
            <div className="space-y-3">
              <h3
                className={`font-serif text-xl sm:text-2xl font-semibold ${
                  isFree ? "text-white" : "text-[#17385B]"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price display */}
              <div className="pt-1 pb-2">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight ${
                      isFree ? "text-white" : "text-[#17385B]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.sessionsCount > 1 && (
                    <span
                      className={`text-xs ${
                        isFree ? "text-[#C7D9D2]" : "text-[#556987]"
                      }`}
                    >
                      / {plan.sessionsCount} sessões
                    </span>
                  )}
                </div>

                {/* Per session equivalent & savings */}
                {plan.perSessionPrice && (
                  <p className="text-xs font-medium text-[#2E7D52] pt-1 flex items-center gap-1">
                    <span>{plan.perSessionPrice}</span>
                  </p>
                )}

                {plan.savingsPercent && (
                  <p
                    className={`text-[11px] font-medium pt-0.5 ${
                      isBestValue ? "text-[#17385B] font-semibold" : "text-[#415A77]"
                    }`}
                  >
                    {plan.savingsPercent} ({plan.savings?.split(" em ")[0]})
                  </p>
                )}

                <div
                  className={`flex items-center gap-1.5 text-xs pt-2 ${
                    isFree ? "text-[#C7D9D2]" : "text-[#556987]"
                  }`}
                >
                  <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{plan.duration}</span>
                </div>
              </div>

              {/* Separator */}
              <div
                className={`border-t my-4 ${
                  isFree ? "border-white/15" : "border-stone-200"
                }`}
              />

              {/* Features list */}
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-snug">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        isFree ? "text-[#84B7CE]" : "text-[#527fae]"
                      }`}
                    />
                    <span
                      className={
                        isFree ? "text-stone-200" : "text-[#415A77]"
                      }
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-6 mt-6 border-t border-transparent">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handlePlanClick(plan)}
                className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 shadow-md ${
                  isFree
                    ? "bg-[#25D366] hover:bg-[#1ebd5a] text-[#073322] font-semibold hover:shadow-lg hover:shadow-[#25D366]/20"
                    : isBestValue
                    ? "bg-[#17385B] hover:bg-[#0E253F] text-white hover:shadow-lg hover:shadow-[#17385B]/20"
                    : "bg-[#17385B]/90 hover:bg-[#17385B] text-white"
                }`}
              >
                <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
                <span className="truncate">{plan.ctaText}</span>
              </a>

              <p
                className={`text-[11px] text-center mt-2.5 ${
                  isFree ? "text-[#C7D9D2]" : "text-stone-600"
                }`}
              >
                {isFree ? "Sem compromisso de continuidade" : "Agendamento pelo WhatsApp"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
