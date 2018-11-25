# Lesson 2: set up the project
## Steps
 + create the app
 ```npx create-react-app counter-app```
 + install bootstrap
 ```npm i bootstrap@4.1.1```
 + import bootstrap in index.js
 ```import 'bootstrap/dist/css/bootstrap.css'```

# Lesson 3: first module
## Steps
 + create a folder: components
 + create counter.jsx file
 + render counter instead of original App, modify index.js
 ```
 import Counter from './components/counter'

 ReactDOM.render(<Counter />, document.getElementById('root'));
 // ReactDOM.render(<App />, document.getElementById('root'));
 ```
# Lesson 4: Specifying Children
## Steps
```
class Counter extends Component {
    state = {  }
    render() { 
        return <div><h1>Hello world!</h1><button>Increment</button></div>;
    }
}
```
# Lesson 5: Embedding Expressions 
## {valid js expressing} and object destructuring
Use valid js expression in jsx and practice object destructuring.
```
class Counter extends Component {
    state = { 
        count: 0
     }
    render() { 
        return <div>
            <span>{this.formatCount()}</span>//We can add any valid javascript expressions
            <button>Increment</button></div>;
    }

    formatCount() {
        const {count} = this.state;//Use object destructuring
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
```

# Lesson 6: Setting Attributes
## Attributes for react tags
`className` from bootstrape, and `fontSize` attribute, and add `img` tag
```
class Counter extends Component {
    state = { 
        count: 0,
        imageUrl: 'https://picsum.photos/200'
     }

     styles = {
         fontSize: 10,//react will automatically convert 10 to 10px;
         fontWeight: 'bold'
     }
    render() { 
        return <div>
            <img src={this.state.imageUrl}></img>
            <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button></div>;
    }

    formatCount() {
        const {count} = this.state;//Use object destructuring
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
```
# Lesson 7: Rendering Classes Dynamically
## Rendering Classes Dynamically and extract to method
```
    render() { 
        let classes = this.getBadgeClasses();
        return <div>
            <span style={this.styles} className={classes}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button></div>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
```
## Call method directly
```
    render() { 
        return <div>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button></div>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
```
# Lesson 8: Rendering Lists
## map and unique key
When use map to render a list, there should be a key attribute, to make it reactive.
Warning: Each child in an array or iterator should have a unique "key" prop.
```
state = { 
        count: 5,
        tags: ['tag1', 'tag2', 'tag3'],
        imageUrl: 'https://picsum.photos/200'
     }

     styles = {
         fontSize: 50,//react will automatically convert 10 to 10px;
         fontWeight: 'bold'
     }
    render() { 
        return <div>
                {this.state.tags.map(tag => <li>{tag}</li>)}
            </ul>
        </div>
    }
```
In order to fix the unique warning, add key temperarily.
```
<ul>
    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
</ul>
```
# Lesson 9: Conditional Rendering
## conditional rendering tags
```
renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags.</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
```
```
        return <div>
            {this.state.tags.length === 0 && <div>Please create a new tag!</div>}
            {this.renderTags()} 
        </div>
```
## javascript logical and
logic && between un boolean values, like boolean && string, if all operand is true, the result is the last operand
```
        return <div>
            {this.state.tags.length === 0 && <div>Please create a new tag!</div>}
        </div>
```
# Lesson 10: Handling Events
## react event properties: onClick={this.someMethod}
Because it's an event, we can do like this: `onClick={this.someMethod()`. It has to be like `onClick={this.someMethod}`.
```
    render() { 
        return <div>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </div>
    }

    handleIncrement() {
        console.log("Increment event", this);//Here this is undifined
    }
```
# Lesson 11: Binding Event Handlers
## Using constructor to bind the standalone function with an object
**In the event handler, it has to be able to access the this objet.**
The bind() method will return a new method in which `this` would always be binded to the target object, `this.handleIncrement.bind(this)`, through constructer, and after `super()`. So we need to resign the new method to the original method veriable.
```
     constructor() {
         super();
         this.handleIncrement = this.handleIncrement.bind(this);
     }

    handleIncrement() {
        console.log("Increment event", this);//Here this is undifined, because this is a stand alone method
    }
```
## Useing arrow function
Instead of using constructor, using arrow function, because arrow functions don't rebind `this`, it inherits it.
```
    handleIncrement = () => {
        console.log("Increment event", this);
    }
```
# Lesson 12: Updating the state
## setState(object)
The property name is `count`, value is `this.state.count + 1`. This property will merge with this.state.
In react, we have to explicitlly tell react what has changed, and the parameter is an object.
```
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1});
    }
```
# Lesson 13: What exactly happens when state changed
## setState(object)
When `setState()` is called, it tells react that the state of this component is going to change. React then schedules a call to `render()` method. `render()` will be called asychronizly. When the state changed, and `render()` will return a new react element, a new virtual dom is created and react will compare it with the old one, and find the `<span>` element has changed, then react will update the dom only for that particular element.
# Lesson 14: Passing Event Arguments
## With a helper method
Some times we need to bind particular data to an event, like a product. Here for example, we create another helper method and call the original one with parameter. It's cubersome.

```
    render() { 
        return <div>
            <button onClick={this.doHandleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        </div>
    }

    doHandleIncrement = () => this.handleIncrement({id: 1});//Pass a variable

    handleIncrement = (id) => {
        console.log(id);
        this.setState({ count: this.state.count + 1});
    }
```
## Use arrow function and inline function without a helper method
```
    render() { 
        return <div>
            <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment</button>
        </div>
    }

    handleIncrement = (id) => {
        console.log(id);
        this.setState({ count: this.state.count + 1});
    }
```