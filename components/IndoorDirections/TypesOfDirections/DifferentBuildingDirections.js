import React from 'react';
import { Line, G } from 'react-native-svg';
import { ClassGraph } from '../../../constants/ClassGraph';

export function DifferentBuildingDirections(props) {
    const rooms = props.rooms;
    const graph = ClassGraph();

    const pathToElevator = dijkstra(graph, props.from, "elevator").path;
    const pathToClass = dijkstra(graph, "elevator", "exit").path;

    var getNextRoomElevator = (index) => {
        if (index < pathToElevator.length){
            return pathToElevator[++index];
        }
    }

    var getNextRoomClass = (index) => {
        if (index < pathToClass.length){
            return pathToClass[++index];
        }
    }

    const linesToElevator = [];
    pathToElevator.forEach((element, index) => {
        if (index < pathToElevator.length - 1) {
            linesToElevator.push({x1: rooms[element].nearestPoint.x, y1: rooms[element].nearestPoint.y, x2: rooms[getNextRoomElevator(index)].nearestPoint.x, y2: rooms[getNextRoomElevator(index)].nearestPoint.y})
        }
    });

    const linesToExit = [];
    pathToClass.forEach((element, index) => {
        if (index < pathToClass.length - 1) {
            linesToExit.push({x1: rooms[element].nearestPoint.x, y1: rooms[element].nearestPoint.y, x2: rooms[getNextRoomClass(index)].nearestPoint.x, y2: rooms[getNextRoomClass(index)].nearestPoint.y})
        }
    });
    

    // Go to elevator
    if(props.floor == getFloorNumber(props.from)) {
        return(
            <G>
                <Line x1={rooms[props.from].x} y1={rooms[props.from].y} x2={rooms[props.from].nearestPoint.x} y2={rooms[props.from].nearestPoint.y} stroke="blue" strokeWidth="5"/>
                {
                    linesToElevator.map(el => <Line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="blue" strokeWidth="5"/>)
                }
                <Line x1={rooms["elevator"].x} y1={rooms["elevator"].y} x2={rooms["elevator"].nearestPoint.x} y2={rooms["elevator"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
            </G>
        )
    } 
    if(props.floor == 1) {
        return(
            <G>
                <Line x1={rooms["elevator"].x} y1={rooms["elevator"].y} x2={rooms["elevator"].nearestPoint.x} y2={rooms["elevator"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
                {
                    linesToExit.map(el => <Line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="blue" strokeWidth="5"/>)
                }
            </G>
        )
    }
    return(
        <G></G>
    )
}

/**
 * Get the floor number of a specific classroom. 
 * Ex: H829 returns 8
 * @param {*} name | classroom name
 */
export const getFloorNumber = (name) => {
    if (name) {
        const num = name.match(/\d+/g).map(Number);

        if(num.length > 1) {
            return num[0].toString();
        }
        if (num.toString().length == 3) {
            return num.toString().charAt(0)
        }
        if (num.toString().length == 4) {
            return num.toString().charAt(0) + num.toString().charAt(1);
        }   
    }
}

const dijkstra = (graph, start, end) => {
    // track the lowest cost to reach each node
    let costs = {};
    costs[end] = "Infinity";
    costs = Object.assign(costs, graph[start]);

    // track paths
    const parents = {end: null};
    for (let child in graph[start]) {
        parents[child] = start;
    }

    const processed = [];
    let node = lowestCostNode(costs, processed);

    while (node) {
        let cost = costs[node];
        let children = graph[node];
        for (let n in children) {
            if (String(n) !== String(start)) {
                let newCost = cost + children[n];
                if (!costs[n] || costs[n] > newCost) {
                    costs[n] = newCost;
                    parents[n] = node;
                }
            }
        }
        processed.push(node);
        node = lowestCostNode(costs, processed);
    }

    let optimalPath = [end];
    let parent = parents[end];
    while (parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }
    optimalPath.reverse();

    const results = {
        distance: costs[end],
        path: optimalPath
    };

    return results;
};

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
