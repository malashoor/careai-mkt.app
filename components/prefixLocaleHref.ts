export function prefixLocaleHref(locale: string, href: string) {
  const clean = href.startsWith("/") ? href : `/${href}`;
  return clean.startsWith(`/${locale}/`) || clean === `/${locale}`
    ? clean
    : `/${locale}${clean}`;
}
