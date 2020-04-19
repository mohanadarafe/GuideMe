import React from "react";
import renderer from "react-test-renderer";
import CurrentLocationButton from "../../../components/CurrentLocationButton";
import { TouchableOpacity } from "react-native";
import { shallow } from 'enzyme';

describe("CurrentLocationButton component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<CurrentLocationButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("click on navigate", () => {
        const navigator = {
          geolocation
          }
        const geolocation ={
            getCurrentPosition: (latitude, longitude, latitudeDelta, longitudeDelta) => {
                return (latitude, longitude, latitudeDelta, longitudeDelta);
              },
        }
        const wrapper = shallow(<CurrentLocationButton navigation={navigator}/>);
  
        wrapper.find(TouchableOpacity).at(0).simulate('onPress')
      });
});