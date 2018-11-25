# lesson 1 multi components
## Create counters
```
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
            {id: 6, count: 0}
        ]
    }
    render() { 
        return <div>
            {this.state.counters.map(count => <Counter key={count.id}/>)}
           </div>
    }
}
 
export default Counters;
```
## Wrong rendering way
Bellow way of rendering an array is wrong, `Expected an assignment or function call and instead saw an expression  no-unused-expressions`. Don't use `{}`.
```
    render() { 
        return <div>
            {this.state.counters.map(counte => {
                <Counter key={count.id} />;
            })}
           </div>
    }
```