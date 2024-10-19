import { prisma } from '../db.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const register = async (req, res) => {
  try {
    const { email, password, username } = req.body

    const userFound = await prisma.user.findUnique({
      where: { email }
    })
    if (userFound) {
      return res.status(400).json(['The email is already in use'])
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: passwordHash
      }
    })

    const token = await createAccessToken({ id: newUser.id })

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24
    })

    res.json({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return res.status(400).json(['User not found'])
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(400).json(['Invalid password'])
    }

    const token = await createAccessToken({ id: user.id })

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24
    })

    res.json({
      id: user.id,
      username: user.username,
      email: user.email
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'none',
    expires: new Date(0)
  })

  res.json({ message: 'Logout' })
}

export const profile = async (req, res) => {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json(['Unauthorized'])
  }

  try {
    const decoded = jwt.verify(token, TOKEN_SECRET)
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    })

    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const verifyToken = async (req, res) => {
  const { token } = req.cookies
  jwt.verify(token, TOKEN_SECRET, async (error, decoded) => {
    if (error) return res.sendStatus(401)

    const userFound = await prisma.user.findUnique({
      where: { id: decoded.id }
    })
    if (!userFound) return res.sendStatus(401)

    return res.json({
      id: userFound.id,
      username: userFound.username,
      email: userFound.email
    })
  })
}
