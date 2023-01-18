import { createSlice } from '@reduxjs/toolkit';
import { fetchCardById } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    totalResults: 0,
    articles: [],
    itemById: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setTotalResults(state, action) {
      state.totalResults = action.payload;
    },
  },

  extraReducers: {
    [fetchCardById.pending]: handlePending,
    [fetchCardById.rejected]: handleRejected,
    [fetchCardById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.itemById = action.payload;
    },
  },
});

export const { setArticles, setIsLoading, setError, setTotalResults } =
  cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;
