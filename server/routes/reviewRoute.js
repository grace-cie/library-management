import express from 'express';
import {
  deleteReview,
  updateReview,
  writeReview,
} from '../controller/reviewController.js';
import { verifyForUser } from '../utils/verifyToken.js';

const router = express.Router();

//create
router.post('/:bookId', verifyForUser, writeReview);

//update
router.put('/:id', verifyForUser, updateReview);

//delete
router.delete('/:id/:bookId', verifyForUser, deleteReview);

export default router;
