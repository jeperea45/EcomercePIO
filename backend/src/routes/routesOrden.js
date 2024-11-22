const express = require("express");
const router = express.Router();
const ordenController = require("../controllers/controllerOrden");

router.post("/:usuarioID/crear", ordenController.crearOrdenDesdeCarrito);
router.get("/:usuarioID/orden/:ordenID", ordenController.obtenerOrden);

module.exports = router;
