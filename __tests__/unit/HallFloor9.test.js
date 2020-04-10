import React from "react";
import { HallFloor9 } from '../../assets/floormaps/hall/HallFloor9.js';
import { shallow } from 'enzyme';
import { Path } from "react-native-svg";

describe('Hall Floor 9 Asset coverage', () => {
    const HallFloor9AssetWrapper = shallow(<HallFloor9 />)

    it('Should return the appropriate number of <Path> children', () => {
        expect(HallFloor9AssetWrapper.find(Path).length).toBe(59);
    });
});
