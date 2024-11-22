---

# **eCommerce MERN + PostgreSQL**

---

---
**Este proyecto es una aplicación de comercio electrónico diseñada utilizando la tecnología MERN (MongoDB, Express, React, Node.js) junto con PostgreSQL. La arquitectura divide las responsabilidades entre las bases de datos: MongoDB gestiona la información de productos, categorías, órdenes y carritos, mientras que PostgreSQL se encarga de los datos de usuarios.**

---

---

## **Características principales**

- **Frontend**: Aplicación web responsiva creada con React, con una interfaz moderna e intuitiva.
- **Backend**: API RESTful construida con Node.js y Express.
- **Base de datos**:
  - **MongoDB**: Para manejar los datos de productos, categorías, carritos y órdenes.
  - **PostgreSQL**: Para gestionar los datos de usuarios.
- **Autenticación y autorización**: Manejo seguro de inicio de sesión y permisos.
- **Gestión de carrito de compras**: Agregar, eliminar y actualizar productos en tiempo real.
- **Procesamiento de órdenes**: Generación de órdenes de compra y almacenamiento de detalles.
- **Categorías de productos**: Organización de productos para facilitar la búsqueda y navegación.

---

## **Requisitos previos**

- Node.js (v14 o superior)
- MongoDB (v5 o superior)
- PostgreSQL (v12 o superior)
- npm

---

## **Estructura del proyecto**

```
eCommerce-MERN-Postgres
├── backend
│   ├── config         # Configuración de bases de datos y variables de entorno
│   ├── controllers    # Lógica de negocio
│   ├── models         # Modelos para MongoDB y PostgreSQL
│   ├── routes         # Definición de rutas
│   ├── middlewares    # Middleware para autenticación y validación
│   ├── server.js      # Configuración principal del servidor
├── package.json       # Dependencias y scripts del proyecto
├── README.md          # Documentación del proyecto
```

---

## **Instalación**

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/jeperea45/EcommercePIO.git
   cd EcommercePIO
   ```

2. **Configurar variables de entorno:**

   Crear un archivo `.env` en el directorio `backend` con el siguiente contenido:

   ```env
   # Configuración para MongoDB
   MONGO_URI=mongodb://localhost:27017/ecommerce

   # Configuración para PostgreSQL
   POSTGRES_USER=dmin
   POSTGRES_PASSWORD=tu_password
   POSTGRES_DB=ecommerce_users
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432

   # Clave JWT
   JWT_SECRET=tu_clave_secreta
   JWT_EXPIRES_IN=7d

   # Puerto del servidor
   PORT=5000
   ```

3. **Instalar dependencias:**
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

4. **Ejecutar el proyecto:**

   En dos terminales separadas:
   ```bash
   # Backend
   cd backend
   npm run dev

   # Frontend
   cd frontend
   npm start
   ```

---

## **Uso**

1. **Página principal**: Los usuarios pueden explorar los productos disponibles y navegar por categorías.
2. **Carrito de compras**: Agregar productos al carrito, ajustar cantidades o eliminar productos.
3. **Autenticación**: Los usuarios pueden registrarse, iniciar sesión y administrar sus perfiles.
4. **Gestión de órdenes**: Finalizar compras y revisar órdenes anteriores.

---

## **Bases de datos**

### **MongoDB**

- **Colecciones**:
  - **Productos**: Información de los productos (nombre, precio, descripción, categoría, stock).
  - **Categorías**: Listado de categorías disponibles.
  - **Órdenes**: Detalles de las órdenes de compra.
  - **Carrito**: Elementos añadidos al carrito por usuario.

### **PostgreSQL**

- **Tablas**:
  - **Usuarios**: Datos de usuario (nombre, email, contraseña, direccion, telefono, roles).

---

## **Tecnologías utilizadas**

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, JSON Web Token (JWT)
- **Bases de datos**: MongoDB, PostgreSQL
- **Otros**: bcrypt para cifrado de contraseñas, dotenv para manejo de variables de entorno

---

## **Contribuciones**

Si deseas contribuir, por favor crea un *fork* del repositorio, realiza tus cambios y envía un *pull request*.

---
