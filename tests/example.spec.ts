import { test, expect } from "@playwright/test"

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/")

  await expect(page).toHaveTitle(/Karol Karnas/)
})

test("after click link 'projects' in main has title Projects", async ({ page }) => {
  await page.goto("http://localhost:3000/")

  await page
    .getByRole("navigation")
    .getByRole("link", { name: "about.json" })
    .click()

  await expect(page.getByRole("heading", { name: "About" })).toBeVisible()
})

test("after click link 'contact' in main has title Contact", async ({ page }) => {
  await page.goto("http://localhost:3000/")

  await page
    .getByRole("main")
    .getByRole("link", { name: "contact.sass" })
    .click()

  await expect(
    page.getByRole("heading", { level: 1, name: "Contact" })
  ).toBeVisible()
})

test("login with incorrect credentials", async ({ page }) => {
  await page.goto("http://localhost:3000/dashboard")

  await page.getByLabel("Email").fill("admin@email.com")
  await page.getByLabel("Password").fill("123")
  await page.getByRole("button", { name: "Submit" }).click()

  await expect(page.getByText("Invalid credentials.")).toBeVisible()
})

// ---- original ------

// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
