import React from "react";
import NearbyInterest from "../../../../screens/Menu/NearbyInterest";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { TouchableOpacity } from "react-native";


import { TouchableOpacityBase } from "react-native";

describe("Nearby interest component", () => {

  const navigation = {
    getParam: (param, defaultValue) => {
      return "Tim Hortons"
    },
    openDrawer: (param, defaultValue) => {
      return "SideMenu"
    },
  };

  test("renders correctly", () => {
    const tree = renderer.create(<NearbyInterest navigation={navigation}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("click on components", () => {
    const wrapper = shallow(<NearbyInterest navigation={navigation}/>);
    wrapper.find(SegmentedControlTab).at(0).simulate('onTabPress')
  });

  test("click on side menu", () => {
    const wrapper = shallow(<NearbyInterest navigation={navigation}/>);
    wrapper.find(TouchableOpacity).at(0).simulate('onPress')
  });


});