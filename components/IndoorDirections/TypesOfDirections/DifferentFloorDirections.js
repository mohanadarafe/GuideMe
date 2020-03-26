import React from 'react';
import { Line, G } from 'react-native-svg';
import { ClassGraph } from '../../../constants/ClassGraph';
import { dijkstra, getFloorNumber, ConvertToHall8Floor } from '../Dijkstra/DijkstraAlgorithm';
import { Hall9Coordinates } from '../../../constants/Hall9Coordinates';
import { Class9Graph } from '../../../constants/ClassGraph9';

export function DifferentFloorDirections(props) {
    const floorFrom = getFloorNumber(props.from);
    const floorTo = getFloorNumber(props.to);
    const graph = ClassGraph();

    const pathToElevator = dijkstra(floorFrom == 9 ? Class9Graph() : graph, floorFrom == 9 ? props.from : ConvertToHall8Floor(props.from), "elevator").path;
    const pathToClass = dijkstra(floorTo == 9 ? Class9Graph() : graph, "elevator", floorTo == 9 ? props.to : ConvertToHall8Floor(props.to)).path;

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

    var rooms = floorFrom == 9 ? Hall9Coordinates() : props.rooms;
    const linesToElevator = [];
    pathToElevator.forEach((element, index) => {
        if (index < pathToElevator.length - 1) {
            linesToElevator.push({x1: rooms[element].nearestPoint.x, y1: rooms[element].nearestPoint.y, x2: rooms[getNextRoomElevator(index)].nearestPoint.x, y2: rooms[getNextRoomElevator(index)].nearestPoint.y})
        }
    });

    rooms = floorTo == 9 ? Hall9Coordinates() : props.rooms;
    const linesToClass = [];
    pathToClass.forEach((element, index) => {
        if (index < pathToClass.length - 1) {
            linesToClass.push({x1: rooms[element].nearestPoint.x, y1: rooms[element].nearestPoint.y, x2: rooms[getNextRoomClass(index)].nearestPoint.x, y2: rooms[getNextRoomClass(index)].nearestPoint.y})
        }
    });
    

    // Go to elevator
    if(props.floor == getFloorNumber(props.from)) {
        rooms = floorFrom == 9 ? Hall9Coordinates() : props.rooms;
        var className = ConvertToHall8Floor(props.from.toString());
        return(
            <G>
                <Line x1={rooms[className].x} y1={rooms[className].y} x2={rooms[className].nearestPoint.x} y2={rooms[className].nearestPoint.y} stroke="blue" strokeWidth="5"/>
                {
                    linesToElevator.map(el => <Line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="blue" strokeWidth="5"/>)
                }
                <Line x1={rooms["elevator"].x} y1={rooms["elevator"].y} x2={rooms["elevator"].nearestPoint.x} y2={rooms["elevator"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
            </G>
        )
    } 
    if(props.floor == getFloorNumber(props.to)) {
        rooms = floorTo == 9 ? Hall9Coordinates() : props.rooms;
        var className = ConvertToHall8Floor(props.to.toString());
        return(
            <G>
                <Line x1={rooms["elevator"].x} y1={rooms["elevator"].y} x2={rooms["elevator"].nearestPoint.x} y2={rooms["elevator"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
                {
                    linesToClass.map(el => <Line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="blue" strokeWidth="5"/>)
                }
                <Line x1={rooms[className].x} y1={rooms[className].y} x2={rooms[className].nearestPoint.x} y2={rooms[className].nearestPoint.y} stroke="blue" strokeWidth="5"/>
            </G>
        )
    }
    return(
        <G></G>
    )
}
