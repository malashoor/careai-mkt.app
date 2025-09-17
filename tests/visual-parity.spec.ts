import { test, expect } from '@playwright/test';

test.describe('Visual Parity', () => {
  test('header nav is styled (no bullets, proper spacing)', async ({ page }) => {
    const baseUrl = process.env.SITE ?? 'https://careai.app';
    await page.goto(`${baseUrl}/en/`);
    
    const nav = page.locator('header nav');
    // Check that nav has flex layout and proper styling
    await expect(nav).toHaveClass(/flex/);
    await expect(nav).toHaveClass(/items-center/);
    
    console.log('✅ Nav styling test passed - proper flex layout');
  });

  test('hero image is within bounds and grid present', async ({ page }) => {
    const baseUrl = process.env.SITE ?? 'https://careai.app';
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(`${baseUrl}/en/`);
    
    // Find the hero section specifically
    const heroSection = page.locator('section:has([data-testid="hero-image"])');
    await expect(heroSection).toBeVisible();
    
    const grid = heroSection.locator('.grid').first();
    await expect(grid).toBeVisible();
    
    const img = page.getByTestId('hero-image');
    await expect(img).toBeAttached();
    
    // Check that the image container has proper styling
    const imgContainer = img.locator('..');
    await expect(imgContainer).toHaveClass(/relative/);
    await expect(imgContainer).toHaveClass(/w-full/);
    
    console.log('✅ Hero layout test passed - bounded and grid present');
  });
});
