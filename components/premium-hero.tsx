"use client";

import Image from "next/image";
import PremiumCTAButton from "@/components/premium-cta-button";
import { prefixLocaleHref } from "@/components/prefixLocaleHref";

export default function PremiumHero({ dict, locale }: { dict: any; locale: string }) {
  const title = dict.hero?.title || "Care, Connected.";
  const subtitle = dict.hero?.subtitle || "Companionship, health monitoring, and reminders for seniors.";
  const ctaPrimary = dict.hero?.ctaPrimary || "Get Started";
  const ctaSecondary = dict.hero?.ctaSecondary || "Learn More";
  
  const primaryHref = prefixLocaleHref(locale, "/pricing");
  const secondaryHref = prefixLocaleHref(locale, "/about");

  const features = [
    dict.hero?.features?.safeSecure || "Safe & Secure",
    dict.hero?.features?.easyToUse || "Easy to Use", 
    dict.hero?.features?.familyFirst || "Family First"
  ];

  return (
    <section className="relative py-10 sm:py-14 lg:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title.split(' ').map((word: string, index: number) => (
              <span key={index} className={index === 0 ? "text-brand-blue" : ""}>
                {word}{index < title.split(' ').length - 1 ? ' ' : ''}
              </span>
            ))}
          </h1>
          <p className="text-slate-600">{subtitle}</p>
          <div className="flex gap-3">
            <a 
              href="https://app.careai.app/en" 
              className="inline-flex items-center rounded-full bg-brand-600 px-5 py-2.5 text-white hover:bg-brand-700"
            >
              {ctaPrimary}
            </a>
            <a 
              href={secondaryHref} 
              className="inline-flex items-center rounded-full border px-5 py-2.5 text-slate-700 hover:bg-slate-50"
            >
              {ctaSecondary}
            </a>
          </div>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3 text-sm text-slate-600">
            {features.map((feature, index) => (
              <li key={index}>✔ {feature}</li>
            ))}
          </ul>
        </div>

        <div className="relative w-full md:h-[420px] lg:h-[520px]">
          <img
            data-testid="hero-image"
            src="/images/welcome_ai_hero.png"
            alt="CareAI - AI-powered health monitoring for seniors"
            className="absolute inset-0 h-full w-full object-contain"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}