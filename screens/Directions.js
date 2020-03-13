import React, {  useEffect } from "react";
import { StyleSheet, AsyncStorage, Async, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { View, Button, Text, Icon} from "native-base";
import PolyLine from "@mapbox/polyline";

const mapPosition = {
    sgwCoord: {
        latitude: 45.496557,
        longitude: -73.578896,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    },
    loyCoord: {
        latitude: 45.457841,
        longitude: -73.640307,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }
};





async function getRouteDirections (start, end) {

    // const [route_polylines, setCoordinates] = React.useState("");

    try{
        let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=AIzaSyC_ik7PAKgcFPtFYnDAqCr3TI7HM9QU_SY`);
        const jsonResponse = await resp.json();
        const points = PolyLine.decode(jsonResponse.routes[0].overview_polyline.points);
        let poly_coords = points.map(point => {
            return {
                latitude: point[0],
                longitude: point[1]
            }
        });
        // setCoordinates(poly_coords);

        return poly_coords;
    }catch(error){
        console.log(error);
    }

}

/**
 * US1 - As a user, I would like to navigate through SGW campus.
 * US2 - As a user, I would like to navigate through Loyola campus.
 * 
 * This is our main screen which includes all the components inside a map.
 */
async function Directions (props) {

    // const [route_polylines, setCoordinates] = React.useState("");

    // let poly_resp = getRouteDirections(props.origin, props.destination);
    // setCoordinates(poly_resp);
    const origin = "45.494381,-73.578425";
    const destination = "45.497092,-73.5788";
    //  const [route_polylines, setCoordinates] = React.useState("");
     var route_polylines = [];

     try{
        let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=AIzaSyC_ik7PAKgcFPtFYnDAqCr3TI7HM9QU_SY`);
        const jsonResponse = await resp.json();
        const points = PolyLine.decode(jsonResponse.routes[0].overview_polyline.points);
        let poly_coords = points.map(point => {
            return {
                latitude: point[0],
                longitude: point[1]
            }
        });
        // setCoordinates(poly_coords);
        route_polylines = poly_coords;
    }catch(error){
        console.log(error);
    }

    console.log(route_polylines);
    return (
                <View>
                    <MapView
                        data-test="MapViewComponent"
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        region={mapPosition.sgwCoord}
                        showsUserLocation={true}
                        showsCompass={true}
                        showsBuildings={true}
                    >
                        {/* <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={api_key.id}
                            onError={(errorMessage) => {
                                console.log('GOT AN ERROR');
                              }}
                        /> */}
                    <Polyline
                    coordinates = {route_polylines}
                    strokeWidth = {2}
                    strokeColor = "pink"
                    />
                    </MapView>
                    <View style = {styles.navigationHeader}>
                        <View style = {{top: "15%"}}>
                        <Icon name="md-arrow-round-back" style = {styles.backIcon}></Icon> 
                        <View style = {styles.directionText}>
                            <Text style = {styles.DirectionTextHeader}>Route Directions</Text>
                                <View style= {styles.lineHeader}></View>
                        </View>
                        </View>
                    </View>
                    <View style = {styles.bottomArrowDirectionContainer}>
                        <TouchableOpacity style = {styles.arrowDirection}>
                        <View>
                            <Icon name = "arrow-back"></Icon>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.arrowDirection}>
                        <View >
                            <Icon name = "arrow-forward"></Icon>
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
    navigationHeader : {
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
    }

});

export default Directions;
