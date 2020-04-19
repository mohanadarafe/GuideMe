import React from "react";
import renderer from "react-test-renderer";
import { DifferentBuildingDirections } from "../../../../components/IndoorDirections/TypesOfDirections/DifferentBuildingDirections";
import { HallXCoordinates } from "../../../../constants/HallXCoordinates";
import { dijkstra } from "../../../../components/IndoorDirections/Dijkstra/DijkstraAlgorithm";
import { ClassGraph } from "../../../../constants/ClassGraph";

describe("DifferentBuildingDirections component", () => {
    test("renders correctly for direction to exit", () => {
        const tree = renderer.create(<DifferentBuildingDirections floor={1} rooms={HallXCoordinates()} from={"EV Building"} to={"H835"}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("renders correctly for direction to class", () => {
        const tree = renderer.create(<DifferentBuildingDirections floor={8} rooms={HallXCoordinates()} from={"H835"} to={"EV Building"}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // The following test ensures the user is guided from a classroom
    // to the exit of the building.
    test("dijkstra between buildings", () => {
        const testCases = [
            {from: "H863", to: "elevator"},
            {from: "elevator", to: "exit"}
        ]
        const results = [
            ["H863", "H861", "H859", "checkpoint3", "stairs_SE", "elevator"],
            ["elevator", "checkpoint4", "H806", "checkpoint1", "exit"]
        ]

        testCases.forEach((element, index) => {
            const path = dijkstra(ClassGraph(), element.from, element.to).path;
            expect(path).toEqual(results[index]);
        });
    })
}); 
