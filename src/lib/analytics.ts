/**
 * Utilitário seguro para eventos de rastreamento (Google Analytics / GTM / Meta Pixel)
 * Dispara eventos caso existam tags configuradas, sem gerar erros ou duplicar scripts.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackConversionEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  try {
    // 1. Google Analytics (gtag)
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    // 2. Google Tag Manager (dataLayer)
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }

    // Log em desenvolvimento para auditoria
    if (process.env.NODE_ENV !== "production") {
      console.log(`[Analytics Event] ${eventName}:`, params);
    }
  } catch (error) {
    console.warn(`[Analytics] Falha não impeditiva ao registrar evento ${eventName}:`, error);
  }
}
