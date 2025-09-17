import React from 'react';
import { getDictionary } from '@/i18n/getDictionary';
import PremiumCTAButton from '@/components/premium-cta-button';

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-brand-fg mb-4">
          {dict.pricing?.title || "Pricing"}
        </h1>
        <p className="text-lg text-brand-muted mb-12">
          {dict.pricing?.subtitle || "Choose the plan that's right for you"}
        </p>
        
        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-brand">
            <h3 className="text-2xl font-bold text-brand-fg mb-2">
              {dict.pricing?.tiers?.basic?.name || "Basic"}
            </h3>
            <div className="text-4xl font-bold text-brand-blue mb-4">
              {dict.pricing?.tiers?.basic?.price || "$29/month"}
            </div>
            <p className="text-brand-muted mb-6">
              {dict.pricing?.tiers?.basic?.description || "Perfect for individuals"}
            </p>
            <ul className="text-left space-y-3 mb-8">
              {[
                dict.pricing?.tiers?.basic?.features?.[0] || "Health monitoring",
                dict.pricing?.tiers?.basic?.features?.[1] || "Medication reminders",
                dict.pricing?.tiers?.basic?.features?.[2] || "Basic support"
              ].map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <PremiumCTAButton 
              label={dict.pricing?.tiers?.basic?.cta || "Get Started"}
              href={`/${locale}/auth/sign-up`}
              className="w-full justify-center"
            />
          </div>

          {/* Pro Plan */}
          <div className="bg-white border-2 border-brand-blue rounded-2xl p-8 shadow-brand relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                {dict.pricing?.tiers?.pro?.badge || "Most Popular"}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-brand-fg mb-2">
              {dict.pricing?.tiers?.pro?.name || "Pro"}
            </h3>
            <div className="text-4xl font-bold text-brand-blue mb-4">
              {dict.pricing?.tiers?.pro?.price || "$79/month"}
            </div>
            <p className="text-brand-muted mb-6">
              {dict.pricing?.tiers?.pro?.description || "Best for families"}
            </p>
            <ul className="text-left space-y-3 mb-8">
              {[
                dict.pricing?.tiers?.pro?.features?.[0] || "Everything in Basic",
                dict.pricing?.tiers?.pro?.features?.[1] || "Family dashboard",
                dict.pricing?.tiers?.pro?.features?.[2] || "Priority support",
                dict.pricing?.tiers?.pro?.features?.[3] || "Advanced analytics"
              ].map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <PremiumCTAButton 
              label={dict.pricing?.tiers?.pro?.cta || "Get Started"}
              href={`/${locale}/auth/sign-up`}
              className="w-full justify-center"
            />
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-brand">
            <h3 className="text-2xl font-bold text-brand-fg mb-2">
              {dict.pricing?.tiers?.enterprise?.name || "Enterprise"}
            </h3>
            <div className="text-4xl font-bold text-brand-blue mb-4">
              {dict.pricing?.tiers?.enterprise?.price || "Custom"}
            </div>
            <p className="text-brand-muted mb-6">
              {dict.pricing?.tiers?.enterprise?.description || "For organizations"}
            </p>
            <ul className="text-left space-y-3 mb-8">
              {[
                dict.pricing?.tiers?.enterprise?.features?.[0] || "Everything in Pro",
                dict.pricing?.tiers?.enterprise?.features?.[1] || "Custom integrations",
                dict.pricing?.tiers?.enterprise?.features?.[2] || "Dedicated support",
                dict.pricing?.tiers?.enterprise?.features?.[3] || "White-label options"
              ].map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <PremiumCTAButton 
              label={dict.pricing?.tiers?.enterprise?.cta || "Contact Sales"}
              href={`/${locale}/contact`}
              className="w-full justify-center"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-left max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-fg mb-8 text-center">
            {dict.pricing?.faq?.title || "Frequently Asked Questions"}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-brand-fg mb-2">
                {dict.pricing?.faq?.q1?.question || "Can I change plans anytime?"}
              </h3>
              <p className="text-brand-muted">
                {dict.pricing?.faq?.q1?.answer || "Yes, you can upgrade or downgrade your plan at any time."}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-fg mb-2">
                {dict.pricing?.faq?.q2?.question || "Is there a free trial?"}
              </h3>
              <p className="text-brand-muted">
                {dict.pricing?.faq?.q2?.answer || "Yes, we offer a 14-day free trial for all plans."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}