import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import coord from '../constants/buildingCoordinates';
import { isPointInPolygon } from 'geolib'

// US5 - As a user, I would like to know which building im currently in.
// Currently working on this, will be moved to sprint 2 (Mohanad)
function CurrentBuilding(){
    const [currentBuilding, setcurrentBuilding] = React.useState("")
    const [lastLat, setlastLat] = React.useState(45.494382)
    const [lastLong, setlastLong] = React.useState(-73.577081)

    useEffect(() => {
        this.watchID = navigator.geolocation.watchPosition((position) => {
            setlastLat(position.coords.latitude);
            setlastLong(position.coords.longitude);
        });

        if (isPointInPolygon({latitude: lastLat, longitude: lastLong}, 
            [{latitude: coord.gn.coordinates[0].latitude, longitude: coord.gn.coordinates[0].longitude},
            {latitude: coord.gn.coordinates[1].latitude, longitude: coord.gn.coordinates[1].longitude},
            {latitude: coord.gn.coordinates[2].latitude, longitude: coord.gn.coordinates[2].longitude},
            {latitude: coord.gn.coordinates[3].latitude, longitude: coord.gn.coordinates[3].longitude},
            {latitude: coord.gn.coordinates[4].latitude, longitude: coord.gn.coordinates[4].longitude}])){

            setcurrentBuilding(coord.gn.name)

        } else {
            console.log("nop")
        }
    })

    if (currentBuilding !== "") {
        return(
            <View>
            </View>
        )
    }
    
}

export { CurrentBuilding };