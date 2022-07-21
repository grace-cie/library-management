import Book from '../models/BooksModel.js';

//create books
export const createBook = async (req, res) => {
     const newBook = new Book(req.body);
     try {
       const savedBook = await newBook.save();
       res.status(200).json(savedBook);
     } catch (err) {
          console.log(err);
     }
};

//getbook
export const getAllBooks = async (req, res) => {
     try {
       const getAllBooks = await Book.find();
   
       res.status(200).json(getAllBooks);
     } catch (err) {
       res.status(500).json(err);
     }
};