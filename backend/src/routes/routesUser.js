const express = require("express");
const router = express.Router();
const userController = require("../controllers/controllerUser");
const middlewareAuth = require("../middleware/middlewareAuth");

router.post("/registro", userController.registrarUsuario); // Ruta para registrar un usuario
router.post("/iniciarsesion", userController.iniciarSesion); // Ruta para iniciar sesión
router.get("/perfil", middlewareAuth, userController.obtenerPerfilUsuario); // Ruta para obtener el perfil de un usuario
router.put("/perfil", middlewareAuth, userController.actualizarPerfilUsuario);

module.exports = router;
