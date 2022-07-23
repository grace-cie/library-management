import express from 'express';
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from '../controller/userController.js';

import { verifyAdmin, verifyForUser } from '../utils/verifyToken.js';

const router = express.Router();

//update user
router.put('/:id', verifyForUser, updateUser);

//delete user
router.delete('/:id', verifyAdmin, deleteUser);

//get user
router.get('/:id', verifyForUser, getUser);

//getall user
router.get('/', getUsers);

export default router;
