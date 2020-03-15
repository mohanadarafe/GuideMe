import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { View, Text, Icon } from "native-base";
import CurrentLocationButton from "../components/CurrentLocationButton";
import PolyLine from "@mapbox/polyline";
import PropTypes from "prop-types";
import HTML from "react-native-render-html";

const mapPosition = {
    sgwCoord: {
        latitude: 45.496557,
        longitude: -73.578896,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    },
    loyCoord: {
        latitude: 45.457841,
        longitude: -73.640307,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }
};

function getFilteredDetailedInstructions (jsonLeg) {
    
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
            htmlInstructions: step.html_instructions,
            travelMode: step.travel_mode
        }
    });

    return directionObject;
}

function decodedPolylinesAlgo (hashedPolyline) {
    let points = PolyLine.decode(hashedPolyline);
    return (points.map(point => {
        return {
            latitude: point[0],
            longitude: point[1]
        }
    }));
}



/**
 * TODO: A) If we want to enabled a dark mode. https://github.com/react-native-community/react-native-maps#customizing-the-map-style
*/
/**
 * US1 - As a user, I would like to navigate through SGW campus.
 * US2 - As a user, I would like to navigate through Loyola campus.
 * 
 * This is our main screen which includes all the components inside a map.
 */
function Directions(props) {

    const [decodedPolylines, setDecodedPolylines] = React.useState([]);
    // const [detailedInstructions, setDetailedInstructions] = React.useState(null);
    const [directionRegion, setDirectionRegion] = React.useState(null);
    const [detailedInstructionsObject, setdetailedInstructionsObject] = React.useState(null);
    const mapRef = useRef(null);

    const origin = "45.493622,-73.577003";
    const destination = "45.497092,-73.5788";
    

    const goBackPressHandler = () => {
        props.navigation.goBack();
    }


    const initMapRegion = () => {
        setTimeout(() => {
            mapRef.current.fitToCoordinates([
                { latitude: 45.493622, longitude: -73.577003 }, { latitude: 45.497092, longitude: -73.5788 }],
                { edgePadding: { bottom: 100, right: 50, left: 50, top: 300 }, animated: true, });
        }, 100);
    }

    useEffect(() => {

        // const fetchData = async () =>  {
        //     try{
        //         // The following line is commented to avoid unecessary requests on the direcitons API. 
        //         // FIXME: To make it work, you need two things ; 1. Uncomment the line 2. get the Api key from Alain :)
        //         let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyC_ik7PAKgcFPtFYnDAqCr3TI7HM9QU_SY`);
        //         const jsonResponse = await resp.json();
        //         const decodedPoints = decodedPolylinesAlgo(jsonResponse.routes[0].overview_polyline.points);
        //         setDecodedPolylines(decodedPoints);
        //         let filteredInstruction = getFilteredDetailedInstructions(jsonResponse.routes[0].legs[0]);
        //         setdetailedInstructionsObject(filteredInstruction);
        //     } catch(error) {
        //         console.log(error);
        //     }
        // }
        // fetchData();
    }, []);

    /**
     * TODO: Write on the View the proper instructions and make it dynamic (change instructions) with the clicks
     *       and zoom the mapview accordingly (fitToCoordinates).
     */
    const htmlText = "Head <b>northeast</b> on <b>Rue Sainte-Catherine O</b> toward <b>Rue Guy</b>";
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
                onLayout={initMapRegion}
                // customMapStyle = {mapStyleJsonDownloaded} Refer to TODO: A)
            >
                <Polyline
                coordinates = {decodedPolylines}
                strokeWidth = {6}
                strokeColor = "pink"
                />
            </MapView>
            <View style ={styles.circleCurrentLocation}>
                <CurrentLocationButton mapReference ={mapRef}/>
            </View>
            <View style={styles.navigationHeader}>
                <View style={{ top: "25%" }}>
                    <TouchableOpacity onPress = {goBackPressHandler}>                    
                        <Icon name="md-arrow-round-back" style={styles.backIcon}></Icon>
                    </TouchableOpacity>
                    <View style={styles.directionTextHeader}>
                        <Text style={styles.DirectionTextHeaderStyle}>Route Directions</Text>
                        <View style={styles.lineHeader}></View>
                    </View>
                    <View style = {styles.detailedInstructions}>
                    <HTML html={htmlText} />
                    </View>
                </View>
            </View>
            <View style={styles.bottomArrowDirectionContainer}>
                <TouchableOpacity style={styles.arrowDirection}>
                    <View>
                        <Icon name="arrow-back"></Icon>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.arrowDirection}>
                    <View >
                        <Icon name="arrow-forward"></Icon>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

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
    directionTextHeader: {
        justifyContent: "center",
        alignItems: "center"
    },
    DirectionTextHeaderStyle: {
        color: "white",
        fontSize: 25
    },
    lineHeader: {
        borderBottomColor: 'white',
        width: "100%",
        borderBottomWidth: 2,
        top: "10%"
    },
    backIcon: {
        color: "white",
        left: "5%"
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
    circleCurrentLocation: {
        position: "absolute",
        top: "80%",
        left: "80%"
    },
    detailedInstructions: {
        top: "5%",
        height: "50%",
        width: "100%",
        backgroundColor: "#2A2E43",
        // flexDirection: "row"
    }

});

export default Directions;
