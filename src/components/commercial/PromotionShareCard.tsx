"use client";

import React, { useState } from "react";
import {
  Share2,
  Copy,
  Check,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { trackConversionEvent } from "@/lib/analytics";

interface PromotionShareCardProps {
  className?: string;
}

export function PromotionShareCard({ className = "" }: PromotionShareCardProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const promotionUrl =
    "https://novembroazul.escoladefasciaterapiaemovimento.com/atendimento";

  const shareText =
    "💙 *Novembro Azul 2026 • Escola de Fasciaterapia e Movimento*\n\n" +
    "Olá! Gostaria de compartilhar com você um convite especial da fisioterapeuta Lucy Aihara:\n\n" +
    "Neste mês de conscientização, o *primeiro atendimento de fotobiomodulação é 100% gratuito* (sessão individualizada de 40 minutos com aplicação incluída), presencialmente em São Paulo (Higienópolis / Consolação).\n\n" +
    "A fotobiomodulação utiliza luz terapêutica de baixa intensidade e atua no suporte ao relaxamento, regeneração tecidual e autocuidado.\n\n" +
    "👉 *Conheça a técnica e reserve seu horário gratuito pelo link:*\n" +
    promotionUrl;

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    shareText
  )}`;

  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
    promotionUrl
  )}&text=${encodeURIComponent(
    "Especial Novembro Azul: 1º atendimento gratuito de fotobiomodulação (40 min) com Lucy Aihara."
  )}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    promotionUrl
  )}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(promotionUrl);
      setCopiedLink(true);
      trackConversionEvent("promocao_copiar_link", { url: promotionUrl });
      setTimeout(() => setCopiedLink(false), 3000);
    } catch {
      fallbackCopy(promotionUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopiedMessage(true);
      trackConversionEvent("promocao_copiar_mensagem", { url: promotionUrl });
      setTimeout(() => setCopiedMessage(false), 3000);
    } catch {
      fallbackCopy(shareText);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 3000);
    }
  };

  const fallbackCopy = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  const handleWhatsAppShare = () => {
    trackConversionEvent("promocao_compartilhar_whatsapp", {
      channel: "whatsapp",
      url: promotionUrl,
    });
    window.open(whatsappShareUrl, "_blank", "noopener,noreferrer");
  };

  const handleNativeShare = async () => {
    trackConversionEvent("promocao_compartilhar_nativo", {
      url: promotionUrl,
    });

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "1º Atendimento Gratuito de Fotobiomodulação | Novembro Azul 2026",
          text:
            "Primeiro atendimento gratuito de fotobiomodulação (40 min) com Lucy Aihara em São Paulo.",
          url: promotionUrl,
        });
      } catch {
        // Usuário cancelou ou navegador não suportou
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div
      className={`rounded-3xl rounded-tr-[52px] bg-white border border-stone-200/90 p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden ${className}`}
    >
      {/* Detalhe de fundo */}
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#527fae]/10 via-[#84B7CE]/5 to-transparent rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-6">
        {/* Cabeçalho */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2F7] text-[#17385B] text-xs font-semibold uppercase tracking-wider">
            <Share2 className="w-3.5 h-3.5 text-[#527fae]" />
            <span>Encaminhe para Amigos e Pacientes</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#17385B]">
            Compartilhe esta oportunidade de cuidado
          </h3>

          <p className="text-xs sm:text-sm text-[#415A77] max-w-2xl leading-relaxed">
            Envie o link direto da campanha com a mensagem pré-formatada para seus contatos, familiares e redes sociais em apenas um clique.
          </p>
        </div>

        {/* Prévia da Mensagem Formatada */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F5F2EB]/70 border border-stone-200 text-xs sm:text-sm text-[#17385B] space-y-2 relative">
          <div className="flex items-center justify-between text-[11px] font-semibold text-[#527fae] uppercase tracking-wider pb-1 border-b border-stone-200/70">
            <span>Prévia do convite</span>
            <span className="text-[#84B7CE]">Pronto para envio</span>
          </div>
          <p className="font-mono text-xs text-[#2A4365] whitespace-pre-line leading-relaxed select-all">
            {shareText}
          </p>
        </div>

        {/* Link Direto com Botão de Copiar */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#527fae]">
            Link Direto da Promoção
          </label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="flex-1 px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-mono text-[#17385B] truncate select-all">
              {promotionUrl}
            </div>

            <button
              type="button"
              onClick={handleCopyLink}
              className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all shadow-xs ${
                copiedLink
                  ? "bg-emerald-600 text-white"
                  : "bg-[#17385B] hover:bg-[#0E253F] text-white"
              }`}
            >
              {copiedLink ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Link Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-white" />
                  <span>Copiar Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Botões de Ação para Redes Sociais */}
        <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
          {/* Botão de Destaque: Encaminhar no WhatsApp */}
          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] active:scale-[0.99] text-[#073322] font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current flex-shrink-0" />
            <span>Encaminhar no WhatsApp</span>
          </button>

          {/* Copiar Mensagem Completa */}
          <button
            type="button"
            onClick={handleCopyMessage}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-xs sm:text-sm border transition-all ${
              copiedMessage
                ? "bg-emerald-50 border-emerald-500 text-emerald-800"
                : "bg-white hover:bg-stone-50 border-stone-300 text-[#17385B]"
            }`}
          >
            {copiedMessage ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Mensagem Completa Copiada!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#17385B]" />
                <span>Copiar Mensagem Pronta</span>
              </>
            )}
          </button>

          {/* Telegram */}
          <a
            href={telegramShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackConversionEvent("promocao_compartilhar_telegram", {
                channel: "telegram",
                url: promotionUrl,
              })
            }
            className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-[#229ED9]/10 hover:bg-[#229ED9]/20 text-[#229ED9] font-medium text-xs sm:text-sm border border-[#229ED9]/30 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>

          {/* Facebook */}
          <a
            href={facebookShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackConversionEvent("promocao_compartilhar_facebook", {
                channel: "facebook",
                url: promotionUrl,
              })
            }
            className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] font-medium text-xs sm:text-sm border border-[#1877F2]/30 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Facebook</span>
          </a>

          {/* Compartilhamento Nativo (Celular) */}
          <button
            type="button"
            onClick={handleNativeShare}
            className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#415A77] font-medium text-xs sm:text-sm transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Outros Apps</span>
          </button>
        </div>
      </div>
    </div>
  );
}
