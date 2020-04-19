import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { LocationMarker } from "../../../components/locationMarker";

describe("LocationMarker component", () => {
    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        wrapper = shallow(<LocationMarker />)
    });

    test("renders correctly", () => {
        const tree = renderer.create(<LocationMarker />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
