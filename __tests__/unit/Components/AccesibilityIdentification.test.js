import React from "react";
import { AccessibilityIdentification } from "../../../components/AccessibilityIdentification";
import renderer from "react-test-renderer";

describe("Accessibility Identification component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<AccessibilityIdentification />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
