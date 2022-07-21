import express from 'express';

import {
     createBook,
     getAllBooks 
} from '../controller/bookController.js';

const router = express.Router();


//create
router.post('/', createBook)



//get
router.get('/', getAllBooks)

export default router