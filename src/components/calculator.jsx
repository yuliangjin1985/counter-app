import React, { Component } from "react";
import { Buttons } from "./buttons";
import { Display } from "./display";
import { Button } from "./button";

export class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      operations: [],
      content: "",
      status: 0
      //status, 0: initial, 2, in process, 3, show result
    };
  }

  handleClick = val => {
    switch (val) {
      case "clear": {
        this.setState({ content: "", status: 0 });
        break;
      }

      case "equal": {
        this.calculate();
        break;
      }

      default: {
        let { status } = this.state;
        let newContent;
        if (status === 3) {
          newContent = val;
        } else {
          newContent = this.state.content;
          newContent += val;
        }
        this.setState({
          content: newContent,
          numberDisabled: false,
          operandDisabled: false,
          status: 2
        });
      }
    }
  };

  // handleClick = e => {
  //   const val = e.target.getAttribute("data-value");
  //   switch (val) {
  //     case "clear": {
  //       this.setState({ content: "", status: 0 });
  //       break;
  //     }

  //     case "equal": {
  //       this.calculate();
  //       break;
  //     }

  //     default: {
  //       let { status } = this.state;
  //       let newContent;
  //       if (status === 3) {
  //         newContent = val;
  //       } else {
  //         newContent = this.state.content;
  //         newContent += val;
  //       }
  //       this.setState({
  //         content: newContent,
  //         numberDisabled: false,
  //         operandDisabled: false,
  //         status: 2
  //       });
  //     }
  //   }
  // };

  calculate = () => {
    const math = require("mathjs");
    let result = this.state.content;
    let origin = result;
    if (result) {
      try {
        result = origin + "=" + math.eval(result);
        let newOperations = [...this.state.operations];
        newOperations.push(result);
        this.setState({
          operations: newOperations,
          content: result,
          status: 3
        });
      } catch (error) {
        alert("There is syntax error...");
        this.setState({
          content: "",
          status: 0
        });
      }
    }
    console.log(this.state);
  };

  handlePrev = () => {
    const { operations, content, status } = this.state;
    let newContent;
    if (status === 0) {
      newContent = operations[operations.length - 1];
    } else {
      let index = operations.indexOf(content);
      newContent = operations[index >= 1 ? index - 1 : 0];
    }
    this.setState({ content: newContent, status: 3 });
  };

  handleNext = () => {
    const { operations, content } = this.state;
    let index = operations.indexOf(content);
    let newContent =
      operations[
        index < operations.length - 1 ? index + 1 : operations.length - 1
      ];
    this.setState({ content: newContent, status: 3 });
  };

  render() {
    const rowStyle = {
      justifyContent: "center",
      alignItems: "center"
    };

    const { status, operations } = this.state;
    const operandDisabled = status === 0 || status === 3;
    const previousDisabled =
      status === 2 || (status === 0 && operations.length === 0);
    const nextDisabled =
      status === 2 || (status === 0 && operations.length === 0);
    const numberDisabled = false;

    return (
      <div>
        <Display
          data={this.state.content}
          handlePrev={this.handlePrev}
          handleNext={this.handleNext}
          previousDisabled={previousDisabled}
          nextDisabled={nextDisabled}
        />
        <hr />
        <div className="row" style={rowStyle}>
          <Button
            onClick={this.handleClick}
            disabled={operandDisabled}
            label="/"
            value="/"
          />
          <Button
            onClick={this.handleClick}
            disabled={numberDisabled}
            label="7"
            value="7"
          />
          <Button
            onClick={this.handleClick}
            disabled={numberDisabled}
            label="8"
            value="8"
          />
          <Button
            onClick={this.handleClick}
            disabled={numberDisabled}
            label="9"
            value="9"
          />
        </div>

        <div className="row" style={rowStyle}>
          <Button
            onClick={this.handleClick}
            disabled={operandDisabled}
            label="x"
            value="*"
          />
          <Button
            onClick={this.handleClick}
            disabled={numberDisabled}
            label="4"
            value="4"
          />
          <Button
            onClick={this.handleClick}
            disabled={numberDisabled}
            label="5"
            value="5"
          />
          <Button
            onClick={this.handleClick}
            disabled={numberDisabled}
            label="6"
            value="6"
          />
        </div>

        <div className="row" style={rowStyle}>
          <Button
            onClick={this.handleClick}
            disabled={operandDisabled}
            label="-"
            value="-"
          />
          <Button
            onClick={this.handleClick}
            disabled={numberDisabled}
            label="1"
            value="1"
          />
          <Button
            onClick={this.handleClick}
            disabled={numberDisabled}
            label="2"
            value="2"
          />
          <Button
            onClick={this.handleClick}
            disabled={numberDisabled}
            label="3"
            value="3"
          />
        </div>

        <div className="row" style={rowStyle}>
          <Button
            onClick={this.handleClick}
            disabled={operandDisabled}
            label="+"
            size="2"
            value="+"
          />
          {/* <Button onClick={this.handleClick} label="." size="2" value="." /> */}
          <Button
            onClick={this.handleClick}
            disabled={false}
            label="C"
            value="clear"
          />
          <Button
            onClick={this.handleClick}
            disabled={numberDisabled}
            label="0"
            value="0"
          />
          <Button
            onClick={this.handleClick}
            disabled={operandDisabled}
            label="="
            size="2"
            value="equal"
          />
        </div>
      </div>
    );
  }
}
