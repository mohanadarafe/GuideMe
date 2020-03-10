import React from "react";
import { BuildingHighlight } from "../../components/BuildingHighlight";
import renderer from "react-test-renderer";

describe("Building Highlight component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<BuildingHighlight />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("number of polygons", () => {
      const tree = renderer.create(<BuildingHighlight />).toJSON();
      expect(tree.children.length).toBe(10);
    });
});
