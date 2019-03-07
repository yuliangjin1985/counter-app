import React, { Component } from "react";

class NewsDetail extends Component {
  state = {
    data: {}
  };

  constructor(props) {
    super(props);
    console.log({ props });
    this.state.data = props.data;
    // this.state.data = props.match.params.title;
    console.log(this.state.data);
  }

  componentDidMount(props) {
    console.log({ props });
  }

  render() {
    return (
      <div>
        {/* <h2>{this.state.data}</h2> */}
        {/* <h4>{this.state.data.author}</h4>
        <h4>{this.state.data.publishedAt}</h4>
        <hr />
        <div>{this.state.data.content}</div> */}
      </div>
    );
  }
}

export default NewsDetail;
