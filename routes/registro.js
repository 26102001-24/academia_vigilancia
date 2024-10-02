const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');

// Crear un registro
router.post('/registrar', registroController.crearRegistro);

// Buscar por ID
router.get('/buscar/id/:id', registroController.buscarPorId);

// Buscar por nombre
router.get('/buscar/nombre/:nombre', registroController.buscarPorNombre);

// Buscar por número de celular
router.get('/buscar/telefono/:telefono', registroController.buscarPorTelefono);

// Modificar registro por ID
router.put('/modificar/:id', registroController.modificarRegistro);

// Eliminar registro por ID
router.delete('/eliminar/:id', registroController.eliminarRegistro);

module.exports = router;
