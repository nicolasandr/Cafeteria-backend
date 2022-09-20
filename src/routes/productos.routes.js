import { Router } from "express";
import { borrarProducto, crearProducto, listarProductos, editarProducto, obtenerProducto } from "../controllers/productos.controller";
import validarProducto from "../helpers/validacionProducto";
const router  = Router();

//creamos todas las rutas de los productos
router
.route('/productos')
.get(listarProductos)
.post(validarProducto, crearProducto)

router.route('/productos/:id').get(obtenerProducto).put(editarProducto).delete(borrarProducto);

export default router;

