import User from '../models/UserModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

//register user
export const register = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    if (!name || !email || !username || !password) {
      return res.status(400).json({ mesage: 'Please add all fields' });
    }

    //check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(404).json({ mesage: 'User already exist' });
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
    res.status(500).json({ message: 'Something went wrong' });
  }
};

//login user
export const login = async (req, res) => {
  try {
    //check for the user
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isPasswordIsCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordIsCorrect)
      return res.status(400).json({ message: 'Invalid Credentials' });

    //generate token
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res.status(200).json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    res.status(500).json({ mesage: 'something went wrong' });
  }
};
