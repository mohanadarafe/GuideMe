import React from "react";
import { shallow } from "enzyme";
import {findByTestAtrr} from "../../utils/Index";
import { BottomMenu } from "../../components/BottomMenu";

const setUpBottom = (props={}) => {
    const component = shallow(<BottomMenu {...props} />);
    return component;
 };

describe("Bottom Menu Component", () => {
   let component;
   beforeEach(() => {
       component = setUpBottom();
   });
   it("Should render without errors", () => {
       const wrapper = findByTestAtrr(component, "BottomMenu");
       expect(wrapper.length).toBe(1);
   });
});