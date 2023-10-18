import { test, expect } from '@playwright/test';

test('test Just Transition', async ({ page }, testInfo) => {
  await page.goto('https://www.eni.com/en-IT/home.html');
  // await page.locator('#ModalPageCampaign').getByLabel('Close').click();
  await page.getByRole('link', { name: 'Just Transition' }).click();
  await expect(page.getByRole('heading', { name: 'Just Transition', exact: true })).toBeVisible();
  const screenshot = await page.screenshot();
  // await page.waitForTimeout(3000);
  await expect(page).toHaveScreenshot({ maxDiffPixelRatio: 0.4 });
  await testInfo.attach('Just Transition', {
    body: screenshot,
    contentType: 'img/png'
  });
});
