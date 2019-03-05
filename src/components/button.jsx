import React, { Component } from "react";

const letterStyle = {
  fontSize: "2.5rem",
  height: "5rem",
  margin: "0.05rem",
  width: "5rem"
};

export class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { label, size, onClick, value, disabled } = this.props;
    return (
      <button
        className="btn btn-secondary"
        style={letterStyle}
        onClick={() => onClick(value)}
        disabled={disabled}
        className="Button"
        type="button"
        data-size={size}
        data-value={value}
      >
        {label}
      </button>
    );
  }
}
