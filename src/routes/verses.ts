import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:bookId/:chapter', (req, res) => {
  const { bookId, chapter } = req.params;
  const query = 'SELECT *  FROM verse WHERE book_id = ? AND chapter = ?';
  const verses = db.prepare(query).all(bookId, chapter);
  res.json(verses);
});

export default router;
