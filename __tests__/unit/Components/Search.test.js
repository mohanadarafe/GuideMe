import React from "react";
import { Search } from "../../../components/Search";
import renderer from "react-test-renderer";
import { RetrieveSearchItems } from "../../../components/MapData";
import { buildingData } from "../../../constants/buildingData";
import { ClassRooms } from "../../../constants/ClassRooms";
import { shallow } from "enzyme";
import { Icon } from "react-native-elements";

describe("Search component", () => {

  // let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<Search/>);
  });

  const searchItems = RetrieveSearchItems(buildingData(), ClassRooms())
    test("renders correctly", () => {
        const tree = renderer.create(<Search />).toJSON();
        expect(tree).toMatchSnapshot();
      });
    test("The searchItems list contains a classroom: H925", () => {
      expect(searchItems).toContain("H925");
    })
    test("The searchItems list contain a service: CSU Day Care & Nursery", () => {
      expect(searchItems).toContain("CSU Day Care & Nursery");
    })

    test("renders side menu", () => {
      const navigation = { openDrawer: () => {
          return true;
      }};
      const wrapper = shallow(<Search navigation={navigation} />);
      wrapper.find(Icon).props().onPress();
  });
    
});