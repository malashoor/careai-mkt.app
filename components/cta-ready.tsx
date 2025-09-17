import PremiumCTAButton from "@/components/premium-cta-button";
import { prefixLocaleHref } from "@/components/prefixLocaleHref";

export default function CtaReady({ dict, locale }: { dict: any; locale: string }) {
  const title = dict.cta?.title || dict.hero?.title || "Ready to get started?";
  const subtitle = dict.cta?.subtitle || dict.hero?.subtitle || "Join thousands of families already using CareAI";
  const getStartedLabel = dict.nav?.getStarted || "Get Started";
  const signInLabel = dict.nav?.signIn || "Sign In";
  
  const getStartedHref = prefixLocaleHref(locale, "/pricing");
  const signInHref = prefixLocaleHref(locale, "/auth/sign-in");

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-brand-fg mb-4">
        {title}
      </h2>
      <p className="mt-3 text-lg text-brand-muted mb-8 max-w-2xl mx-auto">
        {subtitle}
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <PremiumCTAButton 
          label={getStartedLabel}
          href={getStartedHref}
          size="lg"
        />
        <PremiumCTAButton 
          label={signInLabel}
          href={signInHref}
          variant="secondary"
          size="lg"
        />
      </div>
    </section>
  );
}