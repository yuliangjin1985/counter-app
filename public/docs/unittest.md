## Test Saga

In the method parameters, declare the fetch, so it's easy to mock data from fetch call.

```
function* fetchNews() {
  try {
    debugger;
    const response = yield call(fetch, FETCH_NEWS_URL);
    const news = yield response.json();
    yield put(updateNews([...news.articles]));
    //If I do this
  } catch (e) {
    console.log({ msg: e.message });
    yield put(updateFailMsg(e.message));
  }
}
```

```
function* fetchNews(action, fetch = window.fetch) {
  try {
    debugger;
    const response = yield call(fetch, FETCH_NEWS_URL);
    const news = yield response.json();
    yield put(updateNews([...news.articles]));
    //If I do this
  } catch (e) {
    console.log({ msg: e.message });
    yield put(updateFailMsg(e.message));
  }
}
```

Without an action as the first parameter, the fetch will fail.

```
function* initializeToDos(fetch = window.fetch) {
  try {
    const response = yield call(fetch, GET_TODO_URL);

    const todos = yield response.json();
    console.log({ todos });
    yield put(loadInitialdTodos(todos));
  } catch (e) {
      //Without `action` as the first parameter, it will end up here.
    yield put(loadInitialdTodos([{ id: 5, task: "have fun" }])); //Put empty instead
  }
}
```
