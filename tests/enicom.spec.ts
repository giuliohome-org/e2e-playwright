import { test, expect } from '@playwright/test';

test('test Sustainable Energy', async ({ page }, testInfo) => {
  await page.goto('https://www.eni.com/en-IT/home.html');
  await page.getByRole('button', { name: 'Vision' }).click();
  await page.locator('li').filter({ hasText: 'Accessible energy' }).nth(1).click();
  await page.locator('#menuHeader').getByRole('link', { name: 'Accessible energy' }).click();
  await expect(page.locator('#widget--1817102624')).toContainText('We support a transition that gives everyone access to reliable and sustainable energy');
  const screenshot = await page.screenshot();
  await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.2 });
  await testInfo.attach('Sustainable Energy', {
    body: screenshot,
    contentType: 'img/png'
  });
});
