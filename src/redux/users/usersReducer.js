import { createSlice } from '@reduxjs/toolkit';
import { createNewUser } from './usersOperations';

export const usersSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [createNewUser.fulfilled]: (state, action) => {
      return { ...state, user: action.payload };
    },
    [createNewUser.pending]: (state, _) => {
      return { ...state, isLoading: true, error: null };
    },
    [createNewUser.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
  },
});
