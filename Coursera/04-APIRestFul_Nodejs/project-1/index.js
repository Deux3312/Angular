// prettier-ignore-start
const http = require('http');
const app = require('./project-1/app');

app.set('port', process.env.PORT || 3000); // Establece un puerto por defecto si no hay variable de entorno
const server = http.createServer(app);

// Establecer el número máximo de conexiones
server.maxConnections = 100; // Por ejemplo, establece el límite en 100

// Escuchar en el puerto especificado
server.listen(app.get('port'), () => {
    console.log('Server is listening on port ' + app.get('port'));
});

// prettier-ignore-end
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;
// app.use(bodyParser.json());
// let todos = [
//     { id: 1, name: 'Todo 1' },
//     { id: 2, name: 'Todo 2' },
//     { id: 3, name: 'Todo 3' },
//     { id: 4, name: 'Todo 4' },
//     { id: 5, name: 'Todo 5' },
// ];
// app.get('/todos', (req, res) => {
//     res.json(todos);
// })
// app.listen(port, () => {
//     console.log(`ejecutandose en el puerto ${port}`)
// });