import React from "react";
import renderer from "react-test-renderer";
import { DifferentFloorDirections } from "../../../components/IndoorDirections/TypesOfDirections/DifferentFloorDirections";
import { HallXCoordinates } from "../../../constants/HallXCoordinates";
import { getFloorNumber, ConvertToHall8Floor, dijkstra } from "../../../components/IndoorDirections/Dijkstra/DijkstraAlgorithm";
import { Class9Graph } from "../../../constants/ClassGraph9";
import { ClassGraph } from "../../../constants/ClassGraph";

describe("DifferentFloorDirections component", () => {
    test("renders correctly for from floor", () => {
        const tree = renderer.create(<DifferentFloorDirections floor={8} rooms={HallXCoordinates()} from={"H835"} to={"H535"}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("renders correctly for to floor", () => {
        const tree = renderer.create(<DifferentFloorDirections floor={5} rooms={HallXCoordinates()} from={"H835"} to={"H535"}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("returns correct class name", () => {
        const testCases = [
            "H829",
            "H531",
            "H123",
            "H1055",
            "H1347",
            "H920",
            "H937-1",
            "exit"
        ]
        const results = [
            "H829",
            "H831",
            "H823",
            "H855",
            "H847",
            "H920",
            "H937-1",
            "exit"
        ]
        testCases.forEach((element, index) => {
            expect(ConvertToHall8Floor(element)).toEqual(results[index])
        });
    })

    // The following test ensures the user is guided from a classroom
    // to another classroom in a different floor
    test("dijkstra in different floors", () => {
        const testCases = [
            {from: "H863", to: "elevator"},
            {from: "elevator", to: "H907"}
        ]
        const results = [
            ["H863", "H861", "H859", "checkpoint3", "stairs_SE", "elevator"],
            ["elevator", "checkpoint7", "H980", "H914", "checkpoint1", "H907"],
        ]

        testCases.forEach((element, index) => {
            var isFloor9 = getFloorNumber(element.from) == 9 || getFloorNumber(element.to) == 9;
            const path = dijkstra(isFloor9 ? Class9Graph() : ClassGraph(), element.from, element.to).path;
            expect(path).toEqual(results[index]);
        });
    })
});