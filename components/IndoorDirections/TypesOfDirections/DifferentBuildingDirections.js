import React from 'react';
import { Line, G } from 'react-native-svg';
import { ClassGraph } from '../../../constants/ClassGraph';
import { Class9Graph } from '../../../constants/ClassGraph9';
import { dijkstra, getFloorNumber, ConvertToHall8Floor } from '../Dijkstra/DijkstraAlgorithm';
import { Hall9Coordinates } from '../../../constants/Hall9Coordinates';

export function DifferentBuildingDirections(props) {
    var floorFrom;
    var floorTo;
    var rooms = props.rooms;
    var graph = ClassGraph(); 
    var goTo = props.from;
    var tempGoTo = props.from;

    if (props.from.includes(" ")) {
        floorTo = getFloorNumber(props.to);
        tempGoTo = props.to;
        goTo = floorTo == 9 ? props.to : ConvertToHall8Floor(props.to);
    }

    if (props.to.includes(" ")) {
        floorFrom = getFloorNumber(props.from);
        tempGoTo = props.from;
        goTo = floorFrom == 9 ? props.from : ConvertToHall8Floor(props.from);
    }

    const pathToElevator = dijkstra((floorFrom == 9 || floorTo == 9) ? Class9Graph() : graph, goTo, "elevator").path;
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

    const linesToExit = [];
    pathToClass.forEach((element, index) => {
        if (index < pathToClass.length - 1) {
            linesToExit.push({x1: rooms[element].nearestPoint.x, y1: rooms[element].nearestPoint.y, x2: rooms[getNextRoomClass(index)].nearestPoint.x, y2: rooms[getNextRoomClass(index)].nearestPoint.y})
        }
    });

    rooms = (floorFrom == 9 || floorTo == 9) ? Hall9Coordinates() : rooms;
    const linesToElevator = [];
    pathToElevator.forEach((element, index) => {
        if (index < pathToElevator.length - 1) {
            linesToElevator.push({x1: rooms[element].nearestPoint.x, y1: rooms[element].nearestPoint.y, x2: rooms[getNextRoomElevator(index)].nearestPoint.x, y2: rooms[getNextRoomElevator(index)].nearestPoint.y})
        }
    });

    // Go to elevator
    if(props.floor == getFloorNumber(goTo)) {
        rooms = props.floor == 9 ? Hall9Coordinates() : rooms;
        return(
            <G>
                <Line x1={rooms[goTo].x} y1={rooms[goTo].y} x2={rooms[goTo].nearestPoint.x} y2={rooms[goTo].nearestPoint.y} stroke="blue" strokeWidth="5"/>
                {
                    linesToElevator.map(el => <Line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="blue" strokeWidth="5"/>)
                }
                <Line x1={rooms["elevator"].x} y1={rooms["elevator"].y} x2={rooms["elevator"].nearestPoint.x} y2={rooms["elevator"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
            </G>
        )
    } 
    if(props.floor == 1) {
        rooms = props.rooms;
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
