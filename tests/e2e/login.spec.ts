import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test.describe('Módulo de Autenticación - SauceDemo', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC01: Inicio de sesión exitoso con credenciales válidas', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    // Validamos que redirige al inventario y muestra el título de la vista
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('TC02: Mostrar mensaje de error al ingresar credenciales incorrectas', async () => {
    await loginPage.login('usuario_invalido', 'password_erronea');

    const mensajeError = await loginPage.getErrorMessage();
    expect(mensajeError).toContain('Username and password do not match');
  });
});