import React, { Component } from 'react';

class Counter extends Component {
     styles = {
         fontSize: 30,//react will automatically convert 10 to 10px;
         fontWeight: 'bold'
     }
    render() { 
        console.log("Props: ", this.props);
        return <div>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.props.counter;//Use object destructuring
        return count === 0 ? <div>Zero</div> : count;
    }
}
 
export default Counter;