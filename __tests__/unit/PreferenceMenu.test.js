import React from "react";
import renderer from "react-test-renderer";
import { PreferenceMenu } from "../../components/PreferenceMenu";

describe("Preference Menu component", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<PreferenceMenu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
