import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerNewUser = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      console.log(credentials);
      const { data } = await axios.post('/users/signup', credentials);
      console.log(data);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const loginUser = createAsyncThunk('auth/login', async credentials => {
  try {
    console.log(credentials);
    const { data } = await axios.post('/users/login', credentials);
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    return data;
  } catch (error) {
    return error.message;
  }
});
