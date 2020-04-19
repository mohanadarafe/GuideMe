import React from "react";
import AboutUs from "../../../../screens/Menu/AboutUs";
import renderer from "react-test-renderer";
import { TouchableOpacity } from "react-native";
import { shallow } from "enzyme";

describe("About Us component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<AboutUs />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("renders side menu", () => {
        const navigation = { openDrawer: () => {
            return true;
        }};
        const wrapper = shallow(<AboutUs navigation={navigation} />);
        wrapper.find(TouchableOpacity).props().onPress();
    });
});