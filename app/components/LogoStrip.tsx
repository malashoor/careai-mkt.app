import Image from 'next/image';

export default function LogoStrip() {
  // Ordered as requested: Elderly → Family → Doctor
  const thumbs = [
    { src: '/images/elderly_couple.png', alt: 'Elderly couple' },
    { src: '/images/family_care.png', alt: 'Family care' },
    { src: '/images/welcome_ai_hero.png', alt: 'Doctor with family' },
  ];

  return (
    <section aria-label="Gallery" className="py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {thumbs.map(t => (
            <div key={t.src} className="rounded-2xl shadow-lg ring-1 ring-black/5 overflow-hidden">
              <div className="h-28 w-44">
                <Image
                  src={t.src}
                  alt={t.alt}
                  width={440}
                  height={280}
                  sizes="(min-width:768px) 176px, 176px"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
