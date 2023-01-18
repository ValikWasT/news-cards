import { createSlice } from '@reduxjs/toolkit';
import { fetchCards, fetchCardById } from './operations';

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
    items: [],
    articles: [],
    itemById: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
  },
  extraReducers: {
    [fetchCards.pending]: handlePending,
    [fetchCards.rejected]: handleRejected,
    [fetchCardById.pending]: handlePending,
    [fetchCardById.rejected]: handleRejected,
    [fetchCards.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      state.totalResults = action.payload.length;
    },
    [fetchCardById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.itemById = action.payload;
    },
  },
});

export const { setArticles } = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;
