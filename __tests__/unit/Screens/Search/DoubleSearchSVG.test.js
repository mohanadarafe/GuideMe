import React from "react";
import { shallow } from 'enzyme';
import { Path, Ellipse } from "react-native-svg";
import { DoubleSearchSVG } from "../../../../assets/DoubleSearchSVG.js";

describe('Double Search SVG Asset coverage', () => {
    const HallFloorXAssetWrapper = shallow(<DoubleSearchSVG />)

    it('Should return the appropriate number of <Path> children', () => {
        expect(HallFloorXAssetWrapper.find(Path).length).toBe(30);
    });

    it('Should return the appropriate number of <Ellipse> children', () => {
        expect(HallFloorXAssetWrapper.find(Ellipse).length).toBe(2);
    });
});
