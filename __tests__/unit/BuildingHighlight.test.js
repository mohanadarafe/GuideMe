import React from "react";
import { BuildingHighlight } from "../../components/BuildingHighlight";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Building Highlight component", () => {
    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
      wrapper = shallow(<BuildingHighlight />)
    });

    test("renders correctly", () => {
      const tree = renderer.create(<BuildingHighlight />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    test("number of polygons", () => {
      const tree = renderer.create(<BuildingHighlight />).toJSON();
      expect(tree.children.length).toBe(10);
    });

    test("pressing on a building", () => {
      wrapper.find('#tap_h').props().onPress();
      wrapper.find('#tap_lb').props().onPress();
      wrapper.find('#tap_gm').props().onPress();
      wrapper.find('#tap_ev').props().onPress();
      wrapper.find('#tap_mb').props().onPress();
      wrapper.find('#tap_sp').props().onPress();
      wrapper.find('#tap_cj').props().onPress();
      wrapper.find('#tap_cc').props().onPress();
      wrapper.find('#tap_ad').props().onPress();
      wrapper.find('#tap_gn').props().onPress();

      expect(setState).toHaveBeenCalledWith("Hall Building");
      expect(setState).toHaveBeenCalledWith("LB Building");
      expect(setState).toHaveBeenCalledWith("GM Building");
      expect(setState).toHaveBeenCalledWith("EV Building");
      expect(setState).toHaveBeenCalledWith("JMSB");
      expect(setState).toHaveBeenCalledWith("SP Building");
      expect(setState).toHaveBeenCalledWith("CJ Building");
      expect(setState).toHaveBeenCalledWith("CC Building");
      expect(setState).toHaveBeenCalledWith("AD Building");
      expect(setState).toHaveBeenCalledWith("Grey Nuns");
    })
});
