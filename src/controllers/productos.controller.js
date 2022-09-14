import Producto from "../models/producto";

export const crearProducto = async (req, res) => {
    try {
         console.log(req.body);
         //validacion
         //crear un objeto para guardar en la BD
         const productoNuevo = new Producto({
             nombreProducto:req.body.nombreProducto,
             imagen: req.body.imagen,
             precio: req.body.precio,
             categoria:req.body.categoria
         });
         //guardar efectivamente en la BD
         await productoNuevo.save()
         //enviar respuesta al frontend
         res.status(201).json({
             mensaje: 'El producto fue creado exitosamente'
         })

         //si algo falla tambien enviar una respuesta
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'El producto enviado no pudo ser creado'
        })
        
    }
   
}

export const listarProductos = (req, res) => {
    res.send('eviar lista de productos');
}

export const obtenerProducto = (req, res) => {
    res.send('aqui envio un objeto producto');
};
export const editarProducto = (req, res) => {
    res.send('aqui tengo que modificar un  producto');
};
export const borrarProducto = (req, res) => {
    res.send('aqui tengo que borrar un producto');
};


