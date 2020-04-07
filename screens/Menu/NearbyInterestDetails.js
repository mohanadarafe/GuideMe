import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button } from "native-base";


/**Prop passed
 * @param  {} navigation props.navigation is the name of the object from Navigator library
 */

function NearbyInterestDetails(props) {

    const goBack = () => {
        props.navigation.goBack();
    }

    const NearbyInterestDetailsScreen = true; 
    const goToDoubleSearch = () => {
        props.navigation.navigate("DoubleSearch", {NearbyInterestDetailsScreen: NearbyInterestDetailsScreen});
    }

    return (
        <View style={styles.container}>
              <View style={styles.backArrowContainer}>
                <Button transparent style={styles.backArrow} onPress={goBack}>
                    <Icon name="md-arrow-round-back" style={styles.icon}></Icon>
                </Button>
            </View>
            <Text style={styles.mainLabel}>Point of Interests Details</Text>
            
            <Button transparent style={styles.routeButton} onPress={goToDoubleSearch}><Text style={styles.viewRouteText}>View Route</Text></Button>
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
        color: "#FFF",
        fontSize: 23,
        fontFamily: "encodeSansExpanded",
        paddingBottom: 10,
        top: "14%",
        bottom: "2%",
        fontWeight: "bold",
        justifyContent: "center",
        position: "absolute"
    },
    icon: {
        position: "absolute",
        color: "#FFFFFF",
        alignSelf: "center",
        fontSize: 35
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
        fontSize: 14,    
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

});

export default NearbyInterestDetails;
