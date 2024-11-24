import express from 'express';
import dotenv from 'dotenv';
import booksRouter from './routes/books';
import chaptersRouter from './routes/chapters';
import versesRouter from './routes/verses';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rotas
app.use('/books', booksRouter);
app.use('/chapters', chaptersRouter);
app.use('/verses', versesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
