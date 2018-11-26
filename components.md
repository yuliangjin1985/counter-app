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
# lesson 9 Single Source of Truth
## Local state
The component `Counter` has a local state, when click on the increment button, it can be upadated and show the updated value in the view. But when we add a `reset` function from the component `Counters`, in the component `Counter` the value is not updated in the view, eventhough its props was updated. Because, `state` in `Counter` is still using the lacal value. `state = { count: this.props.counter.count}` is only called once when initializing the `Counter` object. The reset function could not make it initialize again.
```
class Counter extends Component {
    state = {
        count: this.props.counter.count
     }
}
```
# lesson 10 Remove the Local State
## Controlled component
A controlled component has no own state, it receives all the data through `props` form the parent component, and it raises an event whenever the data needs to be changed. In this sense, the controlled component is entirely controlled by its parent.
```
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
        counters[index] = { ...counter};
        counters[index].count++;
        this.setState({counters});
    }
```
### Update one object of the array
 + Create a new array with every object cloned
 + Find the index of the target object
 + Clone a new object and assign it to the new array
 + Update the new object
 + Update the state with new object array
### About updating object of array
Array clone, the new array actually has the same objects as the old objects, no new object is created.
```const counters = [...this.state.counters];```
But object clone will create a new object with the same attributes and values as the old object.
```const newCounter = {...counter}``` This will always create a new object.
And we can see the old, new object this way:
```
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
```
# lesson 11 Multi Components in Sync
## Modify new layout
If we want to show counters data in the `NavBar`, which is not a child component for `Counters` component, in this case we have to lift the state.
{App: {
    NavBar,
    Counters: [
        Counter,
        Counter,
        ...
    ]}
}
```
class App extends Component {
  render() {
    return (
      <React.Fragment>
       <NavBar /> 
       <main role="main" className="container">
        <Counters />
       </main>
      </React.Fragment>
    );
  }
}
```
# lesson 12 Lifting the State Up
## Lift counters to App component
```
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
```
# lesson 13 Stateless Functional Components
## Replace NavBar class with a stateless functional component
Just use `sfc` to create a stateless functional component.
**React will automatically pass the props as the parameter into the functional component.**
```
import React, { Component } from 'react';

const NavBar = (props) => {
    return (  
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar <span className="badge badge-pill badge-secondary">{props.length}</span></a>
        </nav> );
}
export default NavBar;
```
# lesson 14 Destructuring Arguments
## Replace NavBar class with a stateless functional component
We can omit `props` using destructruing arguments. In bellow code, `const NavBar = ({length}) => {}`, react will pass props into this functional component, but in the method, we accept the `props` with an object `{length}`, and here is what amazing happens.
```
const NavBar = ({length}) => {
    return (  
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Counter <span className="badge badge-pill badge-secondary">{length}</span></a>
        </nav> );
}
```
Similarly, we can make the change to `Counters` this way:
```
class Counters extends Component {
    render() { 
        return <div>
            <button className="btn btn-primary btn-sm m-2" 
                onClick={this.props.onReset}>Reset
            </button>
            {this.props.counters.map(count => 
                <Counter 
                    key={count.id} 
                    counter={count}
                    onDelete={this.props.onDelete}
                    onIncrement={this.props.onIncrement}
            />)}
           </div>
    }
}
 
export default Counters;
```
**To**
```
class Counters extends Component {

    render() { 
        const {counters, onReset, onDelete, onIncrement} = this.props;
        return <div>
            <button className="btn btn-primary btn-sm m-2" 
                onClick={onReset}>Reset
            </button>
            {counters.map(count => 
                <Counter 
                    key={count.id} 
                    counter={count}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
            />)}
           </div>
    }
}
```