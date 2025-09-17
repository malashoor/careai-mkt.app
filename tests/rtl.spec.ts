import { test, expect } from "@playwright/test";

test("en is ltr", async ({ page }) => {
  await page.goto("http://localhost:3001/en");
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
});

test("ar is rtl", async ({ page }) => {
  await page.goto("http://localhost:3001/ar");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
});
