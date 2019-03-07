import { ADD_TODO, REMOVE_TODO } from "../actions/todoActions";

const initialState = {
  todos: [{ task: "work", id: 5 }],
  id: 0,
  redux: "REDUX",
  news: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
