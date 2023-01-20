import { createSlice, nanoid } from "@reduxjs/toolkit";

const idemo = [
  { id: 1, name: "Csillag", title: "majstor", count: 0 },
  { id: 2, name: "Borisz", title: "krajzeh", count: 0 },
];
const initialState = idemo;

const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    increment(state, action) {
      const id = action.payload;
      const existingPost = state.find((player) => player.id === id);
      switch (existingPost.count) {
        case 100:
          break;
        default:
          existingPost.count++;
      }
    },
    decrement: (state, action) => {
      const id = action.payload;
      const existingPost = state.find((player) => player.id === id);
      switch (existingPost.count) {
        case 0:
          break;
        default:
          existingPost.count--;
      }
    },
    playerAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, title) {
        return {
          payload: {
            id: nanoid(),
            name,
            title,
            count: 0,
          },
        };
      },
    },
  },
});

export const { increment, decrement, playerAdded } = playerSlice.actions;

export default playerSlice.reducer;
