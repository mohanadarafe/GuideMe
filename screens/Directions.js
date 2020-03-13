import React, {  useEffect } from "react";
import { StyleSheet, AsyncStorage, Async, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { View, Button, Text, Icon} from "native-base";
import MapViewDirections from 'react-native-maps-directions';
import {api_key } from '../gmaps_api/apiKey';
import getDirections from 'react-native-google-maps-directions';

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
};

const origin = {latitude: 45.494381, longitude: -73.578425};
const destination = {latitude: 45.497092, longitude: -73.5788};


/**
 * US1 - As a user, I would like to navigate through SGW campus.
 * US2 - As a user, I would like to navigate through Loyola campus.
 * 
 * This is our main screen which includes all the components inside a map.
 */
function Directions () {




    return (
                <View>
                    <MapView
                        data-test="MapViewComponent"
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        region={mapPosition.sgwCoord}
                        showsUserLocation={true}
                        showsCompass={true}
                        showsBuildings={true}
                    >
                        {/* <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={api_key.id}
                            onError={(errorMessage) => {
                                console.log('GOT AN ERROR');
                              }}
                        /> */}
                    </MapView>
                    <View style = {styles.navigationHeader}>
                        <View style = {{top: "15%"}}>
                        <Icon name="md-arrow-round-back" style = {styles.backIcon}></Icon> 
                        <View style = {styles.directionText}>
                            <Text style = {styles.DirectionTextHeader}>Route Directions</Text>
                                <View style= {styles.lineHeader}></View>
                        </View>
                        </View>
                    </View>
                    <View style = {styles.bottomArrowDirectionContainer}>
                        <TouchableOpacity style = {styles.arrowDirection}>
                        <View>
                            <Icon name = "arrow-back"></Icon>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.arrowDirection}>
                        <View >
                            <Icon name = "arrow-forward"></Icon>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View> 
    );
}

export const styles = StyleSheet.create({
    map: {
        height: "100%"
    },
    navigationHeader : {
        width: "100%",
        height: "25%",
        flexDirection: "column",
        backgroundColor: "#2A2E43",
        position: "absolute"
    },
    directionText: {
        justifyContent: "center", 
        alignItems: "center"
        },
    DirectionTextHeader: {
        color: "white", 
        fontSize: 25
    },
    lineHeader: {
        borderBottomColor: 'white',
        width: "100%",
        borderBottomWidth: 2,
        top: "10%"
    },
    backIcon: {
        color: "white", 
        left: "5%"
    },
    bottomArrowDirectionContainer: {
        top: "90%", 
        left: "70%",
        position: "absolute", 
        height: 50, 
        width: 100,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    arrowDirection: {
        width: "45%", 
        color: "#2A2E43",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#2A2E43",
        borderRadius: 5
    }

});

export default Directions;
