import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "./playerSlice";

export const store = configureStore({
  reducer: {
    players: playersReducer,
  },
});
