import React from "react";
import renderer from "react-test-renderer";
import { HallXCoordinates } from "../../../constants/HallXCoordinates";
import { SameFloorDirections } from "../../../components/IndoorDirections/TypesOfDirections/SameFloorDirections";
import { getFloorNumber, dijkstra } from "../../../components/IndoorDirections/Dijkstra/DijkstraAlgorithm";
import { ClassGraph } from "../../../constants/ClassGraph";
import { Class9Graph } from "../../../constants/ClassGraph9";

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
            "Grey Nuns Annex",
        ]
        const results = [
            "8",
            "5",
            "1",
            "10",
            "13",
            "3",
            "12",
            "Grey Nuns Annex",
        ]
        testCases.forEach((element, index) => {
            expect(getFloorNumber(element)).toEqual(results[index])
        });
    })

    // The following test ensures the user is guided from a classroom
    // to another classroom in the same floor
    test("dijkstra within the same floor", () => {
        const testCases = [
            {from: "H863", to: "H801"},
            {from: "H803", to: "H827"},
            {from: "H937", to: "H990"},
        ]
        const results = [
            ["H863", "H801"],
            ["H803", "H805", "H807", "checkpoint1", "H811", "H813", "H815", "H817", "H819", "H821", "H823", "H825", "H827"],
            ["H937", "H985", "checkpoint3", "checkpoint4", "checkpoint7", "H914", "checkpoint1", "H909","H911","H913","H990"]
        ]

        testCases.forEach((element, index) => {
            const path = dijkstra(getFloorNumber(element.from) == 9 ? Class9Graph() : ClassGraph(), element.from, element.to).path;
            expect(path).toEqual(results[index]);
        });
    })
});
