import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import { Calculator } from "./components/calculator";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";
import ToToList from "./components/todoList";
import News from "./components/news";
import NewsDetail from "./components/newsDetail";
import { TodoListRedux } from "./components/todoListRedux";

export class App extends Component {
  state = {
    counters: [],
    news: []
  };

  callback = () => {
    fetch(`http://localhost:3001/counters`)
      .then(res => {
        res
          .json() //Create another promise
          .then(json => this.setState({ counters: json }))
          .catch(e => {
            //Catch for json()
            console.log(e);
          });
      })
      .catch(e => {
        //Catch for fetch
        //Request failed
        console.log(`Back end server is down. ${e}`);
        this.setState({ counters: [{ id: 1, count: 0 }, { id: 2, count: 0 }] });
      });
  };

  //Use await instead of Promise
  async callbackAwait() {
    try {
      const response = await fetch(`http://localhost:3001/counters`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ counters: json });
    } catch (error) {
      this.setState({ counters: [{ id: 1, count: 5 }, { id: 2, count: 3 }] });
    }
  }

  //Add extra operation for all the promises
  callbackNew = () => {
    let promise = fetch(`http://localhost:3001/counters`)
      .then(res => res.json())
      .then(json => this.setState({ counters: json }));
    Promise.all([promise]).then(() => console.log("Promise completed.")); //When the promise is finished, log.
    Promise.reject(promise).then(() =>
      this.setState({ counters: [{ id: 1, count: 0 }] })
    );
  };

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
      this.setState({ news: json.articles });
    } catch (error) {
      this.setState({ counters: [{ id: 1, count: 5 }, { id: 2, count: 3 }] });
      console.log("Error occurs!", this.state);
    }
  }

  componentDidMount() {
    this.callbackAwait(); //Asychronized task. Use Promise.
    this.callNewsAwait();
    console.log("callback function called.");
    //The call to callback is asynchronized, so this log
    //is printed before the callback log.
  }

  handleReset = () => {
    const cs = [
      { id: 1, count: 0 },
      { id: 2, count: 0 },
      { id: 3, count: 0 },
      { id: 4, count: 0 },
      { id: 5, count: 0 },
      { id: 6, count: 0 }
    ];
    this.setState({ counters: cs });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    const newCounter = { ...counter }; //Deep clone, to create a new object
    counters[index] = newCounter;
    newCounter.count++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const newCounters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/calculator" component={Calculator} />
            <Route
              path="/counter"
              component={() => (
                <Counters
                  counters={this.state.counters}
                  onReset={this.handleReset}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                />
              )}
            />
            <Route path="/todos" component={ToToList} />
            <Route path="/todosRedux" component={TodoListRedux} />
            <Route
              path="/news"
              render={() => <News news={this.state.news} />}
            />
            <Route
              path="/details/:title"
              render={() => <NewsDetail data={this.state.news} />}
            />
            <Route path="/not-found" component={NotFound} />

            {/* <Route
              path="/details"
              render={props => <NewsDetail {...props} />}
            /> */}
            <Redirect from="/" to="/calculator" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
