/* eslint-disable no-unused-vars */
import React, { useLayoutEffect, useEffect } from "react";
import { View, AsyncStorage, Text, StyleSheet, Switch } from "react-native";
import { Icon } from "native-base";
import { Button } from "react-native-paper";
import { store } from "../redux/reducers/index";
import { FloorMenu } from "./FloorMenu";
import {CampusRegion} from "../constants/buildingData";


/**
 * US6 - As a user, I would like to switch between the SGW and the Loyola maps
 * The following function renders a menu at the bottom of the screen. The menu
 * includes a toggle (US6) & an arrow icon leading to the More Details page.
 */

function BottomMenu (props) {
    const [selectedBuilding, setSelectedBuilding] = React.useState(null);
    const [swtichCampus, setSwitchCampus] = React.useState(true);
    const [destination, setDestination] = React.useState("");
    const [methodTravel, setMethodTravel] = React.useState("driving");
    const [personaType, setPersonaType] = React.useState("");
    const [mobilityReduced, setMobilityReduced] = React.useState("");
    const viewIndoor = props.indoor;
    const inDirections = props.inDirections;
    const building = props.building;
    const previewDirections = props.previewMode;
    const from = props.from;
    const to = props.to;
    

    const goBack = () => {
        props.navigation.goBack();
    };

    const goToDoubleSearchBar = () => {
        props.navigation.navigate("DoubleSearch", { destinationName: destination });
    };
    const goToDirections = () => {
        props.navigation.navigate("Directions", { destinationResponse: props.directionResponse });
    };

    const goToPreferenceMenu = (isIndoor) => {
        if (isIndoor) {
            props.navigation.navigate("PreferenceMenu", {
                indoor: true,
                personaType: personaType,
                mobilityType: mobilityReduced,
                transportType: methodTravel
            });
        } else {
            props.navigation.navigate("PreferenceMenu", {
                indoor: false,
                personaType: personaType,
                mobilityType: mobilityReduced,
                transportType: methodTravel
            });
        }

    };

    const goToMoreDetails = () => {
        props.navigation.navigate("MoreDetails", {
            name: store.getState().selectedBuildingName
        });
    };

    const goToInsideBuilding = () => {
        props.navigation.navigate("IndoorMapView", { selectedBuilding: selectedBuilding });
    };

    const goToNearby = () => {
        AsyncStorage.setItem("sideMenu", "mapView"); 
        props.navigation.navigate("NearbyInterest", { campusBool: swtichCampus});
    
    };

    
    useLayoutEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setSelectedBuilding(store.getState().selectedBuildingName);
            setDestination(store.getState().mainSearchBarDestination);
            setPersonaType(store.getState().personaType);
            setMobilityReduced(store.getState().mobilityReducedType);
            setMethodTravel(store.getState().transportType);
        });
        return function cleanUp() {
            unsubscribe();
        }
    });


    const switchCampuses = (value) => {
        setSwitchCampus(value);
        if (value) {
            props.mapReference.current.animateToRegion(CampusRegion.sgwCoord);        }
        else {
            props.mapReference.current.animateToRegion(CampusRegion.loyCoord);
        }
    }

    if (viewIndoor) {
        return (
            <View style={styles.insideBuildingContainer} data-test="BottomMenu" testID="bottomMenuInitalView">
                <Icon name="ios-arrow-up" style={styles.arrowUp} onPress={() => { (inDirections ? goToPreferenceMenu(true) : goToMoreDetails) }} />
                <Text style={styles.mainLabel}>{building ? building : selectedBuilding}</Text>
                <Text style={styles.shortLabel}>More info</Text>
                <Button testID="indoorMapExitBuildingButton" style={styles.btnleave} color={"#3ACCE1"} uppercase={false} mode="contained" onPress={goBack}>
                    <Text style={styles.btnText}>Exit Building</Text>
                </Button>
                <View style={styles.changeFloor}>
                    <FloorMenu from={from} to={to} />
                </View>
            </View>
        )
    }

    if (previewDirections) {
        return (
            <View style={styles.container}>
                <Icon name="ios-arrow-up" style={styles.arrowUp} onPress={() => { goToPreferenceMenu(false) }} />

                {props.directionResponse && props.directionResponse.generalRouteInfo.totalDuration.length > 12 &&
                    <Text style={styles.mainLabel}>{props.directionResponse.generalRouteInfo.totalDuration}</Text>
                }
                 {props.directionResponse && props.directionResponse.generalRouteInfo.totalDuration.length <= 12 &&
                    <Text style={styles.mainLabel}>{props.directionResponse.generalRouteInfo.totalDuration } {props.directionResponse.generalRouteInfo.totalDistance}</Text>
                }
                 {!props.directionResponse &&
                    <Text style={styles.mainLabel}>N/A</Text>
                }
                <Text style={styles.shortLabel}>Main Travel Mode: {methodTravel}</Text>
                <View style={styles.btnGetDirection}>
                    <Button style={styles.btnGetDirectionPosition}
                        color={"#3ACCE1"} uppercase={false} mode="contained" onPress={goToDirections}>
                        <Text style={styles.btnText}>Start</Text>
                    </Button>
                </View>
            </View>
        );
    }
    if (destination) {
        if (destination.length > 13) {
            var updatedDestination = destination.substring(0, 13) + "...";
        }
        return (
            <View style={styles.container} >
                <Icon name="ios-arrow-up" style={styles.arrowUp} onPress={() => { props.navigation.navigate("MoreDetails", { name: destination }) }} />
                {destination.length > 13
                    ? <Text style={styles.mainLabel}>{updatedDestination}</Text>
                    : <Text style={styles.mainLabel}>{destination}</Text>
                }
                <Text style={styles.shortLabel}>More info</Text>
                <View style={styles.btnGetDirection}>
                    <Button testID="getDirectionsButton" style={styles.btnGetDirection} color={"#3ACCE1"} uppercase={false} mode="contained" onPress={goToDoubleSearchBar}>
                        <Text style={styles.btnText}>Get Directions</Text>
                    </Button>
                </View>
            </View>
        );
    }

    if (selectedBuilding) {
        if (selectedBuilding.length > 13) {
            var updatedSelectedBuilding = selectedBuilding.substring(0, 13) + "...";

        }
        return (
            <View style={styles.container}>
                <Icon testID="getInsideIcon" name="ios-arrow-up" style={styles.arrowUp} onPress={goToMoreDetails} />
                <Text style={styles.mainLabel}>{selectedBuilding}</Text>
                {selectedBuilding.length > 13
                    ? <Text style={styles.mainLabel}>{updatedSelectedBuilding}</Text>
                    : <Text style={styles.mainLabel}>{selectedBuilding}</Text>
                }
                <Text style={styles.shortLabel}>More info</Text>
                <Button testID="getInsideButton" style={styles.btn} color={"#3ACCE1"} uppercase={false} mode="contained" onPress={goToInsideBuilding}>
                    <Text style={styles.btnText}>Get Inside</Text>
                </Button>
            </View>
        );
    }
    else {
        return (
            <View style={styles.container} data-test="BottomMenu" testID="bottomMenuInitalView">
                <Icon name="ios-arrow-up" style={styles.arrowUp} onPress={goToNearby} />
                <Text style={styles.mainLabel}>Nearby</Text>
                <Text style={styles.shortLabel}>Food, drinks & more</Text>
                <View testID="intialBottomMenuToggleButton" style={styles.toggle}>
                    <Switch
                        value={swtichCampus}
                        onValueChange={(val) => { switchCampuses(val);}}>
                    </Switch>
                </View>
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 350,
        position: "absolute",
        borderRadius: 30.5,
        backgroundColor: "#2A2E43",
        bottom: -275
    },
    insideBuildingContainer: {
        width: "100%",
        height: 425,
        position: "absolute",
        borderRadius: 30.5,
        backgroundColor: "#2A2E43",
        bottom: -275
    },
    moreDetails: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#2A2E43",
        alignItems: "center",
        justifyContent: "space-between"
    },
    arrowUp: {
        color: "#ffffff",
        left: "5%",
        top: "7%",
    },
    toggle: {
        position: "absolute",
        left: "80%",
        top: "7%"
    },
    btn: {
        position: "absolute",
        left: "65%",
        top: "5.5%",
        color: "#FFFFFF"
    },
    btnGetDirection: {
        position: "absolute",
        left: "57%",
        top: "5.5%",
        color: "#FFFFFF"
    },
    btnGetDirectionPosition: {
        left: "100%"
    },
    btnleave: {
        position: "absolute",
        left: "62%",
        top: "5.5%",
        color: "#FFFFFF",
    },
    btnText: {
        color: "#FFFFFF",
        fontFamily: "encodeSansExpanded"
    },
    mainLabel: {
        position: "absolute",
        top: "5%",
        left: "12.5%",
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: "encodeSansExpanded",
        height: "9%",
        width: "45%"
    },
    shortLabel: {
        position: "absolute",
        top: "12%",
        left: "12.5%",
        color: "#80828D",
        fontSize: 16,
        fontFamily: "encodeSansExpanded"
    },
    arrowDown: {
        color: "#ffffff",
        top: "5%",
        fontSize: 54,
        position: "absolute"
    },
    changeFloor: {
        top: "12.5%",
        left: "15%",
    }
});

export { BottomMenu };