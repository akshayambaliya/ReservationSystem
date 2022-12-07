import { test, expect } from '@playwright/test';

test('Should edit information by click on edit icon from table and displayed edited information', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('row', { name: 'IDM ENG idm.test@idm.com 9999999999' }).getByTestId('EditIcon').click();
  await page.getByRole('button', { name: 'Choose date, selected date is Nov 18, 2021' }).click();
  await page.getByRole('gridcell', { name: '19' }).click();
  await page.getByText('business-suite').click();
  await page.getByRole('option', { name: 'presidential-suite' }).click();
  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').fill('IDMM');
  await page.locator('input[name="lastName"]').click();
  await page.locator('input[name="lastName"]').fill('ENGG');
  await page.getByLabel('i confirm the information given above').check();
  await page.getByRole('button', { name: 'Edit' }).click();
  await expect(page.locator("text=IDMM")).toBeVisible()
  await expect(page.locator("text=ENGG")).toBeVisible()
});

test('Should add new deatils and display added details in table', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'ADD' }).click();
  await page.getByRole('button', { name: 'Room size ​' }).first().click();
  await page.getByRole('option', { name: 'business-suite' }).click();
  await page.getByLabel('Room quantity *').click();
  await page.getByLabel('Room quantity *').fill('3');
  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').fill('FName');
  await page.locator('input[name="lastName"]').click();
  await page.locator('input[name="lastName"]').fill('LName');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('test@gmail.com');
  await page.locator('input[name="phone"]').click();
  await page.locator('input[name="phone"]').fill('9409632122');
  await page.locator('input[name="streetName"]').click();
  await page.locator('input[name="streetName"]').click();
  await page.locator('input[name="streetName"]').fill('test address');
  await page.locator('input[name="streetNumber"]').click();
  await page.locator('input[name="streetNumber"]').fill('10');
  await page.locator('input[name="zipCode"]').click();
  await page.locator('input[name="zipCode"]').fill('345678');
  await page.locator('input[name="state"]').click();
  await page.locator('input[name="state"]').fill('state');
  await page.locator('input[name="city"]').click();
  await page.locator('input[name="city"]').fill('city');
  await page.getByRole('button', { name: 'Room size business-suite' }).filter({ hasText: '​' }).click();
  await page.getByRole('option', { name: 'extraTV' }).click();
  await page.getByRole('option', { name: 'extraBreakfast' }).click();
  await page.locator('#menu-extras div').first().click();
  await page.getByLabel('Credit Card').check();
  await page.getByLabel('Tags').click();
  await page.getByRole('option', { name: 'hotel' }).click();
  await page.getByLabel('Send me a reminder').check();
  await page.getByLabel('Subscribe to newslatter').check();
  await page.getByLabel('i confirm the information given above').check();
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.locator("text=FName")).toBeVisible()
  await expect(page.locator("text=LName")).toBeVisible()
  await expect(page.locator("text=9409632122")).toBeVisible()
});

test('Should delete row on click on delete icon', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(await page.locator('tr').count()).toEqual(3)
  await page.getByRole('row', { name: 'IDM ENG idm.test@idm.com 9999999999' }).getByTestId('DeleteForeverIcon').click();
  await expect(await page.locator('tr').count()).toEqual(2)
});