import User from '../models/UserModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/error.js';

//register user
export const register = async (req, res, next) => {
  //destructure the data
  const { name, username, email, password } = req.body;

  //if theres no field inputted
  if (!name || !username || !email || !password) {
    return next(createError(400, 'Please fill in all fields'));
  }

  //if user exist
  const checkUserExist = await User.findOne({ email });

  if (checkUserExist) {
    return next(createError(400, 'User already exist'));
  }

  //hash the password for security
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);

  //register user
  const newUser = await User.create({
    name,
    username,
    email,
    password: passwordHash,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser.id,
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
    });
  } else {
    next(createError(400, 'Sorry Please Try Again'));
  }
};

//login user
export const login = async (req, res, next) => {
  //destructure the data body
  const { email, password } = req.body;

  //check if user has an email
  const user = await User.findOne({ email });

  //check the user password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
    });
  } else {
    next(createError(400, 'Invalid Credentials'));
  }
};
