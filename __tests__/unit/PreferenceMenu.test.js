import React from "react";
import renderer from "react-test-renderer";
import PreferenceMenu from "../../screens/PreferenceMenu";

describe("Preference Menu component", () => {
  test("renders correctly", () => {
    const navigation = {
      getParam: (param, defaultValue) => {
        return defaultValue
      }
    };
    const tree = renderer.create(<PreferenceMenu navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
