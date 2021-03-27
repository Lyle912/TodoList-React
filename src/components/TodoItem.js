import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "lightGray",
      padding: "10px",
      borderBottom: "1px black dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={buttonStyle}
          >
            <strong>X</strong>
          </button>
        </p>
      </div>
    );
  }
}

const buttonStyle = {
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
