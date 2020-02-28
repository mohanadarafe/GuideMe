import React from "react";
import { Search } from '../components/Search';
import renderer from 'react-test-renderer';

describe("Bottom Menu component", () => {
    test('renders correctly', () => {
        const tree = renderer.create(<Search />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});