import React from "react";
import renderer from "react-test-renderer";
import { HallXCoordinates } from "../../../constants/HallXCoordinates";
import { SameFloorDirections } from "../../../components/IndoorDirections/TypesOfDirections/SameFloorDirections";
import { getFloorNumber, changeClassName } from "../../../components/IndoorDirections/Dijkstra/DijkstraAlgorithm";

describe("SameFloorDirections component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<SameFloorDirections floor={8} rooms={HallXCoordinates()} from={"H835"} to={"H835"}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("returns correct floor from classroom", () => {
        const testCases = [
            "H829",
            "H531",
            "H123",
            "H1055",
            "H1347",
            "MB3.125",
            "MB12.246",
        ]
        const results = [
            "8",
            "5",
            "1",
            "10",
            "13",
            "3",
            "12"
        ]
        testCases.forEach((element, index) => {
            expect(getFloorNumber(element)).toEqual(results[index])
        });
    })
});
