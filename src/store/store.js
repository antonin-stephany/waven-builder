import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../reducers/characterReducer';
import stuffReducer from '../reducers/stuffReducer';
import spellsReducer from '../reducers/spellsReducer';

const store = configureStore({
  reducer: {
    character: characterReducer,
    stuff: stuffReducer,
    spells: spellsReducer,
  },
});
export default store;