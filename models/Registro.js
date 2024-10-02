const mongoose = require('mongoose');

// Definir el esquema del registro
const registroSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/
    },
    comentario: {
        type: String,
        default: ''
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
});

const Registro = mongoose.model('Registro', registroSchema);
module.exports = Registro;
