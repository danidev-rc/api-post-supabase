import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost
} from '../controllers/posts.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createPostSchema } from '../schemas/post.schema.js'

const router = Router()

router.get('/posts', authRequired, getPosts)

router.get('/posts/:id', authRequired, getPost)

router.post('/posts', authRequired, validateSchema(createPostSchema), createPost)

router.put('/posts/:id', authRequired, updatePost)

router.delete('/posts/:id', authRequired, deletePost)

export default router
