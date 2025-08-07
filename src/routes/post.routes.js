const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router.get('/', postController.getAllPosts); // Ruta para obtener todos los posts
router.get('/:id', postController.getPostById); // Ruta para obtener un post por ID
router.post('/', postController.createPost); // Ruta para crear un nuevo post
router.put('/:id', postController.updatePost); // Ruta para actualizar un post por ID
router.delete('/:id', postController.deletePost); // Ruta para eliminar un post por ID

module.exports = router;