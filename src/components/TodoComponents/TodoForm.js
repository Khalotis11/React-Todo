import React from "react";

export const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Add todos..."
        name="todo"
        value={props.textInput}
        onChange={props.handleChange}
      />
      <button type="submit">Add Todo</button>
      <button onClick={props.clearHandler}>Clear Completed</button>
    </form>
  );
};
