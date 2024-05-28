import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './charactersSlice';
import conditionsSlice from './conditionsSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    allConditions: conditionsSlice,
  },
});

export default store;
