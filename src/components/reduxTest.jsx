import React, { Component } from "react";
import { connect } from "react-redux";
import { addTest } from "../actions/reduxActions";

export class ReduxTest extends Component {
  handleChange = val => {
    this.props.addTest(val);
  };
  render() {
    debugger;
    console.log(this.props);
    return (
      <div>
        {this.props.redux}{" "}
        <button onClick={() => this.handleChange("New redux value")}>
          Change global value
        </button>
      </div>
    );
  }
}

function mapStateToProps(globalState) {
  debugger;
  const temp = {
    todos: globalState.todos,
    redux: globalState.redux
  };
  return temp;
}

function mapDispatchToProps(globalState) {
  debugger;
  const temp = {
    todos: globalState.todos,
    redux: globalState.redux
  };
  return temp;
}
export default connect(
  mapStateToProps,
  { addTest }
)(ReduxTest);
