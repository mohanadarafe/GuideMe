import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";

/**Prop passed
 * @param  {} navigation props.navigation is the name of the object from Navigator library
 */
function ShuttleBus(props) {

     /**
     * The method will slide the side menu from the right side of the screen
     * @param  {} =>{props.navigation.openDrawer(
     */
    const goToMenu = () => {
        props.navigation.openDrawer();
    };

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                    <Feather name="menu" style={styles.icon} />
                </TouchableOpacity>
            </View>

            <Text style={styles.mainLabel}>Shuttle Bus</Text>

        </View >
    );
}

ShuttleBus.propTypes = {
    navigation: PropTypes.object,
    openDrawer: PropTypes.func,
};

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
    icon: {
        alignSelf: "center",
        color: "#FFFFFF",
        fontSize: 35,
    },
    menuButton: {
        height: "100%",
        width: "20%",
        flexDirection: "row",
        justifyContent: "center"
    },
    menuButtonContainer: {
        width: "100%",
        height: "6%",
        top: "7%",
    },
});

export default ShuttleBus;
