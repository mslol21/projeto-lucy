/**
 * Utilitário seguro para eventos de rastreamento (Google Analytics 4 / Google Tag Manager)
 * Em total conformidade com a LGPD e privacidade em saúde:
 * Não armazena nem envia sintomas, diagnósticos, telefones, e-mails ou dados sensíveis.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// Chaves que NUNCA devem ser enviadas por privacidade/LGPD
const SENSITIVE_KEYS = new Set([
  "phone",
  "telefone",
  "email",
  "name",
  "nome",
  "symptoms",
  "sintomas",
  "diagnosis",
  "diagnostico",
  "cpf",
  "medical_history",
]);

function sanitizeParams(params: Record<string, unknown>): Record<string, unknown> {
  const clean: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(params)) {
    if (!SENSITIVE_KEYS.has(key.toLowerCase()) && value !== undefined && value !== null) {
      clean[key] = value;
    }
  }
  return clean;
}

export function trackConversionEvent(
  eventName: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;

  try {
    const cleanParams = sanitizeParams({
      campaign_id: "novembro_azul_2026",
      origin_path: window.location.pathname,
      ...params,
    });

    // 1. Google Analytics 4 (gtag)
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, cleanParams);
    }

    // 2. Google Tag Manager (dataLayer)
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...cleanParams,
      });
    }

    // Log em desenvolvimento para auditoria de eventos
    if (process.env.NODE_ENV !== "production") {
      console.log(`[Analytics Event] ${eventName}:`, cleanParams);
    }
  } catch (error) {
    console.warn(`[Analytics] Falha não impeditiva ao registrar evento ${eventName}:`, error);
  }
}

// Helpers tipados para eventos padronizados
export function trackClickWhatsApp(buttonLocation: string, planId?: string) {
  trackConversionEvent("click_whatsapp", {
    button_location: buttonLocation,
    action_type: "whatsapp_contact",
    plan_id: planId || "geral",
  });
}

export function trackClickAgendar(buttonLocation: string, planId?: string) {
  trackConversionEvent("click_agendar", {
    button_location: buttonLocation,
    action_type: "schedule_request",
    plan_id: planId || "geral",
  });
}

export function trackClickDirections(location: string = "Rua Sergipe, 475") {
  trackConversionEvent("click_directions", {
    destination: location,
    action_type: "maps_navigation",
  });
}

export function trackClickSiteInstitucional(targetUrl: string) {
  trackConversionEvent("click_site_institucional", {
    target_url: targetUrl,
    action_type: "external_institutional_link",
  });
}

export function trackFaqExpand(faqId: string, question: string) {
  trackConversionEvent("faq_expand", {
    faq_id: faqId,
    question_summary: question.substring(0, 80),
    action_type: "content_engagement",
  });
}
