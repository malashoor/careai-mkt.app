import { test, expect } from "@playwright/test";

const routes = ["/", "/features", "/pricing", "/about", "/contact"];
const locales = ["en","ar","fr","de","es","zh","ja","ko","hi","pt"];

test.describe("Marketing i18n smoke", () => {
  for (const loc of locales) {
    for (const r of routes) {
      test(`${loc} ${r} renders`, async ({ page }) => {
        await page.goto(`/${loc}${r}`);
        await expect(page).toHaveURL(new RegExp(`/${loc}${r}$`));
        // favicon present (presence, not visibility)
        const iconCount = await page.locator('head link[rel="icon"]').count();
        expect(iconCount).toBeGreaterThan(0);
        // switcher has at least EN & AR buttons (using test IDs)
        await expect(page.locator('[data-testid="lang-en"]')).toBeAttached();
        await expect(page.locator('[data-testid="lang-ar"]')).toBeAttached();
        // RTL only for ar (with guard against nested HTML)
        expect(await page.locator('html').count()).toBe(1); // no nested <html>
        const dir = await page.evaluate(() => document.documentElement.getAttribute("dir"));
        if (loc === "ar") expect(dir).toBe("rtl"); else expect(dir).toBe("ltr");
      });
    }
  }
});
