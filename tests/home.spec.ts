import { test, expect } from '@playwright/test';

test('home has EyeOnRomania header', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('text=EyeOnRomania')).toHaveCount(1);
});
