import React from "react";
import renderer from "react-test-renderer";
import { Text } from "react-native";
import  PreferenceMenu  from "../../screens/PreferenceMenu";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { shallow } from 'enzyme';
import { Button } from "native-base";
import {findByTestAtrr} from "../../utils/Index";


const mockStore = configureMockStore();
const store = mockStore({});

const setUp = (props={}) => {
  const navigation = {
    getParam: (param, defaultValue) => {
      return defaultValue
    }
  };
    const component = shallow( 
    <Provider store={store}>
      <PreferenceMenu navigation ={navigation} />
  </Provider>);
    return component;
  };


describe("Preference Menu Screen", () => {
 
   const PreferenceMenuWrapper =  setUp();

    it("Should render without errors", () => {
      const tree = renderer.create(PreferenceMenuWrapper).toJSON();
      expect(tree).toMatchSnapshot();

    });
});
