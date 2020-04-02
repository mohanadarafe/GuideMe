import React from "react";
import NearbyInterestDetails from "../../screens/Menu/NearbyInterestDetails";
import renderer from "react-test-renderer";

describe("Nearby Interest Details component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<NearbyInterestDetails />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});