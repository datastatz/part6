import { createSlice } from '@reduxjs/toolkit'

// Initial anecdotes stored in Redux state
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent accounts for the other 90 percent.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. If you write the code as cleverly as possible, you are not smart enough to debug it.'
]

// Helper function to generate a unique ID
const getId = () => (100000 * Math.random()).toFixed(0)

// Convert anecdotes into objects with id & votes
const initialState = anecdotesAtStart.map(content => ({
  content,
  id: getId(),
  votes: 0
}))

// Create Redux slice (reducers & actions combined)
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload
      return state.map(anecdote =>
        anecdote.id === id
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
      )
    },
    addAnecdote(state, action) {
      state.push({
        content: action.payload,
        id: getId(),
        votes: 0
      })
    }
  }
})

// Export actions for dispatching
export const { voteAnecdote, addAnecdote } = anecdoteSlice.actions

// Export reducer for Redux store
export default anecdoteSlice.reducer
