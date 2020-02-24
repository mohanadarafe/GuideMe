import React from "react";
import { CurrentBuilding } from '../components/CurrentBuilding';
import renderer from 'react-test-renderer';

// Example test
describe("currentBuilding component", () => {
    test('renders correctly', () => {
        const tree = renderer.create(<CurrentBuilding />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
