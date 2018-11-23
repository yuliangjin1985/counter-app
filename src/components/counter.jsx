import React, { Component } from 'react';

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
 
export default Counter;