import React from "react";
import { CurrentBuildingLocation } from "../../../components/CurrentBuildingLocation";
import renderer from "react-test-renderer";
import { TouchableOpacity } from "react-native";
import { shallow } from 'enzyme';

describe("CurrentBuildingLocation component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<CurrentBuildingLocation />).toJSON();
        expect(tree).toMatchSnapshot();
      });

      test("click on navigate", () => {
        const getPosition = {
          checkIfWithinPoly
          }
        const checkIfWithinPoly ={
            getCurrentPosition: (coords) => {
                return coords;
              },
        }
        const wrapper = shallow(<CurrentBuildingLocation getPosition={getPosition}/>);
  
        wrapper.find(TouchableOpacity).at(0).simulate('onPress')
      });


});
