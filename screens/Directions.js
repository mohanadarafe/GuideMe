import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline, Circle } from "react-native-maps";
import { View, Text, Icon } from "native-base";
import CurrentLocationButton from "../components/CurrentLocationButton";
import HTML from "react-native-render-html";
import PropTypes from "prop-types";


/**
 * TODO: A) If we want to enabled a dark mode. https://github.com/react-native-community/react-native-maps#customizing-the-map-style
*/
/**
 * US1 - As a user, I would like to navigate through SGW campus.
 * US2 - As a user, I would like to navigate through Loyola campus.
 * TODO: There are other user stories to refer.
 * This is our main screen which includes all the components inside a map.
 */
function Directions (props) {

    const [instructionIndex, setInstructionIndex] = React.useState(0);
    const [isLastInstruction, setIsLastInstruction] = React.useState(false);
    const [isFirstInstruction, setIsFirstInstruction] = React.useState(true);
    const [indoorScenario1, setIndoorScenario1] = React.useState(false);
    const [indoorScenario2, setIndoorScenario2] = React.useState(false);
    const [indoorScenario3, setIndoorScenario3] = React.useState(false);
    const [inside, setInside] = React.useState(true);
    const mapRef = useRef(null);

    /* 2. Read the params from the navigation state */
    const { params } = props.navigation.state;
    const destinationResponse = params ? params.destinationResponse : null;

    const indoorScenarios = () => {
    //TODO: INDOOR-OUTDOOR: In this case, we redirect the Directions to the IndoorMap, it also means its the different building scenario.
    // Also, when exiting the indoorView, we should be brought back here! Also append indoorMap at the first element.
    //TODO: Pass building name (key) to IndoorMapView
    if (destinationResponse.generalRouteInfo.isStartAddressClassRoom && !destinationResponse.generalRouteInfo.isEndAddressClassRoom) {
        setIndoorScenario1(true);
        if (inside) {
            props.navigation.navigate("IndoorMapView", { From: destinationResponse.generalRouteInfo.isStartAddressClassRoom, To: destinationResponse.generalRouteInfo.endAddress })
            setInside(false);
        }
    }
    //TODO: INDOOR-OUTDOOR: In this case, after the last instruction is shown, the indoor mapView should be displayed.
    else if (!destinationResponse.generalRouteInfo.isStartAddressClassRoom && destinationResponse.generalRouteInfo.isEndAddressClassRoom) {
       setIndoorScenario2(true);
    }
    //TODO: INDOOR-OUTDOOR: In this case, it's a mix of the two previous ifs: We redirect to indoorMap and then add the indoorMapView should appended 
    // after last instruction.
    else if (destinationResponse.generalRouteInfo.isStartAddressClassRoom && destinationResponse.generalRouteInfo.isEndAddressClassRoom) {
        setIndoorScenario3(true);
       alert("Both the destination and the origin are classrooms");
    }
}

    useEffect(() => {
        if (instructionIndex == 0) {
            setIsFirstInstruction(true); //When Direction enabled, we are at the first instruction.
        }
        else if (instructionIndex >= destinationResponse.steps.length - 1) {
            setIsLastInstruction(true);
        }
        indoorScenarios();
    });


    /**
     * Description: Go back method
     * Using Stack navigator.
     */
    const goBackPressHandler = () => {
        props.navigation.goBack();
    };
    /**
     * Description: This method will update the region to fit all coordinates of the a specific (index) step of the instruction. 
     * @param {*} index 
     */
    const updateMapRegionToInstruction = (index) => {
        setTimeout(() => {
            mapRef.current.fitToCoordinates(
                destinationResponse.steps[index].polylines,
                { edgePadding: { bottom: 100, right: 50, left: 50, top: 300 }, animated: true, });

        }, 100);
    };

    /**
     * Description: The map has to be initialized to the first instruction.
     * Particularity: We used the reference of the mapview used in ref={mapRef}. 
     */
    const initMapRegion = () => {
        setTimeout(() => {
            mapRef.current.fitToCoordinates(
                destinationResponse.steps[0].polylines,
                { edgePadding: { bottom: 100, right: 50, left: 50, top: 300 }, animated: true, });
        }, 100);
    };
    /**
     * Description: This method will increment the instructionIndex so that we can render the next instruction 
     * in the MapView. 
     * How: 
     * 1. Making sure it's not the last instruction, if it is, we disabled the button by setting 
     * setIsLastInstruction to true. If it's not, we increment the counter and setIsLastInstruction
     * to false.
     * 2. We update the mapView by calling updateMapRegionToInstruction with the index incremented.
     */
    const goToNextInstruction = () => {
        if (instructionIndex >= destinationResponse.steps.length - 1) {
            setIsLastInstruction(true);
        } else {
            setInstructionIndex(instructionIndex + 1);
            setIsFirstInstruction(false);
            updateMapRegionToInstruction(instructionIndex + 1);
        }
    };
    /**
     * Same as goToNextInstruction but for previous instruction
     */
    const goToPreviousInstruction = () => {
        if (instructionIndex == 0) {
            setIsFirstInstruction(true);
        } else {
            setInstructionIndex(instructionIndex - 1);
            setIsLastInstruction(false);
            updateMapRegionToInstruction(instructionIndex - 1);
        }
    };

    return (
        <View>
            <MapView
                ref={mapRef}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                showsCompass={true}
                showsBuildings={true}
                onLayout={initMapRegion}
                showsIndoors={false}
            // customMapStyle = {mapStyleJsonDownloaded} Refer to TODO: A)
            >
                <Polyline
                    coordinates={destinationResponse ? destinationResponse.generalRouteInfo.overviewPolyline : []}
                    strokeWidth={6}
                    strokeColor="pink"
                />
            </MapView>
            <View style={styles.circleCurrentLocation}>
                <CurrentLocationButton mapReference={mapRef} />
            </View>
            <View style={styles.navigationHeader}>
                <View style={styles.navigationHeaderNestedView}>
                    <TouchableOpacity onPress={goBackPressHandler}>
                        <Icon name="md-arrow-round-back" style={styles.backIcon}></Icon>
                    </TouchableOpacity>
                    <View style={styles.directionTextHeader}>
                        <Text style={styles.DirectionTextHeaderStyle}>Route Directions</Text>
                        <View style={styles.lineHeader}></View>
                    </View>
                    <View style={styles.detailedInstructions}>
                        <HTML
                            html={destinationResponse ? destinationResponse.steps[instructionIndex].htmlInstructions : "Invalid"}
                        />
                        <View style={styles.infoMetrics}>
                            <Text style={styles.stepMetrics}>Duration: <Text style={styles.stepMetricsValues}>{destinationResponse ? destinationResponse.steps[instructionIndex].duration : "N/A"}</Text></Text>
                            <Text style={styles.stepMetrics}>Distance: <Text style={styles.stepMetricsValues}>{destinationResponse ? destinationResponse.steps[instructionIndex].distance : "N/A"}</Text></Text>
                            <Text style={styles.stepMetrics}>By: <Text style={styles.stepMetricsValues}>{destinationResponse ? destinationResponse.steps[instructionIndex].travelMode : "N/A"}</Text></Text>
                        </View>
                    </View>
                </View>
            </View>
            {//TODO: Add GetInside Button or Icon for the cases explained before. Refer to TODO:INDOOR-OUTDOOR:
            isFirstInstruction &&
                <TouchableOpacity style={styles.arrowLeftDirectionDisabled} disabled={true}>
                    <View>
                        <Icon name="arrow-back" style={styles.disabledArrow} />
                    </View>
                </TouchableOpacity> 
            }
            {//TODO:Add OnPress
            isFirstInstruction && (indoorScenario1 || indoorScenario3) &&
                <TouchableOpacity style={styles.indoorBuilding}>
                    <View>
                        <Icon type="FontAwesome5" name="building" onPress={() => {props.navigation.navigate("IndoorMapView", { From: destinationResponse.generalRouteInfo.isStartAddressClassRoom, To: destinationResponse.generalRouteInfo.endAddress })}} />
                    </View>
                </TouchableOpacity> 
            }
            {!isFirstInstruction &&
                <TouchableOpacity style={styles.arrowLeftDirection} onPress={goToPreviousInstruction}>
                    <View>
                        <Icon name="arrow-back" />
                    </View>
                </TouchableOpacity>
            }
            {//TODO: Add onPress()
            isLastInstruction && (indoorScenario2 || indoorScenario3) &&
                <TouchableOpacity style={styles.indoorBuilding}>
                    <View >
                        <Icon type="FontAwesome5" name="building" onPress={() => {props.navigation.navigate("IndoorMapView", { From: destinationResponse.generalRouteInfo.startAddress, To: destinationResponse.generalRouteInfo.isEndAddressClassRoom })}} />
                    </View>
                </TouchableOpacity>
            }
            {isLastInstruction &&
                <TouchableOpacity style={styles.arrowRightDirectionDisabled}>
                    <View >
                        <Icon name="arrow-forward" style={styles.disabledArrow} />
                    </View>
                </TouchableOpacity>
            }
            {!isLastInstruction &&
                <TouchableOpacity style={styles.arrowRightDirection} onPress={goToNextInstruction}>
                    <View >
                        <Icon name="arrow-forward" />
                    </View>
                </TouchableOpacity>
            }
        </View>
    );
}

Directions.propTypes = {
    navigation: PropTypes.any,
    goBack: PropTypes.func,
    initialRegion: PropTypes.any
};

export const styles = StyleSheet.create({
    map: {
        height: "100%"
    },
    navigationHeader: {
        width: "100%",
        height: "25%",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#3F8796",
        position: "absolute"
    },
    navigationHeaderNestedView: {
        top: "15%"
    },
    directionTextHeader: {
        justifyContent: "center",
        alignItems: "center"
    },
    DirectionTextHeaderStyle: {
        color: "white",
        fontSize: 25
    },
    lineHeader: {
        borderBottomColor: "white",
        width: "100%",
        borderBottomWidth: 2,
        top: "10%"
    },
    backIcon: {
        color: "white",
        left: "5%",
        top: "40%"
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
    },
    arrowRightDirection: {
        top: "90%",
        left: "84%",
        width: 50,
        height: 50,
        position: "absolute",
        color: "#2A2E43",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#2A2E43",
        borderRadius: 5
    },
    arrowLeftDirection: {
        top: "90%",
        left: "70%",
        position: "absolute",
        width: 50,
        height: 50,
        color: "#2A2E43",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#2A2E43",
        borderRadius: 5
    },
    arrowLeftDirectionDisabled: {
        top: "90%",
        left: "70%",
        position: "absolute",
        width: 50,
        height: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 5
    },
    disabledArrow: {
        color: "grey"
    },
    arrowRightDirectionDisabled: {
        top: "90%",
        left: "84%",
        position: "absolute",
        width: 50,
        height: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 5
    },
    circleCurrentLocation: {
        position: "absolute",
        top: "80%",
        left: "80%"
    },
    indoorBuilding: {
        position: "absolute",
        top: "70%",
        left: "80%",
        width: 60,
        height: 60,
        borderRadius: 100/2,
        backgroundColor: "#f0b400",
        justifyContent: "center",
        alignItems: "center"
    },
    detailedInstructions: {
        top: "15%",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    infoMetrics: {
        flexDirection: "row",
        top: "2%",
        justifyContent: "space-between",
        width: "90%"
    },
    stepMetrics: {
        fontSize: 18,
        color: "white"
    },
    stepMetricsValues: {
        fontWeight: "bold",
        color: "yellow"
    }
});

export default Directions;
