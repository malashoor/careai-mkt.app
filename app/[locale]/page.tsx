import React from 'react';
import { getDictionary } from "@/i18n/getDictionary";
import PremiumHero from "@/components/premium-hero";
import FeatureGrid from "../components/FeatureGrid";
import Testimonial from "../components/Testimonial";
import CTAReady from "@/components/cta-ready";

export default async function RootPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <PremiumHero key={`hero-${locale}`} dict={dict} locale={locale} />
      <FeatureGrid key={`features-${locale}`} dict={dict} />
      <Testimonial key={`testimonial-${locale}`} dict={dict} />
      
      {/* Premium CTA Section */}
      <CTAReady dict={dict} locale={locale} />
    </main>
  );
}
