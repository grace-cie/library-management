import User from '../models/UserModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/error.js';

//register user
export const register = async (req, res, next) => {
  try {
    const { name, email, username, password } = req.body;

    if (!name || !email || !username || !password) {
      next(createError(400, 'Please add all fields'));
    }

    //check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      next(createError(400, 'User already exist'));
    }

    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    //register user
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    //save and return json information
    await newUser.save();
    res.status(200).json({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    });
  } catch (err) {
    next(err);
  }
};

//login user
export const login = async (req, res, next) => {
  try {
    //check for the user
    const user = await User.findOne({ email: req.body.email });
    if (!user) next(createError(404, 'User not Found'));

    const isPasswordIsCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordIsCorrect)
      return next(createError(400, 'Wrong password or username'));

    //generate token
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
