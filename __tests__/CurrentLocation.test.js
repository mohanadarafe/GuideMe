import React from "react";
import { CurrentLocation } from '../components/CurrentLocation';
import renderer from 'react-test-renderer';

afterAll((done) => {
    done();
});

describe("CurrentLocation component", () => {
    test('renders correctly', () => {
        const tree = renderer.create(<CurrentLocation />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});


