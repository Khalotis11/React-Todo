import React from "react";

import { TodoForm } from "./components/TodoComponents/TodoForm";
import { TodoList } from "./components/TodoComponents/TodoList";

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
  handleSubmit = e => {
    e.preventDefault();
    let id = Date.now();

    this.setState({
      toDoList: [
        ...this.state.toDoList,
        { todo: this.state.textInput, id, complete: false }
      ],
      textInput: ""
    });
  };
  toggleHandler = id => {
    this.setState({
      toDoList: this.state.toDoList.map(item => {
        if (id === item.id) {
          return {
            todo: item.todo,
            id: item.id,
            complete: !item.complete
          };
        }
        return item;
      })
    });
  };
  render() {
    return (
      <div>
        <h2>Todo List :</h2>
        <div>
          {this.state.toDoList.map(item => (
            <TodoList item={item} toggleHandler={this.toggleHandler} />
          ))}
        </div>
        <div>
          <TodoForm
            textInput={this.state.textInput}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default App;
