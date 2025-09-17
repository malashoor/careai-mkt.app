'use client';

import Image from 'next/image';

interface PartnerCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

export default function PartnerCard({ imgSrc, imgAlt, title, description }: PartnerCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow">
      <div className="w-20 h-20 mb-4 relative">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-brand-fg mb-2">
        {title}
      </h3>
      <p className="text-brand-muted">
        {description}
      </p>
    </div>
  );
}
