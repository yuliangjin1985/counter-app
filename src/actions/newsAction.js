export const FETCH_NEWS = "FETCH_NEWS";
export const UPDATE_NEWS = "UPDATE_NEWS";
export const UPDATE_FAIL_FETCH = "UPDATE_FAIL_FETCH";
export const FETCH_NEWS_BY_SOURCE = "FETCH_NEWS_BY_SOURCE";

export function fetchNews() {
  return {
    type: FETCH_NEWS
  };
}

export function updateNews(news) {
  return {
    type: UPDATE_NEWS,
    news
  };
}

export function updateFailMsg(message) {
  return {
    type: UPDATE_FAIL_FETCH,
    message
  };
}

export function fetchNewsBySource(source) {
  return {
    type: FETCH_NEWS_BY_SOURCE,
    source
  };
}
