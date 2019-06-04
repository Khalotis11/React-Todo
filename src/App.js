import React from "react";

import { TodoForm } from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      textInput: "",
      toDoList: [
        {
          todo: "Make to-do list",
          id: 1,
          complete: false
        },
        {
          todo: "Add new item",
          id: 2,
          complete: false
        }
      ]
    };
  }
  handleChange = e => {
    this.setState({
      textInput: e.target.value
    });
  };
  render() {
    return (
      <div>
        <h2>Todo List :</h2>
        <TodoForm
          textInput={this.state.textInput}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
