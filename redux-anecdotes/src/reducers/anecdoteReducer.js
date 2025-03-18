import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [
    { id: "1", content: "Redux is awesome!", votes: 3 },
    { id: "2", content: "React and Redux work well together", votes: 5 }
  ],
  reducers: {
    voteAnecdote(state, action) {
      const anecdote = state.find(a => a.id === action.payload);
      anecdote.votes += 1;
    },
    createAnecdote(state, action) {
      state.push({ id: Date.now().toString(), content: action.payload, votes: 0 });
    }
  }
});

export const { voteAnecdote, createAnecdote } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
