import React, { useState, useEffect } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { BuildingHighlight } from '../components/BuildingHighlight';
import { BuildingIdentification } from '../components/BuildingIdentification';
import { BottomMenu } from '../components/BottomMenu';


import { View } from 'native-base';
import { Search } from '../components/Search';

const mapPosition = {
    sgwCoord: {
        latitude: 45.496557,
        longitude: -73.578896,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    },
    loyCoord: {
        latitude: 45.457841,
        longitude: -73.640307,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }
}

/**
 * US1 - As a user, I would like to navigate through SGW campus.
 * US2 - As a user, I would like to navigate through Loyola campus.
 * 
 * This is our main screen which includes all the components inside a map.
 */
function Map () {
    const [switchVal, setswitchVal] = React.useState("");

    campusSelected = async() => {
        let val = await AsyncStorage.getItem("toggle");
        setswitchVal(val);
    }    

    useEffect(() => {
        const intervalId = setInterval(() => {
            campusSelected();
        }, 1)
        return () => clearInterval(intervalId);
    })

    return (
    
        <View data-test ="MapComponent">
            <MapView
                data-test ="MapViewComponent"
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={switchVal === "true" ? mapPosition.sgwCoord : mapPosition.loyCoord}
                showsUserLocation={true}
                showsCompass={true}
                showsBuildings={true}
            >
                <BuildingHighlight />
                <BuildingIdentification />
            </MapView>
            <Search/>
            <BottomMenu />
        </View>
    
    );
}

export const styles = StyleSheet.create({
    map: {
        height: '100%'
        //flex: 1,
        //Main axis
        //flexDirection: "row",
        // alignItems: "flex-end"
        //justifyContent: "flex-end"
    }

});

export default Map;
