'use client';

import Image from 'next/image';

interface BrandLogoProps {
  withText?: boolean;
  size?: number;
}

export default function BrandLogo({ withText = false, size = 32 }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <Image
          src="/logo.svg"
          alt="CareAI"
          width={size}
          height={size}
          className="object-contain"
        />
      </div>
      {withText && (
        <span className="text-xl font-bold text-brand-blue">
          CareAI
        </span>
      )}
    </div>
  );
}
