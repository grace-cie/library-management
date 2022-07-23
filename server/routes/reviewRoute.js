import express from 'express';
import {
  deleteReview,
  updateReview,
  writeReview,
} from '../controller/reviewController.js';

const router = express.Router();

//create
router.post('/:bookId', writeReview);

//update
router.put('/:id', updateReview);

//delete
router.delete('/:id/:bookId', deleteReview);

export default router;
