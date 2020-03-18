import React from "react";
import renderer from "react-test-renderer";
import { FloorMenu } from "../../components/FloorMenu";
import { shallow } from "enzyme";

describe("FloorMenu component", () => {
    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);

    beforeEach(() => {
        wrapper = shallow(<FloorMenu />)
    });

    test("renders correctly", () => {
        const tree = renderer.create(<FloorMenu />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("change floors succesfully", () => {
        wrapper.find('#floor_select_none').props().onPress();
        expect(setState).toHaveBeenCalled();
    })
});
