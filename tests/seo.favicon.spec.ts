import { test, expect } from '@playwright/test';

test.describe('SEO & Favicon', () => {
test('has CareAI favicon tags', async ({ page }) => {
  const baseUrl = process.env.SITE ?? 'https://careai.app';
  await page.goto(`${baseUrl}/en/`);
  
  const head = page.locator('head');
  await expect(head.locator('link[rel="icon"][href*="careai-favicon"]')).toHaveCount(2);   // ico + svg
  await expect(head.locator('link[rel="apple-touch-icon"]')).toHaveCount(2);
  await expect(head.locator('link[rel="mask-icon"]')).toHaveAttribute('color', /#/);
  
  // Verify favicon files are accessible
  const paths = [
    '/icons/careai-favicon.ico',
    '/icons/careai-favicon.svg',
    '/icons/apple-touch-icon.png',
    '/icons/careai-safari-pinned.svg',
  ];
  for (const p of paths) {
    const res = await page.request.get(`${baseUrl}${p}`);
    expect(res.ok()).toBeTruthy();
  }
  
  console.log('✅ Favicon test passed - all favicon tags present');
});
});
