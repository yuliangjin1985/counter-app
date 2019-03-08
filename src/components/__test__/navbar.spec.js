import React from "react";
import { shallow } from "enzyme";

import NavBar from "../navbar.jsx";

describe("NavBar", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("test for navbar", () => {
    const len = wrapper.find("nav").length;
    expect(len).toBe(1);
    expect(wrapper.find("Link").length).toBe(4);
  });
});
