import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const authRequired = (req, res, next) => {
  console.log('Cookies:', req.cookies) // Para ver si la cookie llega correctamente

  const { token } = req.cookies

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' })
    }

    console.log('Token Decoded:', decoded) // Para verificar si el token se decodifica correctamente
    req.userId = decoded.id
    next()
  })
}
