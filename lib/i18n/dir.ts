export const RTL_LOCALES = new Set(["ar"]);
export const htmlDir = (locale?: string) =>
  RTL_LOCALES.has((locale ?? "en").toLowerCase()) ? "rtl" : "ltr";
