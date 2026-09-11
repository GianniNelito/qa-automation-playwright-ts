import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';
import usersData from '../../data/users.data.json';

test.describe('Módulo de Compras - SauceDemo', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    // Reutilizamos el login con datos del JSON
    await loginPage.goto();
    await loginPage.login(
      usersData.validUser.username,
      usersData.validUser.password
    );
  });

  test('TC03: Agregar productos al carrito exitosamente', async ({ page }) => {
    const primerProducto = 'Sauce Labs Backpack';
    const segundoProducto = 'Sauce Labs Bike Light';

    // Agregamos dos productos distintos
    await inventoryPage.addItemByName(primerProducto);
    await inventoryPage.addItemByName(segundoProducto);

    // Verificamos que el contador del carrito marca 2
    const totalItems = await inventoryPage.getCartBadgeCount();
    expect(totalItems).toBe(2);

    // Navegamos al carrito y validamos la URL
    await inventoryPage.goToCart();
    await expect(page).toHaveURL(/.*cart.html/);
    await expect(page.locator('.title')).toHaveText('Your Cart');
  });
});