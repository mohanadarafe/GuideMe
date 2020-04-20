import React from "react";
import NearbyInterestDetails from "../../../../screens/Menu/NearbyInterestDetails";
import renderer from "react-test-renderer";
import { shallow } from 'enzyme';
import { Button } from "native-base";


describe("Nearby Interest Details component", () => {
    test("renders correctly", () => {
        const navigation = {
            getParam: (param, defaultValue) => {
              return "Tim Hortons"
            }
          };
        const tree = renderer.create(<NearbyInterestDetails navigation={navigation}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("click on navigate", () => {
      const navigation = {
        getParam: (param, defaultValue) => {
          return param
        },
        goBack: () => {
          return param
        }
      };
      const wrapper = shallow(<NearbyInterestDetails navigation={navigation}/>);

      wrapper.find(Button).at(0).simulate('onPress')
    });

    
    test("click on navigate", () => {
      const navigation = {
        getParam: (param, defaultValue) => {
          return param
        },
        navigate: (param, defaultValue) => {
          return param
        }
      };
      const wrapper = shallow(<NearbyInterestDetails navigation={navigation}/>);

      wrapper.find(Button).at(6).simulate('onPress')
    });
    
    

    test("click on navigate", () => {
      const navigation = {
        getParam: (param, defaultValue) => {
          return param
        },
        navigate: (param, defaultValue) => {
          return param
        }
      };
      const wrapper = shallow(<NearbyInterestDetails navigation={navigation}/>);

      wrapper.find(Button).at(7).simulate('onPress')
    });
    
});