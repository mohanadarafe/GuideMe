import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Buildings } from '../components/Buildings';
import { ToggleCampus } from '../components/ToggleCampus';
import { BuildingIdentification } from '../components/BuildingIdentification';



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
    render(){
        return (
            <MapView 
                style={styles.map} 
                provider={PROVIDER_GOOGLE}
                region={this.state.switchValue ? mapPosition.sgwCoord : mapPosition.loyCoord}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsCompass={true}
                showsBuildings={true}
                minZoomLevel={16}
            >
            <ToggleCampus val={this.state.switchValue} onChange={this.toggleSwitch}/>   
            <Buildings/>
            <BuildingIdentification/>
            </MapView>
        );
    }
}

export const styles = StyleSheet.create({
    map: {
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