import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net/v3';

export const fetchCardById = createAsyncThunk(
  'cards/fetchById',
  async (searchId, thunkAPI) => {
    try {
      const response = await axios.get(`/articles/${searchId}`);
      return response.data;
    } catch (e) {
      Notiflix.Notify.failure(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
