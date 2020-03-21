import React from "react";
import renderer from "react-test-renderer";
import  PreferenceMenu  from "../../screens/PreferenceMenu";

describe("Preference Menu component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<PreferenceMenu />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
