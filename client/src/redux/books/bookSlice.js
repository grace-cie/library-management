import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  books: [],
  error: '',
};

const API_URL_GETBOOKS = '/api/books';

export const fetchBooks = createAsyncThunk('api/fetchBooks', async () => {
  const response = await axios.get(API_URL_GETBOOKS);
  return response.data;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
      state.error = '';
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.books = [];
      state.error = action.error.message;
    });
  },
});

export default bookSlice.reducer;
