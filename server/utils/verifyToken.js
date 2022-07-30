import jwt from 'jsonwebtoken';

//middlware
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(404).json({ message: 'sorry not authenticated' });
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    return res.status(403).json({ messag: 'token is not valid' });
    req.user = user;
    next();
  });
};

//user
export const verifyForUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json({ message: 'Not Authorized' });
    }
  });
};

//admin
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json({ messge: 'You are not authorized' });
    }
  });
};
