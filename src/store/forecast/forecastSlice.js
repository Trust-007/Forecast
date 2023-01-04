import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const forecast = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    getForecast(state, action) {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

export const forecastActions = forecast.actions;

export default forecast.reducer;
