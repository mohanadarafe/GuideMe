import React, { useEffect } from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { BuildingHighlight } from "../components/BuildingHighlight";
import { BuildingIdentification } from "../components/BuildingIdentification";
import { BottomMenu } from "../components/BottomMenu";
import { CurrentBuildingLocation } from "../components/CurrentBuildingLocation";
import { View } from "native-base";
import { Search } from "../components/Search";
import IndoorMapView from "./Indoor/IndoorMapView";
import PropTypes from "prop-types";

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

/**
 * US1 - As a user, I would like to navigate through SGW campus.
 * US2 - As a user, I would like to navigate through Loyola campus.
 * 
 * This is our main screen which includes all the components inside a map.
 * FIXME: When the app refreshes, a random component appears on in the upper
 *        half of the screen for miliseconds...
 */
function Map ({ navigation }) {
    const [switchVal, setswitchVal] = React.useState("");
    const [getInsideBuild, setGetInsideBuild] = React.useState("");
    const [mapPressed, setmapPressed] = React.useState("");

    //TODO: To have a functionality for when the user presses on the map
    AsyncStorage.setItem("mapPressed", mapPressed);

    const campusSelected = async () => {
        let tog = await AsyncStorage.getItem("toggle");
        let inside = await AsyncStorage.getItem("getInsideBuilding");
        setswitchVal(tog);
        setGetInsideBuild(inside);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            campusSelected();
        }, 1);
        return () => clearInterval(intervalId);
    });

    return (
        <View testID="mapview" data-test="MapComponent">
                <View>
                    <MapView
                        data-test="MapViewComponent"
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        region={switchVal === "true" ? mapPosition.sgwCoord : mapPosition.loyCoord}
                        showsUserLocation={true}
                        showsCompass={true}
                        showsBuildings={true}
                        showsIndoors={false}
                    >
                        <BuildingHighlight />
                        <BuildingIdentification />
                    </MapView>
                    <Search />
                    {/* FixMe: need to add permission for Location in this file <View style={styles.CurrentBuildingLocation}>
                        <CurrentBuildingLocation />
                    </View> */}
                </View>      
            <BottomMenu navigation={navigation} />
        </View>
    );
}

Map.propTypes = {
    navigation: PropTypes.any,
};



export const styles = StyleSheet.create({
    map: {
        height: "100%"
    },
    CurrentBuildingLocation: {
        position: "absolute",
        top: "82%",
        left: "80%"
    }
});

export default Map;
