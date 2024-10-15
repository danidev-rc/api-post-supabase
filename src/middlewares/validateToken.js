import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const authRequired = (req, res, next) => {
  const { token } = req.cookies

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' })
    }

    // Asignamos el ID de usuario al req.userId en lugar de sobrescribir req.user
    req.userId = decoded.id
    next()
  })
}
