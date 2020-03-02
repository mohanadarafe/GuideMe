import React, { useEffect, useState } from 'react';
import coord from '../constants/buildingCoordinates';
import { isPointInPolygon } from 'geolib'

/**
 * US5 - As a user, I would like to know which building I am currently in
 * US32 - As a user, I would like to be able to know where I am indoors.
 * The following function provides the building & current floor of a user.
 * 
 * Note: call CurrentLocation() inside BottomMenu.js
 */
function CurrentLocation() {
    const [currentBuilding, setcurrentBuilding] = React.useState("")
    const [lastLat, setlastLat] = React.useState(0)
    const [lastLong, setlastLong] = React.useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            this.watchID = navigator.geolocation.watchPosition((position) => {
                setlastLat(position.coords.latitude);
                setlastLong(position.coords.longitude);
            });
    
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
        }, 10000)
        return () => clearInterval(intervalId);
    })

    if (currentBuilding === "") {
        return ("Not in a building");
    }
    return (currentBuilding);
}