import React from "react";
import { JMSBFloorX } from '../../assets/floormaps/mb/JMSBFloorX.js';
import renderer from 'react-test-renderer';


describe("JMSB Floor X ", () => {

    test('number of <Path>', () => {
        const tree = renderer.create(<JMSBFloorX/>).toJSON();
        expect(tree.children.length).toBe(19);
    });

});