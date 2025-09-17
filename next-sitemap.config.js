const { getSiteUrl } = require("./lib/site");

const SITE_URL = getSiteUrl();

const LOCALES = ['en','ar','fr','de','es','zh','ja','ko','hi','pt'];
const DEFAULT_LOCALE = 'en';

/** Remove the first path segment if it's a known locale */
function stripLocale(path) {
  const clean = path.split('?')[0].split('#')[0]; // path only
  const parts = clean.split('/').filter(Boolean);
  if (parts.length && LOCALES.includes(parts[0])) {
    parts.shift(); // remove locale
  }
  const rest = parts.join('/');
  return '/' + (rest || '');
}

/** Build a localized absolute URL from base path (no locale) */
function hrefFor(locale, basePath) {
  const normalized = basePath === '/' ? '' : basePath; // avoid double slashes
  return `${SITE_URL}/${locale}${normalized}`;
}

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // We keep one entry per actual page path (which already includes a locale),
  // but we compute alternates from the *base* (stripped) path so no double locales.
  transform: async (config, path) => {
    // path is like "/en", "/fr/about", "/ar/features", ...
    const base = stripLocale(path);
    return {
      loc: `${SITE_URL}${path}`,                  // keep the original localized path
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        // x-default is useful for Google
        { href: hrefFor(DEFAULT_LOCALE, base), hreflang: 'x-default' },
        ...LOCALES.map(l => ({ href: hrefFor(l, base), hreflang: l })),
      ],
    };
  },
};
