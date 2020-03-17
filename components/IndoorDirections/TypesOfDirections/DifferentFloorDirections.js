import React from 'react';
import { Line, G } from 'react-native-svg';
import { ClassGraph } from '../../../constants/ClassGraph';
import { dijkstra, getFloorNumber, ConvertToHall8Floor } from '../Dijkstra/DijkstraAlgorithm';

export function DifferentFloorDirections(props) {
    const rooms = props.rooms;
    const graph = ClassGraph();

    const pathToElevator = dijkstra(graph, ConvertToHall8Floor(props.from), "elevator").path;
    const pathToClass = dijkstra(graph, "elevator", ConvertToHall8Floor(props.to)).path;

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
        const tempClassName = ConvertToHall8Floor(props.from);
        return(
            <G>
                <Line x1={rooms[tempClassName.toString()].x} y1={rooms[tempClassName.toString()].y} x2={rooms[tempClassName.toString()].nearestPoint.x} y2={rooms[tempClassName.toString()].nearestPoint.y} stroke="blue" strokeWidth="5"/>
                {
                    linesToElevator.map(el => <Line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="blue" strokeWidth="5"/>)
                }
                <Line x1={rooms["elevator"].x} y1={rooms["elevator"].y} x2={rooms["elevator"].nearestPoint.x} y2={rooms["elevator"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
            </G>
        )
    } 
    if(props.floor == getFloorNumber(props.to)) {
        const tempClassName = ConvertToHall8Floor(props.to);
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
