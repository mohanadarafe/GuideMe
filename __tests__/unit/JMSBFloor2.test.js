import React from "react";
import { JMSBFloor2 } from '../../assets/floormaps/mb/JMSBFloor2.js';
import renderer from 'react-test-renderer';


describe("JMSB Floor 2 ", () => {

    test('number of <Path>', () => {
        const tree = renderer.create(<JMSBFloor2/>).toJSON();
        expect(tree.children.length).toBe(12);
    });

});