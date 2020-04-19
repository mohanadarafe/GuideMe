import React from "react";
import renderer from "react-test-renderer";
import {PreferenceMenu} from "../../../../screens/PreferenceMenu";
import { shallow } from 'enzyme';
import { Icon, Button } from "native-base";


describe("Preference Menu Screen", () => {
    test("renders correctly", () => {
      const navigation = { getParam: (param, defaultValue) => {
          return "indoor";
        }};
      const tree = renderer.create(<PreferenceMenu navigation={navigation} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    test("click on icon when indoor map should load up pref menu", () => {
      const navigation = {
        getParam: (param, defaultValue) => {
          return "indoor"
        },
        navigate: (param, defaultValue) => {
          return "Hall Building"
        }
      };
      const prefWrapper = shallow(<PreferenceMenu navigation={navigation} />);
      prefWrapper.find("#prefIcon").props().onPress();
    });

    test("click on icon when preview directions should load up pref menu", () => {
      const navigation = {
        getParam: (param, defaultValue) => {
          return null
        },
        navigate: (param, defaultValue) => {
          return "Hall Building"
        }
      };
      const prefWrapper = shallow(<PreferenceMenu navigation={navigation} />);
      prefWrapper.find("#prefIcon").props().onPress();
    });

    test("click on button when indoor map should load up pref menu", () => {
      const setPersonaType = (val) => {
        return val;
      }
      const setMobilityReduced = (val) => {
        return val;
      }
      const setMethodOfTravel = (val) => {
        return val;
      }
      const navigation = {
        getParam: (param, defaultValue) => {
          return "indoor"
        }
      };
      const prefWrapper = shallow(<PreferenceMenu navigation={navigation} setPersonaType={setPersonaType} setMobilityReduced={setMobilityReduced} setMethodOfTravel={setMethodOfTravel} />);
      prefWrapper.find("#personaBtn").props().onPress();
      prefWrapper.find("#personaBtnUnderGrad").props().onPress();
      prefWrapper.find("#personaBtnVisitor").props().onPress();
      prefWrapper.find("#personaBtnStaff").props().onPress();
      prefWrapper.find("#mobReduced").props().onPress();
      prefWrapper.find("#mobNotReduced").props().onPress();
      prefWrapper.find("#driving").props().onPress();
      prefWrapper.find("#driving").props().onPress();
      prefWrapper.find("#walking").props().onPress();
      prefWrapper.find("#walking").props().onPress();
      prefWrapper.find("#bicycle").props().onPress();
      prefWrapper.find("#bus").props().onPress();
    });
});
