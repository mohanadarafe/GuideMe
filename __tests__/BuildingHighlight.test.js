import React from "react";
import { BuildingHighlight } from '../components/BuildingHighlight';
import renderer from 'react-test-renderer';

// Example test
describe("Building Highlight component", () => {
    test('renders correctly', () => {
        const tree = renderer.create(<BuildingHighlight />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
