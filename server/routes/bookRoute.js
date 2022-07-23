import express from 'express';

import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from '../controller/bookController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create
router.post('/', verifyAdmin, createBook);

//updated
router.put('/:id', verifyAdmin, updateBook);

//delete
router.delete('/:id', verifyAdmin, deleteBook);

//get
router.get('/:id', getBook);

//getAll
router.get('/', getAllBooks);

export default router;
