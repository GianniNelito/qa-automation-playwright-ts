# 🚀 Hybrid Test Automation Framework (UI + API)

Framework integral de pruebas automatizadas construido con **Playwright** y **TypeScript**, implementando patrones de diseño escalables e integración continua.

## 🛠️ Tecnologías Utilizadas
- **Playwright Test**: Motor de ejecución para pruebas E2E y API.
- **TypeScript**: Tipado estricto y mantenibilidad.
- **Page Object Model (POM)**: Arquitectura desacoplada y reutilizable para la UI.
- **Data-Driven Testing**: Gestión de credenciales y datos dinámicos mediante JSON.
- **GitHub Actions**: Pipeline de CI/CD para ejecución automática ante push/pull requests y generación de artefactos.

## 📁 Estructura del Proyecto
- `pages/`: Clases POM con localizadores y métodos de acción.
- `tests/e2e/`: Flujos funcionales de usuario sobre interfaz gráfica (SauceDemo).
- `tests/api/`: Pruebas de contrato y validación de endpoints REST (ReqRes).
- `data/`: Datasets para pruebas parametrizadas.
- `.github/workflows/`: Definición de jobs y ejecución en CI.

## ⚙️ Instalación y Ejecución

1. Clonar el repositorio:
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   cd qa-automation-playwright-ts