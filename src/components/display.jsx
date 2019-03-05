import React, { Component } from "react";
export class Display extends React.Component {
  render() {
    let content = this.props.data ? this.props.data : "Output here";
    const {
      handlePrev,
      handleNext,
      nextDisabled,
      previousDisabled
    } = this.props;
    const rowStyle = {
      justifyContent: "center",
      alignItems: "center"
      // float: "right"
    };

    return (
      <div>
        <h2 className="display-1 text-center" style="color:#069">
          {content}{" "}
        </h2>
        <div style={rowStyle}>
          <button disabled={previousDisabled} onClick={handlePrev}>
            Previous
          </button>
          <button disabled={nextDisabled} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
