import React from 'react';
import { G } from 'react-native-svg';
import { HallXCoordinates } from '../../constants/HallXCoordinates';
import { DifferentFloorDirections } from './TypesOfDirections/DifferentFloorDirections';
import { SameFloorDirections } from './TypesOfDirections/SameFloorDirections';
import { DifferentBuildingDirections } from './TypesOfDirections/DifferentBuildingDirections';
import { getFloorNumber } from './Dijkstra/DijkstraAlgorithm';

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
    
        if (getFloorNumber(from) == getFloorNumber(to)) {
            return same_floor;
        } else {
            return different_floor;
        }
    }
}
