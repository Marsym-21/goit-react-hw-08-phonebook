import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
  name: 'userName',
  initialState: '',
  reducers: {
    setUserName(_, action) {
      return action.payload;
    },
  },
});

export const getUserName = state => state.userName;

export const { setUserName } = userNameSlice.actions;
