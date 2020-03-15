import React, { useEffect, useRef } from "react";
import { StyleSheet, AsyncStorage, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { View, Button, Text, Icon } from "native-base";
import PolyLine from "@mapbox/polyline";
import PropTypes from "prop-types";

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


/**
 * US1 - As a user, I would like to navigate through SGW campus.
 * US2 - As a user, I would like to navigate through Loyola campus.
 * 
 * This is our main screen which includes all the components inside a map.
 */
function PreviewDirections (props) {

    const [decodedPolylines, setDecodedPolylines] = React.useState([]);
    const [detailedInstructions, setDetailedInstructions] = React.useState();
    const [directionRegion, setDirectionRegion] = React.useState(props.initialRegion);
    const [backArrow, setBackArrow] = React.useState(false);
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
    const pressHandler = () => {
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

    // useEffect(() => {
    //     const fetchData = async () =>  {
    //         try{
    //             let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${props.origin}&destination=${props.destination}&key=AIzaSyC_ik7PAKgcFPtFYnDAqCr3TI7HM9QU_SY`);
    //             const jsonResponse = await resp.json();
    //             const points = PolyLine.decode(jsonResponse.routes[0].overview_polyline.points);
    //             const decodedPoints = points.map(point => {
    //                 return {
    //                     latitude: point[0],
    //                     longitude: point[1]
    //                 }
    //             });
    //             setDecodedPolylines(decodedPoints);
    //             // const stepPoint = PolyLine.decode(jsonResponse.routes[0].)
    //             setDirectionRegion()
    //             setDetailedInstructions(jsonResponse.routes[0].legs);
    //         } catch(error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchData();
    // }, []);

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

                {/* <Polyline
                coordinates = {decodedPolylines}
                strokeWidth = {2}
                strokeColor = "pink"
                /> */}
            </MapView>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={pressHandler}>
                    <Icon name="md-arrow-round-back" style={styles.backIcon}></Icon>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.navigationHeader}>
                <View style={{ top: "25%" }}>
                    <TouchableOpacity onPress={pressHandler}>
                        <Icon name="md-arrow-round-back" style={styles.backIcon}></Icon>
                    </TouchableOpacity>
                    <View style={styles.directionText}>
                        <Text style={styles.DirectionTextHeader}>Route Directions</Text>
                        <View style={styles.lineHeader}></View>
                    </View>
                </View>
            </View> */}
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
    }

});

export default PreviewDirections;
