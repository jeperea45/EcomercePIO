const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDBMg = require("./src/config/baseDatos");
const { connectBDPostgres } = require("./src/config/baseDatosPg");
const middlewareAuth = require("./src/middleware/middlewareAuth");

// Puerto
const PORT = process.env.PORT || 5000;

// Configuración de variables de entorno
dotenv.config();

// Creación de la aplicación
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Conexión a la base de datos
connectDBMg();
connectBDPostgres();

// Rutas
app.use("/api/carrito", require("./src/routes/routesCart"));
app.use("/api/categorias", require("./src/routes/routesCategoryProduct"));
app.use("/api/ordenes", require("./src/routes/routesOrden"));
app.use("/api/productos", require("./src/routes/routesProducts"));
app.use("/api/usuarios", require("./src/routes/routesUser"));

// Ruta protegida (perfil del usuario)
app.get("/api/usuarios/perfil", middlewareAuth, (req, res) => {
  res.status(200).json({ mensaje: "Perfil de usuario", usuario: req.user });
});

// Manejo de errores
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    mensaje: "Algo salió mal en el servidor",
    success: false,
    error: error.message,
  });
});

// Middleware para rutas no encontradas
app.use((error, req, res, next) => {
  res.status(404).json({
    mensaje: "No se encontró la ruta solicitada",
    success: false,
    error: error.message,
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
