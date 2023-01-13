import { createSlice } from '@reduxjs/toolkit';
import { fetchCards } from './operations';

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
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchCards.pending]: handlePending,
    [fetchCards.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchCards.rejected]: handleRejected,
  },
});

export const cardsReducer = cardsSlice.reducer;
