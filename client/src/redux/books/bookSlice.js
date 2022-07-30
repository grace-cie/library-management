import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import * as api from './bookAPI';

const initialState = {
  isLoading: false,
  book: {},
  books: [],
  error: '',
};

export const fetchBooks = createAsyncThunk(
  'api/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getAllBooks();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getBook = createAsyncThunk(
  'api/fetchBook',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getBookById(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [fetchBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    [getBook.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.book = action.payload;
    },
    [getBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export default bookSlice.reducer;
