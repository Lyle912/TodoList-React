import "./App.css";
import TodoList from "./components/TodoList";
import React, { Component } from "react";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Clean dishes",
        completed: false,
      },
      {
        id: 2,
        title: "Cook Dinner",
        completed: false,
      },
      {
        id: 3,
        title: "Do laundry",
        completed: false,
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <TodoList todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
