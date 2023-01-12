import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../reducers/characterReducer';

const store = configureStore({
  reducer: {
    character: characterReducer,
  },
});
export default store;