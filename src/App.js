import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";

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
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <TodoList
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
