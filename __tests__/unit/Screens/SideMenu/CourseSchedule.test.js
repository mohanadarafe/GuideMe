import React from "react";
import CourseSchedule from "../../../../screens/Menu/CourseSchedule";
import renderer from "react-test-renderer";

describe("Course Schedule component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<CourseSchedule />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});