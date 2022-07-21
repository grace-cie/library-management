import User from '../models/UserModel.js';

//register user
export const register = (req, res) => {
  const newUser = User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cpassword: req.body.cpassword,
  });

  if (req.body.password !== req.body.cpassword)
    return res.status(400, 'password should be the same');

  newUser.save();
  res.status(200).send('User has been registered');
};

//login user
export const login = (req, res) => {
  res.json({ message: 'user is logged in' });
};
