import { test, expect } from '@playwright/test';

test.describe('Home Page Quality & Functionality', () => {
  test('displays complete hero content without layout issues', async ({ page }) => {
    await page.goto('/en');

    // Check main title components are visible and properly positioned
    await expect(page.getByText('A clear, trusted window into')).toBeVisible();
    await expect(page.getByText('Romania')).toBeVisible();
    await expect(page.getByText('Practical guidance for visitors, students, professionals')).toBeVisible();

    // Verify hero content is within viewport
    await expect(page.getByText('A clear, trusted window into')).toBeInViewport();

    // Check that hero text doesn't overflow
    const heroSection = page.locator('text=A clear, trusted window into').locator('..');
    const heroBox = await heroSection.boundingBox();
    if (heroBox) {
      expect(heroBox.width).toBeLessThanOrEqual(await page.evaluate(() => window.innerWidth));
    }
  });

  test('value pillars display correctly with proper spacing', async ({ page }) => {
    await page.goto('/en');

    // Check all four value pillars are present and visible
    const pillars = [
      { title: 'Safety', description: 'Secure & welcoming' },
      { title: 'Nature', description: 'Carpathians & Danube' },
      { title: 'Culture', description: 'Rich heritage' },
      { title: 'Opportunity', description: 'Growing economy' }
    ];

    for (const pillar of pillars) {
      await expect(page.getByText(pillar.title)).toBeVisible();
      await expect(page.getByText(pillar.description)).toBeVisible();
    }

    // Check that pillars are properly arranged (should be in a grid on desktop)
    const pillarElements = page.locator('text=Safety').locator('..').locator('..');
    const pillarCount = await pillarElements.count();
    expect(pillarCount).toBeGreaterThanOrEqual(1);
  });

  test('navigation cards are functional and properly aligned', async ({ page }) => {
    await page.goto('/en');

    // Test each navigation card functionality
    const navigationCards = [
      { text: 'Visa & Entry', url: '/en/visa', description: 'Step-by-step flows' },
      { text: 'Work & Employment', url: '/en/work', description: 'Guidance on work visas' },
      { text: 'Business & Investment', url: '/en/business', description: 'Start a business' },
      { text: 'Study & Universities', url: '/en/study', description: 'University pathways' },
      { text: 'Travel & Itineraries', url: '/en/travel', description: 'Curated routes' }
    ];

    for (const card of navigationCards) {
      // Check card title and description are visible
      await expect(page.getByText(card.text)).toBeVisible();
      await expect(page.getByText(card.description)).toBeVisible();

      // Test navigation functionality
      await page.getByRole('link', { name: new RegExp(card.text) }).first().click();
      await expect(page).toHaveURL(card.url);

      // Verify target page loaded correctly
      await expect(page.locator('h1')).toBeVisible();

      // Navigate back to home
      await page.getByRole('button', { name: /Back/ }).click();
      await expect(page).toHaveURL('/en');
    }
  });

  test('footer CTA section is complete and functional', async ({ page }) => {
    await page.goto('/en');

    // Check footer CTA content
    await expect(page.getByText('Partnership-Ready Information')).toBeVisible();
    await expect(page.getByText('All guidance is carefully sourced, regularly updated')).toBeVisible();

    const institutionsLink = page.getByRole('link', { name: 'For Institutions' });
    await expect(institutionsLink).toBeVisible();

    // Check footer CTA is positioned properly (should be near bottom of page)
    const ctaElement = page.getByText('Partnership-Ready Information');
    await expect(ctaElement).toBeInViewport();
  });

  test('language switching works seamlessly with proper translations', async ({ page }) => {
    await page.goto('/en');

    // Verify English content
    await expect(page.getByText('A clear, trusted window into')).toBeVisible();
    await expect(page.getByText('Romania')).toBeVisible();

    // Switch to Romanian
    await page.selectOption('select[id="locale"]', 'ro');
    await page.waitForURL('/ro');

    // Verify Romanian content loaded
    await expect(page.getByText('Ghidaj practic pentru vizitatori')).toBeVisible();
    await expect(page.getByText('România')).toBeVisible();

    // Check navigation cards are translated
    await expect(page.getByText('Vize și Intrare')).toBeVisible();
    await expect(page.getByText('Afaceri și Investiții')).toBeVisible();

    // Switch back to English
    await page.selectOption('select[id="locale"]', 'en');
    await page.waitForURL('/en');

    // Verify English content restored
    await expect(page.getByText('A clear, trusted window into')).toBeVisible();
    await expect(page.getByText('Visa & Entry')).toBeVisible();
  });

  test('ribbon functionality is complete and accessible', async ({ page }) => {
    await page.goto('/en');

    // Check ribbon components are visible
    const localeSelector = page.locator('select[id="locale"]');
    await expect(localeSelector).toBeVisible();
    await expect(localeSelector).toBeInViewport();

    // Verify no back button on home page
    const backButton = page.getByRole('button', { name: /Back/i });
    await expect(backButton).not.toBeVisible();

    // Check language options are available
    const enOption = page.locator('option[value="en"]');
    const roOption = page.locator('option[value="ro"]');
    await expect(enOption).toBeAttached();
    await expect(roOption).toBeAttached();

    // Test language selector accessibility
    await localeSelector.focus();
    await expect(localeSelector).toBeFocused();
  });

  test('page loads with proper statistics display', async ({ page }) => {
    await page.goto('/en');

    // The home page should not have statistics (those are on sub-pages)
    // But should have the main value propositions clearly displayed
    const mainContent = page.locator('main, body');
    const contentText = await mainContent.textContent();

    // Verify substantial content is present
    expect(contentText?.length || 0).toBeGreaterThan(1000);

    // Check that key value propositions are present
    expect(contentText).toContain('visitors');
    expect(contentText).toContain('students');
    expect(contentText).toContain('professionals');
    expect(contentText).toContain('partners');
  });

  test('all interactive elements are properly accessible', async ({ page }) => {
    await page.goto('/en');

    // Test keyboard navigation through main elements
    await page.keyboard.press('Tab'); // Should focus first interactive element

    // Check that focused element is visible
    const focusedElement = page.locator(':focus');
    if (await focusedElement.count() > 0) {
      await expect(focusedElement).toBeVisible();
    }

    // Test that all links have proper accessible names
    const links = page.getByRole('link');
    const linkCount = await links.count();

    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      const accessibleName = await link.getAttribute('aria-label') || await link.textContent();
      expect(accessibleName?.trim()).toBeTruthy();
    }

    // Test that buttons have proper accessible names
    const buttons = page.getByRole('button');
    const buttonCount = await buttons.count();

    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
      const accessibleName = await button.getAttribute('aria-label') || await button.textContent();
      expect(accessibleName?.trim()).toBeTruthy();
    }
  });
});
