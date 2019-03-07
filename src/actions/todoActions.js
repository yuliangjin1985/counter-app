export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const INITIALIZE_TODOS = "INITIALIZE_TODOS";
export const LOAD_INITIALIZED_TODOS = "LOAD_INITIALIZED_TODOS";
export const REFRESH_TODO = "REFRESH_TODO";

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

export function initializeToDos() {
  return {
    type: INITIALIZE_TODOS
  };
}

export function loadInitialdTodos(todos) {
  return {
    type: LOAD_INITIALIZED_TODOS,
    todos
  };
}

export function addToDo(todo) {
  return {
    type: ADD_TODO,
    task: todo
  };
}
