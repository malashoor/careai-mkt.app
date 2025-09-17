'use client';

import Link from 'next/link';
import Image from 'next/image';
import BrandLogo from '@/components/BrandLogo';

export default function SiteHeaderAr() {
  return (
    <header className="sticky top-0 z-40 bg-brand-bg/80 backdrop-blur border-b border-brand-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label="CareAI home">
            <BrandLogo withText={true} />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm font-medium transition-colors text-brand-muted hover:text-brand-fg">
              المميزات
            </Link>
            <Link href="/partners" className="text-sm font-medium transition-colors text-brand-muted hover:text-brand-fg">
              الشركاء
            </Link>
            <Link href="/pricing" className="text-sm font-medium transition-colors text-brand-muted hover:text-brand-fg">
              الأسعار
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors text-brand-muted hover:text-brand-fg">
              عنّا
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <Link
            href="/auth/sign-in"
            className="px-3 py-2 rounded-lg border border-brand-border text-sm text-brand-fg hover:bg-brand-blue-50 transition-colors"
          >
            تسجيل الدخول
          </Link>
          <Link
            href="/auth/sign-up"
            className="px-3 py-2 rounded-lg text-sm bg-brand-blue-600 text-white hover:bg-brand-blue-700 shadow-brand"
          >
            ابدأ الآن
          </Link>
        </div>
      </div>
    </header>
  );
}
