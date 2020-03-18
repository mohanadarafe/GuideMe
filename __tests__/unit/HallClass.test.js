import React from "react";
import { HallClass } from '../../assets/floormaps/hall/HallClassrooms/HallClass.js';
import { shallow } from 'enzyme';
import { Rect} from "react-native-svg";

describe('Hall Class Asset coverage', () => {
    const HallClassAssetWrapper = shallow(<HallClass />)

    it('Should return the appropriate number of <Rect> children', () => {
        expect(HallClassAssetWrapper.find(Rect).length).toBe(74);
    });

});