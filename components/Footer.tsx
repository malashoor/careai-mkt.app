import I18nLink from "@/components/I18nLink";
import BrandLogo from './BrandLogo';

export default function Footer({ locale, dict }: { locale: string; dict: any }) {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <I18nLink href="/" locale={locale} className="inline-flex items-center gap-2.5" aria-label="CareAI home">
              <BrandLogo withText={true} />
            </I18nLink>
            <p className="text-slate-600 dark:text-slate-300 mt-2 max-w-md">
              {dict.footer.tagline || "Companionship, health monitoring, and reminders for seniors."}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">{dict.footer.product || "Product"}</h3>
            <ul className="space-y-2">
              <li>
                <I18nLink href="/features" locale={locale} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  {dict.nav.features}
                </I18nLink>
              </li>
              <li>
                <I18nLink href="/partners" locale={locale} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  {dict.nav.partners || "Partners"}
                </I18nLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">{dict.footer.company || "Company"}</h3>
            <ul className="space-y-2">
              <li>
                <I18nLink href="/about" locale={locale} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  {dict.nav.about}
                </I18nLink>
              </li>
              <li>
                <I18nLink href="/contact" locale={locale} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                  {dict.nav.contact}
                </I18nLink>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-8 pt-8 text-center">
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
