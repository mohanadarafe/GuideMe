import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { BottomMenu } from "../../../components/BottomMenu";
import { Icon } from "native-base";
import { Button } from "react-native-paper";
import { Switch } from "react-native";
import { CampusRegion } from "../../../constants/buildingData";

describe("Bottom Menu Component", () => {
    let component;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation((init) => [init, setState]);
    
    test("renders correctly for indoor bottom menu", () => {
        const tree = renderer.create(<BottomMenu viewIndoor={true} isIndoor={true}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("renders correctly for previewDirections bottom menu", () => {
        const tree = renderer.create(<BottomMenu previewDirections={true} isIndoor={false}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("renders correctly for more details bottom menu", () => {
        const wrapper = shallow(<BottomMenu indoor={true} inDirections={false} />);
        wrapper.find(Icon).props().onPress();
    });

    test("renders correctly for preference menu bottom menu", () => {
        const navigation = { navigate: (param, defaultValue) => {
            return "PreferenceMenu";
        }};
        const wrapper = shallow(<BottomMenu indoor={true} inDirections={true} navigation={navigation} />);
        wrapper.find(Icon).props().onPress();
    });

    test("renders correctly for go back bottom menu", () => {
        const navigation = { goBack: (param, defaultValue) => {
            return "Map";
        }};
        const wrapper = shallow(<BottomMenu indoor={true} inDirections={true} navigation={navigation} />);
        wrapper.find(Button).props().onPress();
    });

    test("renders correctly for more details bottom menu", () => {
        const navigation = { navigate: (param, defaultValue) => {
            return "PreferenceMenu";
        }};
        const wrapper = shallow(<BottomMenu previewMode={true} navigation={navigation} />);
        wrapper.find(Icon).props().onPress();
    });

    test("renders correctly for more details bottom menu", () => {
        const navigation = { navigate: (param, defaultValue) => {
            return "Directions";
        }};
        const wrapper = shallow(<BottomMenu previewMode={true} navigation={navigation} />);
        wrapper.find(Button).props().onPress();
    });

    test("renders correctly for nearby bottom menu", () => {
        const navigation = { navigate: (param, defaultValue) => {
            return "NearbyInterest";
        }};
        const wrapper = shallow(<BottomMenu navigation={navigation} />);
        wrapper.find(Icon).props().onPress();
    });

    test("renders correctly for switch changing campus", () => {
        const navigation = { navigate: (param, defaultValue) => {
            return "NearbyInterest";
        }};
        const current = {
            animateToRegion:  (region) => {
                return CampusRegion.loyCoord;
            }
        };
        const mapReference = { current };

        const wrapper = shallow(<BottomMenu navigation={navigation} mapReference={mapReference}/>);
        wrapper.find(Icon).props().onPress();
        wrapper.find(Switch).at(0).simulate('valueChange')
    });
});