import { REMOVE_TODO } from "../todoActions";

describe("todoActions", () => {
  it("removeTodo should create an action with id", () => {
    const { removeTodo } = require("../todoActions");
    expect(removeTodo(101)).toEqual({ type: REMOVE_TODO, id: 101 });
  });
});
