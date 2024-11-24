import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'your-secret-key'; // Defina isso no .env

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // O formato é "Bearer <token>"

  try {
    if (token) {
      jwt.verify(token, secret); // Verifica se o token é válido
      next();

    } else {
      res.status(401).json({ message: 'Token não fornecido.' });
    }

  } catch (error) {
    res.status(403).json({ message: 'Token inválido ou expirado.' });
  }
};
