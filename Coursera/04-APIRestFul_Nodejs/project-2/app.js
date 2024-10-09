const express = require('express');
const app = express();

// Middleware para registrar las solicitudes
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // Pasa al siguiente middleware o ruta
});

// Definir rutas aquí
app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;