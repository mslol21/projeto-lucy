"use client";

import React, { useState } from "react";
import { Share2, Copy, Check, MessageCircle, Heart } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { BrandEmblem } from "@/components/ui/BrandEmblem";
import { CAMPAIGN_INFO } from "@/data/campaign-data";

export function ShareSection() {
  const [copied, setCopied] = useState(false);
  const shareText = `"${CAMPAIGN_INFO.shareableQuote}" — Campanha Novembro Azul 2026 da Escola de Fasciaterapia e Movimento. Informar também é uma forma de cuidar.`;
  const campaignUrl = typeof window !== "undefined" ? window.location.href : "https://novembroazul.escoladefasciaterapiaemovimento.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${campaignUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = `${shareText}\n${campaignUrl}`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleWhatsApp = () => {
    const fullText = encodeURIComponent(`${shareText}\n\nConheça a campanha: ${campaignUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${fullText}`, "_blank", "noopener,noreferrer");
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "Novembro Azul 2026 | Escola de Fasciaterapia e Movimento",
          text: shareText,
          url: campaignUrl,
        });
      } catch {
        // Cancelado pelo usuário
      }
    } else {
      handleCopy();
    }
  };

  return (
    <section
      id="compartilhar"
      className="py-20 lg:py-28 bg-[#faf8f5] relative scroll-mt-20 border-t border-stone-200/60"
      aria-labelledby="share-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="share-title"
          eyebrow="Propagando o Cuidado"
          title="Uma Mensagem para Compartilhar"
          subtitle="A conscientização se multiplica quando partilhamos carinho, conhecimento e acolhimento com quem amamos."
        />

        <div className="bg-white/90 backdrop-blur-md rounded-3xl rounded-tr-[64px] p-8 sm:p-12 border border-stone-200/90 shadow-[0_10px_35px_-5px_rgba(23,56,91,0.06)] text-center relative overflow-hidden space-y-8">
          {/* Marca d'água sutil ao fundo */}
          <div className="absolute -left-6 -bottom-6 opacity-5 pointer-events-none">
            <BrandEmblem className="w-48 h-60" />
          </div>

          <div className="inline-flex p-3 rounded-full bg-[#527fae]/15 text-[#17385B] mb-2">
            <Heart className="w-8 h-8 text-[#527fae] fill-[#527fae]/20" aria-hidden="true" />
          </div>

          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#17385B] font-medium leading-relaxed max-w-2xl mx-auto">
            &ldquo;{CAMPAIGN_INFO.shareableQuote}&rdquo;
          </blockquote>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EB] border border-stone-200 text-xs uppercase tracking-widest text-[#415A77] font-semibold">
            <BrandEmblem className="w-3 h-4" />
            <span>{CAMPAIGN_INFO.institution.name}</span>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 relative z-10">
            {/* Botão Copiar Mensagem */}
            <Button
              type="button"
              onClick={handleCopy}
              variant="outline"
              size="md"
              className={`rounded-2xl rounded-tr-[28px] ${
                copied ? "border-emerald-600 text-emerald-700 bg-emerald-50" : ""
              }`}
              aria-live="polite"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span>Mensagem copiada!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#17385B]" aria-hidden="true" />
                  <span>Copiar mensagem</span>
                </>
              )}
            </Button>

            {/* Botão Compartilhar WhatsApp */}
            <Button
              type="button"
              onClick={handleWhatsApp}
              variant="primary"
              size="md"
              className="bg-[#128C7E] hover:bg-[#075E54] text-white rounded-2xl rounded-tr-[28px]"
            >
              <MessageCircle className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Enviar pelo WhatsApp</span>
            </Button>

            {/* Compartilhamento Nativo */}
            <Button
              type="button"
              onClick={handleNativeShare}
              variant="secondary"
              size="md"
              className="bg-[#527fae] text-white hover:bg-[#436b94] rounded-2xl rounded-tr-[28px]"
            >
              <Share2 className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Outros aplicativos</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
