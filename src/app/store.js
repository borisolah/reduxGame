import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import playersReducer from "../features/counter/playerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    players: playersReducer,
  },
});
