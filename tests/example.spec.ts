import { test, expect } from '@playwright/test';

test('basic test the link when i am on the homepage and click on the List Employees', async ({ page }) => {
  await page.goto('https://d.hr.dmerej.info/');
  await page.locator('text=List Employees').click();
  await expect(page).toHaveTitle(/Employees/);
});

test('basic test when i am on the homepage and click on the List Teams', async ({ page }) => {
  await page.goto('https://d.hr.dmerej.info/');
  await page.locator('text=List Teams').click();
  await expect(page).toHaveTitle(/Teams/);
});

test('When i am on the homepage and click on the link Reset database I go to to the Reset database page', async ({ page }) => {
  await page.goto('https://d.hr.dmerej.info/');
  await page.locator('text=Add new employee').click();
  await expect(page).toHaveTitle(/Add new employee/);
});

test('When i am on the homepage and click on the link Add new Employee I go to to the Add employee page', async ({ page }) => {
  await page.goto('https://d.hr.dmerej.info/');
  await page.locator('text=Add new employee').click();
  await expect(page).toHaveTitle(/Add new employee/);
});
