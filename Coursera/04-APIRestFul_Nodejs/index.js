const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
let todos = [
    { id: 1, name: 'Todo 1' },
    { id: 2, name: 'Todo 2' },
    { id: 3, name: 'Todo 3' },
    { id: 4, name: 'Todo 4' },
    { id: 5, name: 'Todo 5' },
];
app.get('/todos', (req, res) => {
    res.json(todos);
})
app.listen(port, () => {
    console.log(`ejecutandose en el puerto ${port}`)
});