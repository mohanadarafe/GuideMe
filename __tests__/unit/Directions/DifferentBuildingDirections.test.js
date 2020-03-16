import React from "react";
import renderer from "react-test-renderer";
import { DifferentFloorDirections, getFloorNumber } from "../../../components/IndoorDirections/TypesOfDirections/DifferentFloorDirections";
import { HallXCoordinates } from "../../../constants/HallXCoordinates";

describe("DifferentBuildingDirections component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<DifferentFloorDirections floor={8} rooms={HallXCoordinates()} from={"H835"} to={"MB3.125"}/>).toJSON();
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