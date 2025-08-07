const express = require('express');
const app = express();
const postRoutes = require('./routes/post.routes');

app.use(express.json());

// Registro de rutas
app.use('/posts', postRoutes); // Rutas para publicaciones

module.exports = app;