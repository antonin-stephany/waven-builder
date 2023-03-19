import { configureStore } from '@reduxjs/toolkit';
import buildsReducer from '../reducers/buildsReducer';

const store = configureStore({
  reducer: {
    allBuilds: buildsReducer,
  },
});
export default store;
