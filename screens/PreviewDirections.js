/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity, AsyncStorage } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { View, Text, Icon } from "native-base";
import PolyLine from "@mapbox/polyline";
import PropTypes from "prop-types";
import { BottomMenu } from "../components/BottomMenu";

/**
 * Description: This method act as an interface. After taking the leg of the response
 * called jsonLeg as argument, the method will create an object that will 
 * be accessible to the rest of the Mapview components.
 * 
 * Particularity: one of the attributes has an embedded html syntax in it
 * and to be able to render the proper values, we had to do some string 
 * manipulation (first and last line of method).
 * 
 * Returns an object with nested attributes.
 * @param {*} jsonLeg 
 */
const getFilteredDetailedInstructions = (jsonLeg, transportType) => {

    const instructionsHtmlStyle = "<div style=\"font-size:1.2em;color:white;\">";
    var directionObject = {
        generalRouteInfo: {
            totalDistance: jsonLeg.distance.text,
            totalDuration: jsonLeg.duration.text,
            startAddress: jsonLeg.start_address,
            isStartAddressClassRoom: null,
            startLocation: {
                latitude: jsonLeg.start_location.lat,
                longitude: jsonLeg.start_location.lng,
            },
            endAddress: jsonLeg.end_address,
            isEndAddressClassRoom: null,
            endLocation: {
                latitude: jsonLeg.end_location.lat,
                longitude: jsonLeg.end_location.lng
            },
            overviewPolyline: null
        },
        steps: []
    };
    if (transportType != "transit") {
        directionObject.steps = jsonLeg.steps.map(step => {
            return {
                distance: step.distance.text,
                duration: step.duration.text,
                polylines: {
                    values: decodedPolylinesAlgo(step.polyline.points),
                    color: (step.travel_mode == "DRIVING" || step.travel_mode == "BICYCLING") ? "blue" : "black"
                },
                startLocation: {
                    latitude: step.start_location.lat,
                    longitude: step.end_location.lng
                },
                endLocation: {
                    latitude: step.end_location.lat,
                    longitude: step.end_location.lng
                },
                htmlInstructions: instructionsHtmlStyle + step.html_instructions + "</div>",
                travelMode: step.travel_mode
            };
        });
    } else {
        jsonLeg.steps.forEach(transitStep => {
            if (transitStep.steps) {
                transitStep.steps.forEach(atomicStep => {
                    directionObject.steps.push({
                        distance: atomicStep.distance.text,
                        duration: atomicStep.duration.text,
                        polylines: {
                            values: decodedPolylinesAlgo(atomicStep.polyline.points),
                            color: atomicStep.travel_mode == "WALKING" ? "black" : "blue"
                        },
                        startLocation: {
                            latitude: atomicStep.start_location.lat,
                            longitude: atomicStep.end_location.lng
                        },
                        endLocation: {
                            latitude: atomicStep.end_location.lat,
                            longitude: atomicStep.end_location.lng
                        },
                        htmlInstructions: instructionsHtmlStyle + atomicStep.html_instructions + "</div>",
                        travelMode: atomicStep.travel_mode
                    })
                })
            } else {
                directionObject.steps.push({
                    distance: transitStep.distance.text,
                    duration: transitStep.duration.text,
                    polylines: {
                        values: decodedPolylinesAlgo(transitStep.polyline.points),
                        color: transitStep.transit_details.line.color
                    },
                    startLocation: {
                        latitude: transitStep.start_location.lat,
                        longitude: transitStep.end_location.lng
                    },
                    endLocation: {
                        latitude: transitStep.end_location.lat,
                        longitude: transitStep.end_location.lng
                    },
                    htmlInstructions: instructionsHtmlStyle + transitStep.html_instructions + "</div>",
                    travelMode: transitStep.travel_mode
                })
            }
        });
    }

    //Making sure the last instructions doesn't break the consistency of the layout ... I know the line is ugly but I dont see any other way.
    directionObject.steps[directionObject.steps.length - 1].htmlInstructions = directionObject.steps[directionObject.steps.length - 1].htmlInstructions.replace("<div style=\"font-size:0.9em\">", instructionsHtmlStyle);

    return directionObject;
};

/**
 * Description: This method decodes the value of a hashed polylines 
 * by reusing the component made my mapbox PolyLine 
 * notice the capital L. 
 * 
 * Returns an array of latitude and longitude.
 * @param {*} hashedPolyline 
 */
const decodedPolylinesAlgo = (hashedPolyline) => {
    let points = PolyLine.decode(hashedPolyline);
    return (points.map(point => {
        return {
            latitude: point[0],
            longitude: point[1]
        };
    }));
};


/**
 * US1 - As a user, I would like to navigate through SGW campus.
 * US2 - As a user, I would like to navigate through Loyola campus.
 * 
 * 
 */
function PreviewDirections (props) {

    const [decodedPolylines, setDecodedPolylines] = React.useState([]);
    const [detailedInstructionsObject, setdetailedInstructionsObject] = React.useState(null);
    const [outdoorTransportType, setOutdoorTransportType] = React.useState("driving");
    const mapRef = useRef(null);

    /**
      * Description: Go back to previous screen method.
      * Using Stack Navigator
      */
    const goBackPressHandler = () => {
        props.navigation.goBack();
    };


    const fromCoordinates = props.navigation.getParam("From", null);
    const toCoordinates = props.navigation.getParam("To", null);
    const fromName = props.navigation.getParam("fromName", null);
    const toName = props.navigation.getParam("toName", null);
    if (!fromCoordinates || !toCoordinates) {
        alert("Sorry, could not load directions. The Starting Point or Destination might be wrong. Please Try again.");
        goBackPressHandler();
    }
    const origin = `${fromCoordinates.latitude},${fromCoordinates.longitude}`;
    const destination = `${toCoordinates.latitude},${toCoordinates.longitude}`;
    // The variables retrived from the preference page 

    /**
         * Description: fetchData() is an async method that makes the API request to Google Maps.
         * Particularity: Requires origin, destination latitudes and longitudes as well the API key. 
         * @param {*} transportType 
        */
    const fetchData = async () => {
        try {
            // Retrieving the apiKey from the AsyncStorage.
            let keyId = await AsyncStorage.getItem("apiKeyId");
            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${keyId}&mode=${outdoorTransportType}`);
            const jsonResponse = await resp.json();
            if (jsonResponse && jsonResponse.routes.length >= 1) { //Added for better error handling. A.U
                const decodedPoints = decodedPolylinesAlgo(jsonResponse.routes[0].overview_polyline.points);
                setDecodedPolylines(decodedPoints);
                updateMapRegionToOverallPath(decodedPoints);
                //Command Pattern
                let filteredInstruction = getFilteredDetailedInstructions(jsonResponse.routes[0].legs[0], outdoorTransportType);
                filteredInstruction.generalRouteInfo.overviewPolyline = decodedPoints;
                filteredInstruction.generalRouteInfo.isStartAddressClassRoom = fromCoordinates.isClassRoom ? fromCoordinates.isClassRoom : null;
                filteredInstruction.generalRouteInfo.isEndAddressClassRoom = toCoordinates.isClassRoom ? toCoordinates.isClassRoom : null;
                setdetailedInstructionsObject(filteredInstruction);
            }
            else { //Error handling
                alert("An error Occurred with your request. Make sure you have valid inputs in your Search. Please try again.");
                goBackPressHandler();
            }
        } catch (error) {
            alert("An error Occurred with your request. Make sure you have valid inputs in your Search. Please try again.");
            goBackPressHandler();
        }
    };


    /**
     * Description: The map has to be initialized to a certain area of the map.
     * We used the reference of the mapview used in ref={mapRef}. 
     * 
     * Particularity: Hard-coded to the SGW campus for now. 
     */
    const initMapRegion = () => {
        setTimeout(() => {
            mapRef.current.fitToCoordinates([
                { latitude: 45.493622, longitude: -73.577003 }, { latitude: 45.497092, longitude: -73.5788 }],
                { edgePadding: { bottom: 100, right: 50, left: 50, top: 300 }, animated: true, });
        }, 100);
    };
    /**
     * Description: This method will update the region to fit all coordinates of the overall path 
     *              by taking an array of polylines. 
     * @param {*} polylines 
     */
    const updateMapRegionToOverallPath = (polylines) => {
        setTimeout(() => {
            mapRef.current.fitToCoordinates(
                polylines,
                { edgePadding: { bottom: 100, right: 50, left: 50, top: 300 }, animated: true, });

        }, 100);
    };
    /**
     * This method will fetch the value of the transport Type that is set in the asyncStorange.
     * By default, the value is driving. 
     */
    const fetchTransportType = async () => {
        let name = await AsyncStorage.getItem("thirdCategory");
        if (name != null) {
        setOutdoorTransportType(name);
        }
    };
    /**
     * The useEffect is a hook that will constantly (every second) calls fetchTransportType in case the value of the transport changes
     * in the PreferenceMenu context. When that happens, the state outdoorTransportType will change which will trigger the fetchData() 
     * method to be call again. This logic must be implemented in the IndoorMap context since we want to know the other two fields: 
     * persona and mobility type.
     */
    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchTransportType();
        }, 1);
        fetchData();
        return () => clearInterval(intervalId);
    }, [outdoorTransportType]);

    return (
        <View testID="PreviewDirections_ScreenView">
            <MapView testID="PreviewDirections_MapView"
                ref={mapRef}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                showsCompass={true}
                showsBuildings={true}
                onLayout={initMapRegion}
                showsIndoors={false}
            >
                {detailedInstructionsObject ? detailedInstructionsObject.steps.map((step, index) => (
                    <Polyline testID="PreviewDirection_MapViewPolyline" key={index}
                        coordinates = {step.polylines.values}
                        strokeWidth = {5}
                        strokeColor = {step.polylines.color}
                    />     
                    )) : <Polyline testID="PreviewDirection_MapViewDefaultPolyline"
                        coordinates={decodedPolylines}
                        strokeWidth={5}
                        strokeColor="pink"
                     /> 
                }
            </MapView>

            <View testID="PreviewDirections_NavigationHeaderView" style={styles.navigationHeader}>
                <View style={styles.navigationHeaderNestedView}>
                    <TouchableOpacity onPress={goBackPressHandler}>
                        <Icon testID="PreviewDirections_GoBackIcon" name="md-arrow-round-back" style={styles.backIcon}></Icon>
                    </TouchableOpacity>
                    <View style={styles.directionTextHeader}>
                        <Text testID="PreviewDirections_ScreenTitleText" style={styles.DirectionTextHeaderStyle}>Preview: Route Directions</Text>
                        <View style={styles.lineHeader}></View>
                    </View> 
                </View>
                <View style={styles.lowerHeaderContainer}>
                    <View style ={styles.fortmatLowerHeader}>
                        <View style={styles.addressContainer}>
                            <View style={styles.iconAndTextContainter}>
                                <Icon name="location" type="Entypo" style={styles.sideIcons} />
                                <Text style={styles.fromToSideLabels}>From: </Text>
                            </View>
                            <Text testID="PreviewDirections_FromLocationText" style={styles.directionLabels}>{fromName ? fromName: "N/A"}</Text>
                        </View>
                        <View style={styles.addressContainer2}>
                            <View style={styles.iconAndTextContainter}>
                                <Icon name="location" type="Entypo" style={styles.sideIcons} />
                                <Text style={styles.fromToSideLabels}>To: </Text>
                            </View>
                            <Text testID="PreviewDirections_ToLocationText" style={styles.directionLabels}>{toName ? toName : "N/A"}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <BottomMenu previewMode={true} navigation={props.navigation} directionResponse={detailedInstructionsObject ? detailedInstructionsObject : null} />
        </View>
    );
}

PreviewDirections.propTypes = {
    navigation: PropTypes.any,
    goBack: PropTypes.func,
    backToDoubleSearch: PropTypes.any
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
        // marginTop: 25,
        flexDirection: "column"
    },
    fortmatLowerHeader: {
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent:"center", 
        height: "70%",
        bottom:"35%",
    },
    directionText: {
        justifyContent: "center",
        alignItems: "center"
    },
    refresh: {
        width: 60,
        height: 60,
        borderRadius: 100 / 2,
        backgroundColor: "#f0b400",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "80%",
        left: "80%"
    },
    disabledRefresh: {
        width: 60,
        height: 60,
        borderRadius: 100 / 2,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "80%",
        left: "80%"
    },
    icon: {
        color: "#2A2E43"
    },
    DirectionTextHeader: {
        color: "#FFFFFF",
        fontSize: 25,
        fontFamily: "encodeSansExpanded",
    },
    directionLabels: {
        fontWeight: "normal",
        fontSize: 20,
        color: "white",
        width: "70%",
    },
    directionLabelContainer: {
        width: "100%",
        height: "50%",
        flexDirection: "column",
        justifyContent: "center",
        left: "25%"
    },
    lineHeader: {
        borderBottomColor: "white",
        width: "100%",
        borderBottomWidth: 2,
        top: "50%",

    },
    backIcon: {
        color: "white",
        left: "5%",
        top: "85%",
        width:"10%",
        height :"50%",
        textAlign: "center"
    },
    directionTextHeader: {
        justifyContent: "center",
        alignItems: "center"
    },
    DirectionTextHeaderStyle: {
        color: "white",
        fontSize: 20,
        bottom: "20%",
        fontFamily: "encodeSansExpanded",
    },
    fromToSideLabels: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    sideIcons: {
        color: "white",
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16
    },
    iconAndTextContainter: {
        flexDirection: "row",
        alignItems: "center",
        width: "25%"
    },
    addressContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    addressContainer2: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        top: "4%"
    },
    lowerHeaderContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "50%",
    }

});

export default PreviewDirections;
