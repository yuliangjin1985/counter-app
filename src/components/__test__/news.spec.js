import React from "react";
import { shallow } from "enzyme";
import { News } from "../news";

describe("News", () => {
  let wrapper;
  let news = [{ title: "fake news one" }];
  beforeEach(() => {
    wrapper = shallow(<News news={news} />);
  });
  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render four buttons", () => {
    expect(wrapper.find("button").length).toBe(4);
  });

  fit("should invoke each source buttons", () => {
    const testData = [
      { index: 0, param: "CNN" },
      { index: 1, param: "bbc-news" },
      { index: 2, param: "bbc-sport" },
      { index: 3, param: "espn" }
    ];

    testData.forEach(data => {
      const handleFetchBySourceMock = jest.fn();
      wrapper.instance().handleFetchBySource = handleFetchBySourceMock;
      expect(handleFetchBySourceMock).not.toHaveBeenCalled();
      wrapper
        .find("button")
        .at(data.index)
        .simulate("click");
      expect(handleFetchBySourceMock).toHaveBeenCalledWith(data.param);
    });
  });
});
