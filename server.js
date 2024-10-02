const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const registroRoutes = require('./routes/registro');
require('dotenv').config();

const app = express();

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexión a MongoDB exitosa'))
.catch(err => console.error('Error al conectar a MongoDB', err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api', registroRoutes);

// Servir archivos estáticos (HTML, CSS, etc.)
app.use(express.static('public'));

// Iniciar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
