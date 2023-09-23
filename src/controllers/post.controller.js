import { PostModel } from '../models/post.js'

// controlador para mostrar la vista
const ViewPosts = async (req, res) => {
    try {
        const posts = await PostModel.findAll();
        res.render('posts.ejs', { posts })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para traer todas las tareas
const GetPosts = async (req, res) => {
    try {
        const post = await PostModel.findAll();
        if (!post) return res.status(404)
        return res.status(200).json(post)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para crear una tarea
const CreatePost = async (req, res) => {
    try {
        const newPost = await PostModel.create(req.body)
        return res.status(201).json(newPost)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para modificar una tarea
const UpdatePost = async (req, res) => {
    const { id } = req.params
    try {
        const post = await PostModel.findByPk(id)
        if (!post) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })
        }
        post.update(req.body)
        return res.status(200).json(post)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

//controlador para eliminar una tarea
const DeletePost = async (req, res) => {
    const { id } = req.params
    try {
        const postDeleted = await PostModel.destroy({
            where: {
                id: id
            }
        })
        if (!postDeleted) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })
        }
        return res.status(200).json({
            message: 'Tarea eliminada'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

export default { ViewPosts, GetPosts, CreatePost, UpdatePost, DeletePost }