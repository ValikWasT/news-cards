import { configureStore } from '@reduxjs/toolkit';
// import { tasksReducer, filtersReducer } from './reducer';
import { filterReducer } from './filterSlice';
import { cardsReducer } from './cardsSlice';
export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    filter: filterReducer,
  },
});
