import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:bookId', (req, res) => {
  const { bookId } = req.params;
  const query = 'SELECT DISTINCT chapter FROM verses WHERE book_id = ?';
  const chapters = db.prepare(query).all(bookId);
  res.json(chapters);
});

export default router;
