import React, { Component } from "react";
import Counter from "./counter";
import "../App.css";

class Counters extends Component {
  state = {
    counters: [],
    news: []
  };

  //Use await instead of Promise
  async callbackAwait() {
    try {
      const response = await fetch(`http://localhost:3001/counters`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ counters: json });
    } catch (error) {
      this.setState({ counters: [{ id: 1, count: 5 }, { id: 2, count: 3 }] });
    }
  }

  handleReset = () => {
    const cs = [
      { id: 1, count: 0 },
      { id: 2, count: 0 },
      { id: 3, count: 0 },
      { id: 4, count: 0 },
      { id: 5, count: 0 },
      { id: 6, count: 0 }
    ];
    this.setState({ counters: cs });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    const newCounter = { ...counter }; //Deep clone, to create a new object
    counters[index] = newCounter;
    newCounter.count++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const newCounters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters: newCounters });
  };

  componentDidMount() {
    this.callbackAwait(); //Asychronized task. Use Promise.
    console.log("callback function called.");
    //The call to callback is asynchronized, so this log
    //is printed before the callback log.
  }
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map((count, index) => (
          <Counter
            key={index}
            counter={count}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
