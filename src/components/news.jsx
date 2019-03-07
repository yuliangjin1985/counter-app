import React, { Component } from "react";
// import NewsDetail from "./newsDetail";
import { connect } from "react-redux";
import {
  fetchNews,
  updateNews,
  fetchNewsBySource
} from "../actions/newsAction";

export class News extends Component {
  //Use await instead of Promise

  async callNewsAwait() {
    try {
      const url =
        "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=df47cddd4545452cb04ab5e1d030af8d";
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log({ news: json.articles });
      //   this.setState({news: json.articles})
      this.props.updateNews(json.articles);
    } catch (error) {
      //   this.setState({ counters: [{ id: 1, count: 5 }, { id: 2, count: 3 }] });
      console.log("Error occurs!", this.state);
    }
  }

  handleUpdate = () => {
    this.props.fetchNews();
  };

  handleFetchBySource = source => {
    this.props.fetchNewsBySource(source);
  };

  componentDidMount() {
    if (this.props.news.length > 0) {
      console.log("Get data from global store");
    } else {
      this.callNewsAwait();
      console.log("News initialized!", this.state);
    }
  }

  render() {
    return (
      <div>
        <div>
          <button
            className="float-right"
            onClick={() => this.handleFetchBySource("CNN")}
          >
            CNN
          </button>
          <button
            className="float-right"
            onClick={() => this.handleFetchBySource("bbc-news")}
          >
            BBC
          </button>

          <button
            className="float-right"
            onClick={() => this.handleFetchBySource("bbc-sport")}
          >
            BBC SPORT
          </button>
          <button
            className="float-right"
            onClick={() => this.handleFetchBySource("espn")}
          >
            ESPN
          </button>
          <hr />
        </div>

        <div>
          {this.props.news.map((article, index) => {
            const url = `/details/${article.title}`;
            return <div key={index}>{article.title}</div>;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(globalState) {
  debugger;
  const temp = {
    news: globalState.news
  };
  return temp;
}

export default connect(
  mapStateToProps,
  { updateNews, fetchNews, fetchNewsBySource }
)(News);
