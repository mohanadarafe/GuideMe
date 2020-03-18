import React, { useEffect, useRef } from "react";
import { StyleSheet, AsyncStorage, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { View, Button, Text, Icon } from "native-base";
import PolyLine from "@mapbox/polyline";
import PropTypes from "prop-types";
import { BottomMenu } from "../components/BottomMenu";


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
            }
        },
        steps: []
    }
    directionObject.steps = jsonLeg.steps.map(step => {

        // let decodedPolylines = decodedPolylinesAlgo(step.polyline.points);
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
            htmlInstructions: instructionsHtmlStyle+step.html_instructions+"</div>",
            travelMode: step.travel_mode
        }
    });

    //Making sure the last instructions doesn't break the consistency of the layout ... I know the line is ugly but I dont see any other way.
    directionObject.steps[directionObject.steps.length-1].htmlInstructions = directionObject.steps[directionObject.steps.length-1].htmlInstructions.replace("<div style=\"font-size:0.9em\">",instructionsHtmlStyle);

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
    const [previewMode, setPreviewMode] = React.useState(true);
    const [detailedInstructions, setDetailedInstructions] = React.useState();
    const [directionRegion, setDirectionRegion] = React.useState(props.initialRegion);
    const [backArrow, setBackArrow] = React.useState(false);
    const [detailedInstructionsObject, setdetailedInstructionsObject] = React.useState(null);

    const mapRef = useRef(null);

    const handleMapPress = () => {
        const region = {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        };
        mapRef.current.animateToRegion(region, 1000);
    };
    const goBackPressHandler = () => {
        props.navigation.goBack();
    };

    // TODO: uncomment when linking DoubleSearch to this screen
    // if (backArrow && props.backToDoubleSearch === true) {
    //     return (
    //         <View style={styles.DoubleSearch}>
    //             <DoubleSearch navigation={navigation} />
    //         </View>
    //     );
    // }

    useEffect(() => {

        const fetchData = async () =>  {
            try{
                // The following line is commented to avoid unecessary requests on the direcitons API. 
                // FIXME: To make it work, you need two things ; 1. Uncomment the line 2. get the Api key from Alain :)
                let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyC_ik7PAKgcFPtFYnDAqCr3TI7HM9QU_SY`);
                const jsonResponse = await resp.json();
                const decodedPoints = decodedPolylinesAlgo(jsonResponse.routes[0].overview_polyline.points);
                setDecodedPolylines(decodedPoints);
                let filteredInstruction = getFilteredDetailedInstructions(jsonResponse.routes[0].legs[0]);
                setNumberOfSteps(jsonResponse.routes[0].legs[0].steps.length);
                setdetailedInstructionsObject(filteredInstruction);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const onLayout = () => {
        setTimeout(() => {
            mapRef.current.fitToCoordinates([
                { latitude: 45.496557, longitude: -73.578896 }, { latitude: 45.457841, longitude: -73.640307 }],
                { edgePadding: { bottom: 10, right: 0, left: 0, top: 0 }, animated: true, });
        }, 100);
    };
    return (
        <View>
            <MapView
                ref={mapRef}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                region={directionRegion}
                showsUserLocation={true}
                showsCompass={true}
                showsBuildings={true}
                onLayout={onLayout}
            >

                <Polyline
                coordinates = {decodedPolylines}
                strokeWidth = {6}
                strokeColor = "pink"
                />
            </MapView>

            <View style={styles.navigationHeader}>
                <View style={{ top: "15%" }}>
                    <TouchableOpacity onPress={goBackPressHandler}>
                        <Icon name="md-arrow-round-back" style={styles.backIcon}></Icon>
                    </TouchableOpacity>
                    <View style={styles.directionTextHeader}>
                        <Text style={styles.DirectionTextHeaderStyle}>Route Directions</Text>
                        <View style={styles.lineHeader}></View>
                    </View>

                    {/* <View style={styles.directionText}>
                        <Text style={styles.DirectionTextHeader}>Route Directions</Text>
                            <View style={{ width: "100%", height: "50%", top: "10%" }}>
                                <View style={styles.directionLabelContainer}>
                                    
                                    <View style={styles.iconContainer}>
                            <Icon name="md-locate" style={styles.icon}></Icon>
                            <Text style={styles.directionLabels}>From: Current Location </Text>
                        </View>
                        </View>
                            <View style={styles.directionLabelContainer}> 
                            <View style={styles.iconContainer}>
                            <Icon  type="Feather" name="map-pin"  style={styles.icon}></Icon>
                            <Text style={styles.directionLabels}>To: Hall Building</Text>
                            </View>
                        </View>
                    </View>
                    </View> */}
                </View>
            </View>

            <BottomMenu previewMode={previewMode} navigation = {props.navigation} directionResponse = {detailedInstructionsObject}/>
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
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
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
        fontSize: 30

    },
    backButtonContainer: {
        top: "87%",
        left: "70%",
        position: "absolute",
        height: 50,
        width: 100,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomArrowDirectionContainer: {
        top: "87%",
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
    icon: {
        position: "absolute",
        color: "#FFFFFF",
        alignSelf: "center"
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
    }

});

export default PreviewDirections;
