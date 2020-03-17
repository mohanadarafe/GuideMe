import React from "react";
import { CurrentBuildingInformation } from "../../components/CurrentBuildingInformation";
import renderer from "react-test-renderer";

describe("CurrentBuildingInformation component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<CurrentBuildingInformation />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
