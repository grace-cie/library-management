import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  authorId: {
    type: [String],
    required: true,
  },
  bookTitle: {
    type: String,
    required: true,
  },
  publishDate: {
    type: String,
    required: true,
  },
  reviewId: {
    type: [String],
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model('Book', BookSchema);
