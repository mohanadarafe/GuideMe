import React from "react";
import { shallow } from "enzyme";
import { Map } from "../../screens/Map";
import {findByTestAtrr} from "../../utils/Index";
import { BottomMenu } from "../../components/BottomMenu";

const setUp = (props={}) => {
   const component = shallow(<Map {...props} />);
   return component;
};

const setUpBottom = (props={}) => {
    const component = shallow(<BottomMenu {...props} />);
    return component;
 };

describe("Map Component", () => {
   let component;
   beforeEach(() => {
       component = setUp();
   });
   it("Should render without errors", () => {
       const wrapper = findByTestAtrr(component, "MapComponent");
       expect(wrapper.length).toBe(1);
   });
});