import React, { useEffect } from 'react';
import { G } from 'react-native-svg';
import { HallXCoordinates } from '../../constants/HallXCoordinates';
import { DifferentFloorDirections } from './TypesOfDirections/DifferentFloorDirections';
import { SameFloorDirections } from './TypesOfDirections/SameFloorDirections';
import { DifferentBuildingDirections } from './TypesOfDirections/DifferentBuildingDirections';
import { getFloorNumber } from './Dijkstra/DijkstraAlgorithm';
import { LoyolaCoordinates } from '../../constants/LoyolaCoordinates';

export function IndoorScenario(props) {
    const rooms = HallXCoordinates();
    const loyolaRooms = LoyolaCoordinates();

    if (props.from && props.to) {
        const routeToTake = whichPathToTake(props.from.toString(), props.to.toString());
       
        switch (routeToTake) {
            case "INTEREST":
                return <SameFloorDirections rooms={rooms} floor={props.floor} from={props.from.toString()} to={props.to.toString()} interest={true}/>
            //There are two cases here:
            //CASE I: From VL to H 
            //Start at VL, go to exit, then go to H & go upstairs
            //CASE II: From H TO VL
            //Start at H, go to exit, then go to VL & go to classroom
            case "DIFFERENT_CAMPUS":
                if (props.from.includes("VL")) {
                    if (props.building == "VL Building"){
                        return <SameFloorDirections rooms={loyolaRooms} floor={props.floor} from={props.from.toString()} to={"exit"} loy={true}/>
                    } else {
                        return <DifferentBuildingDirections rooms={rooms} floor={props.floor} from={"VL Building"} to={props.to.toString()}/>;
                    }
                } else {
                    if (props.building == "VL Building") {
                        return <SameFloorDirections rooms={loyolaRooms} floor={props.floor} from={"exit"} to={props.to.toString()} loy={true}/>;
                    } else {
                        return <DifferentBuildingDirections rooms={rooms} floor={props.floor} from={props.from.toString()} to={"VL Building"}/>;
                    }
                }
                break;
            case "SAME_FLOOR":
                return <SameFloorDirections rooms={rooms} floor={props.floor} from={props.from.toString()} to={props.to.toString()}/>
                break;
            case "DIFFERENT_FLOOR":
                return <DifferentFloorDirections rooms={rooms} floor={props.floor} from={props.from.toString()} to={props.to.toString()}/>;
                break;
            case "DIFFERENT_BUILDING":
                return <DifferentBuildingDirections rooms={rooms} floor={props.floor} from={props.from.toString()} to={props.to.toString()}/>;
                break;
            case "NOT_INDOOR":
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
        const different_campus = "DIFFERENT_CAMPUS";
        const not_indoor = "NOT_INDOOR";
        const interest = "INTEREST";

        if (to.includes("Washroom") || to.includes("Water")) {
            return interest;
        }

        //todo: find a better way to identify different campus buildings
        if (from.includes("VL") || to.includes("VL")) {
            return different_campus;
        }

        if (from.includes(" ") && to.includes(" ")) {
            return not_indoor;
        }
    
        if ((from.includes(" ") || to.includes(" ")) && from.length != to.length) {
            return different_building;
        }
    
        if (getFloorNumber(from) == getFloorNumber(to)) {
            return same_floor;
        } else {
            return different_floor;
        }
    }
}
