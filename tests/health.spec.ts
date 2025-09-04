import { test, expect } from '@playwright/test';

test.describe('Visual Quality & Layout', () => {
  test('all pages display content within viewport without overflow', async ({ page }) => {
    const pages = [
      '/en',
      '/en/visa', 
      '/en/work',
      '/en/business',
      '/en/study',
      '/en/travel',
      '/en/privacy',
      '/en/terms'
    ];

    for (const pagePath of pages) {
      await page.goto(pagePath);
      
      // Check no horizontal overflow
      const bodyScrollWidth = await page.evaluate(() => document.body.scrollWidth);
      const windowInnerWidth = await page.evaluate(() => window.innerWidth);
      expect(bodyScrollWidth).toBeLessThanOrEqual(windowInnerWidth + 1); // Allow 1px tolerance
      
      // Check main content is visible
      await expect(page.locator('h1').first()).toBeInViewport();
      
      // Check no elements are cut off horizontally
      const allElements = page.locator('*:visible');
      const count = await allElements.count();
      
      for (let i = 0; i < Math.min(count, 20); i++) { // Check first 20 visible elements
        const element = allElements.nth(i);
        const box = await element.boundingBox();
        if (box) {
          expect(box.x).toBeGreaterThanOrEqual(-5); // Allow small negative margin
          expect(box.x + box.width).toBeLessThanOrEqual(windowInnerWidth + 5);
        }
      }
    }
  });

  test('responsive design works properly on mobile devices', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    const pages = ['/en', '/en/business', '/en/study'];
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      
      // Check navigation cards stack properly on mobile
      const cards = page.locator('[role="link"]').filter({ hasText: /Visa|Work|Business|Study|Travel/ });
      if (await cards.count() > 0) {
        const firstCard = cards.first();
        const lastCard = cards.last();
        
        const firstBox = await firstCard.boundingBox();
        const lastBox = await lastCard.boundingBox();
        
        if (firstBox && lastBox) {
          // On mobile, cards should stack vertically (last card below first)
          expect(lastBox.y).toBeGreaterThan(firstBox.y);
        }
      }
      
      // Check text doesn't overflow on mobile
      const textElements = page.locator('p, h1, h2, h3');
      const textCount = await textElements.count();
      
      for (let i = 0; i < Math.min(textCount, 10); i++) {
        const element = textElements.nth(i);
        const box = await element.boundingBox();
        if (box) {
          expect(box.width).toBeLessThanOrEqual(375);
        }
      }
    }
  });

  test('back button appears and functions correctly on all sub-pages', async ({ page }) => {
    const subPages = [
      '/en/visa',
      '/en/work', 
      '/en/business',
      '/en/study',
      '/en/travel',
      '/en/privacy',
      '/en/terms'
    ];

    for (const pagePath of subPages) {
      await page.goto(pagePath);
      
      // Back button should be visible on sub-pages
      const backButton = page.getByRole('button', { name: /Back/i });
      await expect(backButton).toBeVisible();
      await expect(backButton).toBeInViewport();
      
      // Click back button and verify navigation
      await backButton.click();
      await page.waitForURL('/en');
      await expect(page).toHaveURL('/en');
      
      // Verify we're back on home page
      await expect(page.getByText('A clear, trusted window into')).toBeVisible();
    }
  });

  test('back button does NOT appear on home page', async ({ page }) => {
    await page.goto('/en');
    
    // Back button should not exist on home page
    const backButton = page.getByRole('button', { name: /Back/i });
    await expect(backButton).not.toBeVisible();
    
    // Same for Romanian home page
    await page.goto('/ro');
    await expect(backButton).not.toBeVisible();
  });
});
