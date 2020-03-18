import React from "react";
import { JMSBFloor1 } from '../../assets/floormaps/mb/JMSBFloor1.js';
import { Path } from "react-native-svg";
import { shallow } from 'enzyme';

describe('JMSB Floor 1 Asset coverage', () => {
    const JMSBFloor1AssetWrapper = shallow(<JMSBFloor1 />)

    it('Should return the appropriate number of <Path> children', () => {
        expect(JMSBFloor1AssetWrapper.find(Path).length).toBe(19);
    });
});
