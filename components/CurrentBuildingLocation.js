import React, { useEffect } from "react";
import coord from "../constants/buildingCoordinates";
import { isPointInPolygon } from "geolib";
import { AsyncStorage, StyleSheet, View, Text, Button, TouchableOpacity  } from "react-native";
import * as Location from "expo-location";
import Modal from "react-native-modal";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";


/**
 * US5 - As a user, I would like to know which building I am currently in
 * US32 - As a user, I would like to be able to know where I am indoors.
 * The following function provides the building & current floor of a user.
 * 
 * Note: call CurrentBuildingLocation() inside BottomMenu.js
 */
function CurrentBuildingLocation () {
    const [currentBuilding, setCurrentBuilding] = React.useState("");
    const [lastLat, setlastLat] = React.useState(0);
    const [lastLong, setlastLong] = React.useState(0);
    const [altitude, setAltitude] = React.useState("0");
    const [modalVisibility, setModalVisibility] = React.useState(false);

    // These are not the real values. We must measure these values real time...
    // let baseAltitude = 35;
    // let floorHeight = 5;
    // let currentFloor = 0;

    const _getLocationAsync = async () => {
               let location = await Location.getCurrentPositionAsync({/*insert acuracy*/ });
        setlastLat(JSON.stringify(location.coords.latitude));
        setlastLong(JSON.stringify(location.coords.longitude));
        setAltitude(JSON.stringify(location.coords.altitude));
    };

    AsyncStorage.setItem("altitude", altitude);
    AsyncStorage.setItem("currentBuilding", currentBuilding);
    

    useEffect(() => {
        const intervalId = setInterval(() => {

            _getLocationAsync();

            if (isPointInPolygon({ latitude: lastLat, longitude: lastLong },
                [{ latitude: coord.gn.coordinates[0].latitude, longitude: coord.gn.coordinates[0].longitude },
                { latitude: coord.gn.coordinates[1].latitude, longitude: coord.gn.coordinates[1].longitude },
                { latitude: coord.gn.coordinates[2].latitude, longitude: coord.gn.coordinates[2].longitude },
                { latitude: coord.gn.coordinates[3].latitude, longitude: coord.gn.coordinates[3].longitude },
                { latitude: coord.gn.coordinates[4].latitude, longitude: coord.gn.coordinates[4].longitude }])) {

                setCurrentBuilding(coord.gn.name);


            }

            if (isPointInPolygon({ latitude: lastLat, longitude: lastLong },
                [{ latitude: coord.h.coordinates[0].latitude, longitude: coord.h.coordinates[0].longitude },
                { latitude: coord.h.coordinates[1].latitude, longitude: coord.h.coordinates[1].longitude },
                { latitude: coord.h.coordinates[2].latitude, longitude: coord.h.coordinates[2].longitude },
                { latitude: coord.h.coordinates[3].latitude, longitude: coord.h.coordinates[3].longitude },
                { latitude: coord.h.coordinates[4].latitude, longitude: coord.h.coordinates[4].longitude }])) {

                setCurrentBuilding(coord.h.name);

            }

            if (isPointInPolygon({ latitude: lastLat, longitude: lastLong },
                [{ latitude: coord.mb.coordinates[0].latitude, longitude: coord.mb.coordinates[0].longitude },
                { latitude: coord.mb.coordinates[1].latitude, longitude: coord.mb.coordinates[1].longitude },
                { latitude: coord.mb.coordinates[2].latitude, longitude: coord.mb.coordinates[2].longitude },
                { latitude: coord.mb.coordinates[3].latitude, longitude: coord.mb.coordinates[3].longitude },
                { latitude: coord.mb.coordinates[4].latitude, longitude: coord.mb.coordinates[4].longitude }])) {

                setCurrentBuilding(coord.mb.name);

            }

            if (isPointInPolygon({ latitude: lastLat, longitude: lastLong },
                [{ latitude: coord.ev.coordinates[0].latitude, longitude: coord.ev.coordinates[0].longitude },
                { latitude: coord.ev.coordinates[1].latitude, longitude: coord.ev.coordinates[1].longitude },
                { latitude: coord.ev.coordinates[2].latitude, longitude: coord.ev.coordinates[2].longitude },
                { latitude: coord.ev.coordinates[3].latitude, longitude: coord.ev.coordinates[3].longitude },
                { latitude: coord.ev.coordinates[4].latitude, longitude: coord.ev.coordinates[4].longitude }])) {

                setCurrentBuilding(coord.ev.name);

            }

            if (isPointInPolygon({ latitude: lastLat, longitude: lastLong },
                [{ latitude: coord.lb.coordinates[0].latitude, longitude: coord.lb.coordinates[0].longitude },
                { latitude: coord.lb.coordinates[1].latitude, longitude: coord.lb.coordinates[1].longitude },
                { latitude: coord.lb.coordinates[2].latitude, longitude: coord.lb.coordinates[2].longitude },
                { latitude: coord.lb.coordinates[3].latitude, longitude: coord.lb.coordinates[3].longitude },
                { latitude: coord.lb.coordinates[4].latitude, longitude: coord.lb.coordinates[4].longitude }])) {

                setCurrentBuilding(coord.lb.name);

            }
        }, 1000);
        return () => clearInterval(intervalId);
    });

    //Compute the floor level
    // currentFloor = (altitude - baseAltitude) / floorHeight;
    // roundedCurrentFloor = "Floor level: " + (Math.round(currentFloor * 100) / 100).toFixed(0);


    return (
        <TouchableOpacity style ={styles.layout}>
        <View>
            <MaterialIcons name="office-building" size={35} color="white" onPress={() => setModalVisibility(true)}></MaterialIcons><Modal isVisible={modalVisibility}>
               {currentBuilding === "" &&
                  <View style={styles.modal}>
                    <Text style={styles.modalText}>You have to be in a concordia building to use this feature</Text>
                    <Button style={styles.modalButton} title="Close" onPress={() => setModalVisibility(false)}/>
                  </View>
               }
               {currentBuilding !== "" &&
                   <View style={styles.modal}>
                       <Text style={styles.modalText}>{/*currentBuilding*/}We didn't measure the floor height yet... Waiting for concordia to reopen</Text>
                       <Text style={styles.modalText}>{/*roundedCurrentFloor*/}</Text>
                       <Button style={styles.modalButton} title="Close" onPress={() => setModalVisibility(false)}/>
                   </View>
               }
           </Modal>
        </View>
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
        alignItems: "center"        //Align text horizontally
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
        textAlign: 'center'         //Align text vertically
    },
});

export { CurrentBuildingLocation };