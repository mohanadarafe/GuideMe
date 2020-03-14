import React from "react";
import { HallFloor9 } from '../../assets/floormaps/hall/HallFloor9.js';
import renderer from 'react-test-renderer';


describe("Hall Floor 9 ", () => {

    test('number of <Path>', () => {
        const tree = renderer.create(<HallFloor9/>).toJSON();
        expect(tree.children.length).toBe(31);
    });

});