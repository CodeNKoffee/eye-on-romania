import { test, expect } from '@playwright/test';

test.describe('Health Checks', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Eye.*Romania/);
    await expect(page.getByText('A clear, trusted window into')).toBeVisible();
  });

  test('all main navigation pages load', async ({ page }) => {
    const pages = [
      '/en/visa',
      '/en/work',
      '/en/business',
      '/en/study',
      '/en/travel'
    ];

    for (const pagePath of pages) {
      await page.goto(pagePath);
      await expect(page.locator('h1')).toBeVisible();
      // Check that the page doesn't have any obvious errors
      await expect(page.locator('text=Error')).not.toBeVisible();
    }
  });

  test('language switching works', async ({ page }) => {
    await page.goto('/en');

    // Switch to Romanian
    await page.selectOption('select[id="locale"]', 'ro');
    await page.waitForURL('/ro');
    await expect(page).toHaveURL('/ro');

    // Switch back to English
    await page.selectOption('select[id="locale"]', 'en');
    await page.waitForURL('/en');
    await expect(page).toHaveURL('/en');
  });

  test('legal pages are accessible', async ({ page }) => {
    // Privacy page
    await page.goto('/en/privacy');
    await expect(page.getByText('Privacy Policy')).toBeVisible();

    // Terms page
    await page.goto('/en/terms');
    await expect(page.getByText('Terms of Service')).toBeVisible();
  });

  test('footer links work', async ({ page }) => {
    await page.goto('/en');

    // Check privacy link in footer
    await page.getByRole('link', { name: 'Privacy Policy' }).click();
    await expect(page).toHaveURL('/en/privacy');

    await page.goBack();

    // Check terms link in footer
    await page.getByRole('link', { name: 'Terms of Service' }).click();
    await expect(page).toHaveURL('/en/terms');
  });

  test('back button functionality', async ({ page }) => {
    await page.goto('/en');

    // Navigate to a sub-page
    await page.getByRole('link', { name: /Business/ }).first().click();

    // Check that back button appears (not on home page)
    await expect(page.getByRole('button', { name: /Back/ })).toBeVisible();

    // Test back button functionality
    await page.getByRole('button', { name: /Back/ }).click();
    await expect(page).toHaveURL('/en');
  });

  test('responsive design works', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/en');

    // Check that navigation cards are still visible and functional
    await expect(page.getByText('Visa & Entry')).toBeVisible();
    await expect(page.getByText('Business & Investment')).toBeVisible();

    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/en');

    // Check that layout adapts properly
    await expect(page.getByText('A clear, trusted window into')).toBeVisible();
  });
});
