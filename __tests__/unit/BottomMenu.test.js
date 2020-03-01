import React from "react";
import { BottomMenu } from '../../components/BottomMenu';
import renderer from 'react-test-renderer';

describe("Bottom Menu component", () => {
    test('renders correctly', () => {
        const tree = renderer.create(<BottomMenu />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
