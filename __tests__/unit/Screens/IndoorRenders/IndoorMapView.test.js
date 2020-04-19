import React from "react";
import IndoorMapView from "../../../../screens/Indoor/IndoorMapView";
import renderer from "react-test-renderer";

describe("IndoorMapView component", () => {
    test("renders correctly", () => {
      const navigation = { getParam: (param, defaultValue) => {
        return defaultValue
      }};
        const tree = renderer.create(<IndoorMapView navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
