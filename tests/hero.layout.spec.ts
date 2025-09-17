import { test, expect } from '@playwright/test';

test.describe('Marketing hero layout', () => {
  test('hero image is bounded and text is visible', async ({ page }) => {
    const baseUrl = process.env.SITE ?? 'https://careai.app';
    
    // Set viewport to desktop size to ensure md: breakpoint is active
    await page.setViewportSize({ width: 1024, height: 768 });
    
    await page.goto(`${baseUrl}/en/`);
    
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    // Wait for the page to fully load
    await page.waitForLoadState('networkidle');

    // Grab the hero image container with data-testid
    const heroImage = page.locator('[data-testid="hero-image"]');
    
    // Check if the element exists
    await expect(heroImage).toHaveCount(1);
    
    // Check that the hero section exists and has the correct structure
    const heroSection = page.locator('section:has([data-testid="hero-image"])');
    await expect(heroSection).toBeVisible();
    
    // Check that the grid layout is working (text left, image right)
    const heroGrid = page.locator('section:has([data-testid="hero-image"]) > div');
    await expect(heroGrid).toHaveClass(/grid/);
    
    // Check that the image element exists inside the container
    const imageElement = heroImage.locator('img');
    await expect(imageElement).toHaveCount(1);
    
    // Verify the image has the correct attributes
    await expect(imageElement).toHaveAttribute('alt', 'CareAI - AI-powered health monitoring for seniors');
    await expect(imageElement).toHaveAttribute('class', /object-contain/);
    
    // Check that the hero grid has the correct classes for responsive design
    await expect(heroGrid).toHaveClass(/md:grid-cols-2/);
    
    console.log('✅ Hero layout test passed - structure is correct');
  });
});
