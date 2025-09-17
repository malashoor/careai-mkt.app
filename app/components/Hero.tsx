import Image from 'next/image';
import Link from 'next/link';
import PremiumCTAButton from '@/components/premium-cta-button';
import { prefixLocaleHref } from '@/components/prefixLocaleHref';

export default function Hero({ dict, locale }: { dict: any; locale: string }) {
  const title = dict.hero?.title || "Care, Connected.";
  const subtitle = dict.hero?.subtitle || "Companionship, health monitoring, and reminders for seniors.";
  const ctaPrimary = dict.hero?.ctaPrimary || "Get Started";
  const ctaSecondary = dict.hero?.ctaSecondary || "Learn More";
  
  const primaryHref = prefixLocaleHref(locale, "/pricing");
  const secondaryHref = prefixLocaleHref(locale, "/about");

  const features = [
    dict.hero?.features?.safeSecure || "Safe & Secure",
    dict.hero?.features?.easyToUse || "Easy to Use", 
    dict.hero?.features?.familyFirst || "Family First"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <PremiumCTAButton 
              label={ctaPrimary}
              href={primaryHref}
              size="lg"
            />
            <PremiumCTAButton 
              label={ctaSecondary}
              href={secondaryHref}
              variant="secondary"
              size="lg"
            />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${
                  index === 0 ? 'bg-emerald-500' : 
                  index === 1 ? 'bg-amber-500' : 'bg-blue-600'
                }`} />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}