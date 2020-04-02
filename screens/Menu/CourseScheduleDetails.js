import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button } from "native-base";
import PropTypes from "prop-types";


function CourseScheduleDetails (props) {

    const goBack = () => {
        props.navigation.goBack();
    };

    // const goToDoubleSearch = () => {
    //     props.navigation.navigate("DoubleSearch");
    // }

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                <Button transparent style={styles.menuButton} onPress={goBack}>
                    <Icon name="md-arrow-round-back" style={styles.icon} />
                </Button>
            </View>

            <Text style={styles.mainLabel}>Class Details</Text>

            <Button transparent style={styles.routeButton}><Text style={styles.viewRouteText}>View Route</Text></Button>
        </View >
    );
}

CourseScheduleDetails.propTypes = {
    navigation: PropTypes.object,
    goBack: PropTypes.func
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
    routeButton: {
        width: "90%",
        height: "8%",
        fontSize: 25,
        bottom: "8%",
        justifyContent: "center",
        backgroundColor: "#3ACCE1",
        borderRadius: 10,
    },
    viewRouteText: {
        color: "white",
        fontSize: 14
    }
});

export default CourseScheduleDetails;
