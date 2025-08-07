let posts = require('../models/post.model');

// Obtener todos los posts
exports.getAllPosts = (req, res) => {
    res.json(post);
};

// Obtener un post por ID
exports.getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) return res.status(404).json({ error: 'Post no encontrado' });
    res.json(post);
};

// Crear post
exports.createPost = (req, res) => {
    const newId = parseInt(req.body.id);

    if (!newId) {
        return res.status(400).json({ error: "El campo 'id' es requerido y debe ser numérico." });
    }

    // Existe un post con el mismo Id?
    const postExistente = posts.find(post => post.id === newId);

    if (postExistente) {
        return res.status(400).json({ error: `Ya existe un post con el id ${newId}.` });
    }

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content
    };

    posts.push(newPost);
    return res.status(201).json(newPost);
};

// Actualiza datos de un post por Id
exports.updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) return res.status(404).json({ error: 'Post no encontrado' });

    posts[index] = {
        ...posts[index],
        title: req.body.title,
        content: req.body.content
    };

    return res.json(posts[index]);
};

// Elimina un post por ID
exports.deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    const inicial = posts.length
    posts = posts.filter(p => p.id !== id);

    if (posts.length === inicial) return res.status(404).json({ error: 'Post no encontrado' });

    // Actualizar el módulo donde está nuestro arreglo de posts
    require('../models/post.model').splice(0, require('../models/post.model').length, ...posts);
    
    return res.status(204).end(); 
};