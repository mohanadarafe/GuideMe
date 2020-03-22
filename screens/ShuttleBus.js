import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button } from "native-base";
import PropTypes from "prop-types";

ShuttleBus.propTypes = {
    navigation: PropTypes.object,
    goBack: PropTypes.func
};

function ShuttleBus (props) {

    const goBack = () => {
        props.navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.backArrowContainer}>
                <Button transparent style={styles.backArrow} onPress={goBack}>
                    <Icon name="md-arrow-round-back" style={styles.icon}></Icon>
                </Button>
            </View>
            <Text style={styles.mainLabel}>Shuttle Bus</Text>
        </View>

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
        top: "14%"
    },
    backArrow: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        left: "10%"
    },
    backArrowContainer: {
        width: "100%",
        height: "6%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
        top: "7%"
    },
    icon: {
        position: "absolute",
        color: "#FFFFFF",
        alignSelf: "center",
        fontSize: 35
    }
});

export default ShuttleBus;
