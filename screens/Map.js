import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Buildings } from '../components/Buildings';
import { ToggleCampus } from '../components/ToggleCampus';

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

    render () {
        return (
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={this.state.switchValue ? mapPosition.sgwCoord : mapPosition.loyCoord}
                showsUserLocation={true}
                showsMyLocationButton={true}
                showsCompass={true}
                showsBuildings={true}
            >
                <ToggleCampus val={this.state.switchValue} onChange={this.toggleSwitch} />
                <Buildings />
            </MapView>
        );
    }
}

export const styles = StyleSheet.create({
    map: {
        height: '100%',
        flex: 1,
        //Main axis
        flexDirection: "row",
        //Describes how to align children along the cross axis of their container
        alignItems: "flex-end",
        //Describes how to align children within the main axis of their container
        justifyContent: "flex-end",
    },
    buildingIdentification: {
        color: "blue",
        opacity: 0.5,
        fontSize: 10,
        fontWeight: "bold"
    },
    switch: {
        height: 70,
        width: 70
    }
});