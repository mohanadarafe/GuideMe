import React from 'react';
import { Line, G } from 'react-native-svg';
import { ClassGraph } from '../../../constants/ClassGraph';

export function DifferentFloorDirections(props) {
    const rooms = props.rooms;
    const graph = ClassGraph();

    const pathToElevator = dijkstra(graph, props.from, "elevator").path;
    const pathToClass = dijkstra(graph, "elevator", changeClassName(props.to)).path;

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

    const linesToClass = [];
    pathToClass.forEach((element, index) => {
        if (index < pathToClass.length - 1) {
            linesToClass.push({x1: rooms[element].nearestPoint.x, y1: rooms[element].nearestPoint.y, x2: rooms[getNextRoomClass(index)].nearestPoint.x, y2: rooms[getNextRoomClass(index)].nearestPoint.y})
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
    if(props.floor == getFloorNumber(props.to)) {
        const tempClassName = changeClassName(props.to);
        return(
            <G>
                <Line x1={rooms["elevator"].x} y1={rooms["elevator"].y} x2={rooms["elevator"].nearestPoint.x} y2={rooms["elevator"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
                {
                    linesToClass.map(el => <Line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="blue" strokeWidth="5"/>)
                }
                <Line x1={rooms[tempClassName.toString()].x} y1={rooms[tempClassName.toString()].y} x2={rooms[tempClassName.toString()].nearestPoint.x} y2={rooms[tempClassName.toString()].nearestPoint.y} stroke="blue" strokeWidth="5"/>
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

/**
 * Only used to fetch information from data
 * 
 * Change the classroom name to H8XX because our
 * data file stores uses associative arrays with H8XX as the key names. 
 * Ex: H529 returns H829
 * @param {*} name | classroom name
 */
export const changeClassName = (name) => {
    if (name) {
        const num = name.match(/\d+/g).map(Number);
        const numToString = num.toString();
        if (numToString.length == 3) {
            return name.replace(numToString.charAt(0), "8");
        }
        if (numToString.length == 4) {
            return name.replace(numToString.substring(0,2), "8");
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
