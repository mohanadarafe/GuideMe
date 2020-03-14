import React, { useEffect } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Icon, Button } from "native-base";
import { MapData } from "./MapData";
import { sgwRooms } from "../constants/sgwRooms";
import { buildingData } from "../constants/buildingData";
import { MoreDetails } from "../screens/MoreDetails";

function fetchData () {
    const searchInfo = MapData({ passBuildingName: "", buildingName: true, classRooms: true, departments: true, services: true, accesibility: false, flatten: true }, sgwRooms(), buildingData());
    return searchInfo;
}

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

function PreferenceMenu (props) {

    const [data, setData] = React.useState();
    const [to, setTo] = React.useState("");
    const [from, setFrom] = React.useState("");
    const [selectedBuilding, setSelectedBuilding] = React.useState("");
    const [backArrow, setBackArrow] = React.useState(false);
    const [getDirection, setgetDirection] = React.useState("false");
    const [userType, setUserType] = React.useState("");
    const [mobilityReduced, setMobilityReduced] = React.useState(false);
    const [mobilityNotReduced, setMobilityNotReduced] = React.useState(false);
    const [travelType, setTravelType] = React.useState(false);


    const fromLocationSelected = async () => {
        let fromDest = await AsyncStorage.getItem("from");
        setFrom(fromDest);
    };

    const toLocationSelected = async () => {
        let dest = await AsyncStorage.getItem("destination");
        setTo(dest);
    };

    const getBuildingSelected = async () => {
        let name = await AsyncStorage.getItem("buildingSelected");
        setSelectedBuilding(name);
    };

    const getDirectionFunction = async () => {
        let getDirectionConst = await AsyncStorage.getItem("getDirectionButtonPressed");
        setgetDirection(getDirectionConst);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setData(fetchData());
            fromLocationSelected();
            toLocationSelected();
            getBuildingSelected();
            getDirectionFunction();
        }, 1);
        return () => clearInterval(intervalId);
    });

    if (backArrow && props.backToMoreDetails === true) {
        return (
            <View style={styles.moreDetails}>
                <MoreDetails name={selectedBuilding} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.mainLabel}>Preferences</Text>
            <View style={styles.containerOfButtons1}>
                <View style={styles.labelContainer}>
                    <Text style={styles.shortLabel}>I am: </Text>
                </View>
                <Button transparent style={styles.buttonContainer}>
                    <Text style={styles.buttonLabel}>Graduate Student</Text>
                </Button>
                <Button transparent style={styles.buttonContainer}>
                    <Text style={styles.buttonLabel}>Undergrad Student</Text>
                </Button>
                <Button transparent style={styles.buttonContainer}>
                    <Text style={styles.buttonLabel}>Visitor</Text>
                </Button>
                <Button transparent style={styles.buttonContainer}>
                    <Text style={styles.buttonLabel}>University Staff</Text>
                </Button>
            </View>

            <View style={styles.containerOfButtons2}>
                <View style={styles.labelContainer}>
                    <Text style={styles.shortLabel}>Mobility Reduced: </Text>
                </View>
                <Button transparent style={styles.buttonContainer} >
                    <Text style={styles.buttonLabelMobility} > Yes </Text>
                </Button>
                <Button transparent style={styles.buttonContainer} >
                    <Text style={styles.buttonLabelMobility}>No</Text>
                </Button>
            </View>
            <View style={styles.containerOfButtons3}>
                <View style={styles.labelContainer}>
                    <Text style={styles.shortLabel}>Method of Travel: </Text>
                </View>
                <Button transparent style={styles.buttonContainerMOT} >
                    <View style={styles.iconContainer}>
                        <Icon name="md-car" style={styles.icon}></Icon>
                    </View>
                    <View style={styles.iconLabelContainer}>
                        <Text style={styles.buttonLabel}>Car</Text>
                    </View>

                </Button>
                <Button transparent style={styles.buttonContainerMOT} >
                    <View style={styles.iconContainer}>
                        <Icon name="md-walk" style={styles.icon}></Icon>
                    </View>
                    <View style={styles.iconLabelContainer}>
                        <Text style={styles.buttonLabel}>Walking</Text>
                    </View>
                </Button>

                <Button transparent style={styles.buttonContainerMOT}>
                    <View style={styles.iconContainer}>
                        <Icon name="md-bus" style={styles.icon}></Icon>
                    </View>
                    <View style={styles.iconLabelContainer}>
                        <Text style={styles.buttonLabel}>Bus</Text>
                    </View>
                </Button>

                <Button transparent style={styles.buttonContainerMOT}>
                    <View style={styles.iconContainer}>
                        <Icon name="ios-bus" style={styles.icon}></Icon>
                    </View>
                    <View style={styles.iconLabelContainer}>
                        <Text style={styles.buttonLabel}>Shuttle Bus</Text>
                    </View>
                </Button>
            </View>

            {/* <Button transparent style={styles.routeButton} ><Text style={{ color: "white", fontSize: 14 }}>View Route</Text></Button> */}

            <View style={styles.backArrowContainer}>
                {getDirection === "false" &&
                    <Button transparent style={styles.backArrow} onPress={() => { setBackArrow(true); }}>
                        <Icon name="md-arrow-round-back" style={styles.icon}></Icon>
                    </Button>
                }
            </View>

        </View >
    );
}

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        width: "100%"
    },
    mainLabel: {
        color: "#FFFFFF",
        position: "absolute",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        top: "15%" //33%
    },
    shortLabel: {
        position: "absolute",
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        opacity: 0.3,
    },
    buttonContainer: {
        height: 80,
        width: 80,
        backgroundColor: "#353A50",
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
        top: "8%",
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
        bottom: "65%", //50%
    },
    containerOfButtons2: {
        position: "absolute",
        width: "100%",
        height: "15%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        bottom: "45.5%" //32.5%
    },
    containerOfButtons3: {
        position: "absolute",
        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "center",
        bottom: "25%" //15%
    },
    icon: {
        position: "absolute",
        color: "#FFFFFF",
        alignSelf: "center",
        fontSize: 35
    },
    textContainer: {
        position: "absolute",
        backgroundColor: "#ffc0cb",
        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "center",
        bottom: "-10%"
    },
    searchbarContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
        top: "16%"
    },
    textInputStyle: {
        padding: 12,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderColor: "#ccc",
        backgroundColor: "#FFFFFF",
        fontFamily: "encodeSansExpanded"
    },
    containerStyle: {
        width: "90%"
    },
    itemStyle: {
        padding: 10,
        marginTop: 2,
        backgroundColor: "#FAF9F8",
        borderColor: "#bbb",
        borderWidth: 1,
        borderRadius: 10,
    },
    itemTextStyle: {
        color: "#222",
        fontFamily: "encodeSansExpanded"
    },
    itemsContainerStyle: {
        maxHeight: "60%",
    },
    backArrow: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        left: "10%"
    },
    backArrowContainer: {
        position: "absolute",
        width: "100%",
        height: "6%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
        top: "7%"
    },
    moreDetails: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#2A2E43",
        alignItems: "center",
        justifyContent: "space-between"
    },
    bottomMenu: {
        width: "100%",
        height: 350,
        position: "absolute",
        borderRadius: 30.5,
        backgroundColor: "#2A2E43",
        bottom: -275
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
    routeButton: {
        width: "90%",
        height: "8%",
        fontSize: 25,
        // bottom: "8%",
        justifyContent: "center",
        backgroundColor: "#3ACCE1",
        borderRadius: 10,
        top: "80%"
    },
    imageContainer: {
        width: "100%",
        height: "32%",
        top: "0%",
        position: "absolute",
        opacity: 0.3
    },
    buildingImage: {
        width: "100%",
        height: "100%",
        top: "0%",
        position: "relative"
    },
});

export { PreferenceMenu };