// Define the initial state of the application
const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

// Reducer function to handle state changes based on dispatched actions
const counterReducer = (state = initialState, action) => {
  console.log(action) // Log every action dispatched for debugging

  switch (action.type) {
    // If action type is 'GOOD', increase 'good' count by 1
    case 'GOOD':
      return { ...state, good: state.good + 1 }

    // If action type is 'OK', increase 'ok' count by 1
    case 'OK':
      return { ...state, ok: state.ok + 1 }

    // If action type is 'BAD', increase 'bad' count by 1
    case 'BAD':
      return { ...state, bad: state.bad + 1 }

    // If action type is 'ZERO', reset the state to the initial state
    case 'ZERO':
      return initialState  

    // If action type does not match any case, return the current state unchanged
    default:
      return state
  }
}

// Export the reducer so it can be used by the Redux store
export default counterReducer
