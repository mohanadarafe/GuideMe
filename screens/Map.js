import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { BuildingHighlight } from '../components/BuildingHighlight';
import { ToggleCampus } from '../components/ToggleCampus';
import { BuildingIdentification } from '../components/BuildingIdentification';
import { BottomMenu } from '../components/BottomMenu';

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

function Map () {
    const [switchVal, setswitchVal] = React.useState(true);

    return (
        <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={switchVal ? mapPosition.sgwCoord : mapPosition.loyCoord}
            showsUserLocation={true}
            showsCompass={true}
            showsBuildings={true}
        >
            <BuildingHighlight />
            <BuildingIdentification />
            <ToggleCampus val={switchVal} onChange={setswitchVal} />
        </MapView>
    );
}

export const styles = StyleSheet.create({
    map: {
        height: '100%',
        flex: 1,
        //Main axis
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    buildingIdentification: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textShadowColor: '#000000',
        textShadowOffset: { width: 1, height: 4 },
        textShadowRadius: 5
    },
    switch: {
        height: 140,
        width: 70
    },
});

export default Map;
