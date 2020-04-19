import React from "react";
import { Settings } from "../../../../screens/Menu/Settings";
import renderer from "react-test-renderer";
import { TouchableOpacity, Switch } from "react-native";
import { shallow } from "enzyme";

describe("Settings component", () => {

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    const props = {
      isFetching: false,
      dispatch: jest.fn(),
      setDarkMode: (value) => {return value},
    }

    test("renders correctly", () => {
        const tree = renderer.create(<Settings />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("click on components", () => {
        const navigation = { openDrawer: (param, defaultValue) => {
            return "NearbyInterest";
        }};
        const wrapper = shallow(<Settings {...props} navigation={navigation}/>);
        wrapper.find(TouchableOpacity).props().onPress();
        wrapper.find(Switch).at(0).simulate('valueChange')
    });
});