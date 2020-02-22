<<<<<<< HEAD
import React from 'react';
import { StyleSheet, View,  ActionSheetIOS } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import { Buildings } from '../components/Buildings';
=======
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { BuildingHighlight } from '../components/BuildingHighlight';
>>>>>>> a2f585f4e900a93b5be5584f849f0b0adc578e55
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

<<<<<<< HEAD
export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null
        };       
    }
    state = { switchValue: false }
    toggleSwitch = (val) => {
        this.setState({
            switchValue: val
        })
    }

	findCoordinates = () => {
        let polygon = [
            { latitude: 45.545140, longitude: -73.566827 },
            { latitude: 45.544366, longitude: -73.563919 },
            { latitude: 45.546057, longitude: -73.562503 },
            { latitude: 45.550340, longitude: -73.565317 },
            { latitude: 45.545140, longitude: -73.566827 }
          ];
    
        //Watch position is working
		navigator.geolocation.watchPosition(
            (position) => {
                let point = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };
                console.log(position)
                
                //TODO Find a way to compare the current location "position" with the polygon inside of buildings.js
                //Point is within polygon but it returns NOT within
                GeoFencing.containsLocation(point, polygon)
                  .then(() => console.log('point is within polygon'))
                  .catch(() => console.log('point is NOT within polygon'))
              },
              (error) => alert(error.message),
              { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
          }

    render(){
        this.findCoordinates();
        return (
            <MapView 
                style={styles.map} 
                provider={PROVIDER_GOOGLE}
                region={this.state.switchValue ? mapPosition.sgwCoord : mapPosition.loyCoord}
                showsUserLocation={true}
                minZoomLevel={16}
            >
            <ToggleCampus val={this.state.switchValue} onChange={this.toggleSwitch}/>   
            <Buildings/>
            <BuildingIdentification/>
            </MapView>
        );
    }
=======
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
>>>>>>> a2f585f4e900a93b5be5584f849f0b0adc578e55
}

export const styles = StyleSheet.create({
    map: {
<<<<<<< HEAD
      height: '100%',
      flex: 1,
      //Main axis
      flexDirection:"row",
      //Describes how to align children along the cross axis of their container
      alignItems: "flex-end",
      //Describes how to align children within the main axis of their container
      justifyContent: "flex-end",
    },
    buildingIdentification: {
        color: "blue",
        opacity: 0.5,	
       fontSize: 10,
       fontWeight: "bold",
=======
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
>>>>>>> a2f585f4e900a93b5be5584f849f0b0adc578e55
    },
    switch: {
        height: 140,
        width: 70
    },
<<<<<<< HEAD
});
=======
});

export default Map;
>>>>>>> a2f585f4e900a93b5be5584f849f0b0adc578e55
