import fs from 'fs';
import path from 'path';

const dir = path.resolve('src/i18n/locales');
const base = JSON.parse(fs.readFileSync(path.join(dir, 'en.json'), 'utf8'));
const locales = fs.readdirSync(dir).filter(f => f.endsWith('.json') && f !== 'en.json');

function flatten(obj: any, prefix = ''): Record<string,string> {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object') Object.assign(acc, flatten(v, key));
    else acc[key] = String(v ?? '');
    return acc;
  }, {} as Record<string,string>);
}

const baseFlat = flatten(base);
let hasGaps = false;

for (const f of locales) {
  const loc = f.replace('.json', '');
  const data = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  const flat = flatten(data);
  const missing = Object.keys(baseFlat).filter(k => !(k in flat) || flat[k] === '');
  if (missing.length) {
    hasGaps = true;
    console.log(`\n[${loc}] Missing (${missing.length}):`);
    missing.slice(0, 50).forEach(k => console.log(' -', k));
    if (missing.length > 50) console.log(` ...and ${missing.length - 50} more`);
  }
}

if (hasGaps) {
  console.error('\n❌ Missing translation keys detected.');
  process.exit(1);
} else {
  console.log('\n✅ All locale files complete.');
}
