import React from "react";

export const TodoList = props => {
  return (
    <div
      onClick={() => props.toggleHandler(props.item.id)}
      style={{
        textDecoration: props.item.complete ? "line-through" : "none"
      }}
    >
      {props.item.todo}
    </div>
  );
};
