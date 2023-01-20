import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "../features/counter/playerSlice";

export const store = configureStore({
  reducer: {
    players: playersReducer,
  },
});
