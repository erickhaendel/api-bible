import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();
const secret = process.env.JWT_SECRET || 'your-secret-key'; // Defina isso no .env
const tokenExpiry = '175200h'; // Expiração do token


router.post('/token', (req, res) => {
  const { username, password } = req.body;

  // Substitua por validação real (ex.: consultar banco de dados)
  if (username === 'user_3a1f60d9' && password === 'avjXeShPXcZZUOmE') {
    const token = jwt.sign({ username }, secret, { expiresIn: tokenExpiry });
    res.json({ token });
  }

  res.status(401).json({ message: 'Usuário ou senha inválidos.' });
});

export default router;

