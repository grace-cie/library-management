import Book from '../models/BooksModel.js';

//create books
export const createBook = async (req, res) => {
  const newBook = new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//update books
export const updateBook = async (req, res) => {
  try {
    const updateBook = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateBook);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//delete books
export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json('Book is deleted from the database');
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//getBooks
export const getBook = async (req, res) => {
  const { id } = req.params;

  try {
    const getBook = await Book.findById(id);
    res.status(200).json(getBook);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//getAllBook
export const getAllBooks = async (req, res) => {
  try {
    const getAllBooks = await Book.find();

    res.status(200).json(getAllBooks);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//commentbooks
export const commentBooks = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  const post = await Book.findById(id);

  post.comments.push(value);

  const updatedPost = await Book.findByIdAndUpdate(id, post, { new: true });

  res.json(updatedPost);
};
