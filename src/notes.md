## router

Execute `npm install react-router-dom@4.3.1` to install the lib.

1. Import and declare

```import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(<Counters />, document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

2. Register the path in App.js

```
import { Route } from "react-router-dom";
```

3. Only download updated resources

Use `Link` Component, this component will prevent the default behavior of the switch of urls, that is not to make a request to backend but just change the url.

```
import { Link } from "react-router-dom";
```

4. Receive query parameter
   Install query-string
   `npm i query-string@6.1.0`
5. Invalid route
