import React from "react";
import NearbyInterest from "../../screens/Menu/NearbyInterest";
import renderer from "react-test-renderer";

describe("Nearby Interest component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<NearbyInterest />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});