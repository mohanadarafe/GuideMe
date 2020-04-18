import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "native-base";

function CurrentLocationButton ({mapReference}) {

    const goToCurrentLocation = () => { navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          if (mapReference) {
            mapReference.current.animateToRegion({
              latitude: coords.latitude,
              longitude: coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005
            })
          }
        },
        (error) => alert('Error: Are location services on?'),
        { enableHighAccuracy: true }
      )
    }

    return (
        <TouchableOpacity style ={styles.layout} onPress = {goToCurrentLocation}>
        <View style ={{top: "2%"}}>
            <MaterialIcons name="target" size={35} color="white"></MaterialIcons>
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
        alignItems: "center"
    }
});

export default CurrentLocationButton;