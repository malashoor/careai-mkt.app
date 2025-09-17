import I18nLink from "@/components/I18nLink";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";

export default function Navbar({ locale, dict }: { locale: string; dict: any }) {
  const nav = [
    { href: "/features", label: dict.nav.features },
    { href: "/pricing",  label: dict.nav.pricing  },
    { href: "/about",    label: dict.nav.about    },
    { href: "/contact",  label: dict.nav.contact  },
  ];
  
  const SUPPORTED_LOCALES = [
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'es', label: 'ES' },
    { code: 'zh', label: 'ZH' },
    { code: 'ja', label: 'JA' },
    { code: 'ko', label: 'KO' },
    { code: 'hi', label: 'HI' },
    { code: 'pt', label: 'PT' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center">
        <I18nLink href="/" locale={locale} className="flex items-center gap-2">
          <Image src="/images/careai_logo.svg" alt="CareAI" width={24} height={24} />
          <span className="font-semibold text-slate-900">CareAI</span>
        </I18nLink>

        <nav className="ml-8 hidden md:flex items-center gap-6 text-sm">
          {nav.map(i => (
            <I18nLink 
              key={i.href} 
              href={i.href} 
              locale={locale} 
              className="hover:text-slate-900 text-slate-600"
            >
              {i.label}
            </I18nLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {/* language chips */}
          <div className="hidden lg:flex flex-wrap gap-1">
            {SUPPORTED_LOCALES.map(l => (
              <I18nLink 
                key={l.code} 
                href="/" 
                locale={l.code}
                data-testid={`lang-${l.code}`}
                className={`rounded-full border px-2 py-1 text-xs ${
                  l.code === locale 
                    ? "bg-slate-900 text-white" 
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {l.label}
              </I18nLink>
            ))}
          </div>

          <a 
            href="https://app.careai.app/en" 
            className="inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
          >
            {dict.cta.getStarted}
          </a>
        </div>
      </div>
    </header>
  );
}
