export type Locale = 'en' | 'ar';

export const SUPPORTED_LOCALES: Locale[] = ['en', 'ar'];

export const DEFAULT_LOCALE: Locale = 'en';

export interface Messages {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    canonical: string;
  };
  navigation: {
    features: string;
    partners: string;
    pricing: string;
    about: string;
    contact: string;
    signIn: string;
    getStarted: string;
    getStartedFree: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    features: {
      safeSecure: string;
      easyToUse: string;
      familyFirst: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    carePlans: {
      title: string;
      description: string;
    };
    predictiveInsights: {
      title: string;
      description: string;
    };
    aiAssistance: {
      title: string;
      description: string;
    };
  };
  testimonial: {
    quote: string;
    attribution: string;
  };
  cta: {
    title: string;
    subtitle: string;
  };
  footer: {
    tagline: string;
    product: string;
    company: string;
    rights: string;
  };
  legal: {
    privacy: string;
    terms: string;
  };
  language: {
    en: string;
    ar: string;
  };
}

const messages: Record<Locale, Messages> = {
  en: {
    meta: {
      title: "CareAI — AI‑Powered Healthcare Solutions",
      description: "Transform patient care with intelligent automation and predictive analytics.",
      ogTitle: "CareAI — AI‑Powered Healthcare Solutions",
      ogDescription: "AI tools for families, caregivers, and providers.",
      canonical: "https://www.careai.app"
    },
    navigation: {
      features: "Features",
      partners: "Partners",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      signIn: "Sign in",
      getStarted: "Get started",
      getStartedFree: "Get Started (Free)"
    },
    hero: {
      title: "AI‑Powered Healthcare Solutions",
      subtitle: "Transform patient care with intelligent automation, predictive analytics, and seamless integration across healthcare systems.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Learn More",
      features: {
        safeSecure: "Safe & Secure",
        easyToUse: "Easy to Use",
        familyFirst: "Family‑First"
      }
    },
    features: {
      title: "Key Features",
      subtitle: "Comprehensive AI solutions that transform healthcare delivery.",
      carePlans: {
        title: "Care Plans & Tasks",
        description: "Coordinate tasks, meds, and routines with real‑time updates for families and caregivers."
      },
      predictiveInsights: {
        title: "Predictive Insights",
        description: "AI surfaces trends and early warnings from daily notes and vitals history."
      },
      aiAssistance: {
        title: "AI Assistance",
        description: "Smart suggestions, reminders, and summaries that save time for caregivers."
      }
    },
    testimonial: {
      quote: "CareAI helped our family coordinate daily care without the chaos. Tasks, reminders, and health insights in one place.",
      attribution: "— A caregiver family"
    },
    cta: {
      title: "Ready to try CareAI?",
      subtitle: "Join thousands of users who trust CareAI for their healthcare needs"
    },
    footer: {
      tagline: "AI-powered tools for families and caregivers.",
      product: "Product",
      company: "Company",
      rights: "© 2025 CareAI. All rights reserved."
    },
    legal: {
      privacy: "Privacy",
      terms: "Terms"
    },
    language: {
      en: "EN",
      ar: "AR"
    }
  },
  ar: {
    meta: {
      title: "كيرAI - حلول الرعاية الصحية المدعومة بالذكاء الاصطناعي",
      description: "حول رعاية المرضى من خلال الأتمتة الذكية والتحليلات التنبؤية.",
      ogTitle: "كيرAI - حلول الرعاية الصحية المدعومة بالذكاء الاصطناعي",
      ogDescription: "أدوات الذكاء الاصطناعي للأسر ومقدمي الرعاية والمزودين.",
      canonical: "https://www.careai.app"
    },
    navigation: {
      features: "المميزات",
      partners: "الشركاء",
      pricing: "الأسعار",
      about: "عنّا",
      contact: "اتصل بنا",
      signIn: "تسجيل الدخول",
      getStarted: "ابدأ الآن",
      getStartedFree: "ابدأ الآن (مجاناً)"
    },
    hero: {
      title: "حلول الرعاية الصحية المدعومة بالذكاء الاصطناعي",
      subtitle: "حول رعاية المرضى من خلال الأتمتة الذكية والتحليلات التنبؤية والتكامل السلس عبر أنظمة الرعاية الصحية.",
      ctaPrimary: "ابدأ الآن",
      ctaSecondary: "اعرف المزيد",
      features: {
        safeSecure: "آمن ومضمون",
        easyToUse: "سهل الاستخدام",
        familyFirst: "العائلة أولاً"
      }
    },
    features: {
      title: "المميزات الرئيسية",
      subtitle: "حلول الذكاء الاصطناعي الشاملة التي تحول تقديم الرعاية الصحية.",
      carePlans: {
        title: "خطط الرعاية والمهام",
        description: "تنسيق المهام والأدوية والروتينات مع تحديثات فورية للأسر ومقدمي الرعاية."
      },
      predictiveInsights: {
        title: "الرؤى التنبؤية",
        description: "الذكاء الاصطناعي يكشف عن الاتجاهات والتحذيرات المبكرة من الملاحظات اليومية وتاريخ العلامات الحيوية."
      },
      aiAssistance: {
        title: "المساعدة الذكية",
        description: "اقتراحات ذكية وتذكيرات وملخصات توفر الوقت لمقدمي الرعاية."
      }
    },
    testimonial: {
      quote: "ساعدت كيرAI عائلتنا في تنسيق الرعاية اليومية دون فوضى. المهام والتذكيرات ورؤى الصحة في مكان واحد.",
      attribution: "— عائلة مقدم رعاية"
    },
    cta: {
      title: "هل أنت مستعد لتجربة كيرAI؟",
      subtitle: "انضم إلى آلاف المستخدمين الذين يثقون بكيرAI لاحتياجاتهم الصحية"
    },
    footer: {
      tagline: "أدوات الذكاء الاصطناعي للأسر ومقدمي الرعاية.",
      product: "المنتج",
      company: "الشركة",
      rights: "© 2025 كيرAI. جميع الحقوق محفوظة."
    },
    legal: {
      privacy: "الخصوصية",
      terms: "الشروط"
    },
    language: {
      en: "EN",
      ar: "AR"
    }
  }
};

export function getMessages(locale: Locale): Messages {
  return messages[locale] || messages[DEFAULT_LOCALE];
}

export function getMessage(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = getMessages(locale);
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if path not found
    }
  }
  
  return typeof value === 'string' ? value : key;
}

export function isRTL(locale: Locale): boolean {
  return locale === 'ar';
}

export function getLocaleFromCookie(): Locale {
  if (typeof document === 'undefined') return DEFAULT_LOCALE;
  
  const cookies = document.cookie.split(';');
  const localeCookie = cookies.find(cookie => cookie.trim().startsWith('locale='));
  
  if (localeCookie) {
    const locale = localeCookie.split('=')[1]?.trim();
    if (SUPPORTED_LOCALES.includes(locale as Locale)) {
      return locale as Locale;
    }
  }
  
  return DEFAULT_LOCALE;
}

export function setLocaleCookie(locale: Locale): void {
  if (typeof document === 'undefined') return;
  
  document.cookie = `locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function getLocaleFromLocalStorage(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  
  const stored = localStorage.getItem('locale');
  if (stored && SUPPORTED_LOCALES.includes(stored as Locale)) {
    return stored as Locale;
  }
  
  return DEFAULT_LOCALE;
}

export function setLocaleLocalStorage(locale: Locale): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('locale', locale);
}
