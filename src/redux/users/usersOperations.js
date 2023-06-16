import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const createNewUser = createAsyncThunk(
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
