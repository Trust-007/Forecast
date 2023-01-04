import { createSlice } from "@reduxjs/toolkit";

const initialState = { list: [], search: "" };

const forecast = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    getForecast(state, action) {
      state.list.splice(0, state.list.length, ...action.payload);
    },
    updateSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const forecastActions = forecast.actions;

export default forecast.reducer;
