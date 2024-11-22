const express = require("express");
const router = express.Router();
const productsController = require("../controllers/controllerProducts");

router.post("/", productsController.crearProducto);
router.get("/", productsController.obtenerProductos);
router.put("/:id", productsController.actualizarProducto);
router.delete("/:id", productsController.eliminarProducto);

module.exports = router;
