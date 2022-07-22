import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoute from './routes/authRoute.js';
import bookRoute from './routes/bookRoute.js';
import userRoute from './routes/userRoute.js';

const app = express();
dotenv.config();

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//connect to mongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connected to MONGO_DB');
  } catch (err) {
    console.log(err);
  }
};

//routers
app.use('/api/auth', authRoute);
app.use('/api/books', bookRoute);
app.use('/api/users', userRoute);

//error
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});

const port = process.env.PORT;
app.listen(port, () => {
  connect();
  console.log(`connected to Port ${port}`);
});
