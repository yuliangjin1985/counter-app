import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  FETCH_NEWS_URL,
  FETCH_NEWS_BY_SOURCE_URL,
  GET_TODO_URL
} from "./constants/api";
import {
  updateNews,
  updateFailMsg,
  FETCH_NEWS,
  FETCH_NEWS_BY_SOURCE
} from "./actions/newsAction";

import {
  INITIALIZE_TODOS,
  ADD_TODO,
  loadInitialdTodos,
  initializeToDos
} from "./actions/todoActions";

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

function* fetchBySource(action) {
  try {
    console.log("Saga process the action...");
    console.log(action);
    const source = action.source;
    let url = FETCH_NEWS_BY_SOURCE_URL + "&sources=" + source;
    console.log({ url });
    const response = yield call(fetch, url);

    const news = yield response.json();
    yield put(updateNews([...news.articles]));
    //If I do this
  } catch (e) {
    console.log({ msg: e.message });
    yield put(updateFailMsg(e.message));
  }
}

function* initializeToDosFromSaga(action, fetch = window.fetch) {
  try {
    const response = yield call(fetch, GET_TODO_URL);

    const todos = yield response.json();
    console.log({ todos });
    yield put(loadInitialdTodos(todos));
  } catch (e) {
    yield put(loadInitialdTodos([{ id: 5, task: "have fun" }])); //Put empty instead
  }
}

function* addTodo(action, fetch = window.fetch) {
  try {
    let data = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        task: action.task
      })
    };
    const response = yield call(fetch, GET_TODO_URL, data);

    //Response is: {"task": "eat","id": 5}
    const todos = yield response.json();
    console.log({ todos });
    yield put(initializeToDos());
  } catch (e) {
    // yield put(initializeToDos());
    yield put(loadInitialdTodos([{ id: 5, task: "have fun" }])); //Put empty instead
  }
}

function* mySaga() {
  yield takeLatest(FETCH_NEWS, fetchNews);
  yield takeLatest(FETCH_NEWS_BY_SOURCE, fetchBySource);
  yield takeLatest(INITIALIZE_TODOS, initializeToDosFromSaga);
  yield takeLatest(ADD_TODO, addTodo);
}

export default mySaga;
