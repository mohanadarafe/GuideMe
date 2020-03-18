import React from "react";
import IndoorMapView from "../../screens/Indoor/IndoorMapView";
import renderer from "react-test-renderer";

describe("IndoorMapView component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<IndoorMapView />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
