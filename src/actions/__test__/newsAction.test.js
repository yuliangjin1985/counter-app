import {
  UPDATE_NEWS,
  FETCH_NEWS,
  UPDATE_FAIL_FETCH,
  FETCH_NEWS_BY_SOURCE
} from "../newsAction";

describe("newsAction", () => {
  it("fetchNews will create action with FETCH_NEWS type", () => {
    const { fetchNews } = require("../newsAction");
    expect(fetchNews()).toEqual({ type: FETCH_NEWS });
  });

  it("updateNews will create action with news of an empty array", () => {
    const { updateNews } = require("../newsAction");
    expect(updateNews([])).toEqual({ type: UPDATE_NEWS, news: [] });
  });

  it("updateFailMsg will create action with message", () => {
    const { updateFailMsg } = require("../newsAction");
    expect(updateFailMsg("random message")).toEqual({
      type: UPDATE_FAIL_FETCH,
      message: "random message"
    });
  });

  it("fetchNewsBySource will create action with source", () => {
    const { fetchNewsBySource } = require("../newsAction");
    expect(fetchNewsBySource("random source")).toEqual({
      type: FETCH_NEWS_BY_SOURCE,
      source: "random source"
    });
  });
});
