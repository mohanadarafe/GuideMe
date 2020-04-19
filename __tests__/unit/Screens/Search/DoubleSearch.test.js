import React from "react";
import DoubleSearch from "../../../../screens/DoubleSearch";
import renderer from "react-test-renderer";

describe("DoubleSearch component", () => {
    test("renders correctly", () => {
        const navigation = { getParam: (param, defaultValue) => {
            return "MB Building";
        }};
        const mockGeolocation = {
            getCurrentPosition: jest.fn(),
            watchPosition: jest.fn()
        };
        global.navigator.geolocation = mockGeolocation;
        
        const tree = renderer.create(<DoubleSearch navigation={navigation}/>).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
