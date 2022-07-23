import User from '../models/UserModel.js';
import { createError } from '../utils/error.js';

//update
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User is Deleted');
  } catch (err) {
    next(err);
  }
};

//get
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//getAll
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

export const borrowedBooks = async (req, res, next) => {
  const bookId = req.params.userId;

  try {
    await User.findByIdAndUpdate(bookId, {
      $push: { borrowedBooks: bookId },
    });
    res.status(200).json('book is borrowed');
  } catch (error) {
    next(err);
  }
};
