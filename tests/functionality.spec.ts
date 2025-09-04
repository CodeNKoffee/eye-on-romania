import { test, expect } from '@playwright/test';

test.describe('Translation Quality & Completeness', () => {
  test('no translation keys are displayed instead of actual text', async ({ page }) => {
    const pages = [
      '/en',
      '/en/visa',
      '/en/work',
      '/en/business',
      '/en/study',
      '/en/travel',
      '/en/privacy',
      '/en/terms',
      '/ro',
      '/ro/visa',
      '/ro/work',
      '/ro/business',
      '/ro/study',
      '/ro/travel',
      '/ro/privacy',
      '/ro/terms'
    ];

    for (const pagePath of pages) {
      await page.goto(pagePath);

      // Check for untranslated keys (should not contain dots indicating nested keys)
      const bodyText = await page.textContent('body');

      // Common translation key patterns that should not appear
      const translationKeyPatterns = [
        /\w+\.\w+\.\w+/, // e.g., homePage.title.main
        /\{\{.*\}\}/, // e.g., {{variable}}
        /\[object Object\]/, // JavaScript object not rendered
        /undefined/g, // Undefined values
        /null/g // Null values
      ];

      for (const pattern of translationKeyPatterns) {
        const matches = bodyText?.match(pattern);
        if (matches) {
          // Filter out legitimate uses (like URLs, email addresses, etc.)
          const suspiciousMatches = matches.filter(match =>
            !match.includes('http') &&
            !match.includes('@') &&
            !match.includes('www.') &&
            !match.includes('.com') &&
            !match.includes('.ro') &&
            !match.includes('3-4') && // Duration ranges
            !match.includes('1-2')
          );

          expect(suspiciousMatches).toHaveLength(0);
        }
      }

      // Specific checks for common untranslated areas
      const headings = page.locator('h1, h2, h3');
      const headingCount = await headings.count();

      for (let i = 0; i < headingCount; i++) {
        const heading = headings.nth(i);
        const text = await heading.textContent();

        // Headings should not contain translation keys
        expect(text).not.toMatch(/^[a-zA-Z]+\.[a-zA-Z]+/);
        expect(text).not.toBe('');
        expect(text).not.toBe('undefined');
      }
    }
  });

  test('language switching maintains content context correctly', async ({ page }) => {
    const pageTranslations = [
      { en: '/en/business', ro: '/ro/business', enText: 'Business & Investment', roText: 'Afaceri și Investiții' },
      { en: '/en/study', ro: '/ro/study', enText: 'Study & Universities', roText: 'Studii și Universități' },
      { en: '/en/work', ro: '/ro/work', enText: 'Work & Employment', roText: 'Muncă și Angajare' },
      { en: '/en/travel', ro: '/ro/travel', enText: 'Travel & Itineraries', roText: 'Călătorii și Itinerarii' }
    ];

    for (const { en, ro, enText, roText } of pageTranslations) {
      // Test EN to RO switching
      await page.goto(en);
      await expect(page.getByText(enText)).toBeVisible();

      await page.selectOption('select[id="locale"]', 'ro');
      await page.waitForURL(ro);
      await expect(page.getByText(roText)).toBeVisible();

      // Test RO to EN switching  
      await page.selectOption('select[id="locale"]', 'en');
      await page.waitForURL(en);
      await expect(page.getByText(enText)).toBeVisible();
    }
  });

  test('all legal pages have proper translations', async ({ page }) => {
    // English legal pages
    await page.goto('/en/privacy');
    await expect(page.getByText('Privacy Policy')).toBeVisible();
    await expect(page.getByText('Overview')).toBeVisible();

    await page.goto('/en/terms');
    await expect(page.getByText('Terms of Service')).toBeVisible();
    await expect(page.getByText('Acceptance of Terms')).toBeVisible();

    // Romanian legal pages  
    await page.goto('/ro/privacy');
    await expect(page.getByText('Politica de Confidențialitate')).toBeVisible();
    await expect(page.getByText('Prezentare Generală')).toBeVisible();

    await page.goto('/ro/terms');
    await expect(page.getByText('Termeni și Condiții')).toBeVisible();
    await expect(page.getByText('Acceptarea Termenilor')).toBeVisible();
  });
});

test.describe('Error Detection & Console Quality', () => {
  test('no console errors or warnings on any page', async ({ page }) => {
    const consoleMessages: { type: string; text: string; url: string }[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        consoleMessages.push({
          type: msg.type(),
          text: msg.text(),
          url: page.url()
        });
      }
    });

    const pages = [
      '/en',
      '/en/visa',
      '/en/work',
      '/en/business',
      '/en/study',
      '/en/travel',
      '/en/privacy',
      '/en/terms',
      '/ro',
      '/ro/business'
    ];

    for (const pagePath of pages) {
      await page.goto(pagePath);
      await page.waitForLoadState('networkidle');

      // Wait a bit for any delayed console messages
      await page.waitForTimeout(1000);
    }

    // Filter out known acceptable warnings (if any)
    const criticalMessages = consoleMessages.filter(msg =>
      !msg.text.includes('favicon') && // Favicon warnings are often acceptable
      !msg.text.includes('Deprecated') && // Deprecation warnings from dependencies
      !msg.text.toLowerCase().includes('third-party') // Third-party script warnings
    );

    if (criticalMessages.length > 0) {
      console.log('Console messages found:', criticalMessages);
    }

    expect(criticalMessages).toHaveLength(0);
  });

  test('no broken images or missing resources', async ({ page }) => {
    const failedRequests: string[] = [];

    page.on('response', (response) => {
      if (response.status() >= 400) {
        failedRequests.push(`${response.status()} - ${response.url()}`);
      }
    });

    const pages = ['/en', '/en/business', '/en/study', '/ro'];

    for (const pagePath of pages) {
      await page.goto(pagePath);
      await page.waitForLoadState('networkidle');

      // Check for broken images specifically
      const images = page.locator('img');
      const imageCount = await images.count();

      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
        const naturalHeight = await img.evaluate((el: HTMLImageElement) => el.naturalHeight);

        // Image should have loaded (natural dimensions > 0)
        expect(naturalWidth).toBeGreaterThan(0);
        expect(naturalHeight).toBeGreaterThan(0);
      }
    }

    // No failed requests should occur
    expect(failedRequests).toHaveLength(0);
  });

  test('all pages load without JavaScript errors', async ({ page }) => {
    const jsErrors: string[] = [];

    page.on('pageerror', (error) => {
      jsErrors.push(error.message);
    });

    const pages = [
      '/en', '/en/visa', '/en/work', '/en/business',
      '/en/study', '/en/travel', '/en/privacy', '/en/terms'
    ];

    for (const pagePath of pages) {
      await page.goto(pagePath);
      await page.waitForLoadState('domcontentloaded');

      // Interact with the page to trigger any dynamic errors
      if (pagePath === '/en') {
        // Test navigation on home page
        const cards = page.locator('[role="link"]');
        if (await cards.count() > 0) {
          await cards.first().hover();
        }
      }

      // Test language switching if locale selector exists
      const localeSelector = page.locator('select[id="locale"]');
      if (await localeSelector.count() > 0) {
        await localeSelector.selectOption('ro');
        await page.waitForTimeout(500);
        await localeSelector.selectOption('en');
      }
    }

    expect(jsErrors).toHaveLength(0);
  });
});

test.describe('Navigation & Interaction Quality', () => {
  test('all footer links work correctly and lead to proper pages', async ({ page }) => {
    await page.goto('/en');

    // Privacy link
    const privacyLink = page.getByRole('link', { name: 'Privacy Policy' });
    await expect(privacyLink).toBeVisible();
    await privacyLink.click();
    await expect(page).toHaveURL('/en/privacy');
    await expect(page.getByText('Privacy Policy')).toBeVisible();

    // Back to home
    await page.getByRole('button', { name: /Back/ }).click();
    await expect(page).toHaveURL('/en');

    // Terms link
    const termsLink = page.getByRole('link', { name: 'Terms of Service' });
    await expect(termsLink).toBeVisible();
    await termsLink.click();
    await expect(page).toHaveURL('/en/terms');
    await expect(page.getByText('Terms of Service')).toBeVisible();
  });

  test('ribbon appears on all pages including legal pages', async ({ page }) => {
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

      // Ribbon should be visible (contains locale selector)
      const ribbon = page.locator('select[id="locale"]');
      await expect(ribbon).toBeVisible();
      await expect(ribbon).toBeInViewport();

      // Ribbon should contain both language options
      const enOption = page.locator('option[value="en"]');
      const roOption = page.locator('option[value="ro"]');
      await expect(enOption).toBeAttached();
      await expect(roOption).toBeAttached();
    }
  });

  test('all internal navigation links work properly', async ({ page }) => {
    await page.goto('/en');

    const navigationTests = [
      { selector: 'text=Visa & Entry', expectedUrl: '/en/visa' },
      { selector: 'text=Work & Employment', expectedUrl: '/en/work' },
      { selector: 'text=Business & Investment', expectedUrl: '/en/business' },
      { selector: 'text=Study & Universities', expectedUrl: '/en/study' },
      { selector: 'text=Travel & Itineraries', expectedUrl: '/en/travel' }
    ];

    for (const { selector, expectedUrl } of navigationTests) {
      await page.goto('/en'); // Reset to home

      const link = page.locator(selector).first();
      await expect(link).toBeVisible();
      await link.click();

      await expect(page).toHaveURL(expectedUrl);

      // Verify page loaded correctly
      await expect(page.locator('h1')).toBeVisible();

      // Verify back button works
      const backButton = page.getByRole('button', { name: /Back/ });
      await expect(backButton).toBeVisible();
      await backButton.click();
      await expect(page).toHaveURL('/en');
    }
  });
});
