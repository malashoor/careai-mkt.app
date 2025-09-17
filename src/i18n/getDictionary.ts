type Dict = Record<string, any>;

export async function getDictionary(locale: string): Promise<Dict> {
  // Fallback to English if file is missing
  try {
    return (await import(`./locales/${locale}.json`)).default as Dict;
  } catch {
    return (await import(`./locales/en.json`)).default as Dict;
  }
}
