import { UPDATE_NEWS, UPDATE_FAIL_FETCH } from "../actions/newsAction";

const initialState = {
  todos: [{ task: "work", id: 5 }],
  id: 0,
  redux: "REDUX",
  news: []
};

export default function newsReduce(state = initialState, action) {
  debugger;
  switch (action.type) {
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
    default:
      return state;
  }
}
