import React, { Component } from "react";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <div>
        <label>
          Task to do:
          <input
            type="text"
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
          />
        </label>
        <button
          className="btn btn-danger btn-sm m-2"
          type="submit"
          onClick={() => {
            this.props.handleSubmit(this.state.value);
            this.setState({ value: "" });
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default TodoInput;
