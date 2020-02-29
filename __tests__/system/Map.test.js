import React from 'react';
import { shallow } from 'enzyme';
import Map from '../../screens/Map';
import {findByTestAtrr} from '../../utils/Index';

const setUp = (props={}) => {
   const component = shallow(<Map {...props} />);
   return component;
};

describe('Map Component', () => {
   let component;
   beforeEach(() => {
       component = setUp();
   });
   it('Should render without errors', () => {
       const wrapper = findByTestAtrr(component, 'MapComponent');
       expect(wrapper.length).toBe(1);
   });
   it('Should show a mapview', () => {
       const wrapper = findByTestAtrr(component, 'MapViewComponent');
       expect(wrapper.length).toBe(1);
   });
});