import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 5,
        tags: [],
        // tags: ['tag1', 'tag2', 'tag3'],
        imageUrl: 'https://picsum.photos/200'
     }

     styles = {
         fontSize: 50,//react will automatically convert 10 to 10px;
         fontWeight: 'bold'
     }
    render() { 
        return <div>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            {/* logic && between un boolean values, like boolean && string, if all operand is true, the result is the last operand */}
            {this.state.tags.length === 0 && <div>Please create a new tag!</div>}
            {this.renderTags()} 
        </div>
    }

    handleIncrement() {
        console.log("Increment event", this);//Here this is undifined
    }

    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags.</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
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