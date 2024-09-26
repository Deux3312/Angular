const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/bookstore', { useNewUrlParser: true, useUnifiedTopology: true });

// Rutas base
app.get('/', (req, res) => {
    res.send('API de Librería en Línea');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});