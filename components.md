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
# lesson 2 props in react
## Sub component
For subcomponent, we can use `this.props.value` to initialize the state.
```
class Counter extends Component {
    state = {
        count: this.props.value
     }

    render() { 
        console.log("Props: ", this.props);
        return <div>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment</button>
        </div>
    }
}
```
## Parent component
We can set key-value pairs as props for sub components. But `key` here is a very special one, it will not be included in the props.
```
    render() { 
        return <div>
            {this.state.counters.map(count => 
                <Counter key={count.id} value={count.count} selected={true}/>)}
           </div>
    }
```
# lesson 3 Passing Children
## Pass complex data as children to sub component
In lesson 2, we can pass simple key-value pairs into props, actually we can add complex object into props with key name: `children` in props object. 
```
    render() { 
        return <div>
            {this.state.counters.map(count => 
                <Counter key={count.id} value={count.count} selected={true}>
                    <h3>{count.id}</h3>
                </Counter>)}
           </div>
    }
```

# lesson 4 react developer tools
## Pass complex data as children to sub component
# lesson 5 Props and state
## props
`props` is readonly. It includes `data` that we give to a component. While `stat` includes data that is local to that component.
```
return <div>
            {this.state.counters.map(count => 
                <Counter key={count.id} value={count.count} selected={true}/>)}
       </div>
```
## state
state is local and internal
# lesson 6 Raising and handling events
## Raising events
`The component that owns a piece of the state should be the one modifying it.` So the component counters owning `counter` data should have a method to process the deletion. And pass this method through `props`. So the target component could raise this event.
```
    render() { 
        return <div>
            {this.state.counters.map(count => 
                <Counter key={count.id} id={count.id} onDelete={this.handleDelete} value={count.count} selected={true} />)}
           </div>
    }

    handleDelete = () => {console.log("handle delete in counters")};
```
And the component `Counter` could raise the event this way:
```
render() { 
        return <div>
            <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
    }
```
When setting the event value in the props, the name could be any valid props key, like `onD`, but it require the target Component to use the same props name to raise the event.
```
                <Counter key={count.id} id={count.id} onD={this.handleDelete} value={count.count} selected={true} />)}
```
# lesson 8 Updating the State
## Raising events
One thing here difficult to understand is that when set props event, only use the event name, without parameter. Only pass the parameter on the onClick event button, but still using arrow function. This is a pattern we should use most of the time.
```
    render() { 
        return <div>
            {this.state.counters.map(count => 
                <Counter key={count.id} id={count.id} onDelete={this.handleDelete} value={count.count} selected={true} />)}
           </div>
    }

    handleDelete = (counterId) => {
        const newCounters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({counters: newCounters});
    };
```
### For component `Counter`, we should raise the event using arrow function:
```
<button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
```
### Another improvement we could do is to encapsulate all the props data in one object, actually the object `counter` contains all the data (event functions also included) to be passed to the target component, so use `counter` object directly.
Change bellow code:
```
    render() { 
        return <div>
            {this.state.counters.map(count => 
                <Counter 
                    key={count.id} 
                    id={count.id} 
                    onDelete={this.handleDelete} 
                    value={count.count} selected={true} 
            />)}
           </div>
    }
```
To be:
```
    render() { 
        return <div>
            {this.state.counters.map(count => 
                <Counter 
                    key={count.id} 
                    counter={count}
                    onDelete={this.handleDelete}
            />)}
          </div>
    }
```
When I do this, I made a mistake that I thought the counter object will also include the event `handleDelete`. So I can't actually access this event through `counter` props because event `handleDelete` resides in `Counters` component.