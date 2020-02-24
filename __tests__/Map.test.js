import React from 'react';
import { shallow } from 'enzyme';
import Map from '../screens/Map';

const setUp = (props={}) => {
    const component = shallow(<Map {...props} />);
    return component;
};

const findByTestAtrr = (component, attr) => {
    const wrapper  = component.find(`[data-test='${attr}']`)
    return wrapper;
};

describe('Map Component', () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'MapComponent');
        expect(wrapper.length).toBe(2);
    });

    // it('Should render a logo', () => {
    //     const logo = findByTestAtrr(component, 'logoIMG');
    //     expect(logo.length).toBe(1);
    // });

});