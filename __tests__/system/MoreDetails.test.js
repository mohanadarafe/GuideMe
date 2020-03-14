import React from 'react';
import { shallow } from 'enzyme';
import  MoreDetails  from '../../screens/MoreDetails';
import {findByTestAtrr} from '../../utils/Index';

const setUp = (props = {}) => {
    const component = shallow(<MoreDetails {...props} />);
    return component;
};

describe("MoreDetails Component", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it("Should render without errors", () => {
        const wrapper = findByTestAtrr(component, "MoreDetailsComponent");
        expect(wrapper.length).toBe(0);
    });
});