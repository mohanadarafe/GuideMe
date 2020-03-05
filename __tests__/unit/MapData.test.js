import React from "react";
import { MapData } from '../../components/MapData';
import renderer from 'react-test-renderer';

describe("MapData component", () => {
    test('renders correctly', () => {
        const tree = renderer.create(<MapData />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
