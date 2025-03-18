// Initial anecdote data
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// Function to generate a random unique ID
const getId = () => (100000 * Math.random()).toFixed(0)

// Function to convert each anecdote string into an object with votes
const asObject = (anecdote) => {
  return {
    content: anecdote, // The anecdote text
    id: getId(), // Unique ID
    votes: 0 // Initialize votes to 0
  }
}

// Convert initial anecdotes into an array of objects
const initialState = anecdotesAtStart.map(asObject)

// Reducer function to handle state updates based on actions
const reducer = (state = initialState, action) => {
  console.log('state now: ', state) // Debugging log: show current state
  console.log('action', action) // Debugging log: show received action

  switch (action.type) {
    case 'VOTE': {
      const id = action.payload // Get anecdote ID from action payload
      return state.map(anecdote =>
        anecdote.id === id
          ? { ...anecdote, votes: anecdote.votes + 1 } // Increment votes for matching anecdote
          : anecdote // Return unchanged anecdote if ID doesn't match
      )
    }

    case 'ADD_ANECDOTE': {
      const newAnecdote = {
        content: action.payload, // The new anecdote text
        id: getId(), // Generate a new ID
        votes: 0 // Initialize votes to 0
      }
      return [...state, newAnecdote] // Append new anecdote to state array
    }

    default:
      return state // Return state unchanged if action type is unknown
  }
}

export default reducer
