import React from "react";
import { IndoorScenario, whichPathToTake } from "../../../components/IndoorDirections/IndoorScenario";
import renderer from "react-test-renderer";

describe("IndoorScenario component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<IndoorScenario />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("returns correct algorithm path", () => {
        const testCases = [
            {from: "H820", to: "H720"},
            {from: "H1025", to: "H155"},
            {from: "H562", to: "H513"},
            {from: "H562", to: "MB3.124"},
            {from: "H1025", to: "H1157"},
        ]
        const results = [
            "DIFFERENT_FLOOR",
            "DIFFERENT_FLOOR",
            "SAME_FLOOR",
            "DIFFERENT_BUILDING",
            "DIFFERENT_FLOOR",
        ]
        testCases.forEach((element, index) => {
            expect(whichPathToTake(element.from, element.to)).toEqual(results[index])
        });
    })
});