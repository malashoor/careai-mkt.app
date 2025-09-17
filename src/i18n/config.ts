export const SUPPORTED_LOCALES = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR", rtl: true },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "hi", label: "हिंदी" },
  { code: "pt", label: "PT" },
] as const;

type Locale = typeof SUPPORTED_LOCALES[number];

export const DEFAULT_LOCALE = "en" as const;

export const isRTL = (code: string) => {
  const locale = SUPPORTED_LOCALES.find(l => l.code === code);
  return locale && 'rtl' in locale && locale.rtl === true;
};

export const localeCodes = SUPPORTED_LOCALES.map(l => l.code);
