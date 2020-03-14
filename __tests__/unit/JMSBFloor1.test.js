import React from "react";
import { JMSBFloor1 } from '../../assets/floormaps/mb/JMSBFloor1.js';
import renderer from 'react-test-renderer';


describe("JMSB Floor 1 ", () => {

    test('number of <Path>', () => {
        const tree = renderer.create(<JMSBFloor1/>).toJSON();
        expect(tree.children.length).toBe(19);
    });

});