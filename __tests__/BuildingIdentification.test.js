import React from "react";
import { BuildingIdentification } from '../components/BuildingIdentification';
import renderer from 'react-test-renderer';

// Example test
describe("Building Identification component", () => {
    test('renders correctly', () => {
        const tree = renderer.create(<BuildingIdentification />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
