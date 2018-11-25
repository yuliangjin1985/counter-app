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
    render() { 
        return <div>
            {this.state.counters.map(count => 
                <Counter key={count.id} value={count.count} selected={true}/>)}
           </div>
    }
}
 
export default Counters;