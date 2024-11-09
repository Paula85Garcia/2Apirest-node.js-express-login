// middlewares/authMiddleware.js
const jwt = require('jwt-simple');
const dotenv = require('dotenv');
dotenv.config();

// Middleware para verificar si el JWT es válido
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(403).json({ message: 'Access denied, no token provided.' });
  }

  try {
    const decoded = jwt.decode(token, process.env.JWT_SECRET);
    req.user = decoded;  // Almacenar la información del usuario en la solicitud
    next();  // Continuar con la siguiente función
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = verifyToken;
