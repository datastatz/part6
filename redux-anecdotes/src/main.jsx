import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'

// Create Redux store using configureStore (recommended)
const store = configureStore({
  reducer: anecdoteReducer
})

// Render the app inside Provider to pass store to components
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
