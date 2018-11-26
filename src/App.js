import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {

  state = { 
    counters: [
        {id: 1, count: 0},
        {id: 2, count: 0},
        {id: 3, count: 0},
        {id: 4, count: 0},
        {id: 5, count: 0},
        {id: 6, count: 8}
    ]
}

handleReset = () => {
    const counters = this.state.counters.map( c => {
        c.count = 0;
        return c;
    });
    this.setState({counters});
}

handleIncrement = (counter) => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  const newCounter = {...counter};
  counters[index] = newCounter;
  newCounter.count++;
  this.setState({counters});
  console.log("ole object", counter);
  console.log("new object", newCounter);
}

handleDelete = (counterId) => {
  const newCounters = this.state.counters.filter(counter => counter.id !== counterId);
  this.setState({counters: newCounters});
};

  render() {
    return (
      <React.Fragment>
       <NavBar length={this.state.counters.filter(c => c.count > 0).length}/> 
       <main className="container">
        <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
        />
       </main>
      </React.Fragment>
    );
  }
}

export default App;
