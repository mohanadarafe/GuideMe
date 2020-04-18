import React, { useEffect } from "react";
import coord from "../constants/buildingCoordinates";
import { isPointInPolygon } from "geolib";
import { StyleSheet, TouchableOpacity  } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        selectedBuildingName: state.selectedBuildingName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setCurrentBuilding: (value) => dispatch({ type: "UPDATE_SELECTED_BUILDING", payload: value }),
    }
}

/**
 * US5 - As a user, I would like to know which building I am currently in
 * US32 - As a user, I would like to be able to know where I am indoors.
 * The following function provides the building & current floor of a user.
 * 
 * Note: call CurrentBuildingLocation() inside BottomMenu.js
 */
export function CurrentBuildingLocation (props) {

    const [currentLocation, setCurrentLocation] = React.useState(null);


    var getPosition = function (options) {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

    const GetCurrentLocation = () => {

        getPosition().then(({ coords }) => {
            setCurrentLocation({
                latitude: coords.latitude,
                longitude: coords.longitude,
                altitude: coords.altitude
            })
        })
            .catch((err) => {
                alert(err.message);
            });
    }

    const checkIfWithinPolygon = () => {

        let withinBuilding = false;
        for (var key in coord) {
            if (isPointInPolygon(currentLocation, coord[key].coordinates)){
                withinBuilding = true;
                props.setCurrentBuilding(coord[key].name);
                break;
            }
        }
        if (withinBuilding) {
            props.mapReference.current.animateToRegion({
                latitude: dummyCurrentLocation.latitude,
                longitude: dummyCurrentLocation.longitude,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003
              })
        }
        else {
        alert("You have to be in a highlighted concordia building to use this feature.");
        }  
    }

    //TODO: Uncomment this if you want to see how it works (This is GM Building)
    const dummyCurrentLocation = {
        altitude: 29.498906132077124,
        latitude: 45.495983,
        longitude: -73.578824
    }

    const onPressHandler = () => {
        if(currentLocation) {
            checkIfWithinPolygon();
        }
    }
    

    useEffect(() => {
        GetCurrentLocation();
    }, []);


    return (
        <TouchableOpacity style ={styles.layout} onPress={onPressHandler}>
            <MaterialIcons name="office-building" size={35} color="white"></MaterialIcons>
        </TouchableOpacity>
    );
}
export const styles = StyleSheet.create({
    layout: {
        width: 60,
        height: 60,
        borderRadius: 100/2,
        backgroundColor: "#2A2E43",
        justifyContent: "center",
        alignItems: "center"       
    },
    modal: {
        position:"absolute",
        right: "20%",
        paddingTop:10,
        borderRadius:10,
        width:200,
        backgroundColor: "white",
    },
    modalText: {
        fontSize:20,
        textAlign: 'center'      
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentBuildingLocation);
