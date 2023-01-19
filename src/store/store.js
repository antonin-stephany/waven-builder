import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../reducers/characterReducer';
import stuffReducer from '../reducers/stuffReducer';

const store = configureStore({
  reducer: {
    character: characterReducer,
    stuff: stuffReducer,
  },
});
export default store;