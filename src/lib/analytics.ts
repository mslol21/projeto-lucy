/**
 * Utilitário seguro para eventos de rastreamento (Google Analytics 4 / Google Tag Manager)
 * Lucy Mie Aihara | Fisioterapia, Dor e Movimento
 *
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
  "queixa",
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

    // 3. Fallback Meta Pixel (fbq) para eventos padrão
    if (typeof (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq === "function") {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq("trackCustom", eventName, cleanParams);
    }
  } catch {
    // Falha silenciosa para nunca quebrar a navegação do usuário
  }
}

// Eventos específicos padronizados
export function trackWhatsAppClick(source: string, context?: string) {
  trackConversionEvent("whatsapp_click", { source, context });
}

export function trackAppointmentClick(source: string, service?: string) {
  trackConversionEvent("appointment_click", { source, service });
}

export function trackPhoneClick(phoneType: "main" | "secondary", source: string) {
  trackConversionEvent("phone_click", { phone_type: phoneType, source });
}

export function trackDirectionsClick(source: string) {
  trackConversionEvent("directions_click", {
    source,
    destination: "Rua Sergipe, 475, conjunto 114, Consolação, São Paulo - SP",
  });
}

export function trackSchoolContactClick(source: string, course?: string) {
  trackConversionEvent("school_contact_click", { source, course });
}

export function trackCampaignContactClick(campaignId: string, source: string) {
  trackConversionEvent("campaign_contact_click", { campaign_id: campaignId, source });
}
