import Book from '../models/BooksModel.js';

//create books
export const createBook = async (req, res, next) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    next(err);
  }
};

//update books
export const updateBook = async (req, res, next) => {
  try {
    const updateBook = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateBook);
  } catch (err) {
    next(err);
  }
};

//delete books
export const deleteBook = async (req, res, next) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json('Book is deleted from the database');
  } catch (err) {
    next(err);
  }
};

//getBooks
export const getBook = async (req, res, next) => {
  try {
    const getBook = await Book.findById(req.params.id);
    res.status(200).json(getBook);
  } catch (err) {
    next(err);
  }
};

//getAllBook
export const getAllBooks = async (req, res) => {
  try {
    const getAllBooks = await Book.find();

    res.status(200).json(getAllBooks);
  } catch (err) {
    res.status(500).json(err);
  }
};
