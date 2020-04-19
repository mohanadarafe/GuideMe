import React from "react";
import { JMSBFloorX } from '../../../../assets/floormaps/mb/JMSBFloorX.js';
import { Path } from "react-native-svg";
import { shallow } from 'enzyme';

describe('JMSB Floor X Asset coverage', () => {
    const JMSBFloorXAssetWrapper = shallow(<JMSBFloorX />)

    it('Should return the appropriate number of <Path> children', () => {
        expect(JMSBFloorXAssetWrapper.find(Path).length).toBe(19);
    });
});
