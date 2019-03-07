import React, { Component } from "react";

const Todo = ({ task, id, onRemove }) => {
  return (
    <React.Fragment>
      <li>
        {task} <button onClick={() => onRemove(id)}>Delete</button>
      </li>
    </React.Fragment>
  );
};
export default Todo;
