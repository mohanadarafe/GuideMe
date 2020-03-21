import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Icon, Button } from "native-base";


function Nearby(props) {

const goBack = () => {
    props.navigation.goBack();
}

    return (
        <View style={styles.container}>
            <Icon name="ios-arrow-down" style={styles.arrowDown} onPress={goBack} />

            <Text style={styles.mainLabel}>Points of Interest</Text>

        </View >
    );
}

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        backgroundColor: "#2A2E43"
    },
    mainLabel: {
        color: "#FFFFFF",
        position: "absolute",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        top: "15%"
    },
    arrowDown: {
        color: "#ffffff",
        top: "5%",
        fontSize: 54,
        position: "absolute"
    },
});

export default Nearby;
