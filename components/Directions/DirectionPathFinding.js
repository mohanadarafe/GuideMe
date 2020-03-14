import React, { useEffect } from 'react';
import { Line, G } from 'react-native-svg';
import { HallXCoordinates } from '../../constants/HallXCoordinates';

const rooms = HallXCoordinates();

export function DirectionPathFinding() {
    const lines = [];
    const route = dijkstra(graph, "H838", "H823").path;

    var getNextRoom = (index) => {
        if (index < route.length){
            return route[++index];
        }
    }

    route.forEach((element, index) => {
        if (index < route.length - 1) {
            lines.push({x1: rooms[element].nearestPoint.x, y1: rooms[element].nearestPoint.y, x2: rooms[getNextRoom(index)].nearestPoint.x, y2: rooms[getNextRoom(index)].nearestPoint.y})
        }
    });

    return(
        <G>
            <Line x1={rooms["H838"].x} y1={rooms["H838"].y} x2={rooms["H838"].nearestPoint.x} y2={rooms["H838"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
            {
                lines.map(el => <Line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="blue" strokeWidth="5"/>)
            }
            <Line x1={rooms["H823"].x} y1={rooms["H823"].y} x2={rooms["H823"].nearestPoint.x} y2={rooms["H823"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
        </G>
    )
}

const graph = {
    H801: {H803: 1, H863: 1},
    H803: {H805: 1, H801: 1},
    H805: {H807: 1, H803: 1},
    H807: {checkpoint1: 1, H805: 1},
    checkpoint1: {H806: 1, H811: 1, H807: 1},
    H806: {checkpoint4: 1, checkpoint1: 1},
    H811: {H813: 1, checkpoint1: 1}, 
    H813: {H815: 1, H811: 1},
    H815: {H817: 1, H813: 1},
    H817: {H819: 1, H815: 1},
    H819: {H821: 1, H817: 1},
    H821: {H823: 1, H886: 0.5, H819: 1},
    H823: {H825: 1, H821: 1},
    H825: {H827: 1, H823: 1},
    H827: {H828: 1, H822: 0.5, H825: 1},
    H828: {H829: 1, H827: 1, H822: 1},
    H829: {H831: 0.5, H828: 1},
    H831: {H833: 1, H829: 1},
    H833: {H835: 1, H831: 1},
    H835: {H837: 1, H833: 1},
    H837: {checkpoint2: 1, H835: 1},
    checkpoint2: {H841: 1, H838: 1, H837: 1, H832: 1},
    H841: {H843: 1, checkpoint2: 1},
    H843: {H845: 1, H841: 1},
    H845: {H847: 1, H843: 1},
    H847: {H849: 1, H845: 1},
    H849: {H851: 1, H847: 1},
    H851: {H853: 1, H849: 1},
    H853: {H851: 1, H855: 1, H852: 0.5},
    H855: {H857: 1, H853: 1, H854: 0.5},
    H857: {H859: 1, H860: 0.5, H855: 1},
    H859: {checkpoint3: 1, H861: 1, H857: 1},
    H861: {H863: 1, H859: 1},
    H863: {H865: 1, H867: 1, H801: 1, H861: 1},
    checkpoint3: {H862: 1},
    H862: {checkpoint4: 2, checkpoint3: 1},
    checkpoint4: {H820: 1, H862: 1, H806: 1},
    H820: {checkpoint4: 1, H832: 1},
    H832: {H838: 1},
    H838: {checkpoint2: 1, H820: 1}
};


function log(message) {
    const logging = false;
    if (logging) {
        console.log(message);
    }
}

const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
};

// function that returns the minimum cost and path to reach Finish
const dijkstra = (graph, startNodeName, endNodeName) => {

    // track the lowest cost to reach each node
    let costs = {};
    costs[endNodeName] = "Infinity";
    costs = Object.assign(costs, graph[startNodeName]);

    // track paths
    const parents = {endNodeName: null};
    for (let child in graph[startNodeName]) {
        parents[child] = startNodeName;
    }

    // track nodes that have already been processed
    const processed = [];

    let node = lowestCostNode(costs, processed);

    while (node) {
        let cost = costs[node];
        let children = graph[node];
        for (let n in children) {
            if (String(n) === String(startNodeName)) {
                log("WE DON'T GO BACK TO START");
            } else {
                log("StartNodeName: " + startNodeName);
                log("Evaluating cost to node " + n + " (looking from node " + node + ")");
                log("Last Cost: " + costs[n]);
                let newCost = cost + children[n];
                log("New Cost: " + newCost);
                if (!costs[n] || costs[n] > newCost) {
                    costs[n] = newCost;
                    parents[n] = node;
                    log("Updated cost und parents");
                } else {
                    log("A shorter path already exists");
                }
            }
        }
        processed.push(node);
        node = lowestCostNode(costs, processed);
    }

    let optimalPath = [endNodeName];
    let parent = parents[endNodeName];
    while (parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }
    optimalPath.reverse();

    const results = {
        distance: costs[endNodeName],
        path: optimalPath
    };

    return results;
};