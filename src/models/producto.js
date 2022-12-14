import mongoose, { Schema } from 'mongoose';

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        unique: true,
    },
    detalleProducto: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
        min: 0,
        max: 9000,
    },
    categoria: {
        type: String,
        required: true,
        maxlength: 40,
    },
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;
