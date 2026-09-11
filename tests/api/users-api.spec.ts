import { test, expect } from '@playwright/test';

test.describe('API Testing - Suite de Usuarios (ReqRes)', () => {
  const BASE_URL = 'https://reqres.in/api';

  test('API01: GET - Obtener lista de usuarios y validar contrato de respuesta', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users?page=2`);

    // Validar status code y headers
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();

    // Validar estructura y tipos de datos
    expect(body.page).toBe(2);
    expect(Array.isArray(body.data)).toBeTruthy();
    expect(body.data.length).toBeGreaterThan(0);

    // Validar propiedades del primer usuario
    const firstUser = body.data[0];
    expect(firstUser).toHaveProperty('id');
    expect(firstUser).toHaveProperty('email');
    expect(firstUser).toHaveProperty('first_name');
    expect(firstUser).toHaveProperty('avatar');
  });

  test('API02: POST - Crear un nuevo usuario exitosamente', async ({ request }) => {
    const payload = {
      name: 'Gianni Tester',
      job: 'QA Automation Engineer'
    };

    const response = await request.post(`${BASE_URL}/users`, {
      data: payload
    });

    // Validar creación (HTTP 201 Created)
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe(payload.name);
    expect(body.job).toBe(payload.job);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('createdAt');
  });
});