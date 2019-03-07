## json-server

We use json-server to mock the restful apis during development.

1. Install
   `npm install json-server`
2. Configure

- add json.db
- add yarn script

3. Use Promise to initialize the data

```
state = {
    counters: []
  };

  callback = () => {
    fetch(`http://localhost:3001/counters`)
      .then(res => res.json())
      .then(json => this.setState({ counters: json }));
  };

  componentDidMount() {
    this.callback();
  }
```
