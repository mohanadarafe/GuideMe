import React from "react";
import { shallow } from "enzyme";
<<<<<<< HEAD
import { MoreDetails } from "../../screens/MoreDetails";
=======
import  MoreDetails  from "../../screens/MoreDetails";
>>>>>>> 72de5688e9fbbc6a01d71f0e21c510aa72f68ec5
import {findByTestAtrr} from "../../utils/Index";

const setUp = (props = {}) => {
    const component = shallow(<MoreDetails {...props} />);
    return component;
};

describe("MoreDetails Component", () => {
<<<<<<< HEAD
   let component;
   beforeEach(() => {
       component = setUp();
   });
   it("Should render without errors", () => {
       const wrapper = findByTestAtrr(component, "MoreDetails");
       expect(wrapper.length).toBe(0);
   });
=======
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it("Should render without errors", () => {
        const wrapper = findByTestAtrr(component, "MoreDetailsComponent");
        expect(wrapper.length).toBe(0);
    });
>>>>>>> 72de5688e9fbbc6a01d71f0e21c510aa72f68ec5
});