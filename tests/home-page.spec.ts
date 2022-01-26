import { test, expect } from '@playwright/test';

test('When I click on the link Home page I go to to the Home page', async ({ page }) => {
  await page.goto('https://d.hr.dmerej.info/');
  await page.locator('text=Home').click();
  await expect(page).toHaveTitle(/HR DB/);
});

test('When I click on the List Employees', async ({ page }) => {
  await page.goto('https://d.hr.dmerej.info/');
  await page.locator('text=List Employees').click();
  await expect(page).toHaveTitle(/Employees/);
});


test('When I click on the link Add new employee I go to to the Add new employee page', async ({ page }) => {
  await page.goto('https://d.hr.dmerej.info/');
  await page.locator('text=Add new employee').click();
  await expect(page).toHaveTitle(/Add new employee/);
});

test('When I click on the List Teams', async ({ page }) => {
  await page.goto('https://d.hr.dmerej.info/');
  await page.locator('text=List Teams').click();
  await expect(page).toHaveTitle(/Teams/);
});

test('When I click on the link Reset database I go to to the Reset database page', async ({ page }) => {
  await page.goto('https://d.hr.dmerej.info/');
  await page.locator('text=Reset database').click();
  await expect(page).toHaveTitle(/Reset Database/);
});

test('When I enter a random path I go to the Ressource not found page', async ({ page }) => {
  await page.goto('https://d.hr.dmerej.info/randomPage');
  await expect(page).toHaveTitle(/Not Found/);
});
