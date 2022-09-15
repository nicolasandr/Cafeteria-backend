import { Router } from "express";
import { check } from "express-validator";
import { borrarProducto, crearProducto, listarProductos, editarProducto, obtenerProducto } from "../controllers/productos.controller";
const router  = Router();

//creamos todas las rutas de los productos
// dominio + /apicafe + /
router
.route('/productos')
.get(listarProductos)
.post([check('nombreProducto','El nombre del producto es obligatorio').notEmpty(),
check('nombreProducto','El Producto debe tener entre 2 y 10 caracteres').isLength({min:2,max:50}),
check('precio','El precio es un valor obligatorio').notEmpty(),
check('precio').custom((value)=>{
        if(value>=0 && value <=9000){
                return true;
        }
        else{
                throw new Error('El precio debe estar entre 0 y 9000')
        }
})],crearProducto)

router.route('/productos/:id').get(obtenerProducto).put(editarProducto).delete(borrarProducto);

export default router;
// app.get('/',(req,res)=>{
//         res.send('primera peticion get')

// })
// app.get('/prueba', (req, res) => {
//     res.send('otra peticion get');
// });
