import React from "react";
import { ToggleCampus } from '../components/ToggleCampus';
import renderer from 'react-test-renderer';

describe("Toggle Campus component", () => {
    test('renders correctly', () => {
        const tree = renderer.create(<ToggleCampus />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
