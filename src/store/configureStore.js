import { configureStore } from '@reduxjs/toolkit';
import forecastSlice from './forecast/forecastSlice';

const store = configureStore({
  reducer: {
    forecast: forecastSlice,
  },
});

export default store;
