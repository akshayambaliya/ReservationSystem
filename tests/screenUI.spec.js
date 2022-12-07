import { test, expect } from '@playwright/test';

test('Should display proper UI on landing screen', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator("text=First Name")).toBeVisible()
  await expect(page.locator("text=Last Name")).toBeVisible()
  await expect(page.locator("text=Email")).toBeVisible()
  await expect(page.locator("text=Phone")).toBeVisible()
  await expect(page.locator("text=Actions")).toBeVisible()
  await expect(page.locator('[placeholder="Search with First Name/ Last Name/ Email"]')).toBeVisible()
  await page.getByRole('button', { name: 'ADD' }).click();
});

test('Should display proper fillter result', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByPlaceholder('Search with First Name/ Last Name/ Email').click()
  await page.getByPlaceholder('Search with First Name/ Last Name/ Email').fill('ENG')
  await expect(await page.locator('tr').count()).toEqual(2)
});