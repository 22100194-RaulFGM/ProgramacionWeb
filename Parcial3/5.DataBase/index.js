require('dotenv').config();
console.log('DB_USER:', process.env.DB_USER);

const express = require('express');
const app = express();
const librosRoutes = require('./routes/libros');
const db = require('./config/db');

app.use(express.json());
app.use('/api/libros', librosRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);});
