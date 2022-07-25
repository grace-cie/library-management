import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import booksReducer from '../books/bookSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
  },
});
