import { test, expect } from '@playwright/test';

test('strona główna ładuje się i ma tytuł', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/.+/);
  await page.goto('/kontakt.html')
  await expect(page).toHaveTitle(/.+/);
});

test('na stronie jest widoczny nagłówek lub treść', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1').first()).toBeVisible();
  await page.goto('/kontakt.html')
  await expect(page.locator('h1').first()).toBeVisible();
});

test('treść tytułu strony to testuje pull request', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('testuje pull request');
  await page.goto('/kontakt.html')
  await expect(page).toHaveTitle('testuje pull request');
});