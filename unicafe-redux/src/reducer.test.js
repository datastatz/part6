// Import deep-freeze to ensure immutability of the state in tests
import deepFreeze from 'deep-freeze'

// Import the reducer function for testing
import counterReducer from './reducer'

// Define a test suite for the reducer
describe('unicafe reducer', () => {
  // Define the initial state that should be used in tests
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  // Test that reducer returns the correct initial state when called with undefined state
  test('should return a proper initial state when called with undefined state', () => {
    const state = {} // Empty state object
    const action = { type: 'DO_NOTHING' } // Action that does nothing

    // Call reducer with undefined state and check if it returns the correct initial state
    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  // Test that 'GOOD' action increments the good count correctly
  test('good is incremented', () => {
    const action = { type: 'GOOD' } // Define 'GOOD' action
    const state = initialState // Start with the initial state

    deepFreeze(state) // Ensure immutability of state

    // Call reducer with the current state and action
    const newState = counterReducer(state, action)

    // Expect the new state to have 'good' incremented by 1, while other values stay the same
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })
})
