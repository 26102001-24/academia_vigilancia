const Registro = require('../models/Registro');

// Crear un registro
exports.crearRegistro = async (req, res) => {
    try {
        const nuevoRegistro = new Registro({
            nombre: req.body.nombre,
            correo: req.body.correo,
            telefono: req.body.telefono,
            comentario: req.body.comentario
        });
        await nuevoRegistro.save();
        res.status(201).json({ message: 'Registro exitoso' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar', error });
    }
};

// Buscar registro por ID
exports.buscarPorId = async (req, res) => {
    try {
        const registro = await Registro.findById(req.params.id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json(registro);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el registro', error });
    }
};

// Buscar registro por nombre
exports.buscarPorNombre = async (req, res) => {
    try {
        const registros = await Registro.find({ nombre: new RegExp(req.params.nombre, 'i') }); // Búsqueda insensible a mayúsculas/minúsculas
        res.status(200).json(registros);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar registros', error });
    }
};

// Buscar registro por número de celular
exports.buscarPorTelefono = async (req, res) => {
    try {
        const registro = await Registro.findOne({ telefono: req.params.telefono });
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json(registro);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el registro', error });
    }
};

// Modificar un registro
exports.modificarRegistro = async (req, res) => {
    try {
        const registro = await Registro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json({ message: 'Registro actualizado', registro });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el registro', error });
    }
};

// Eliminar un registro
exports.eliminarRegistro = async (req, res) => {
    try {
        const registro = await Registro.findByIdAndDelete(req.params.id);
        if (!registro) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.status(200).json({ message: 'Registro eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el registro', error });
    }
};
