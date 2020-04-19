import React from "react";
import { CurrentBuildingLocation } from "../../../components/CurrentBuildingLocation";
import renderer from "react-test-renderer";

describe("CurrentBuildingLocation component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<CurrentBuildingLocation />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
