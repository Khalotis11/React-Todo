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
    this.setState(prevState => {
      return {
        toDoList: [
          ...prevState.toDoList,
          {
            todo: prevState.textInput,
            id: Date.now(),
            completed: false
          }
        ],
        textInput: ""
      };
    });
  };
  toggleHandler = id => {
    this.setState({
      toDoList: this.state.toDoList.map(item => {
        if (id === item.id) {
          return {
            ...item,
            complete: !item.complete
          };
        }
        return item;
      })
    });
  };
  clearHandler = e => {
    e.preventDefault();
    console.log("Clear clicked");
    this.setState({
      toDoList: this.state.toDoList.filter(item => !item.complete)
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
            clearHandler={this.clearHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
