import React, { useEffect } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Icon, Button } from "native-base";
import { MapData } from "./MapData";
import { sgwRooms } from "../constants/sgwRooms";
import { buildingData } from "../constants/buildingData";


/**
 * US12 - As a user, I want to be able to select a destination building by clicking on it.
 * US14 - As a user, I should be able to set my current location as the starting point.
 * US18 - As a user, I should be able to choose “walking” as a means of transportation.
 * US19 - As a user, I should be able to choose public transport as a means of transportation.
 * US20 - As a user, I should be able to choose my car as a means of transportation.
 * US21 - As a user, I should be able to choose Concordia Shuttle as a means of transportation.
 *
 * The following function renders a preference menu with 2 search bars. The "from" conatains the current location which 
 * is set automatically (but can be modified) and the "to" contains the destination
 */

function PreferenceMenu () {

    const [data, setData] = React.useState();
    const [getDirection, setgetDirection] = React.useState("false");
    const [onPressFirstCategory, setOnPressFirstCategory] = React.useState({selectedButton: null})
    const [onPressSecondCategory, setOnPressSecondCategory] = React.useState({selectedButton: null})
    const [onPressThirdCategory, setOnPressThirdCategory] = React.useState({selectedButton: null})


    return (
        <View style={styles.container}>
            <Text style={styles.mainLabel}>Preferences</Text>

            <View style={styles.containerOfButtons1}>
                <View style={styles.labelContainer}>
                    <Text style={styles.shortLabel}>I am: </Text>
                </View>

                <Button transparent style={[styles.buttonContainer,{backgroundColor: onPressFirstCategory.selectedButton === "GRADUATE" ? "#f0b400" : "#353A50"}]} 
                onPress = {() => setOnPressFirstCategory({selectedButton: "GRADUATE"})}>
                    <Text style={styles.buttonLabel}>Graduate Student</Text>
                </Button>

                <Button transparent style={[styles.buttonContainer,{backgroundColor: onPressFirstCategory.selectedButton === "UNDERGRADUATE" ? "#f0b400" : "#353A50"}]} 
                onPress = {() => setOnPressFirstCategory({selectedButton: "UNDERGRADUATE"})}>
                    <Text style={styles.buttonLabel}>Undergrad Student</Text>
                </Button>

                <Button transparent style={[styles.buttonContainer,{backgroundColor: onPressFirstCategory.selectedButton === "VISITOR" ? "#f0b400" : "#353A50"}]} 
                onPress = {() => setOnPressFirstCategory({selectedButton: "VISITOR"})}>
                    <Text style={styles.buttonLabel}>Visitor</Text>
                </Button>

                <Button transparent style={[styles.buttonContainer,{backgroundColor: onPressFirstCategory.selectedButton === "UNIVERSITY_STAFF" ? "#f0b400" : "#353A50"}]} 
                onPress = {() => setOnPressFirstCategory({selectedButton: "UNIVERSITY_STAFF"})}>
                    <Text style={styles.buttonLabel}>University Staff</Text>
                </Button>
            </View>

            <View style={styles.containerOfButtons2}>
                <View style={styles.labelContainer}>
                    <Text style={styles.shortLabel}>Mobility Reduced: </Text>
                </View>
                <Button transparent style={[styles.buttonContainer,{backgroundColor: onPressSecondCategory.selectedButton === "MOBILITY_REDUCED" ? "#f0b400" : "#353A50"}]} 
                onPress = {() => setOnPressSecondCategory({selectedButton: "MOBILITY_REDUCED"})}>
                    <Text style={styles.buttonLabelMobility} > Yes </Text>
                </Button>
                <Button transparent style={[styles.buttonContainer,{backgroundColor: onPressSecondCategory.selectedButton === "MOBILITY_NOT_REDUCED" ? "#f0b400" : "#353A50"}]} 
                onPress = {() => setOnPressSecondCategory({selectedButton: "MOBILITY_NOT_REDUCED"})}>
                    <Text style={styles.buttonLabelMobility}>No</Text>
                </Button>
            </View>

            <View style={styles.containerOfButtons3}>
                <View style={styles.labelContainer}>
                    <Text style={styles.shortLabel}>Method of Travel: </Text>
                </View>

                <Button transparent style={[styles.buttonContainerMOT,{backgroundColor: onPressThirdCategory.selectedButton === "DRIVING" ? "#f0b400" : "#353A50"}]} 
                onPress = {() => setOnPressThirdCategory({selectedButton: "DRIVING"})}>

                    <View style={styles.iconContainer}>
                        <Icon name="md-car" style={styles.icon}></Icon>
                    </View>
                    <View style={styles.iconLabelContainer}>
                        <Text style={styles.buttonLabel}>Car</Text>
                    </View>
                </Button>

                <Button transparent style={[styles.buttonContainerMOT,{backgroundColor: onPressThirdCategory.selectedButton === "WALKING" ? "#f0b400" : "#353A50"}]} 
                onPress = {() => setOnPressThirdCategory({selectedButton: "WALKING"})}>
                    <View style={styles.iconContainer}>
                        <Icon name="md-walk" style={styles.icon}></Icon>
                    </View>
                    <View style={styles.iconLabelContainer}>
                        <Text style={styles.buttonLabel}>Walking</Text>
                    </View>
                </Button>

                <Button transparent style={[styles.buttonContainerMOT,{backgroundColor: onPressThirdCategory.selectedButton === "BUS" ? "#f0b400" : "#353A50"}]} 
                onPress = {() => setOnPressThirdCategory({selectedButton: "BUS"})}>
                    <View style={styles.iconContainer}>
                        <Icon name="md-bus" style={styles.icon}></Icon>
                    </View>
                    <View style={styles.iconLabelContainer}>
                        <Text style={styles.buttonLabel}>Bus</Text>
                    </View>
                </Button>

                <Button transparent style={[styles.buttonContainerMOT,{backgroundColor: onPressThirdCategory.selectedButton === "SHUTTLE_BUS" ? "#f0b400" : "#353A50"}]} 
                onPress = {() => setOnPressThirdCategory({selectedButton: "SHUTTLE_BUS"})}>
                    <View style={styles.iconContainer}>
                        <Icon name="ios-bus" style={styles.icon}></Icon>
                    </View>
                    <View style={styles.iconLabelContainer}>
                        <Text style={styles.buttonLabel}>Shuttle Bus</Text>
                    </View>
                </Button>

            </View>

            <View style={styles.containerOfDisclaimer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.shortLabel}>Disclaimer: </Text>
                </View>
                <View style={styles.disclaimerTextContainer}>
                    <Text style={styles.disclaimerText}>The Concordia shuttle bus offers you a free ride between the SGW and
                        Loyola campus. However, the services are reserved for students with valid ID cards
                        and buses are wheelchair accessible.</Text>
                </View>
            </View >

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
    shortLabel: {
        position: "absolute",
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
    },
    buttonContainer: {
        height: 80,
        width: 80,
        // backgroundColor: "#353A50",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: "2%",
        top: "25%",
    },
    buttonContainerMOT: {
        height: 80,
        width: 80,
        backgroundColor: "#353A50",
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "2%",
        top: "8%"
    },

    buttonLabel: {
        position: "absolute",
        color: "#FFFFFF",
        fontSize: 10,
        fontFamily: "encodeSansExpanded",
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingHorizontal: 10
    },
    buttonLabelMobility: {
        position: "absolute",
        color: "#FFFFFF",
        fontSize: 15,
        fontFamily: "encodeSansExpanded",
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    labelContainer: {
        position: "absolute",
        left: "5%"
    },
    containerOfButtons1: {
        position: "absolute",
        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "center",
        bottom: "62%"
    },
    containerOfButtons2: {
        position: "absolute",
        width: "100%",
        height: "15%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        bottom: "41%"
    },
    containerOfButtons3: {
        position: "absolute",
        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "center",
        bottom: "21%"
    },
    containerOfDisclaimer: {
        position: "absolute",
        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "center",
        bottom: "1%",
        flexShrink: 1,
    },
    disclaimerTextContainer: {
        position: "absolute",
        width: "90%",
        flexDirection: "row",
        justifyContent: "center",
        flexShrink: 1,
        bottom: "40%"
    },
    disclaimerText: {
        flex: 1,
        flexWrap: "wrap",
        color: "#919090",
        fontSize: 10,
        fontFamily: "encodeSansExpanded",
        flexShrink: 1,
        textAlign: "left",
    },
    icon: {
        position: "absolute",
        color: "#FFFFFF",
        alignSelf: "center",
        fontSize: 35
    },
    iconContainer: {
        width: "100%",
        height: "60%",
    },
    iconLabelContainer: {
        width: "100%",
        height: "25%",
        bottom: "5%"
    },
});

export {PreferenceMenu};
