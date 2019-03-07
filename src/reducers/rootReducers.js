import {
  ADD_TODO,
  REMOVE_TODO,
  LOAD_INITIALIZED_TODOS
} from "../actions/todoActions";
import { ADD_TEST } from "../actions/reduxActions";
import {
  UPDATE_NEWS,
  FETCH_NEWS,
  UPDATE_FAIL_FETCH
} from "../actions/newsAction";

const initialState = {
  todos: [{ task: "work", id: 5 }],
  id: 0,
  redux: "REDUX",
  news: []
};

export default function rootReduce(state = initialState, action) {
  debugger;
  switch (action.type) {
    case ADD_TEST:
      let val = action.redux;
      let oldState = { ...state };
      return {
        ...oldState,
        redux: val
      };
    case ADD_TODO:
      let newState = { ...state };
      newState.id++;
      const temp = {
        ...newState,
        todos: [...newState.todos, { task: action.task, id: newState.id }]
      };
      // debugger;
      return temp;
    case REMOVE_TODO:
      const tempState = { ...state };
      let todos = tempState.todos.filter(todo => todo.id !== action.id);
      return {
        ...tempState,
        todos
      };

    case UPDATE_NEWS:
      return {
        ...state,
        news: action.news
      };

    case UPDATE_FAIL_FETCH:
      return {
        ...state,
        message: action.message
      };

    case LOAD_INITIALIZED_TODOS:
      return {
        ...state,
        todos: action.todos
      };

    // case FETCH_NEWS:
    //   return {
    //     ...state,
    //     news: []
    //   };
    default:
      return state;
  }
}
