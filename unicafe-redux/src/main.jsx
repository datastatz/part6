// Import necessary modules from React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import the Redux createStore function
import { createStore } from 'redux'

// Import the reducer that manages state changes
import reducer from './reducer'

// Create a Redux store with the imported reducer
const store = createStore(reducer)

// Define the main App component
const App = () => {
  // Function that returns a function to dispatch actions to the Redux store
  const handleClick = (type) => () => {
    store.dispatch({ type }) // Dispatch action with the given type
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      {/* Buttons that dispatch different action types to the Redux store */}
      <button onClick={handleClick('GOOD')}>good</button> 
      <button onClick={handleClick('OK')}>ok</button> 
      <button onClick={handleClick('BAD')}>bad</button>
      <button onClick={handleClick('ZERO')}>reset stats</button>

      <h2>Statistics</h2>
      {/* Display the current state values from the Redux store */}
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

// Get the root element in the DOM and create a React root
const root = ReactDOM.createRoot(document.getElementById('root'))

// Function to render the React application
const renderApp = () => {
  root.render(<App />)
}

// Initial render of the application
renderApp()

// Subscribe to Redux store updates so the app re-renders when state changes
store.subscribe(renderApp)
