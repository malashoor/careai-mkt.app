import https from 'https';

const LOCALES = ['en','ar','fr','de','es','zh','ja','ko','hi','pt'];
const BASE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://careai.app').replace(/\/+$/, '');

function get(url: string): Promise<string> {
  return new Promise((res, rej) => {
    https.get(url, r => {
      let data = '';
      r.on('data', c => data += c);
      r.on('end', () => res(data));
      r.on('error', rej);
    }).on('error', rej);
  });
}

(async () => {
  const xml = await get(`${BASE}/sitemap.xml`);
  // Quick sanity checks on two representative pages
  const pages = [`${BASE}/en`, `${BASE}/en/about`];

  let ok = true;
  for (const p of pages) {
    const block = xml.split('<url>').find(b => b.includes(`<loc>${p}</loc>`)) || '';
    for (const l of LOCALES) {
      const expected = `${BASE}/${l}${p.replace(`${BASE}/en`, '')}`;
      if (!block.includes(`<xhtml:link rel="alternate" hreflang="${l}" href="${expected}"/>`)) {
        console.error(`Missing/incorrect hreflang for ${p} -> ${l} (${expected})`);
        ok = false;
      }
    }
  }
  if (!ok) process.exit(1);
  console.log('✅ Sitemap hreflang looks correct');
})();
