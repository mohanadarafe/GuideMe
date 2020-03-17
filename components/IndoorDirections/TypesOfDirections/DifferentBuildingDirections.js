import React from 'react';
import { Line, G } from 'react-native-svg';
import { ClassGraph } from '../../../constants/ClassGraph';
import { dijkstra, getFloorNumber, ConvertToHall8Floor } from '../Dijkstra/DijkstraAlgorithm';

export function DifferentBuildingDirections(props) {
    const rooms = props.rooms;
    const graph = ClassGraph();
    var goTo = props.from;
    var tempGoTo = props.from;

    if (props.from.includes(" ")) {
        tempGoTo = goTo;
        goTo = ConvertToHall8Floor(props.to);
    }

    if (props.to.includes(" ")) {
        tempGoTo = goTo;
        goTo = ConvertToHall8Floor(props.from);
    }

    const pathToElevator = dijkstra(graph, goTo, "elevator").path;
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
    if(props.floor == getFloorNumber(tempGoTo)) {
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
