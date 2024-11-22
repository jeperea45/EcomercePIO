const express = require("express");
const router = express.Router();
const categoryProductController = require("../controllers/controllerCategoryProduct");

router.post("/", categoryProductController.crearCategoriaProducto);
router.get("/", categoryProductController.obtenerCategoriasProductos);
router.put("/:id", categoryProductController.actualizarCategoriaProducto);
router.delete("/:id", categoryProductController.eliminarCategoriaProducto);

module.exports = router;
