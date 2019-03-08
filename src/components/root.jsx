import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ToToList from "./todoList";
import NavBar from "./navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { Calculator } from "./calculator";
import Counters from "./counters";
import News from "./news";
import { TodoListRedux } from "./todoListRedux";

export class Root extends Component {
  render() {
    debugger;
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <main className="container">
            <Switch>
              <Route path="/news" component={News} />
              <Route path="/calculator" component={Calculator} />
              <Route path="/todos" component={ToToList} />
              <Route path="/counter" component={Counters} />
              <Redirect from="/" to="/news" />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(globalState) {
  debugger;
  const temp = {
    todos: globalState.todos
  };
  return temp;
}
export default connect(mapStateToProps)(Root);
