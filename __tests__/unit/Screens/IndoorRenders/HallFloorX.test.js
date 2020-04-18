import React from "react";
import { HallFloorX } from '../../../../assets/floormaps/hall/HallFloorX.js';
import { shallow } from 'enzyme';
import { Path, Text } from "react-native-svg";

describe('Hall Floor X Asset coverage', () => {
    const HallFloorXAssetWrapper = shallow(<HallFloorX />)

    it('Should return the appropriate number of <Path> children', () => {
        expect(HallFloorXAssetWrapper.find(Path).length).toBe(57);
    });

    it('Should return the appropriate number of <Text> children', () => {
        expect(HallFloorXAssetWrapper.find(Text).length).toBe(62);
    });
});
