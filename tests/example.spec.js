import { test, expect } from '@playwright/test';

test('strona główna ładuje się i ma tytuł', async ({ page }) => {
  await page.goto('/');

  // Sprawdza, czy tytuł strony (<title>) nie jest pusty — dopasuj tekst do swojej strony
  await expect(page).toHaveTitle(/.+/);
});

test('na stronie jest widoczny nagłówek lub treść', async ({ page }) => {
  await page.goto('/');

  // Przykład: sprawdza widoczność dowolnego nagłówka h1 (zmień np. na konkretny tekst lub element)
  await expect(page.locator('h1').first()).toBeVisible();
});