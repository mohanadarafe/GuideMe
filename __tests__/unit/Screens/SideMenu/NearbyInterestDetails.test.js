import React from "react";
import NearbyInterestDetails from "../../../../screens/Menu/NearbyInterestDetails";
import renderer from "react-test-renderer";

describe("Nearby Interest Details component", () => {
    test("renders correctly", () => {
        const navigation = {
            getParam: (param, defaultValue) => {
              return "Tim Hortons"
            }
          };
        const tree = renderer.create(<NearbyInterestDetails navigation={navigation}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});