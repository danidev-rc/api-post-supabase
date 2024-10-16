import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import postsRoutes from './routes/posts.routes.js'

import { FRONTEND_URL } from './config.js'

const app = express()

app.use(cors(
  {
    origin: 'https://api-post-supabase.vercel.app',
    credentials: true
  }
))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use('/', authRoutes)
app.use('/', postsRoutes)

export default app
