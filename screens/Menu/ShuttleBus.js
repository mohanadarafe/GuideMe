import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Icon, Button } from "native-base";
import { Feather } from "@expo/vector-icons";



function ShuttleBus(props) {

    const goToMenu = () => {
        props.navigation.openDrawer();;
    };

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                <Button transparent style={styles.menuButton} onPress={goToMenu}>
                <Feather name="menu" style={styles.icon} />
                </Button>
            </View>
           

            <Text style={styles.mainLabel}>Shuttle Bus</Text>

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
    icon: {
            height: "100%",
            width: "100%",
            flexDirection: "row",
            left: "6%",
            color: "#FFFFFF",
            fontSize: 35

    },
    menuButton: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
    },
    menuButtonContainer: {
        width: "100%",
        height: "6%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
        top: "7%"
    },

});

export default ShuttleBus;
