import React from "react";
import { BuildingHighlight } from "../../components/BuildingHighlight";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();


describe("Building Highlight component", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);
  const props = {
    isFetching: false,
    dispatch: jest.fn(),
    setSelectedBuildingName: (value) => {return value},
  }
  beforeEach(() => {
    wrapper = shallow(<BuildingHighlight {...props}/>);
  });

  test("renders correctly", () => {
    const tree = renderer.create(<BuildingHighlight {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("number of polygons", () => {
    const tree = renderer.create(<BuildingHighlight {...props}/>).toJSON();
    expect(tree.children.length).toBe(11);
  });

  it('should dispatch an action on button click', () => {

  });

  test("pressing on a building", () => {
    wrapper.find("#tap_h").props().onPress();
    wrapper.find("#tap_lb").props().onPress();
    wrapper.find("#tap_gm").props().onPress();
    wrapper.find("#tap_ev").props().onPress();
    wrapper.find("#tap_mb").props().onPress();
    wrapper.find("#tap_sp").props().onPress();
    wrapper.find("#tap_cj").props().onPress();
    wrapper.find("#tap_cc").props().onPress();
    wrapper.find("#tap_ad").props().onPress();
    wrapper.find("#tap_gn").props().onPress();
    wrapper.find("#tap_vl").props().onPress();

    expect(setState).toHaveBeenCalledWith("Hall Building");
    expect(setState).toHaveBeenCalledWith("LB Building");
    expect(setState).toHaveBeenCalledWith("GM Building");
    expect(setState).toHaveBeenCalledWith("EV Building");
    expect(setState).toHaveBeenCalledWith("MB Building");
    expect(setState).toHaveBeenCalledWith("SP Building");
    expect(setState).toHaveBeenCalledWith("CJ Building");
    expect(setState).toHaveBeenCalledWith("CC Building");
    expect(setState).toHaveBeenCalledWith("AD Building");
    expect(setState).toHaveBeenCalledWith("Grey Nuns");
    expect(setState).toHaveBeenCalledWith("VL Building");
  });
});
