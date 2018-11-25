import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value
     }

     styles = {
         fontSize: 30,//react will automatically convert 10 to 10px;
         fontWeight: 'bold'
     }
    render() { 
        console.log("Props: ", this.props);
        return <div>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
    }

    handleIncrement = (id) => {
        console.log(id);
        this.setState({ count: this.state.count + 1});
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;//Use object destructuring
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Counter;