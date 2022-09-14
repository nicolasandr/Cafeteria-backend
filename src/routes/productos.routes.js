import { Router } from "express";
import { borrarProducto, crearProducto, listarProductos, editarProducto, obtenerProducto } from "../controllers/productos.controller";
const router  = Router();

//creamos todas las rutas de los productos
// dominio + /apicafe + /
router
.route('/productos')
.get(listarProductos)
.post(crearProducto)

router.route('/productos/:id').get(obtenerProducto).put(editarProducto).delete(borrarProducto);

export default router;
// app.get('/',(req,res)=>{
//         res.send('primera peticion get')

// })
// app.get('/prueba', (req, res) => {
//     res.send('otra peticion get');
// });
