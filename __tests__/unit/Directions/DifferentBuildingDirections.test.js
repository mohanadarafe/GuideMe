import React from "react";
import renderer from "react-test-renderer";
import { DifferentFloorDirections } from "../../../components/IndoorDirections/TypesOfDirections/DifferentFloorDirections";
import { HallXCoordinates } from "../../../constants/HallXCoordinates";
import { getFloorNumber, ConvertToHall8Floor, dijkstra } from "../../../components/IndoorDirections/Dijkstra/DijkstraAlgorithm";
import { ClassGraph } from "../../../constants/ClassGraph";

describe("DifferentBuildingDirections component", () => {
    test("renders correctly", () => {
        const tree = renderer.create(<DifferentFloorDirections floor={8} rooms={HallXCoordinates()} from={"H835"} to={"MB3.125"}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("dijkstra behaves well", () => {
        const testCases = [
            {from: "H863", to: "elevator"},
        ]
        const results = [
            "H863", "H861", "H859", "elevator"
        ]

        testCases.forEach(element => {
            const path = dijkstra(ClassGraph(), element.from, element.to).path;
            expect(path).toEqual(results);
        });
    })

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

    test("returns correct class name", () => {
        const testCases = [
            "H829",
            "H531",
            "H123",
            "H1055",
            "H1347",
        ]
        const results = [
            "H829",
            "H831",
            "H823",
            "H855",
            "H847",
        ]
        testCases.forEach((element, index) => {
            expect(ConvertToHall8Floor(element)).toEqual(results[index])
        });
    })
}); 
