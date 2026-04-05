import { test, expect } from '@playwright/test';

test.describe('DBD Loadout Maker', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the title', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('DBD Loadout Maker');
  });

  test('should display both survivor and killer loadouts', async ({ page }) => {
    await expect(page.locator('h2')).toContainText(['Survivor Loadout', 'Killer Loadout']);
  });

  test('should randomize perks when clicking the random button', async ({ page }) => {
    const plusIcons = page.locator('.fas.fa-plus');
    const initialCount = await plusIcons.count();
    
    await page.locator('h2:has-text("Survivor") + div i.fa-random').first().click();
    
    await expect(page.locator('.fas.fa-plus')).toHaveCount(initialCount - 4);
  });

  test('should lock a perk and not randomize it', async ({ page }) => {
    const firstPerkSlot = page.locator('h2:has-text("Survivor") + div > div').first();
    await firstPerkSlot.locator('i.fa-random').click();
    
    const perkImg = firstPerkSlot.locator('img');
    await expect(perkImg).toBeVisible();
    const initialSrc = await perkImg.getAttribute('src');
    
    await firstPerkSlot.locator('i.fa-unlock').click();
    await expect(firstPerkSlot.locator('i.fa-lock')).toBeVisible();
    
    await page.locator('h2:has-text("Survivor") + div i.fa-random').first().click();
    
    await expect(perkImg).toHaveAttribute('src', initialSrc!);
  });
});
