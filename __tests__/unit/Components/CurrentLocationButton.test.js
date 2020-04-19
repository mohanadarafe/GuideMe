import React from "react";
import renderer from "react-test-renderer";
import CurrentLocationButton from "../../../components/CurrentLocationButton";

describe("CurrentLocationButton component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<CurrentLocationButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});