import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '0378c39ef98b456fa9b30b0edd644e7a';

axios.defaults.baseURL = 'https://newsapi.org/v2/everything';

export const fetchCards = createAsyncThunk(
  'cards/fetchAll',
  async (searchKey, thunkAPI) => {
    try {
      const response = await axios.get(
        `?q=${searchKey}&apiKey=${API_KEY}&sortBy=relevancy`
      );
      Notiflix.Notify.success('News load seccess');
      return response.data;
    } catch (e) {
      Notiflix.Notify.console.error('Error! We cannot load news');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
