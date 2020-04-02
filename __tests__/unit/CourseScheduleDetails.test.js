import React from "react";
import CourseScheduleDetails from "../../screens/Menu/CourseScheduleDetails";
import renderer from "react-test-renderer";

describe("Course Schedule Details component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<CourseScheduleDetails />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});