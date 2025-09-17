import { test, expect } from '@playwright/test';

test.describe('CSS Loading', () => {
  test('global stylesheet is loaded', async ({ page }) => {
    const baseUrl = process.env.SITE ?? 'https://careai.app';
    await page.goto(`${baseUrl}/en/`);
    
    // Check that stylesheet links exist
    const hrefs = await page.locator('link[rel="stylesheet"]').evaluateAll(ls => 
      ls.map(l => l.getAttribute('href'))
    );
    expect(hrefs.some(h => h?.includes('/_next/static/css/'))).toBeTruthy();

    // Sanity: Tailwind class affects computed style
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    const fontSize = await h1.evaluate(el => getComputedStyle(el).fontSize);
    // 2xl/3xl should be > 20px
    expect(parseFloat(fontSize)).toBeGreaterThan(20);
    
    // Check that the page has proper styling (not Times New Roman)
    const body = page.locator('body');
    const fontFamily = await body.evaluate(el => getComputedStyle(el).fontFamily);
    expect(fontFamily).not.toContain('Times New Roman');
    
    console.log('✅ CSS loading test passed - stylesheets loaded and applied');
  });
});
