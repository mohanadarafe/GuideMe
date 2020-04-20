import React from "react";
import CourseSchedule from "../../../../screens/Menu/CourseSchedule";
import renderer from "react-test-renderer";
import { TouchableOpacity } from "react-native";
import { shallow } from "enzyme";


describe("Course Schedule component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<CourseSchedule />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("renders side menu", () => {
        const navigation = { openDrawer: () => {
            return true;
        }};
        const wrapper = shallow(<CourseSchedule navigation={navigation} />);
        wrapper.find(TouchableOpacity).props().onPress();
    });

});