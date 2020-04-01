import React from "react";
import Settings from "../../screens/Menu/Settings";
import renderer from "react-test-renderer";

describe("Settings component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<Settings />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});