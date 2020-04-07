import React from 'react';
import { Line, G } from 'react-native-svg';
import { ClassGraph } from '../../../constants/ClassGraph';
import { Class9Graph } from '../../../constants/ClassGraph9';
import { dijkstra, getFloorNumber, ConvertToHall8Floor, getArrowCoordinates } from '../Dijkstra/DijkstraAlgorithm';
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
    if(props.floor == getFloorNumber(tempGoTo)) {
        const arrow = props.from.includes(" ") ? getArrowCoordinates(rooms[goTo].nearestPoint.x, rooms[goTo].nearestPoint.y, rooms[goTo].x, rooms[goTo].y) : getArrowCoordinates(rooms["elevator"].nearestPoint.x, rooms["elevator"].nearestPoint.y, rooms["elevator"].x, rooms["elevator"].y);
        rooms = props.floor == 9 ? Hall9Coordinates() : rooms;
        return(
            <G>
                <Line x1={rooms[goTo].x} y1={rooms[goTo].y} x2={rooms[goTo].nearestPoint.x} y2={rooms[goTo].nearestPoint.y} stroke="blue" strokeWidth="5"/>
                {
                    linesToElevator.map(el => <Line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="blue" strokeWidth="5"/>)
                }
                <Line x1={rooms["elevator"].x} y1={rooms["elevator"].y} x2={rooms["elevator"].nearestPoint.x} y2={rooms["elevator"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
                <Line x1={arrow.x3} y1={arrow.y3} x2={props.from.includes(" ") ? rooms[goTo].x : rooms["elevator"].x} y2={props.from.includes(" ") ? rooms[goTo].y : rooms["elevator"].y} stroke="blue" strokeWidth="5"/>
                <Line x1={arrow.x4} y1={arrow.y4} x2={props.from.includes(" ") ? rooms[goTo].x : rooms["elevator"].x} y2={props.from.includes(" ") ? rooms[goTo].y :rooms["elevator"].y} stroke="blue" strokeWidth="5"/>
            </G>
        )
    } 
    if(props.floor == 1) {
        rooms = props.rooms;
        const arrow = !props.from.includes(" ") ? getArrowCoordinates(rooms["exit"].nearestPoint.x, rooms["exit"].nearestPoint.y, rooms["exit"].x, rooms["exit"].y) : getArrowCoordinates(rooms["elevator"].nearestPoint.x, rooms["elevator"].nearestPoint.y, rooms["elevator"].x, rooms["elevator"].y);
        return(
            <G>
                <Line x1={rooms["elevator"].x} y1={rooms["elevator"].y} x2={rooms["elevator"].nearestPoint.x} y2={rooms["elevator"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
                {
                    linesToExit.map(el => <Line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="blue" strokeWidth="5"/>)
                }
                <Line x1={rooms["exit"].x} y1={rooms["exit"].y} x2={rooms["exit"].nearestPoint.x} y2={rooms["exit"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
                <Line x1={arrow.x3} y1={arrow.y3} x2={!props.from.includes(" ") ? rooms["exit"].x : rooms["elevator"].x} y2={!props.from.includes(" ") ? rooms["exit"].y : rooms["elevator"].y} stroke="blue" strokeWidth="5"/>
                <Line x1={arrow.x4} y1={arrow.y4} x2={!props.from.includes(" ") ? rooms["exit"].x : rooms["elevator"].x} y2={!props.from.includes(" ") ? rooms["exit"].y : rooms["elevator"].y} stroke="blue" strokeWidth="5"/>
            </G>
        )
    }
    return(
        <G></G>
    )
}
