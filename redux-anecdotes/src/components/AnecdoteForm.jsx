import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value.trim();
    if (content) {
      dispatch(createAnecdote(content));
      dispatch(showNotification(`You added "${content}"`, 5));
      event.target.anecdote.value = "";
    }
  };

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">create</button>
    </form>
  );
};

export default AnecdoteForm;
