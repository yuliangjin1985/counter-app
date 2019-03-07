import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga";
import rootReduce from "./reducers/rootReducers";
import { Provider } from "react-redux";
import Root from "./components/root";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReduce /* preloadedState, */,
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(mySaga);

// ReactDOM.render(<Counters />, document.getElementById('root'));
ReactDOM.render(
  // <BrowserRouter>
  // <App />,
  <Provider store={store}>
    <div>
      <Root />
    </div>
  </Provider>,
  // </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
