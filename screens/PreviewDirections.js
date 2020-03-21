import React, { useEffect, useRef } from "react";
import { StyleSheet, AsyncStorage, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { View, Button, Text, Icon } from "native-base";
import PolyLine from "@mapbox/polyline";
import PropTypes from "prop-types";
import { BottomMenu } from "../components/BottomMenu";
import { api_key } from "../gmaps_api/apiKey"

const getFilteredDetailedInstructions = (jsonLeg) => {

    const instructionsHtmlStyle = "<div style=\"font-size:1.4em;color:white;\">";
    var directionObject = {
        generalRouteInfo: {
            totalDistance: jsonLeg.distance.text,
            totalDuration: jsonLeg.duration.text,
            startAddress: jsonLeg.start_address,
            startLocation: {
                latitude: jsonLeg.start_location.lat,
                longitude: jsonLeg.start_location.lng,
            },
            endAddress: jsonLeg.end_address,
            endLocation: {
                latitude: jsonLeg.end_location.lat,
                longitude: jsonLeg.end_location.lng
            },
            overviewPolyline: null
        },
        steps: []
    }
    directionObject.steps = jsonLeg.steps.map(step => {

        return {
            distance: step.distance.text,
            duration: step.duration.text,
            polylines: decodedPolylinesAlgo(step.polyline.points),
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
        }
    });

    //Making sure the last instructions doesn't break the consistency of the layout ... I know the line is ugly but I dont see any other way.
    directionObject.steps[directionObject.steps.length - 1].htmlInstructions = directionObject.steps[directionObject.steps.length - 1].htmlInstructions.replace("<div style=\"font-size:0.9em\">", instructionsHtmlStyle);

    return directionObject;
}

const decodedPolylinesAlgo = (hashedPolyline) => {
    let points = PolyLine.decode(hashedPolyline);
    return (points.map(point => {
        return {
            latitude: point[0],
            longitude: point[1]
        }
    }));
}



/**
 * US1 - As a user, I would like to navigate through SGW campus.
 * US2 - As a user, I would like to navigate through Loyola campus.
 * 
 * This is our main screen which includes all the components inside a map.
 */
function PreviewDirections(props) {

    const [decodedPolylines, setDecodedPolylines] = React.useState([]);
    const [detailedInstructionsObject, setdetailedInstructionsObject] = React.useState(null);

    // The variables retrived from the preference page 
    const [personaType, setPersonaType] = React.useState()
    const [mobilityReduced, setMobilityReduced] = React.useState()
    const [transportMethod, setTransportMethod] = React.useState()

    const mapRef = useRef(null);


    const goBackPressHandler = () => {
        props.navigation.goBack();
    };

    const initMapRegion = () => {
        setTimeout(() => {
            mapRef.current.fitToCoordinates([
                { latitude: 45.493622, longitude: -73.577003 }, { latitude: 45.497092, longitude: -73.5788 }],
                { edgePadding: { bottom: 100, right: 50, left: 50, top: 300 }, animated: true, });
        }, 100);
    }

    const updateMapRegionToOverallPath = (polylines) => {
        setTimeout(() => {
            console.log(polylines);
            mapRef.current.fitToCoordinates(
                // decodedPolylines ? decodedPolylines : [{ latitude: 45.493622, longitude: -73.577003 }, { latitude: 45.497092, longitude: -73.5788 }],
                polylines,
                { edgePadding: { bottom: 100, right: 50, left: 50, top: 300 }, animated: true, });
            
        }, 100);
    }

    /**
     * TODO: C) The Value of the origin cannot be hard coded for the final version. 
     *          Has to be fetch when this component will be linked to the DoubleSearch.
     */
    // const origin = "45.493622,-73.577003";
    // const destination = "45.497092,-73.5788";

    
    /* 2. Read the params from the navigation state */
    const { params } = props.navigation.state;
    const fromCoordinates = params ? params.From : null;
    const toCoordinates = params ? params.To : null;
    const origin = `${fromCoordinates.latitude},${fromCoordinates.longitude}`;
    const destination = `${toCoordinates.latitude},${toCoordinates.longitude}`;

    // TODO: uncomment when linking DoubleSearch to this screen
    // if (backArrow && props.backToDoubleSearch === true) {
    //     return (
    //         <View style={styles.DoubleSearch}>
    //             <DoubleSearch navigation={navigation} />
    //         </View>
    //     );
    // }

    const getPersonaType = async () => {
        let name = await AsyncStorage.getItem("firstCategory");
        setPersonaType(name);
    };

    const getMobility = async () => {
        let name = await AsyncStorage.getItem("secondCategory");
        setMobilityReduced(name);
    };

    const getMethodTravel = async () => {
        let name = await AsyncStorage.getItem("thirdCategory");
        setTransportMethod(name);
    };


    useEffect(() => {

        const fetchData = async () => {
            try {
                // The following line is commented to avoid unecessary requests on the direcitons API. 
                // FIXME: To make it work, you need two things ; 1. Uncomment the line 2. get the Api key from Alain :)
                 let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${api_key.id}`);
                const jsonResponse = await resp.json();
                //TODO: If there the size of the routes array is 0, then alert error!
                const decodedPoints = decodedPolylinesAlgo(jsonResponse.routes[0].overview_polyline.points);
                setDecodedPolylines(decodedPoints);
                updateMapRegionToOverallPath(decodedPoints);
                let filteredInstruction = getFilteredDetailedInstructions(jsonResponse.routes[0].legs[0]);
                filteredInstruction.generalRouteInfo.overviewPolyline = decodedPoints;
                setdetailedInstructionsObject(filteredInstruction);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            getPersonaType();
            getMobility();
            getMethodTravel();
        }, 1);
        return () => clearInterval(intervalId);
    });

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
            >

                <Polyline
                    coordinates={decodedPolylines}
                    strokeWidth={6}
                    strokeColor="pink"
                />
            </MapView>

            <View style={styles.navigationHeader}>
                <View style={{ top: "15%" }}>
                    <TouchableOpacity onPress={goBackPressHandler}>
                        <Icon name="md-arrow-round-back" style={styles.backIcon}></Icon>
                    </TouchableOpacity>
                    <View style={styles.directionTextHeader}>
                        <Text style={styles.DirectionTextHeaderStyle}>Preview: Route Directions</Text>
                        <View style={styles.lineHeader}></View>
                    </View>
                    <View style={styles.lowerHeaderContainer}>
                        <View style={styles.addressContainer}>
                            <View style={styles.iconAndTextContainter}>
                                <Icon name="location" type="Entypo" style={styles.sideIcons} />
                                <Text style={styles.fromToSideLabels}>From: </Text>
                            </View>
                            <Text style={styles.directionLabels}>{detailedInstructionsObject ? detailedInstructionsObject.generalRouteInfo.startAddress : "N/A"}</Text>
                        </View>
                        <View style={styles.addressContainer}>
                            <View style={styles.iconAndTextContainter}>
                                <Icon name="location" type="Entypo" style={styles.sideIcons} />
                                <Text style={styles.fromToSideLabels}>To: </Text>
                            </View>
                            <Text style={styles.directionLabels}>{detailedInstructionsObject ? detailedInstructionsObject.generalRouteInfo.endAddress : "N/A"}</Text>
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
    directionText: {
        justifyContent: "center",
        alignItems: "center"
    },
    DirectionTextHeader: {
        color: "white",
        fontSize: 25
    },

    DirectionTextHeader: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
    },
    directionLabels: {
        fontWeight: "normal",
        fontSize: 14,
        color: "white",
        width: "70%"
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
        top: "10%"
    },
    backIcon: {
        color: "white",
        left: "5%",
        top: "40%"
    },
    directionTextHeader: {
        justifyContent: "center",
        alignItems: "center"
    },
    DirectionTextHeaderStyle: {
        color: "white",
        fontSize: 22
    },
    fromToSideLabels: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
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
    addressContainer:{
        top: "2%",
        flexDirection: "row",
        alignItems: "center" 
    },
    lowerHeaderContainer:{
        flexDirection: "column", 
        width: "100%",
        top: "5%" 
    }   

});

export default PreviewDirections;
