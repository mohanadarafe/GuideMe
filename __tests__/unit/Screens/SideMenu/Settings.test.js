import React from "react";
import {Settings} from "../../../../screens/Menu/Settings";
import renderer from "react-test-renderer";
import { TouchableOpacity, Switch } from "react-native";
import { shallow } from "enzyme";

describe("Settings component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<Settings />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("click on components", () => {
        const navigation = { openDrawer: (param, defaultValue) => {
            return "NearbyInterest";
        }};

        const wrapper = shallow(<Settings navigation={navigation}/>);
        wrapper.find(TouchableOpacity).props().onPress();
        wrapper.find(Switch).at(0).simulate('valueChange')
    });
});