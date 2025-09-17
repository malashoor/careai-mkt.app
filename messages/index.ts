import en from './en.json';
import ar from './ar.json';
import es from './es.json';
import fr from './fr.json';
import de from './de.json';
import zh from './zh.json';
import ja from './ja.json';
import ko from './ko.json';
import hi from './hi.json';
import pt from './pt.json';

export const CATALOGS = {
  en,
  ar,
  es,
  fr,
  de,
  zh,
  ja,
  ko,
  hi,
  pt,
} as const;

export type Locale = keyof typeof CATALOGS;

export const SUPPORTED_LOCALES: Locale[] = ['en', 'ar', 'es', 'fr', 'de', 'zh', 'ja', 'ko', 'hi', 'pt'];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  ar: 'العربية',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  hi: 'हिन्दी',
  pt: 'Português',
};

export const RTL_LOCALES: Locale[] = ['ar'];
export const LTR_LOCALES: Locale[] = ['en', 'es', 'fr', 'de', 'zh', 'ja', 'ko', 'hi', 'pt'];
