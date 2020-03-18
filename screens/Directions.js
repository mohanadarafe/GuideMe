import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline, Circle } from "react-native-maps";
import { View, Text, Icon } from "native-base";
import CurrentLocationButton from "../components/CurrentLocationButton";
import PolyLine from "@mapbox/polyline";
import HTML from "react-native-render-html";
import PropTypes from "prop-types";


function getFilteredDetailedInstructions (jsonLeg) {
    
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
 * TODO: B) For some reason, in the boundaries of the instructions list, theres a touchable delay. 
*/
/**
 * US1 - As a user, I would like to navigate through SGW campus.
 * US2 - As a user, I would like to navigate through Loyola campus.
 * 
 * This is our main screen which includes all the components inside a map.
 */
function Directions (props) {

    const [decodedPolylines, setDecodedPolylines] = React.useState([]);
    const [directionRegion, setDirectionRegion] = React.useState(null);
    const [detailedInstructionsObject, setdetailedInstructionsObject] = React.useState(null);
    const [numberOfSteps, setNumberOfSteps] = React.useState(0);
    const [instructionIndex, setInstructionIndex] = React.useState(0);
    const [isLastInstruction, setIsLastInstruction] = React.useState(false);
    const [isFirstInstruction, setIsFirstInstruction] = React.useState(false);
    
    //HardCoded List for testing
    const hardCoded_htmlList = [
        "<div style=\"font-size:1.6em;color:white;display:flex;justify-content:center;align-items:center\">Head <b>northeast</b> on <b>Rue Sainte-Catherine O</b> toward <b>Rue Guy</b></div>",
        "<div style=\"font-size:1.6em;color:white;display:flex;justify-content:center;align-items:center\">Turn <b>left</b> at the 3rd cross street onto <b>Rue Bishop</b></div>",
        "<div style=\"font-size:1.6em;color:white;display:flex;justify-content:center;align-items:center\">Turn <b>left</b> at the 3rd cross street onto <b>Rue Bishop</b></div>",
        "<div style=\"font-size:1.6em;color:white;display:flex;justify-content:center;align-items:center\">Turn <b>left</b> at the 3rd cross street onto <b>Rue Bishop</b></div>",
        "<div style=\"font-size:1.6em;color:white;display:flex;justify-content:center;align-items:center\">Turn <b>left</b> at the 3rd cross street onto <b>Rue Bishop</b></div>"
    ];
    const mapRef = useRef(null);

    /**
     * TODO: C) The Value of the origin cannot be hard coded for the final version.
     */
    const origin = "45.493622,-73.577003";
    const destination = "45.497092,-73.5788";
    

    const goBackPressHandler = () => {
        props.navigation.goBack();
    }

    const updateMapRegionToInstruction = () => {
        console.log("Going To "+instructionIndex);
        setTimeout(() => {
            mapRef.current.fitToCoordinates(
                detailedInstructionsObject.steps[instructionIndex].polylines,
                { edgePadding: { bottom: 100, right: 50, left: 50, top: 300 }, animated: true, });
        }, 100);
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
        //         setNumberOfSteps(jsonResponse.routes[0].legs[0].steps.length);
        //         setdetailedInstructionsObject(filteredInstruction);
        //     } catch(error) {
        //         console.log(error);
        //     }
        // }
        // fetchData();
    }, []);

    
    const goToNextInstruction = () => {
        console.log("Next Click : "+instructionIndex)
        if(instructionIndex >= numberOfSteps - 1) {
            setIsLastInstruction(true);
        } else {
        setInstructionIndex(instructionIndex + 1);
        setIsFirstInstruction(false);
        console.log("Instruction incremented: "+instructionIndex);

        }
    updateMapRegionToInstruction();      
    }

    const goToPreviousInstruction = () => {
        console.log("Previous Click : "+instructionIndex)
        if(instructionIndex == 0) {
            setIsFirstInstruction(true);
        } else {
        console.log("Before Decrement : "+instructionIndex)
        setInstructionIndex(instructionIndex - 1);
        setIsLastInstruction(false);
        console.log("Instruction decremented: "+instructionIndex);
        }
    updateMapRegionToInstruction();
    }

    /**
     * TODO: The destination is at your right or smt like that is not properly displayed in the layout (thats because of the <div>)
     */
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
                showsIndoors = {false}
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
                <View style={{ top: "15%" }}>
                    <TouchableOpacity onPress = {goBackPressHandler}>                    
                        <Icon name="md-arrow-round-back" style={styles.backIcon}></Icon>
                    </TouchableOpacity>
                    <View style={styles.directionTextHeader}>
                        <Text style={styles.DirectionTextHeaderStyle}>Route Directions</Text>
                        <View style={styles.lineHeader}></View>
                    </View>
                    <View style = {styles.detailedInstructions}>
                     <HTML 
                        html={detailedInstructionsObject ? detailedInstructionsObject.steps[instructionIndex].htmlInstructions: "Invalid"} 
                    /> 
                    <View style = {{flexDirection: "row", top: "2%", justifyContent: "space-between", width: "90%"}}>
                    <Text style = {styles.stepMetrics}>Duration: <Text style ={styles.stepMetricsValues}>{detailedInstructionsObject ? detailedInstructionsObject.steps[instructionIndex].duration: "N/A"}</Text></Text>
                    <Text style = {styles.stepMetrics}>Distance: <Text style ={styles.stepMetricsValues}>{detailedInstructionsObject ? detailedInstructionsObject.steps[instructionIndex].distance: "N/A"}</Text></Text>
                    <Text style = {styles.stepMetrics}>By: <Text style ={styles.stepMetricsValues}>{detailedInstructionsObject ? detailedInstructionsObject.steps[instructionIndex].travelMode: "N/A"}</Text></Text>
                    </View>
                    </View>
                </View>
            </View>
            {/* <View style={styles.bottomArrowDirectionContainer}> */}
            {isFirstInstruction &&
                <TouchableOpacity style={styles.arrowLeftDirectionDisabled} disabled = {true}>
                    <View>
                        <Icon name="arrow-back" style={{color: "grey"}}/>
                    </View>
                </TouchableOpacity>
            }
            {!isFirstInstruction &&
                <TouchableOpacity style={styles.arrowLeftDirection} onPress = {goToPreviousInstruction}>
                    <View>
                        <Icon name="arrow-back" />
                    </View>
                </TouchableOpacity>
            }
            {isLastInstruction &&
                <TouchableOpacity style={styles.arrowRightDirectionDisabled} disabled = {true}>
                    <View >
                        <Icon name="arrow-forward" style={{color: "grey"}} />
                    </View>
                </TouchableOpacity>
            }
            {!isLastInstruction &&
                <TouchableOpacity style={styles.arrowRightDirection} onPress = {goToNextInstruction}>
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
    backIcon: { //NOTE: Maybe should be absolute positioning...
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
    detailedInstructions: {
        top: "5%",
        height: "60%",
        width: "100%",
        backgroundColor: "#2A2E43",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    stepMetrics : {
        fontSize: 18,
        color: "white"
    },
    stepMetricsValues: {
        fontWeight: "bold", 
        color: "yellow"
    }
});

export default Directions;
