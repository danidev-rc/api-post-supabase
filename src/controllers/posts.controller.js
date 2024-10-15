import { prisma } from '../db.js'

export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: {
        authorId: req.userId // Aquí usamos req.userId en lugar de req.user
      },
      include: {
        author: true
      }
    })
    res.json(posts)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// Crear un nuevo post
export const createPost = async (req, res) => {
  const { title, description, date } = req.body

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        description,
        date,
        authorId: req.userId // Usamos req.userId
      }
    })
    res.json(newPost)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// Obtener un post por ID
export const getPost = async (req, res) => {
  const { id } = req.params

  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) },
      include: { author: true }
    })
    if (!post) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.json(post)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// Actualizar un post por ID
export const updatePost = async (req, res) => {
  const { id } = req.params
  const { title, description, date } = req.body

  try {
    const updatedPost = await prisma.post.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        date,
        updatedAt: new Date()
      }
    })
    res.json(updatedPost)
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}

// Eliminar un post por ID
export const deletePost = async (req, res) => {
  const { id } = req.params

  try {
    await prisma.post.delete({
      where: { id: parseInt(id) }
    })
    res.json({ message: 'Post deleted successfully' })
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' })
  }
}
