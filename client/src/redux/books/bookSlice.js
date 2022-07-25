import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const userSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
  },
});
