import React, { Component } from "react";
import ToDoInput from "./todoInput";
import { connect } from "react-redux";
import { initializeToDos, addToDo } from "../actions/todoActions";

export class ToToList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Work", "Have fun"]
    };
  }

  componentDidMount() {
    this.props.initializeToDos();
  }

  handleToDoAdd = task => {
    this.props.addToDo(task);
  };

  render() {
    const rowStyle = {
      justifyContent: "center",
      alignItems: "center"
    };

    return (
      <div style={rowStyle}>
        <ToDoInput handleSubmit={this.handleToDoAdd} />
        <hr />
        {this.props.todos.map((todo, index) => (
          <div key={index}>{todo.task}</div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(globalState) {
  debugger;
  return { todos: globalState.todos };
}

export default connect(
  mapStateToProps,
  { initializeToDos, addToDo }
)(ToToList);
