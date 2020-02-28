import React, { useEffect, useState } from 'react';
import coord from '../constants/buildingCoordinates';
import { isPointInPolygon } from 'geolib'
import {AsyncStorage} from 'react-native';

export function CurrentLocation() {
    const [currentBuilding, setcurrentBuilding] = React.useState("")
    const [lastLat, setlastLat] = React.useState(0)
    const [lastLong, setlastLong] = React.useState(0)
    const [altitude, setAltitude] = React.useState("0") 

    let baseAltitude = 35;
    let floorHeight = 5;
    let currentFloor = 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            this.watchID = navigator.geolocation.watchPosition((position) => {
                setlastLat(position.coords.latitude);
                setlastLong(position.coords.longitude);
                setAltitude(position.coords.altitude.toString());
            });
            
            AsyncStorage.setItem("altitude", altitude);
            AsyncStorage.setItem("currentBuilding", currentBuilding);

            if (isPointInPolygon({ latitude: lastLat, longitude: lastLong },
                [{ latitude: coord.gn.coordinates[0].latitude, longitude: coord.gn.coordinates[0].longitude },
                { latitude: coord.gn.coordinates[1].latitude, longitude: coord.gn.coordinates[1].longitude },
                { latitude: coord.gn.coordinates[2].latitude, longitude: coord.gn.coordinates[2].longitude },
                { latitude: coord.gn.coordinates[3].latitude, longitude: coord.gn.coordinates[3].longitude },
                { latitude: coord.gn.coordinates[4].latitude, longitude: coord.gn.coordinates[4].longitude }])) {
    
                setcurrentBuilding(coord.gn.name)
    
            }
    
            if (isPointInPolygon({ latitude: lastLat, longitude: lastLong },
                [{ latitude: coord.h.coordinates[0].latitude, longitude: coord.h.coordinates[0].longitude },
                { latitude: coord.h.coordinates[1].latitude, longitude: coord.h.coordinates[1].longitude },
                { latitude: coord.h.coordinates[2].latitude, longitude: coord.h.coordinates[2].longitude },
                { latitude: coord.h.coordinates[3].latitude, longitude: coord.h.coordinates[3].longitude },
                { latitude: coord.h.coordinates[4].latitude, longitude: coord.h.coordinates[4].longitude }])) {
    
                setcurrentBuilding(coord.h.name)
    
            }
    
            if (isPointInPolygon({ latitude: lastLat, longitude: lastLong },
                [{ latitude: coord.mb.coordinates[0].latitude, longitude: coord.mb.coordinates[0].longitude },
                { latitude: coord.mb.coordinates[1].latitude, longitude: coord.mb.coordinates[1].longitude },
                { latitude: coord.mb.coordinates[2].latitude, longitude: coord.mb.coordinates[2].longitude },
                { latitude: coord.mb.coordinates[3].latitude, longitude: coord.mb.coordinates[3].longitude },
                { latitude: coord.mb.coordinates[4].latitude, longitude: coord.mb.coordinates[4].longitude }])) {
    
                setcurrentBuilding(coord.mb.name)
    
            }
    
            if (isPointInPolygon({ latitude: lastLat, longitude: lastLong },
                [{ latitude: coord.ev.coordinates[0].latitude, longitude: coord.ev.coordinates[0].longitude },
                { latitude: coord.ev.coordinates[1].latitude, longitude: coord.ev.coordinates[1].longitude },
                { latitude: coord.ev.coordinates[2].latitude, longitude: coord.ev.coordinates[2].longitude },
                { latitude: coord.ev.coordinates[3].latitude, longitude: coord.ev.coordinates[3].longitude },
                { latitude: coord.ev.coordinates[4].latitude, longitude: coord.ev.coordinates[4].longitude }])) {
    
                setcurrentBuilding(coord.ev.name)
    
            }
    
            if (isPointInPolygon({ latitude: lastLat, longitude: lastLong },
                [{ latitude: coord.lb.coordinates[0].latitude, longitude: coord.lb.coordinates[0].longitude },
                { latitude: coord.lb.coordinates[1].latitude, longitude: coord.lb.coordinates[1].longitude },
                { latitude: coord.lb.coordinates[2].latitude, longitude: coord.lb.coordinates[2].longitude },
                { latitude: coord.lb.coordinates[3].latitude, longitude: coord.lb.coordinates[3].longitude },
                { latitude: coord.lb.coordinates[4].latitude, longitude: coord.lb.coordinates[4].longitude }])) {
    
                setcurrentBuilding(coord.lb.name)
    
            }

        }, 1000)
        return () => clearInterval(intervalId);
    })

    currentFloor = (altitude - baseAltitude)/floorHeight;

    if(currentFloor > 0){
        roundedCurrentFloor = "This is the " + (Math.round(currentFloor * 100) / 100).toFixed(0) + "rd floor";
    }

    if (currentBuilding === "") {
        return ("");
    }
    return (currentBuilding + " - " + roundedCurrentFloor);

}