import React from "react";
import { HallFloorX } from '../../assets/floormaps/hall/HallFloorX.js';
import renderer from 'react-test-renderer';


describe("Hall Floor X ", () => {

    test('number of <Text>', () => {
        const tree = renderer.create(<HallFloorX/>).toJSON();
        expect(tree.children.length).toBe(62);
    });

    test('number of <Path>', () => {
        const tree = renderer.create(<HallFloorX/>).toJSON();
        expect(tree.children.length).toBe(38);
    });



});