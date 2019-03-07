## Promise

```callback = () => {
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

  componentDidMount() {
    this.callback(); //Asychronized task. Use Promise.
    console.log("callback function called.");
    //The call to callback is asynchronized, so this log
    //is printed before the callback log.
  }
```

## await-- a syntax suger of Promise

```
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

  componentDidMount() {
    this.callbackAwait(); //Asychronized task. Use Promise.
  }
```
