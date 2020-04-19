import React from "react";
import AboutUs from "../../../../screens/Menu/AboutUs";
import renderer from "react-test-renderer";

describe("About Us component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<AboutUs />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});