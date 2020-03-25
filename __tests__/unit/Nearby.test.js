import React from "react";
import Nearby from "../../screens/Menu/Nearby";
import renderer from "react-test-renderer";

describe("Nearby component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<Nearby />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});