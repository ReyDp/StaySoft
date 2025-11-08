# 🏨 StaySoft — Sistema de Gestión para Moteles

**StaySoft** es un sistema integral diseñado para la **gestión operativa y administrativa de moteles**, que permite controlar habitaciones, estancias (check-in / check-out), cálculo de facturación por tiempo, inventario físico, ingresos y gastos, además de generar reportes administrativos.

Desarrollado con **Node.js, Express, MongoDB y React**, este proyecto busca ofrecer una herramienta moderna, rápida y escalable para el manejo eficiente del negocio.

---

## 🚀 Características principales

- 🛏️ **Gestión de habitaciones** — estados en tiempo real (libre, ocupada, mantenimiento, limpieza).
- ⏱️ **Control de estancias** — registro de hora de entrada/salida, cálculo automático de tiempo y valor a pagar.
- 💳 **Facturación dinámica** — tarifas por hora, fracción o noche, con comprobante de pago.
- 💰 **Gestión financiera** — ingresos, gastos y balances por periodo.
- 📦 **Inventario físico** — control de productos y movimientos (entradas, salidas, ajustes).
- 📊 **Reportes administrativos** — diario, semanal, mensual, anual e histórico.
- 🔐 **Usuarios y roles** — autenticación con JWT y permisos por perfil.
- 🧾 **Exportación de reportes** — generación de PDF y Excel.
- 🧠 **Arquitectura modular** — API REST + Frontend desacoplado.

---

## 🧩 Arquitectura general

---

## 🛠️ Tecnologías utilizadas

**Backend**
- Node.js + Express  
- MongoDB + Mongoose  
- JWT + bcrypt  
- PDFKit / ExcelJS  

**Frontend**
- React + Vite  
- TailwindCSS  
- Axios  
- React Router DOM  

**Infraestructura**
- Git & GitHub  
- Docker  
- Railway / Render / VPS  

---

## ⚙️ Instalación y configuración

### Clonar el repositorio
https://github.com/ReyDp/StaySoft.git
---

## 🔌 Endpoints principales

| Método | Endpoint | Descripción |
|--------|-----------|--------------|
| **GET** | `/api/habitaciones` | Listar habitaciones |
| **POST** | `/api/habitaciones` | Crear habitación |
| **PUT** | `/api/habitaciones/:id` | Actualizar habitación |
| **DELETE** | `/api/habitaciones/:id` | Eliminar habitación |
| **POST** | `/api/estancias/checkin` | Iniciar estancia (Check-in) |
| **PUT** | `/api/estancias/checkout/:id` | Finalizar estancia (Check-out) |
| **GET** | `/api/reportes/diario` | Obtener reporte diario |
---
## 📊 Reportes

El sistema **StaySoft** incluye un módulo completo de reportes administrativos y operativos que permiten visualizar la información clave del motel en distintos periodos de tiempo.

### 📅 Tipos de reportes
- **Diario:** Muestra los ingresos, egresos y ocupación del día.
- **Semanal:** Permite analizar tendencias y desempeño durante la semana.
- **Mensual:** Consolidado general de facturación, gastos y uso de habitaciones.
- **Anual:** Resumen ejecutivo de ingresos totales y métricas globales del año.
- **Histórico:** Consulta y exportación de todos los registros a largo plazo.

### 🧾 Funcionalidades adicionales
- 📤 **Exportación de datos** en **PDF** y **Excel**.  
- 📈 **Indicadores (KPIs):**
  - Tasa de ocupación.
  - Ingresos totales.
  - Promedio de tiempo por estancia.
  - Consumo promedio por cliente.
- 🔍 **Filtros avanzados:** rango de fechas, tipo de habitación, método de pago, usuario.

---

## 🔐 Roles de usuario

El sistema **StaySoft** cuenta con un manejo de roles que permite asignar permisos específicos según el tipo de usuario.  
Esto garantiza seguridad, control y eficiencia en las operaciones diarias del motel.

| Rol | Permisos |
|-----|-----------|
| **Administrador** | Acceso total al sistema, configuración, usuarios, reportes y módulos. |
| **Recepcionista** | Gestión de habitaciones, registro de estancias (Check-in / Check-out), cobros y cierre de turno. |
| **Contabilidad** | Control de ingresos, egresos, reportes financieros y balances. |
| **Inventario** | Gestión de stock, productos, entradas y salidas del inventario físico. |
| **Mantenimiento** | Actualización de estados de habitaciones, limpieza y soporte técnico. |

### 🧩 Gestión de usuarios
- Creación, edición y eliminación de usuarios.  
- Asignación y modificación de roles desde el panel administrativo.  
- Control de accesos mediante autenticación con **JWT** y contraseñas cifradas con **bcrypt**.  
- Registro de actividad por usuario para trazabilidad de acciones.
---
## 🧑‍💻 Autor

**Reinaldo Durán**  
📧 [reinaldo0602@gmail.com]  

---

## 📜 Licencia

Distribuido bajo licencia **MIT** — uso libre con atribución.  
Puedes modificar, usar o distribuir este proyecto siempre que se mantenga el crédito al autor original.


