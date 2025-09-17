import PartnerCard from '@/components/PartnerCard';
import { getDictionary } from '@/i18n/getDictionary';
import PremiumCTAButton from '@/components/premium-cta-button';

export default async function PartnersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  // Partner cards data
  const cards = [
    {
      img: '/images/Hospital.png',
      title: dict.partners?.cards?.hospitals?.title || "Hospitals",
      desc: dict.partners?.cards?.hospitals?.desc || "Leading healthcare facilities",
    },
    {
      img: '/images/Insurance.png',
      title: dict.partners?.cards?.insurance?.title || "Insurance",
      desc: dict.partners?.cards?.insurance?.desc || "Health insurance providers",
    },
    {
      img: '/images/Pharmacies.png',
      title: dict.partners?.cards?.pharmacies?.title || "Pharmacies",
      desc: dict.partners?.cards?.pharmacies?.desc || "Pharmacy networks",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
      {/* Title + intro (center) */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-fg">
          {dict.partners.title || "Fallback"}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-brand-muted max-w-3xl mx-auto">
          {dict.partners.subtitle || "Fallback"}
        </p>
      </div>

      {/* Subheading */}
      <p className="mt-10 text-center text-lg font-semibold text-brand-fg">
        {dict.partners.trusted || "Fallback"}
      </p>

      {/* Grid */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((c, i) => (
          <PartnerCard
            key={i}
            imgSrc={c.img}
            imgAlt={c.title}
            title={c.title}
            description={c.desc}
          />
        ))}
      </div>

      {/* CTA Section */}
      <section className="mt-16 py-12 bg-brand-blue-50 rounded-2xl">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-brand-fg mb-4">
            {dict.cta.title || "Fallback"}
          </h3>
          <p className="text-lg text-brand-muted mb-6">
            {dict.cta.subtitle || "Fallback"}
          </p>
          <div className="flex items-center justify-center gap-4">
            <PremiumCTAButton 
              label={dict.navigation?.getStartedFree || "Get Started Free"}
              href={`/${locale}/auth/sign-up`}
              size="lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
