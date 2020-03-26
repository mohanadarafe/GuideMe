import React from "react";
import { IndoorScenario, whichPathToTake } from "../../../components/IndoorDirections/IndoorScenario";
import renderer from "react-test-renderer";

describe("IndoorScenario component", () => {
    test("renders same floor correctly", () => {
        const tree = renderer.create(<IndoorScenario from={"H825"} to={"H801"} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("renders different floor correctly", () => {
        const tree = renderer.create(<IndoorScenario from={"H825"} to={"H501"} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test("renders different building correctly", () => {
        const tree = renderer.create(<IndoorScenario from={"H825"} to={"Grey Nuns Annex"} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test("returns correct algorithm path", () => {
        const testCases = [
            {from: "H820", to: "H720"},
            {from: "H1025", to: "H155"},
            {from: "H562", to: "H513"},
            {from: "H562", to: "MB3.124"},
            {from: "H1025", to: "H1157"},
            {from: "H961_7", to: "H906"},
            {from: "H961_7", to: "H801"},
            {from: "H961_7", to: "Grey Nuns Annex"},
            {from: "EN Annex", to: "Grey Nuns Annex"},
        ]
        const results = [
            "DIFFERENT_FLOOR",
            "DIFFERENT_FLOOR",
            "SAME_FLOOR",
            "DIFFERENT_BUILDING",
            "DIFFERENT_FLOOR",
            "SAME_FLOOR",
            "DIFFERENT_FLOOR",
            "DIFFERENT_BUILDING",
            "NOT_INDOOR"
        ]
        testCases.forEach((element, index) => {
            expect(whichPathToTake(element.from, element.to)).toEqual(results[index])
        });
    })
});
