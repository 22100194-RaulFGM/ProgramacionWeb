const express = require('express');
var morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/peliculas:id', (req, res) => {
    console.log(req.query)
    console.log(req.query.id)
    res.send('Servidor Express Contestando a la peticion get');
});

app.delete('/peliculas:id', (req, res) => {
    console.log(req.params)
    res.send('Servidor Express Contestando a la peticion delete');
});

app.post('/peliculas', (req, res) => {
    console.log(req.body)
    res.send('Servidor Express Contestando a la peticion post');
});

app.patch('/peliculas', (req, res) => {
    res.send('Servidor Express Contestando a la peticion patch');
});

app.use((req, res, next) => {
    res.status(404).send('No se ha encontrado la ruta solicitada');
});

app.listen(8000, (req,res) => {
    console.log('Servidor Express escuchando en el puerto 3000');
});
