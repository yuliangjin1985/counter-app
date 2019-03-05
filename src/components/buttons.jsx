import React from "react";

export class Buttons extends React.Component {
  render() {
    return <div className="Buttons"> {this.props.children} </div>;
  }
}
