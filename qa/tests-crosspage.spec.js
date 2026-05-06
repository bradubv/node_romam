const { test, expect } = require('@playwright/test');

test('volunteering from school project page should populate the referrer field', async ({ page }) => {
  await page.goto('/projects/school');
  await page.click('a.volunteer');

  const referrerValue = await page.locator('input[name="referrer"]').inputValue();
  expect(referrerValue).toBe('http://127.0.0.1:3000/projects/school');
});

test('volunteering from the events page should populate the referrer field', async ({ page }) => {
  await page.goto('/projects/events');
  await page.click('a.volunteer');

  const referrerValue = await page.locator('input[name="referrer"]').inputValue();
  expect(referrerValue).toBe('http://127.0.0.1:3000/projects/events');
});

test('visiting the volunteer page directly should result in an empty referrer field', async ({ page }) => {
  await page.goto('/projects/volunteer');

  const referrerValue = await page.locator('input[name="referrer"]').inputValue();
  expect(referrerValue).toBe('');
});
