import React from 'react';
import { getDictionary } from '@/i18n/getDictionary';
import PremiumCTAButton from '@/components/premium-cta-button';
import ContactFormClient from '@/components/ContactFormClient';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-fg mb-6">
            {dict.contact?.title || "Contact Us"}
          </h1>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            {dict.contact?.subtitle || "Get in touch with our team"}
          </p>
        </div>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-brand">
            <p className="text-center text-brand-muted">Contact form temporarily disabled for deployment</p>
          </div>
        </div>
        
        {/* CTA Section */}
        <section className="text-center py-12 bg-brand-blue-50 rounded-2xl mt-16">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-brand-fg mb-4">
              {dict.cta?.title || "Ready to get started?"}
            </h3>
            <p className="text-lg text-brand-muted mb-6">
              {dict.cta?.subtitle || "Join thousands of families already using CareAI"}
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href={`/${locale}/auth/sign-up`} className="px-6 py-3 text-base bg-blue-600 text-white rounded-full">
                {dict.nav?.getStartedFree || "Get Started Free"}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}