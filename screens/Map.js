/* eslint-disable no-unused-vars */
import React, {useLayoutEffect} from "react";
import { StyleSheet, Keyboard  } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import BuildingHighlight  from "../components/BuildingHighlight";
import { BuildingIdentification } from "../components/BuildingIdentification";
import { BottomMenu } from "../components/BottomMenu";
import CurrentBuildingLocation  from "../components/CurrentBuildingLocation";
import CurrentLocationButton  from "../components/CurrentLocationButton";
import { View } from "native-base";
import Search  from "../components/Search";
import PropTypes from "prop-types";
import { LocationMarker } from "../components/locationMarker";
import {CampusRegion} from "../constants/buildingData";
import { connect } from "react-redux";
import { store } from "../redux/reducers/index";
import {darkMode} from "../assets/styling/mapDarkMode";

function mapStateToProps(state) {
    return {
        selectedBuildingName: state.selectedBuildingName
    }
}


function mapDispatchToProps(dispatch) {
    return {
        setSelectedBuildingName: (value, darkMode) => dispatch({ type: "UPDATE_SELECTED_BUILDING", payload: {selectedBuilding: value, darkMode: darkMode} }),
    }
}


/**
 * US1 - As a user, I would like to navigate through SGW campus.
 * US2 - As a user, I would like to navigate through Loyola campus.
 * 
 * This is our main screen which includes all the components inside a map.
 */
export function Map (props) { 

    const [isMapClicked, setIsMapClicked] = React.useState(false);
    const [isDarkedMode, setIsDarkMode] = React.useState(store.getState().isDarkMode);
    const mapRef = React.useRef(null);

    useLayoutEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setIsDarkMode(store.getState().isDarkMode)
        });
        return function cleanUp() {
            unsubscribe();
        }
    });
    
    return (
        <View testID="mapView" data-test="MapComponent">
            <View>
                <MapView
                    id="mainMap"
                    data-test="MapViewComponent"
                    ref={mapRef}
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={CampusRegion.sgwCoord}
                    showsUserLocation={true}
                    showsCompass={true}
                    showsBuildings={true}
                    showsIndoors={false}
                    customMapStyle = {isDarkedMode ? darkMode : []} 
                    onPress = {() => { 
                        if(isMapClicked) {
                            setIsMapClicked(false);
                            Keyboard.dismiss();
                        }
                        else {
                            setIsMapClicked(true);
                            Keyboard.dismiss();
                            props.setSelectedBuildingName(null, isDarkedMode);
                        }
                    }}

                >
                    <BuildingHighlight />
                    <BuildingIdentification />
                    <LocationMarker mapReference = {mapRef} />
                </MapView>
                <Search testID="searchBar" 
                navigation = {props.navigation} 
                mapReference = {mapRef} 
                />
                <View style = {styles.overlayButtons}>
                        <CurrentBuildingLocation mapReference = {mapRef}/>
                        <View style = {styles.spaceBetweenOverlayedButtons}></View>
                        <CurrentLocationButton mapReference = {mapRef} />
                </View>
            <BottomMenu navigation={props.navigation} mapReference = {mapRef} />
            </View>
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
   overlayButtons: {
    position: "absolute", 
    flexDirection: "column", 
    top:"70%", 
    left: "80%"
   },
   spaceBetweenOverlayedButtons: {
       height: "5%"
   }
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);

