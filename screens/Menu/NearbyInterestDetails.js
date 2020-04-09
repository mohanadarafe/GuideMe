import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
        props.navigation.navigate("DoubleSearch", { NearbyInterestDetailsScreen: NearbyInterestDetailsScreen });
    }

    const name = props.navigation.getParam("name", null);
    const rating = props.navigation.getParam("rating", null);
    const photoref = props.navigation.getParam("photoref", null);

    return (
        <View style={styles.container}>
           

            <View style={styles.imageContainer}>
                <Image style={styles.placeImage} source={{ uri: photoref }} />
            </View>
            <Text style={styles.mainLabel}>{name ? name : "N/A"}</Text>
            <Text style={styles.reviewLabel}>{rating ? rating : "N/A"}</Text>

            <View style={styles.backArrowContainer}>
                <Button transparent style={styles.backArrow} onPress={goBack}>
                    <Icon name="md-arrow-round-back" style={styles.icon}></Icon>
                </Button>
            </View>

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

    imageContainer: {
        width: "100%",
        height: "32%",
        top: "0%",
        position: "absolute",
        opacity: 0.3
    },

    placeImage: {
        width: "100%",
        height: "100%",
        top: "0%",
        position: "relative"
    },
    mainLabel: {
        color: "#FFFFFF",
        left: "5%",
        position: "absolute",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        top: "19%"
    },
    subLabel: {
        position: "absolute",
        top: "24%",
        left: "5%",
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded"
    },
    reviewLabel: {
        position: "absolute",
        top: "27%",
        left: "5%",
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: "encodeSansExpanded"
    },

});

export default NearbyInterestDetails;
