import React, { useEffect } from 'react';
import { Line, G } from 'react-native-svg';
import { HallXCoordinates } from '../../constants/HallXCoordinates';

const rooms = HallXCoordinates();

export function DirectionPathFinding() {
    findPath(rooms["H821"], rooms["H803"]);
    return(
        <G>
            <Line x1={rooms["H821"].x} y1={rooms["H821"].y} x2={rooms["H821"].nearestPoint.x} y2={rooms["H821"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
            {
                path.map(el => <Line x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke="blue" strokeWidth="5"/>)
            }
            <Line x1={rooms["H803"].x} y1={rooms["H803"].y} x2={rooms["H803"].nearestPoint.x} y2={rooms["H803"].nearestPoint.y} stroke="blue" strokeWidth="5"/>
        </G>
    )
}

var path = [];
var visited = [];
var done = false;
function findPath(start, end) {
    if (start.nearestPoint.x == end.nearestPoint.x && start.nearestPoint.y == end.nearestPoint.y) {
        done = true;
        return;
    } else {
        if(!done) {
            if (!visited.includes(start)) {
                visited.push(start);
            }
            start.next.forEach(next => {
                if (!visited.includes(rooms[next])) {
                    path.push({x1: start.nearestPoint.x, y1: start.nearestPoint.y, x2: rooms[next].nearestPoint.x,y2: rooms[next].nearestPoint.y})
                    return findPath(rooms[next], end);
                }
            });
            start.prev.forEach(prev => {
                if (!visited.includes(prev)) {
                    path.push({x1: start.nearestPoint.x, y1: start.nearestPoint.y, x2: rooms[prev].nearestPoint.x,y2: rooms[prev].nearestPoint.y})
                    return findPath(rooms[prev], end);
                }
            });
        }
    }
}
