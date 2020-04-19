import React from "react";
import renderer from "react-test-renderer";
import VLFloor1 from '../../../../assets/floormaps/vl/VLFloor1';

describe("VLFloor1 component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<VLFloor1 />).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});