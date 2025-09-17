'use client';

import Link from 'next/link';
import { useState } from 'react';
import BrandLogo from '@/components/BrandLogo';

interface SiteHeaderUnifiedProps {
  showAuth?: boolean;
  locale?: 'en' | 'ar';
}

export default function SiteHeaderUnified({ showAuth = false, locale = 'en' }: SiteHeaderUnifiedProps) {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const handleLanguageChange = (newLocale: string) => {
    console.log('🌐 SiteHeaderUnified: Language change requested to:', newLocale);
    // TODO: Implement locale change logic
    setIsLanguageMenuOpen(false);
  };

  const isRTL = locale === 'ar';

  return (
    <header className="sticky top-0 z-40 bg-brand-bg/80 backdrop-blur border-b border-brand-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label="CareAI home">
            <BrandLogo withText={true} />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm font-medium transition-colors text-brand-muted hover:text-brand-fg">
              {isRTL ? 'المميزات' : 'Features'}
            </Link>
            <Link href="/partners" className="text-sm font-medium transition-colors text-brand-muted hover:text-brand-fg">
              {isRTL ? 'الشركاء' : 'Partners'}
            </Link>
            <Link href="/pricing" className="text-sm font-medium transition-colors text-brand-muted hover:text-brand-fg">
              {isRTL ? 'الأسعار' : 'Pricing'}
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors text-brand-muted hover:text-brand-fg">
              {isRTL ? 'عنّا' : 'About'}
            </Link>
          </nav>
        </div>

        {showAuth && (
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-brand-border text-sm text-brand-fg hover:bg-brand-blue-50 transition-colors"
              >
                <span>{isRTL ? 'AR' : 'EN'}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-brand-border py-1 z-50">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-brand-blue-50 transition-colors ${
                      locale === 'en' ? 'text-brand-blue-600 font-medium' : 'text-brand-fg'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange('ar')}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-brand-blue-50 transition-colors ${
                      locale === 'ar' ? 'text-brand-blue-600 font-medium' : 'text-brand-fg'
                    }`}
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/auth/sign-in"
              className="px-3 py-2 rounded-lg border border-brand-border text-sm text-brand-fg hover:bg-brand-blue-50 transition-colors"
            >
              {isRTL ? 'تسجيل الدخول' : 'Sign in'}
            </Link>
            <Link
              href="/auth/sign-up"
              className="px-3 py-2 rounded-lg text-sm bg-brand-blue-600 text-white hover:bg-brand-blue-700 shadow-brand"
            >
              {isRTL ? 'ابدأ الآن' : 'Get started'}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
