import React from "react";

export const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        placeholder="Add todos..."
        name="todo"
        value={props.textInput}
        onChange={props.handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
