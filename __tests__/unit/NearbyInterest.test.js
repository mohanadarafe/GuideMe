import React from "react";
import NearbyInterest from "../../screens/Menu/NearbyInterest";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Nearby interest component", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);


  beforeEach(() => {
    wrapper = shallow(<NearbyInterest />);
  });

  test("pressing on tab bar", () => {
    wrapper.find("#tab_button").props().onTabPress();
    expect(setState).toHaveBeenCalledWith(undefined);
  });

  test("renders correctly", () => {
    const tree = renderer.create(<NearbyInterest />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});