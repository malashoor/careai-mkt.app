export function track(event: string, props?: Record<string, any>) {
  try {
    // Plausible attaches to window; be resilient if absent during SSR/hydration
    (globalThis as any)?.plausible?.(event, props ? { props } : undefined);
  } catch {
    // no-op
  }
}

// Common event tracking functions
export const trackEvents = {
  ctaStartTrial: (locale: string) => track('cta_start_trial', { locale }),
  ctaGetStarted: (locale: string) => track('cta_get_started', { locale }),
  ctaHero: (type: string, locale: string) => track('cta_hero', { type, locale }),
  ctaFeature: (featureTitle: string, locale: string) => track('cta_feature', { feature_title: featureTitle, locale }),
  ctaPricing: (tierName: string, tierPrice: string, locale: string) => track('cta_pricing', { tier_name: tierName, tier_price: tierPrice, locale }),
  ctaPartnerInquiry: (type: string, locale: string) => track('cta_partner_inquiry', { type, locale }),
  ctaContact: (locale: string) => track('cta_contact', { locale }),
  pageView: (page: string, locale: string) => track('page_view', { page, locale }),
};

// Page view tracking hook
export function usePageView(page: string, locale: string) {
  if (typeof window !== "undefined") {
    // Track page view on mount
    trackEvents.pageView(page, locale);
  }
}
