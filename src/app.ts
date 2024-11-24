import express from 'express';
import dotenv from 'dotenv';
import booksRouter from './routes/books';
import chaptersRouter from './routes/chapters';
import versesRouter from './routes/verses';
import tokenRouter from './routes/auth';
import { authenticateToken } from './middleware/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/auth', tokenRouter);
// Rotas
app.use('/books', authenticateToken, booksRouter);
app.use('/chapters', authenticateToken, chaptersRouter);
app.use('/verses', authenticateToken, versesRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
