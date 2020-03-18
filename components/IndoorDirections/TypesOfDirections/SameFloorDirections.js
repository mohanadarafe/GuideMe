import React from 'react';
import { Line, G } from 'react-native-svg';
import { ClassGraph } from '../../../constants/ClassGraph';
import { dijkstra, getFloorNumber, ConvertToHall8Floor } from '../Dijkstra/DijkstraAlgorithm';

export function SameFloorDirections(props) {
    const rooms = props.rooms;
    const graph = ClassGraph();
    const from = ConvertToHall8Floor(props.from);
    const to = ConvertToHall8Floor(props.to);
    const route = dijkstra(graph, from, to).path;

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
                <Line x1={rooms[from].x} y1={rooms[from].y} x2={rooms[from].nearestPoint.x} y2={rooms[from].nearestPoint.y} stroke="blue" strokeWidth="5"/>
                {
                    lines.map(el => <Line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="blue" strokeWidth="5"/>)
                }
                <Line x1={rooms[to].x} y1={rooms[to].y} x2={rooms[to].nearestPoint.x} y2={rooms[to].nearestPoint.y} stroke="blue" strokeWidth="5"/>
            </G>
        )
    }
    return(<G></G>);
}