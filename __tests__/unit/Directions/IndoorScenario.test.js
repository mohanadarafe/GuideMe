import React from "react";
import { IndoorScenario, whichPathToTake } from "../../../components/IndoorDirections/IndoorScenario";
import renderer from "react-test-renderer";
import { initialFloor } from "../../../components/FloorMenu";

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

    test("renders hall to loyola same floor correctly", () => {
        const tree = renderer.create(<IndoorScenario from={"H825"} to={"VL103"} building={"VL Building"} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test("renders hall to loyola different floor correctly", () => {
        const tree = renderer.create(<IndoorScenario from={"H825"} to={"VL103"} building={"Hall Building"} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test("renders loyola to hall same floor correctly", () => {
        const tree = renderer.create(<IndoorScenario from={"VL103"} to={"H920"} building={"VL Building"} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test("renders loyola to hall different floor correctly", () => {
        const tree = renderer.create(<IndoorScenario from={"VL103"} to={"H937"} building={"Hall Building"} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test("renders POI correctly", () => {
        const tree = renderer.create(<IndoorScenario from={"H825"} to={"Water Fountain"} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test("renders not indoor correctly", () => {
        const tree = renderer.create(<IndoorScenario from={"Grey Nuns"} to={"EV Building"} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test("directions starts at correct initial floor", () => {
        const testCases = [
            {from: "H820", to: "H720"},
            {from: "H1025", to: "H155"},
            {from: "H562", to: "H513"},
            {from: "H937", to: "VL102"},
            {from: "H961_7", to: "Grey Nuns Annex"},
            {from: "Hall Building", to: "H914"}
        ]
        const results = [
            "8",
            "10",
            "5",
            1,
            "9",
            1
        ]
        testCases.forEach((element, index) => {
            expect(initialFloor(element.from, element.to)).toEqual(results[index])
        });
    })

    test("returns correct algorithm path", () => {
        const testCases = [
            {from: "H820", to: "H720"},
            {from: "H1025", to: "H155"},
            {from: "H562", to: "H513"},
            {from: "H1025", to: "H1157"},
            {from: "H961_7", to: "H906"},
            {from: "H961_7", to: "H801"},
            {from: "VL102", to: "H801"},
            {from: "H937", to: "VL102"},
            {from: "H961_7", to: "Grey Nuns Annex"},
            {from: "EN Annex", to: "Grey Nuns Annex"},
            {from: "Hall Building", to: "H914"},
            {from: "VL103", to: "H914"},
        ]
        const results = [
            "DIFFERENT_FLOOR",
            "DIFFERENT_FLOOR",
            "SAME_FLOOR",
            "DIFFERENT_FLOOR",
            "SAME_FLOOR",
            "DIFFERENT_FLOOR",
            "DIFFERENT_CAMPUS",
            "DIFFERENT_CAMPUS",
            "DIFFERENT_BUILDING",
            "NOT_INDOOR",
            "DIFFERENT_BUILDING",
            "DIFFERENT_CAMPUS"
        ]
        testCases.forEach((element, index) => {
            expect(whichPathToTake(element.from, element.to)).toEqual(results[index])
        });
    })
});
