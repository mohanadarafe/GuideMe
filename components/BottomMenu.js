import React, { useEffect } from "react";
import { View, AsyncStorage, Text, StyleSheet, Switch } from "react-native";
import { Icon } from "native-base";
import MoreDetails from "../screens/MoreDetails";
import { CurrentLocation } from "../components/CurrentLocation";
import { Button } from "react-native-paper";
import { FloorMenu } from "./FloorMenu";
import {PreferenceMenu} from "./PreferenceMenu";


/**
 * US6 - As a user, I would like to switch between the SGW and the Loyola maps
 * The following function renders a menu at the bottom of the screen. The menu
 * includes a toggle (US6) & an arrow icon leading to the More Details page.
 */
function BottomMenu(props) {
    const [selectedBuilding, setSelectedBuilding] = React.useState("");
    const [iconSelected, setIconSelected] = React.useState(false);
    const [switchVal, setSwitchVal] = React.useState(true);
    const [getInside, setGetInside] = React.useState(false);
    const [destination, setDestination] = React.useState("");
    //const [mapPressed, setmapPressed] = React.useState("");

    CurrentLocation();

    AsyncStorage.setItem("toggle", switchVal.toString());
    AsyncStorage.setItem("getInsideBuilding", getInside.toString());

    const getBuildingSelected = async () => {
        let name = await AsyncStorage.getItem("buildingSelected");
        setSelectedBuilding(name);
    };

    const getDestination = async () => {
        let searchItem = await AsyncStorage.getItem("toLocation");
        setDestination(searchItem);
    };

    // //TODO: Will be used to detect when a user pressed on the map view
    // const getMapPressed = async () => {
    //     let pressed = await AsyncStorage.getItem("mapPressed");
    //     setmapPressed(pressed);
    // };

    
    const goToDoubleSearchBar = () => {
        navigation.navigate("DoubleSearch", { destinationName: destination });
    };
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            getBuildingSelected();
            getDestination();
            //getMapPressed();
        }, 1);
        return () => clearInterval(intervalId);
    });

    if (iconSelected && selectedBuilding) {
        return (
            <View style={styles.moreDetails}>
                <MoreDetails name={selectedBuilding} navigation={props.navigation} />
                <Icon name="ios-arrow-down" style={styles.arrowDown} onPress={() => { setIconSelected(false); }} />
            </View>
        );
    }

    if (iconSelected) {
        return (
            <View style={styles.moreDetails}>
                <PreferenceMenu/>
                <Icon name="ios-arrow-down" style={styles.arrowDown} onPress={() => { setIconSelected(false); }} />
            </View>
        );
    }
    if (iconSelected && !selectedBuilding) {
        return (
            <View style={styles.moreDetails}>
                <Icon name="ios-arrow-down" style={styles.arrowDown} onPress={() => { setIconSelected(false); }} />
            </View>
        );
    }


    else if (iconSelected && !selectedBuilding) {
        return (
            <View style={styles.moreDetails}>
                <Icon name="ios-arrow-down" style={styles.arrowDown} onPress={() => { setIconSelected(false); }} />
            </View>
        );
    }

    if (props.previewMode) {
        return (
            <View style={styles.container}>
                <Icon name="ios-arrow-up" style={styles.arrowUp} onPress={() => { setIconSelected(true); }} />
                <Text style={styles.mainLabel}>17 min (10.9km)</Text>
                <Text style={styles.shortLabel}>to: Concordia University - SGW </Text>
                <View style={styles.btnGetDirection}>
                    <Button style={styles.btnGetDirection, { left: "100%", }} color={"#3ACCE1"} uppercase={false} mode="contained">
                        <Text style={{ color: "#FFFFFF", fontFamily: "encodeSansExpanded" }}>Start</Text>
                    </Button>
                </View>
            </View>
        );
    }

    if (getInside) {
        return (
            <View style={styles.insideBuildingContainer}>
                <Icon name="ios-arrow-up" style={styles.arrowUp} onPress={() => { setIconSelected(true); }} />
                <Text style={styles.mainLabel}>{selectedBuilding}</Text>
                <Text style={styles.shortLabel}>More info</Text>
                <View style={styles.btnleave}>
                    <Button style={styles.btnleave} color={"#3ACCE1"} uppercase={false} mode="contained" onPress={() => {
                        setGetInside(false);
                    }}>
                        <Text style={styles.btnText}>Exit Building</Text>
                    </Button>
                </View>
                <View style={styles.changeFloor}>
                    <FloorMenu />
                </View>
            </View>
        );
    }
    else if (destination) {
        return (
            <View style={styles.container}>
                <Icon name="ios-arrow-up" style={styles.arrowUp} onPress={() => { setIconSelected(true); }} />
                <Text style={styles.mainLabel}>{destination}</Text>
                <Text style={styles.shortLabel}>More info</Text>
                <View style={styles.btnGetDirection}>
                    <Button style={styles.btnGetDirection} color={"#3ACCE1"} uppercase={false} mode="contained" onPress={goToDoubleSearchBar}>
                        <Text style={{ color: "#FFFFFF", fontFamily: "encodeSansExpanded" }}>Get Directions</Text>
                    </Button>
                </View>
            </View>
        );
    }

    else {
        return (
            <View style={styles.container}>
                <Icon name="ios-arrow-up" style={styles.arrowUp} onPress={() => { setIconSelected(true); }} />
                <Text style={styles.mainLabel}>Nearby</Text>
                <Text style={styles.shortLabel}>Food, drinks & more</Text>
                <View style={styles.toggle}>
                    <Switch
                        value={switchVal}
                        onValueChange={(val) => setSwitchVal(val)}>
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
        left: "60%",
        top: "5.5%",
        color: "#FFFFFF"
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