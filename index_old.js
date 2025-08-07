const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Dato simulado
const post = [
    { id: 1, title: 'Primer Post' },
    { id: 2, title: 'Segundo Post' },
];

// Mi primer endpoint para traer POSTS
app.get('/posts', (req, res) => {
    res.json(post);
});

// Mi segundo endpoint para guardar un nuevo POST
app.post('/posts', (req, res) => {
    const nuevoPost = req.body;
    console.log('Nuevo post recibido:', nuevoPost);
    post.push(nuevoPost);
    res.json({ message: 'Post guardado exitosamente', data: nuevoPost });
});

// Mi tercer endpoint para eliminar un POST
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    const index = post.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
        post.splice(index, 1);
        res.json({ message: `Post con id ${id} eliminado` });
    } else {
        res.status(404).json({ message: 'Post no encontrado' });
    }
});  
  
// Servidor escuchando
app.listen(PORT, () => {
    console.log(`El servidor está vivo y corriendo en http://localhost:${PORT}`);
});

