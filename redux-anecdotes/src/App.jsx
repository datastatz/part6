import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  // Get the anecdotes from Redux state
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  // Function to handle voting for an anecdote
  const vote = (id) => {
    dispatch({ type: 'VOTE', payload: id }) // Dispatch an action to increment votes
  }

  // Function to handle adding a new anecdote
  const addAnecdote = (event) => {
    event.preventDefault() // Prevent default form submission behavior
    const content = event.target.anecdote.value // Get input value
    dispatch({ type: 'ADD_ANECDOTE', payload: content }) // Dispatch action to add anecdote
    event.target.anecdote.value = '' // Clear input field
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content} {/* Display anecdote text */}
          </div>
          <div>
            has {anecdote.votes} {/* Show number of votes */}
            <button onClick={() => vote(anecdote.id)}>vote</button> {/* Button to vote */}
          </div>
        </div>
      )}

      <h2>Create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div> {/* Input field for new anecdote */}
        <button type="submit">create</button> {/* Submit button */}
      </form>
    </div>
  )
}

export default App
