import Review from '../models/ReviewModel.js';
import Book from '../models/BooksModel.js';

//CREATE
export const writeReview = async (req, res, next) => {
  const bookId = req.params.bookId;
  const review = new Review(req.body);
  try {
    const newReview = await review.save();

    try {
      await Book.findByIdAndUpdate(bookId, {
        $push: { review: newReview._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(newReview);
  } catch (err) {
    next(err);
  }
};

//UPDATE
export const updateReview = async (req, res, next) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedReview);
  } catch (err) {
    next(err);
  }
};

//DELETE
export const deleteReview = async (req, res, next) => {
  const bookId = req.params.bookId;

  try {
    await Review.findByIdAndDelete(req.params.id);

    try {
      await Book.findByIdAndDelete(bookId, {
        $pull: { review: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json('review has been deleted');
  } catch (err) {
    next(err);
  }
};
