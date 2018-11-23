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