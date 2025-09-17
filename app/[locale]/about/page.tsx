import { getDictionary } from '@/i18n/getDictionary';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="pt-14 sm:pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20 lg:mb-24">
          <h1 className="text-4xl sm:text-5xl font-semibold text-center text-brand-fg">
            {dict.about?.title || "About CareAI"}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-center text-brand-muted max-w-3xl mx-auto">
            {dict.about?.subtitle || "Revolutionizing senior care through technology"}
          </p>
        </div>

        {/* Main Content */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 space-y-20 lg:space-y-0">
          {/* Story Section */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl lg:text-3xl font-semibold text-brand-fg">
              Our Mission
            </h2>
            <p className="mt-3 text-brand-muted leading-7 max-w-3xl">
              {dict.about?.mission?.body || "Our mission is to provide compassionate, intelligent care solutions that enhance the quality of life for seniors and peace of mind for their families."}
            </p>
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-brand-card border border-brand-border shadow-sm p-10">
              <h3 className="text-2xl sm:text-3xl font-semibold text-brand-fg">
                {dict.about?.partnerships?.title || "Strategic Partnerships"}
              </h3>
              <p className="mt-3 text-brand-muted leading-7">
                {dict.about?.partnerships?.body || "We work with leading healthcare organizations to deliver exceptional patient care and improve outcomes."}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a href={`/${locale}/pricing`} className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-full">
                  {dict.about?.partnerships?.orgBtn || "For Organizations"}
                </a>
                <a href={`/${locale}/contact`} className="px-3 py-1.5 text-sm bg-white text-blue-600 border border-blue-600 rounded-full">
                  {dict.about?.partnerships?.contactBtn || "Contact Us"}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-20 lg:mt-24">
          <div className="rounded-2xl bg-brand-card border border-brand-border shadow-sm p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-fg">
              {dict.about?.mission?.title || "Our Mission"}
            </h2>
            <p className="mt-3 text-brand-muted leading-7 max-w-3xl">
              {dict.about?.mission?.body || "Our mission is to provide compassionate, intelligent care solutions that enhance the quality of life for seniors and peace of mind for their families."}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center py-16 bg-brand-blue-50 rounded-2xl mt-20 lg:mt-24">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-brand-fg mb-6">
              {dict.cta?.title || "Ready to Get Started?"}
            </h3>
            <p className="text-xl text-brand-muted mb-8">
              {dict.cta?.subtitle || "Join thousands of families who trust CareAI"}
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href={`/${locale}/pricing`} className="px-6 py-3 text-base bg-blue-600 text-white rounded-full">
                {dict.cta?.getStarted || "Get Started"}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}