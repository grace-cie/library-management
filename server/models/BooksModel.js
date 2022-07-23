import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  bookTitle: {
    type: String,
    required: true,
  },
  bookImg: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  publishDate: {
    type: String,
    required: true,
  },
  review: {
    type: [String],
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  available: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Book', BookSchema);
