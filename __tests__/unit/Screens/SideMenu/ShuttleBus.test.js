import React from "react";
import ShuttleBus from "../../../../screens/Menu/ShuttleBus";
import renderer from "react-test-renderer";

describe("ShuttleBus component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<ShuttleBus />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});