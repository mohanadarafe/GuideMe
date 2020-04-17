/* eslint-disable no-unused-vars */
import React, {useLayoutEffect, useEffect} from "react";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import BuildingHighlight  from "../components/BuildingHighlight";
import { BuildingIdentification } from "../components/BuildingIdentification";
import { BottomMenu } from "../components/BottomMenu";
import { CurrentBuildingLocation } from "../components/CurrentBuildingLocation";
import { View } from "native-base";
import Search  from "../components/Search";
import PropTypes from "prop-types";
import { LocationMarker } from "../components/locationMarker";
import {CampusRegion} from "../constants/buildingData";
import { connect } from "react-redux";


function mapStateToProps(state) {
    return {
        selectedBuildingName: state.selectedBuildingName
    }
}


function mapDispatchToProps(dispatch) {
    return {
        setSelectedBuildingName: (value) => dispatch({ type: "UPDATE_SELECTED_BUILDING", payload: value }),
    }
}


/**
 * US1 - As a user, I would like to navigate through SGW campus.
 * US2 - As a user, I would like to navigate through Loyola campus.
 * 
 * This is our main screen which includes all the components inside a map.
 */
export function Map (props) { //FIXME: change import name

    const [isMapClicked, setIsMapClicked] = React.useState(false);
    const mapRef = React.useRef(null);
    
    return (
        <View testID="mapView" data-test="MapComponent">
            <View>
                <MapView
                    data-test="MapViewComponent"
                    ref={mapRef}
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={CampusRegion.sgwCoord}
                    showsUserLocation={true}
                    showsCompass={true}
                    showsBuildings={true}
                    showsIndoors={false}
                    onPress = {() => { 
                        if(isMapClicked) {
                            setIsMapClicked(false);
                        }
                        else {setIsMapClicked(true)
                            props.setSelectedBuildingName(null);
                        }
                    }}
                >
                    <BuildingHighlight />
                    <BuildingIdentification />
                    <LocationMarker mapReference = {mapRef} mapClicked = {isMapClicked} />
                </MapView>
                <Search testID="searchBar" 
                navigation = {props.navigation} 
                mapReference = {mapRef} 
                />
                <View style={styles.CurrentBuildingLocation}>
                        {/* <CurrentBuildingLocation /> */}
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
    CurrentBuildingLocation: {
        position: "absolute",
        top: "82%",
        left: "80%"
    }
});

// export default Map;
export default connect(mapStateToProps, mapDispatchToProps)(Map);

