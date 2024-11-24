import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/', (req, res) => {
  const query = 'SELECT *, (SELECT COUNT(DISTINCT verse.chapter) FROM verse WHERE verse.book_id = book.id) as chapters FROM book'; // Ajuste conforme o esquema do banco
  const books = db.prepare(query).all();
  res.json(books);
});

router.get('/:bookId/chapter/:chapter', (req, res) => {
  const { bookId, chapter } = req.params;
  const query = 'SELECT *  FROM verse WHERE book_id = ? AND chapter = ?';
  const verses = db.prepare(query).all(bookId, chapter);
  res.json(verses);
});

export default router;
