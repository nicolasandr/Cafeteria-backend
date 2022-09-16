import { check } from 'express-validator';
import resultadosValidacion from './resultadoValidacion';

const validarProducto = [
    check('nombreProducto')
    .notEmpty()
    .withMessage('El nombre de producto es obligatorio')
    .isLength({ min: 2, max: 50 })
    .withMessage('El producto debe tener entre 2 y 50 catacteres'),
    check('precio')
    .notEmpty()
    .withMessage('El precio es un valor obligatorio')
//     check('precio', 'El precio es un valor obligatorio').notEmpty(),
    .custom((value) => {
        if (value >= 0 && value <= 9000) {
            return true;
        } else {
            throw new Error('El precio debe estar entre 0 y 9000');
        }
    }),
    (req,res,next) =>{
            resultadosValidacion(req,res,next)
    }
];
export default validarProducto;
