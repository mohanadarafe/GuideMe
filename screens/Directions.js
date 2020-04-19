import { Icon, Text, View } from "native-base";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import HTML from "react-native-render-html";
import CurrentLocationButton from "../components/CurrentLocationButton";


/**
 * TODO: A) If we want to enabled a dark mode. https://github.com/react-native-community/react-native-maps#customizing-the-map-style
*/
/**
 * US1 - As a user, I would like to navigate through SGW campus.
 * US2 - As a user, I would like to navigate through Loyola campus.
 * This is our main screen which includes all the components inside a map.
 */
function Directions(props) {

    const [instructionIndex, setInstructionIndex] = React.useState(0);
    const [isLastInstruction, setIsLastInstruction] = React.useState(false);
    const [isFirstInstruction, setIsFirstInstruction] = React.useState(true);
    const [indoorScenario1, setIndoorScenario1] = React.useState(false);
    const [indoorScenario2, setIndoorScenario2] = React.useState(false);
    const [indoorScenario3, setIndoorScenario3] = React.useState(false);
    const [isFromAClassRoom, setIsFromAClassRoom] = React.useState(true);
    const mapRef = useRef(null);

    /* 2. Read the params from the navigation state */
    const { params } = props.navigation.state;
    const destinationResponse = params ? params.destinationResponse : null;

    /**
     * This method is called after the first render and call the proper indoor scenario if we there's a classroom in either from or to.
     * 
     * Scenarios: 
     * 1. If the origin is a classroom, then, we have to go to Indoor Directions first.
     * 2. If the destination is a classrom, then, we start with Outdoor Directions.
     * 3. If both origin and destination are clasrooms, we have to go to Indoor Directions first.
     * 
     * Impact later on:
     * We added conditional rendering to give users the opportunity to go back in the Indoor mode.
     * In scenario 1: We add the button at the first instruction of outdoor
     * In secnario 2: We add the button at the last instruction of outdoor
     * In scenario 3: We add the button at both the first and last instructions of outdoour
     * The other scenario is in the DoubleSearch context and it's a special case of scenario 3. In that
     * case, we have two classrooms but from the same building. We will never go into PreviewDirections 
     * & Directions.
     * 
     */
    const indoorScenarios = () => {
        if (destinationResponse.generalRouteInfo.isStartAddressClassRoom && !destinationResponse.generalRouteInfo.isEndAddressClassRoom) {
            setIndoorScenario1(true);
            if (isFromAClassRoom) {
                props.navigation.navigate("IndoorMapView", { From: destinationResponse.generalRouteInfo.isStartAddressClassRoom, To: destinationResponse.generalRouteInfo.endAddress })
                setIsFromAClassRoom(false);
            }
        }
        else if (!destinationResponse.generalRouteInfo.isStartAddressClassRoom && destinationResponse.generalRouteInfo.isEndAddressClassRoom) {
            setIndoorScenario2(true);
        }
        else if (destinationResponse.generalRouteInfo.isStartAddressClassRoom && destinationResponse.generalRouteInfo.isEndAddressClassRoom) {
            setIndoorScenario3(true);
            if (isFromAClassRoom) {
                props.navigation.navigate("IndoorMapView", { From: destinationResponse.generalRouteInfo.isStartAddressClassRoom, To: destinationResponse.generalRouteInfo.isEndAddressClassRoom, isFirst: true });
                setIsFromAClassRoom(false);
            }
        }
    }
    /**
     * The useEffect is a hook that will set the state FirstInstruction and LastInstruction to true when the conditions are met.
     * Also, it calls the indoor scenario.
     */
    useEffect(() => {
        if (instructionIndex == 0) {
            setIsFirstInstruction(true);
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
                destinationResponse.steps[index].polylines.values,
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
                destinationResponse.steps[0].polylines.values,
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
        <View testID="Directions_ScreenView">
            <MapView testID="Directions_MapView"
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
                {destinationResponse ? destinationResponse.steps.map((step, index) => (
                    <Polyline key={index}
                        coordinates={step.polylines.values}
                        strokeWidth={5}
                        strokeColor={step.polylines.color}
                    />
                )) : <Polyline
                        coordinates={decodedPolylines}
                        strokeWidth={5}
                        strokeColor="pink"
                    />
                }
            </MapView>
            <View style={styles.circleCurrentLocation}>
                <CurrentLocationButton mapReference={mapRef} />
            </View>
            <View style={styles.navigationHeader}>
                <View style={styles.navigationHeaderNestedView}>
                    <TouchableOpacity onPress={goBackPressHandler} style={styles.backButtonContainer}>
                        <Icon name="md-arrow-round-back" style={styles.backIcon}></Icon>
                    </TouchableOpacity>
                    <View style={styles.directionTextHeader}>
                        <Text style={styles.DirectionTextHeaderStyle}>Route Directions</Text>
                        <View style={styles.lineHeader}></View>
                    </View>
                </View>
                <View style={styles.lowerHeader}>
                    <View style={styles.detailedInstructions}>
                        <HTML
                            html={destinationResponse ? destinationResponse.steps[instructionIndex].htmlInstructions : "<div style=\"font-size:1.6em;color:white;\">Invalid.</div>"}
                        />
                        <View style={styles.infoMetrics}>
                            <Text style={styles.stepMetrics}>Duration: <Text style={styles.stepMetricsValues}>{destinationResponse ? destinationResponse.steps[instructionIndex].duration : "N/A"}</Text></Text>
                            <Text style={styles.stepMetrics}>Distance: <Text style={styles.stepMetricsValues}>{destinationResponse ? destinationResponse.steps[instructionIndex].distance : "N/A"}</Text></Text>
                            <Text style={styles.stepMetrics}>By: <Text style={styles.stepMetricsValues}>{destinationResponse ? destinationResponse.steps[instructionIndex].travelMode : "N/A"}</Text></Text>
                        </View>
                    </View>
                </View>
            </View>
            {
                isFirstInstruction &&
                <TouchableOpacity style={styles.arrowLeftDirectionDisabled} disabled={true}>
                    <View>
                        <Icon name="arrow-back" style={styles.disabledArrow} />
                    </View>
                </TouchableOpacity>
            }
            {
                isFirstInstruction && (indoorScenario1) &&
                <TouchableOpacity style={styles.indoorBuilding}>
                    <View>
                        <Icon type="FontAwesome5" name="building" onPress={() => { props.navigation.navigate("IndoorMapView", { From: destinationResponse.generalRouteInfo.isStartAddressClassRoom, To: destinationResponse.generalRouteInfo.endAddress }) }} />
                    </View>
                </TouchableOpacity>
            }
            {
                (isFirstInstruction && indoorScenario3) &&
                <TouchableOpacity style={styles.indoorBuilding}>
                    <View>
                        <Icon type="FontAwesome5" name="building" onPress={() => { props.navigation.navigate("IndoorMapView", { From: destinationResponse.generalRouteInfo.isStartAddressClassRoom, To: destinationResponse.generalRouteInfo.isEndAddressClassRoom, isFirst: true }) }} />
                    </View>
                </TouchableOpacity>
            }
            {
                (isLastInstruction && indoorScenario3) &&
                <TouchableOpacity style={styles.indoorBuilding}>
                    <View>
                        <Icon type="FontAwesome5" name="building" onPress={() => { props.navigation.navigate("IndoorMapView", { From: destinationResponse.generalRouteInfo.isStartAddressClassRoom, To: destinationResponse.generalRouteInfo.isEndAddressClassRoom, isLast: true }) }} />
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
            {
                isLastInstruction && (indoorScenario2) &&
                <TouchableOpacity style={styles.indoorBuilding}>
                    <View >
                        <Icon type="FontAwesome5" name="building" onPress={() => { props.navigation.navigate("IndoorMapView", { From: destinationResponse.generalRouteInfo.startAddress, To: destinationResponse.generalRouteInfo.isEndAddressClassRoom }) }} />
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
                <TouchableOpacity testID="Directions_BottomRightButton" style={styles.arrowRightDirection} onPress={goToNextInstruction}>
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
        backgroundColor: "#2A2E43",
        position: "absolute"
    },
    navigationHeaderNestedView: {
        top: "15%",
        flexDirection: "column",
    },
    lowerHeader: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "50%",
        bottom: "65%"
    },
    directionTextHeader: {
        justifyContent: "center",
        alignItems: "center",
        bottom: "78%"
    },
    DirectionTextHeaderStyle: {
        color: "white",
        fontSize: 20,
        bottom: "100%",
        fontFamily: "encodeSansExpanded",
    },
    lineHeader: {
        borderBottomColor: "white",
        width: "100%",
        borderBottomWidth: 2,
        bottom: "20%",
    },
    backIcon: {
        color: "white",
        width: "100%",
    },
    backButtonContainer: {
        left: "5%",
        top: "10%",
        textAlign: "center",
        width: "10%",
        height: "100%"
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
        borderRadius: 100 / 2,
        backgroundColor: "#f0b400",
        justifyContent: "center",
        alignItems: "center"
    },
    detailedInstructions: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    infoMetrics: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
    },
    stepMetrics: {
        fontSize: 18,
        color: "white",
        marginTop: 10
    },
    stepMetricsValues: {
        fontWeight: "bold",
        color: "yellow"
    }
});

export default Directions;
