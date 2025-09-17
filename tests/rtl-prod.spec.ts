import { test, expect } from "@playwright/test";
const APP="https://app.careai.app";
const MKT="https://careai.app";
for (const [base] of [[APP],[MKT]]) {
  test(`${base} en is ltr`, async ({ page }) => {
    await page.goto(`${base}/en`);
    await expect(page.locator("html")).toHaveAttribute("dir","ltr");
  });
  test(`${base} ar is rtl`, async ({ page }) => {
   await page.goto(`${base}/ar`);
   await expect(page.locator("html")).toHaveAttribute("dir","rtl");
  });
}
