import React from "react";
import { JMSBFloor2 } from '../../../../assets/floormaps/mb/JMSBFloor2.js';
import { Path } from "react-native-svg";
import { shallow } from 'enzyme';

describe('JMSB Floor 2 Asset coverage', () => {
    const JMSBFloor2AssetWrapper = shallow(<JMSBFloor2 />)

    it('Should return the appropriate number of <Path> children', () => {
        expect(JMSBFloor2AssetWrapper.find(Path).length).toBe(12);
    });
});
