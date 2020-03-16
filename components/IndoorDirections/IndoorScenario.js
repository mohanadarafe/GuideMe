import React, { useEffect } from 'react';
import { G } from 'react-native-svg';
import { HallXCoordinates } from '../../constants/HallXCoordinates';
import { ClassGraph } from '../../constants/ClassGraph';
import { DifferentFloorDirections } from './TypesOfDirections/DifferentFloorDirections';
import { SameFloorDirections } from './TypesOfDirections/SameFloorDirections';
import { DifferentBuildingDirections } from './TypesOfDirections/DifferentBuildingDirections';

export function IndoorScenario(props) {
    const rooms = HallXCoordinates();

    if (props.from && props.to) {
        const routeToTake = whichPathToTake(props.from.toString(), props.to.toString());
        switch (routeToTake) {
            case "SAME_FLOOR":
                return <SameFloorDirections rooms={rooms} floor={props.floor} from={props.from.toString()} to={props.to.toString()}/>
                break;
            case "DIFFERENT_FLOOR":
                return <DifferentFloorDirections rooms={rooms} floor={props.floor} from={props.from.toString()} to={props.to.toString()}/>;
                break;
            case "DIFFERENT_BUILDING":
                return <DifferentBuildingDirections rooms={rooms} floor={props.floor} from={props.from.toString()} to={props.to.toString()}/>;
                break;
        }
    }

    return(
        <G></G>
    );
}

/**
 * Takes two classrooms & determines if the user needs to leave the
 * building, switch floors or stay in the same floor.
 * @param {*} from 
 * @param {*} to 
 */
export const whichPathToTake = (from, to) => {
    if (from && to) {
        const different_building = "DIFFERENT_BUILDING";
        const same_floor = "SAME_FLOOR";
        const different_floor = "DIFFERENT_FLOOR";
    
        if (from.charAt(0) !== to.charAt(0) && from.length != to.length) {
            return different_building;
        }
    
        const fromFloor = from.match(/\d+/g).map(Number);
        const toFloor = to.match(/\d+/g).map(Number);
    
        if (fromFloor.toString().length === toFloor.toString().length) {
            if (fromFloor.toString().length === 3) {
                if (fromFloor.toString().charAt(0) == toFloor.toString().charAt(0)) {
                    return same_floor;
                } else {
                    return different_floor;
                }
            } else {
                if (fromFloor.toString().charAt(0) == toFloor.toString().charAt(0) && fromFloor.toString().charAt(1) == toFloor.toString().charAt(1)) {
                    return same_floor;
                } else {
                    return different_floor;
                }
            }
        } else {
            return different_floor;
        }
    }
}