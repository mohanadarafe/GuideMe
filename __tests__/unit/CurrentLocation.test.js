import React from "react";
import { CurrentLocation } from '../../components/CurrentLocation';
import renderer from 'react-test-renderer';

<<<<<<< HEAD
describe("Building Highlight component", () => {
=======
describe("CurrentLocation component", () => {
>>>>>>> 5af4c9ca55edea47776ab95966aba913f52796e1
    test('renders correctly', () => {
        const tree = renderer.create(<CurrentLocation />).toJSON();
        expect(tree).toMatchSnapshot();
      });
<<<<<<< HEAD
});
=======
});
>>>>>>> 5af4c9ca55edea47776ab95966aba913f52796e1
