import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
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
    render() { 
        return <div>
            <button className="btn btn-primary btn-sm m-2" 
                onClick={this.handleReset}>Reset
            </button>
            {this.state.counters.map(count => 
                <Counter 
                    key={count.id} 
                    counter={count}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
            />)};
           </div>
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
}
 
export default Counters;