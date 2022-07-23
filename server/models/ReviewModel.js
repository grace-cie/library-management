import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  comment: {
    type: String,
  },
});

export default mongoose.model('Review', reviewSchema);
