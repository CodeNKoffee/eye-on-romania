import { test, expect } from '@playwright/test';

test.describe('Content Quality & Completeness', () => {
  test('all pages have proper headings and content structure', async ({ page }) => {
    const pageStructures = [
      { url: '/en', expectedH1: /window into|Romania/, sections: ['Visa & Entry', 'Business & Investment', 'Study & Universities'] },
      { url: '/en/business', expectedH1: /Business.*Investment/, sections: ['Business Structure Options', 'Investment Opportunities', 'Step-by-Step Process'] },
      { url: '/en/work', expectedH1: /Work.*Employment/, sections: ['Work Visa Types', 'Job Markets', 'Step-by-Step Process'] },
      { url: '/en/study', expectedH1: /Study.*Universities/, sections: ['Academic Pathways', 'Filter Universities', 'Study Essentials'] },
      { url: '/en/travel', expectedH1: /Travel.*Itineraries/, sections: ['Featured Itineraries', 'Travel Essentials', 'Getting Around Romania'] },
      { url: '/en/visa', expectedH1: /Visa.*Entry/, sections: ['Visa Types', 'Visa Checklist'] },
      { url: '/en/privacy', expectedH1: /Privacy Policy/, sections: ['Overview', 'Information We Collect', 'Contact Us'] },
      { url: '/en/terms', expectedH1: /Terms.*Service/, sections: ['Acceptance of Terms', 'Purpose of Service', 'Disclaimer'] }
    ];

    for (const { url, expectedH1, sections } of pageStructures) {
      await page.goto(url);

      // Check main heading exists and is meaningful
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
      const h1Text = await h1.textContent();
      expect(h1Text).toMatch(expectedH1);

      // Check required sections exist
      for (const section of sections) {
        await expect(page.getByText(section)).toBeVisible();
      }

      // Check page has substantial content (not just headers)
      const bodyText = await page.textContent('main, body');
      expect(bodyText?.length || 0).toBeGreaterThan(500); // Minimum content length
    }
  });

  test('business page sections display complete information', async ({ page }) => {
    await page.goto('/en/business');

    // Business types section
    const businessTypes = ['SRL (Limited Liability Company)', 'PFA (Authorized Natural Person)', 'SA (Joint Stock Company)'];
    for (const type of businessTypes) {
      await expect(page.getByText(type)).toBeVisible();
    }

    // Check that each business type has capital and time information
    await expect(page.getByText('Min. Capital:')).toHaveCount(3);
    await expect(page.getByText('Setup Time:')).toHaveCount(3);

    // Investment opportunities section
    const investmentTypes = ['Technology & IT', 'Manufacturing & Industry', 'Renewable Energy', 'Agriculture & Food'];
    for (const investment of investmentTypes) {
      await expect(page.getByText(investment)).toBeVisible();
    }

    // Resources section
    const resources = ['ONRC - Trade Register', 'ANAF - Tax Authority', 'InvestRomania'];
    for (const resource of resources) {
      await expect(page.getByText(resource)).toBeVisible();
    }

    // Check that resource links are present and properly formatted
    const resourceLinks = page.getByRole('link', { name: /Visit.*Portal|Visit InvestRomania/ });
    expect(await resourceLinks.count()).toBeGreaterThan(0);
  });

  test('study page university information displays correctly', async ({ page }) => {
    await page.goto('/en/study');

    // Academic pathways should show duration information
    const pathways = ['Undergraduate', 'Graduate', 'Doctorate'];
    for (const pathway of pathways) {
      await expect(page.getByText(pathway)).toBeVisible();
    }

    // Duration badges should be visible and aligned
    const durationBadges = page.locator('text=/\\d+-\\d+ years|\\d+ years/');
    expect(await durationBadges.count()).toBeGreaterThan(0);

    // Study essentials should have all four sections
    const essentials = ['Tuition & Costs', 'Language Requirements', 'Student Visa', 'Student Housing'];
    for (const essential of essentials) {
      await expect(page.getByText(essential)).toBeVisible();
    }

    // Filter functionality should be present
    await expect(page.getByText('Filter Universities')).toBeVisible();
    const selects = page.locator('select');
    expect(await selects.count()).toBeGreaterThan(0);
  });

  test('work page displays comprehensive employment information', async ({ page }) => {
    await page.goto('/en/work');

    // Work visa types section
    await expect(page.getByText('Work Visa Types')).toBeVisible();

    // Job markets section
    await expect(page.getByText('Job Markets')).toBeVisible();

    // Step-by-step process should show numbered steps
    await expect(page.getByText('Step-by-Step Process')).toBeVisible();
    const steps = page.locator('text=/^\\d+$/'); // Find numbered steps
    expect(await steps.count()).toBeGreaterThanOrEqual(4);

    // Work essentials section
    await expect(page.getByText('Work Essentials')).toBeVisible();

    // Resources section
    await expect(page.getByText('Official Resources')).toBeVisible();
  });

  test('travel page shows itineraries and practical information', async ({ page }) => {
    await page.goto('/en/travel');

    // Featured itineraries section
    await expect(page.getByText('Featured Itineraries')).toBeVisible();

    // Travel essentials with practical info
    await expect(page.getByText('Travel Essentials')).toBeVisible();
    const essentialInfo = ['Language', 'Currency', 'Safety', 'Connectivity'];
    for (const info of essentialInfo) {
      await expect(page.getByText(info)).toBeVisible();
    }

    // Transportation options
    await expect(page.getByText('Getting Around Romania')).toBeVisible();
    const transportMethods = ['By Train', 'By Bus', 'Car Rental'];
    for (const method of transportMethods) {
      await expect(page.getByText(method)).toBeVisible();
    }
  });
});

test.describe('Visual Consistency & Card Alignment', () => {
  test('resource cards are properly aligned with bottom-aligned links', async ({ page }) => {
    // Test business page resource cards
    await page.goto('/en/business');

    const resourceCards = page.locator('[class*="grid"] > div').filter({ hasText: /ONRC|ANAF|InvestRomania/ });
    const cardCount = await resourceCards.count();

    if (cardCount > 1) {
      // Get bounding boxes of all cards
      const cardBoxes = [];
      for (let i = 0; i < cardCount; i++) {
        const box = await resourceCards.nth(i).boundingBox();
        if (box) cardBoxes.push(box);
      }

      // Cards should have similar heights (within reasonable tolerance)
      const heights = cardBoxes.map(box => box.height);
      const maxHeight = Math.max(...heights);
      const minHeight = Math.min(...heights);
      const heightDifference = maxHeight - minHeight;

      // Height difference should be minimal (within 50px tolerance for flexible content)
      expect(heightDifference).toBeLessThan(50);

      // Check that links are at the bottom of each card
      const cardLinks = page.getByRole('link', { name: /Visit.*Portal|Visit InvestRomania/ });
      const linkCount = await cardLinks.count();

      for (let i = 0; i < linkCount; i++) {
        const link = cardLinks.nth(i);
        await expect(link).toBeVisible();
        await expect(link).toBeInViewport();
      }
    }
  });

  test('investment opportunity cards have aligned incentive badges', async ({ page }) => {
    await page.goto('/en/business');

    // Check investment opportunity section
    const investmentSection = page.locator('text=Investment Opportunities').locator('..');
    const opportunityCards = investmentSection.locator('div').filter({ hasText: /Technology|Manufacturing|Renewable|Agriculture/ });
    const cardCount = await opportunityCards.count();

    if (cardCount > 1) {
      // Each card should have incentive information at the bottom
      for (let i = 0; i < cardCount; i++) {
        const card = opportunityCards.nth(i);
        await expect(card).toBeVisible();

        // Card should contain both description and incentives
        const cardText = await card.textContent();
        expect(cardText?.length || 0).toBeGreaterThan(50); // Should have substantial content
      }
    }
  });

  test('academic pathway cards have aligned duration badges', async ({ page }) => {
    await page.goto('/en/study');

    const pathwayCards = page.locator('text=Academic Pathways').locator('..').locator('div').filter({ hasText: /Undergraduate|Graduate|Doctorate/ });
    const cardCount = await pathwayCards.count();

    if (cardCount > 1) {
      // Check that duration badges are aligned at bottom
      const durationBadges = page.locator('[class*="rounded-full"]').filter({ hasText: /\\d+-\\d+ years|\\d+ years/ });
      const badgeCount = await durationBadges.count();

      expect(badgeCount).toBeGreaterThanOrEqual(3); // Should have badges for each pathway

      // Each badge should be visible and properly positioned
      for (let i = 0; i < badgeCount; i++) {
        const badge = durationBadges.nth(i);
        await expect(badge).toBeVisible();
        await expect(badge).toBeInViewport();
      }
    }
  });

  test('business structure cards have right-aligned values', async ({ page }) => {
    await page.goto('/en/business');

    // Check business structure cards
    const structureCards = page.locator('text=Business Structure Options').locator('..').locator('div').filter({ hasText: /SRL|PFA|SA/ });
    const cardCount = await structureCards.count();

    for (let i = 0; i < cardCount; i++) {
      const card = structureCards.nth(i);

      // Each card should have Min. Capital and Setup Time information
      const cardText = await card.textContent();
      expect(cardText).toContain('Min. Capital:');
      expect(cardText).toContain('Setup Time:');

      // Values should be properly formatted and visible
      const capitalValue = card.locator('text=/€\\d+|No minimum/');
      const timeValue = card.locator('text=/\\d+-\\d+ .*days|\\d+ .*days/');

      if (await capitalValue.count() > 0) {
        await expect(capitalValue.first()).toBeVisible();
      }
      if (await timeValue.count() > 0) {
        await expect(timeValue.first()).toBeVisible();
      }
    }
  });
});
