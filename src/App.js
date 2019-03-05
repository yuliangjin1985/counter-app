import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import { MyContent } from "./components/myContent";
import { Calculator } from "./components/calculator";
import { Route, Switch, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import NotFound from "./components/notFound";

class App extends Component {
  state = {
    counters: [
      { id: 1, count: 0 },
      { id: 2, count: 0 },
      { id: 3, count: 0 },
      { id: 4, count: 0 },
      { id: 5, count: 0 },
      { id: 6, count: 8 }
    ],
    lines: ["First", "Second", "Third"]
  };

  handleReset = () => {
    // const counters = this.state.counters.map( c => {
    //     c.count = 0;
    //     return c;
    // });

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

  handleAddLine = () => {
    let newLines = [...this.state.lines];
    console.log({ newLines });
    console.log(typeof newLines);
    newLines.push("Another line");
    this.setState({ ...this.state, lines: newLines });
  };

  handleDeleteLine = id => {
    let newLines = [...this.state.lines];
    newLines.splice(id, 1);
    this.setState({ ...this.state, lines: newLines });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/calculator" component={Calculator} />
            <Route
              path="/counter"
              component={() => (
                <Counters
                  counters={this.state.counters}
                  onReset={this.handleReset}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" to="/calculator" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
