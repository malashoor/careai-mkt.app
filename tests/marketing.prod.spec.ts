import { test, expect } from "@playwright/test";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://careai.app";
const routes = ["/", "/features", "/pricing", "/about", "/contact"];
const locales = ["en","ar","fr","de","es","zh","ja","ko","hi","pt"];

test.describe("PROD i18n smoke", () => {
  for (const loc of locales) {
    for (const r of routes) {
      test(`${loc} ${r} live`, async ({ page }) => {
        await page.goto(`${BASE}/${loc}${r}`);
        await expect(page).toHaveURL(new RegExp(`${BASE}/${loc}${r}$`));
        
        // one <html>, correct dir
        expect(await page.locator("html").count()).toBe(1);
        const dir = await page.evaluate(() => document.documentElement.getAttribute("dir"));
        if (loc === "ar") expect(dir).toBe("rtl"); else expect(dir).toBe("ltr");
        
        // favicon present (presence, not visibility)
        const faviconCount = await page.locator('head link[rel="icon"]').count();
        expect(faviconCount).toBeGreaterThan(0);
        
        // language switcher test IDs (lowercase codes)
        await expect(page.locator('[data-testid="lang-en"]')).toBeAttached();
        await expect(page.locator('[data-testid="lang-ar"]')).toBeAttached();
      });
    }
  }
});
