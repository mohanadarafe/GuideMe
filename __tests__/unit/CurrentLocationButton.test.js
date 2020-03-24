import React, { useRef } from "react";
import CurrentLocationButton from "../../components/CurrentLocationButton";
import renderer from "react-test-renderer";

describe("CurrentLocationButton component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<CurrentLocationButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});