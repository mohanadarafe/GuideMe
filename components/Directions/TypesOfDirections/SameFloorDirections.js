import React from 'react';
import { Line, G } from 'react-native-svg';

export function SameFloorDirections(props) {
    const rooms = props.rooms;
    const graph = props.graph;
    const route = dijkstra(graph, props.from, props.to).path;

    var getNextRoom = (index) => {
        if (index < route.length){
            return route[++index];
        }
    }

    const lines = [];
    route.forEach((element, index) => {
        if (index < route.length - 1) {
            lines.push({x1: rooms[element].nearestPoint.x, y1: rooms[element].nearestPoint.y, x2: rooms[getNextRoom(index)].nearestPoint.x, y2: rooms[getNextRoom(index)].nearestPoint.y})
        }
    });

    if(props.floor == getFloorNumber(props.to)) {
        return(
            <G>
                <Line x1={rooms[props.from].x} y1={rooms[props.from].y} x2={rooms[props.from].nearestPoint.x} y2={rooms[props.from].nearestPoint.y} stroke="blue" strokeWidth="5"/>
                {
                    lines.map(el => <Line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="blue" strokeWidth="5"/>)
                }
                <Line x1={rooms[props.to].x} y1={rooms[props.to].y} x2={rooms[props.to].nearestPoint.x} y2={rooms[props.to].nearestPoint.y} stroke="blue" strokeWidth="5"/>
            </G>
        )
    }
    return(<G></G>);
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

const getFloorNumber = (name) => {
    const num = name.match(/\d+/g).map(Number);
    return num.toString().charAt(0);
}