import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

// Ensure directories exist
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const routes = ['/', '/features', '/pricing', '/about', '/contact'];
const locales = ['en', 'ar', 'fr', 'de', 'es', 'zh', 'ja', 'ko', 'hi', 'pt'];

(async () => {
  console.log('📸 Starting screenshot capture...');
  
  // Ensure directories exist
  ensureDir('__screenshots__');
  ensureDir('__baseline__');
  ensureDir('__diff__');
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set viewport for consistent screenshots
  await page.setViewportSize({ width: 1280, height: 720 });
  
  let captured = 0;
  
  for (const locale of locales) {
    for (const route of routes) {
      const url = `http://localhost:3000${locale === 'en' ? '' : `/${locale}`}${route}`;
      const filename = `${locale}${route.replace(/\//g, '_') || '_home'}.png`;
      const filepath = `__screenshots__/${filename}`;
      
      try {
        console.log(`📷 Capturing ${url}...`);
        await page.goto(url, { waitUntil: 'networkidle' });
        
        // Wait for any animations to complete
        await page.waitForTimeout(1000);
        
        await page.screenshot({ 
          path: filepath, 
          fullPage: true,
          animations: 'disabled'
        });
        
        captured++;
        console.log(`✅ Captured ${filename}`);
      } catch (error) {
        console.error(`❌ Failed to capture ${url}:`, error.message);
      }
    }
  }
  
  await browser.close();
  console.log(`🎯 Captured ${captured} screenshots`);
})();
