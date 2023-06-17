import { createSlice } from '@reduxjs/toolkit';
import { registerNewUser, loginUser, logoutUser } from './usersOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: '',
    isLoggedIn: false,
  },
  extraReducers: {
    [registerNewUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logoutUser.fulfilled](state, action) {
      state.isLoggedIn = false;
    },
  },
});
