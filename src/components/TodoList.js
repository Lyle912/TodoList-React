import React, { Component } from "react";
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class TodoList extends Component {


  render() {
    return (
      this.props.todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} markComplete = {this.props.markComplete} deleteTodo = {this.props.deleteTodo}/>
      )) 
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList;
