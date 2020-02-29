import React from "react";
import { BottomMenu } from '../../components/BottomMenu';
import renderer from 'react-test-renderer';

describe("BottomMenu component", () => {
    test('renders correctly', () => {
        const tree = renderer.create(<BottomMenu />).toJSON();
        expect(tree).toMatchSnapshot();
      });
});
