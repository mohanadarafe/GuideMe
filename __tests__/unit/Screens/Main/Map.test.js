import React from "react";
import { shallow } from "enzyme";
import {findByTestAtrr} from "../../../../utils/Index";
import MapView from "react-native-maps";
import { Map } from "../../../../screens/Map";

const setUp = (props={}) => {
   const component = shallow(<Map {...props} />);
   return component;
};

describe("Map Component", () => {
    let component;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    const props = {
        isFetching: false,
        dispatch: jest.fn(),
        setSelectedBuildingName: (value) => {return value},
    }

    beforeEach(() => {
        component = setUp(props);
    });
    it("Should render without errors", () => {
        const wrapper = findByTestAtrr(component, "MapComponent");
        expect(wrapper.length).toBe(1);
    });

    it("Should render a click", () => {
        const wrapper = findByTestAtrr(component, "MapComponent");
        wrapper.find(MapView).props().onPress();
        expect(setState).toHaveBeenCalled();
    });
});