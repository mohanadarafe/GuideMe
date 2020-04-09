import React from "react";
import renderer from "react-test-renderer";
import { HallXCoordinates } from "../../../constants/HallXCoordinates";
import { SameFloorDirections } from "../../../components/IndoorDirections/TypesOfDirections/SameFloorDirections";
import { getFloorNumber, dijkstra, shortestPathToInterest } from "../../../components/IndoorDirections/Dijkstra/DijkstraAlgorithm";
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

    test("get path to closest water fountain", () => {
        const graph = ClassGraph();

        const testCases = [
            {from: "H837", to: "Men's Washroom", graph: graph},
            {from: "H820", to: "Women's Washroom", graph: graph},
            {from: "H815", to: "Water Fountain", graph: graph},
            {from: "H845", to: "Water Fountain", graph: graph},
        ]
        const results = [
            {route: ["H837", "checkpoint2", "escalator", "checkpoint4", "H806", "checkpoint1", "men_washroom"], to: "men_washroom"},
            {route: ["H820", "H825", "H823", "H821", "H819", "H817", "H815", "H813", "H811", "checkpoint1", "H807", "H805", "women_washroom"], to: "women_washroom"},
            {route: ["H815", "H813", "stairs_SW", "water_foutain_S"], to: "water_foutain_S"},
            {route: ["H845", "H843", "H841", "checkpoint2", "H832", "stairs_NW", "water_foutain_N"], to: "water_foutain_N"}
        ]
        testCases.forEach((element, index) => {
            expect(shortestPathToInterest(element.graph, element.from, element.to)).toEqual(results[index]); 
        });
    })

    // The following test ensures the user is guided from a classroom
    // to another classroom in the same floor
    test("dijkstra within the same floor", () => {
        const testCases = [
            {from: "H863", to: "H801"},
            {from: "H803", to: "H827"},
            {from: "H937", to: "H911"},
        ]
        const results = [
            ["H863", "H801"],
            ["H803", "H805", "H807", "checkpoint1", "H811", "H813", "H815", "H817", "H819", "H821", "H823", "H825", "H827"],
            ["H937", "checkpoint3", "checkpoint4", "escalator", "checkpoint7", "H980", "H914","checkpoint1", "men_washroom", "H911"]
        ]

        testCases.forEach((element, index) => {
            const path = dijkstra(getFloorNumber(element.from) == 9 ? Class9Graph() : ClassGraph(), element.from, element.to).path;
            expect(path).toEqual(results[index]);
        });
    })
});
