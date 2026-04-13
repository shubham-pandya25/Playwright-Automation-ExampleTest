const {test, expect} = require('@playwright/test');

 test('To verify home messages run icons exit', async ({ page }) => {
  await page.goto('https://example-test/');
  await page.getByRole('button', { name: 'Open Messenger' }).click();
  await expect(page.frameLocator('iframe[name="messenger-frame"]').getByTestId('home')).toBeVisible();
  await expect(page.frameLocator('iframe[name="messenger-frame"]').getByTestId('messages')).toBeVisible();
  await expect(page.frameLocator('iframe[name="messenger-frame"]').getByTestId('text')).toBeVisible();
});

test('To verify intercome messager icon exit and clickable', async ({page})=>{
  await page.goto("https://example-test/");
  await page.getByRole('button', { name: ' Messenger' }).click();
  await expect(page.getByRole('button', { name: 'Messenger' })).toBeVisible();
});

test('To verify the bar have the text Search for help', async ({ page }) => {
  await page.goto("https://example-test/");
  await page.getByRole('button', { name: 'Messenger' }).click();
  await expect (page.frameLocator('iframe[name="messenger-frame"]').getByRole('button', { name: 'Search for help' })).toHaveText("Search for help");
}); 

test('To verify the looking bar for help show result', async ({ page }) => {
  await page.goto("https://example-test");
  await page.getByRole('button', { name: 'Open Messenger' }).click();
  await page.frameLocator('iframe[name="messenger-frame"]').getByTestId('help').click();
  await page.frameLocator('iframe[name="messenger-frame"]').getByRole('button', { name: 'Search for help Search for help' }).click();
  await page.frameLocator('iframe[name="messenger-frame"]').getByRole('textbox', { name: 'Search for help' }).fill('Rollup');
  await page.frameLocator('iframe[name="messenger-frame"]').getByRole('textbox', { name: 'Search for help' }).press('Enter');
  await expect (page.frameLocator('iframe[name="messenger-frame"]').getByRole('button', { name: 'What does being “rolled up” mean?' })).toHaveText("What does being “rolled up” mean?");
});

test('To verify all 4 collection are shown in the base icon section', async ({ page }) => {
  await page.goto("https://example-test");
  await page.getByRole('button', { name: 'Open Intercom Messenger' }).click();
  await page.frameLocator('iframe[name="messenger-frame"]').getByTestId('help').click();
  await expect (page.frameLocator('iframe[name="messenger-frame"]').getByRole('button', { name: ' 21 mode' })).toBeVisible();
  await expect (page.frameLocator('iframe[name="messenger-frame"]').getByRole('button', { name: ' 16 mode' })).toBeVisible();
  await expect (page.frameLocator('iframe[name="messenger-frame"]').getByRole('button', { name: '11 mode' })).toBeVisible();
  await expect (page.frameLocator('iframe[name="messenger-frame"]').getByRole('button', { name: '3 mode' })).toBeVisible();
});
	
