import React from 'react';
import { getDictionary } from "@/i18n/getDictionary";
import FeatureGrid from '../../components/FeatureGrid';
import PremiumCTAButton from '@/components/premium-cta-button';

export default async function FeaturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-brand-fg mb-4">
          {dict.features?.title || "Features"}
        </h1>
        <p className="text-lg text-brand-muted mb-12">
          {dict.features?.subtitle || "Discover what makes CareAI special"}
        </p>
        
        <FeatureGrid dict={dict} />
        
        {/* CTA Section */}
        <section className="mt-16 py-12 bg-brand-blue-50 rounded-2xl">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-brand-fg mb-4">
              {dict.cta?.title || "Ready to get started?"}
            </h3>
            <p className="text-lg text-brand-muted mb-6">
              {dict.cta?.subtitle || "Join thousands of families already using CareAI"}
            </p>
            <div className="flex items-center justify-center gap-4">
              <PremiumCTAButton 
                label={dict.nav?.getStartedFree || "Get Started Free"}
                href={`/${locale}/auth/sign-up`}
                size="lg"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
