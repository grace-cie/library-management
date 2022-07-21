import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  text: {
    type: String,
  },
});

export default mongoose.model('Review', reviewSchema);
