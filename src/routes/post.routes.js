import { Router } from "express";
import postsController from "../controllers/post.controller.js";

const { ViewPosts, GetPosts, CreatePost, UpdatePost, DeletePost } = postsController

// import { validator } from "../middlewares/validator.js"

const postsRouter = Router();

//RUTA PARA LA VISTA
postsRouter.get('/posts', ViewPosts)

// endpoint para traer todas las tareas
postsRouter.get('/api/posts', GetPosts)

// endpoint para crear una tarea
postsRouter.post
('/api/posts', CreatePost)

// endpoint para modificar una tarea
postsRouter.put('/api/posts/:id', UpdatePost)

// endpoint para eliminar una tarea
postsRouter.delete('/api/posts/:id', DeletePost)

postsRouter.use((req, res, next) => {
    console.log('middleware posts'),
        next()
})
export { postsRouter } 