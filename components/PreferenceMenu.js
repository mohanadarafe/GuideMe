import React, { useEffect } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Icon, Button } from "native-base";
import SearchableDropdown from "react-native-searchable-dropdown";
import { MapData } from "./MapData";
import { sgwRooms } from "../constants/sgwRooms";
import { buildingData } from "../constants/buildingData";


function fetchData() {
    const searchInfo = MapData({ passBuildingName: "", buildingName: true, classRooms: true, departments: true, services: true, accesibility: false, flatten: true }, sgwRooms(), buildingData());
    return searchInfo;
}

function PreferenceMenu() {

    // const [destination, setDestination] = React.useState("");
    const [data, setData] = React.useState();
    const [to, setTo] = React.useState("");
    const [from, setFrom] = React.useState("");
    // const [userType, setUserType] = React.useState("");
    // const [mobilityReduced, setMobilityReduced] = React.useState(false);
    // const [travelType, setTravelType] = React.useState(false);

    const fromLocationSelected = async () => {
        let dest = await AsyncStorage.getItem("from");
        setFrom(dest);
    };

    const toLocationSelected = async () => {
        let dest = await AsyncStorage.getItem("destination");
        setTo(dest);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setData(fetchData());
            fromLocationSelected();
            toLocationSelected();
        }, 1);
        return () => clearInterval(intervalId);
    });



    return (
        <View style={styles.container} >
            <View style={styles.searchbarContainer}>
                <SearchableDropdown
                    onTextChange={val => val} //This must be here (does nothing)
                    onItemSelect={item => setFrom(item)}
                    textInputStyle={styles.textInputStyle}
                    itemStyle={styles.itemStyle}
                    containerStyle={styles.test}
                    itemTextStyle={styles.itemTextStyle}
                    itemsContainerStyle={styles.itemsContainerStyle}
                    placeholderTextColor = {"#000"}
                    items={data}
                    placeholder="Current Location"
                    resetValue={false}
                />

                <SearchableDropdown
                    onTextChange={val => val} //This must be here (does nothing)
                    onItemSelect={item => setFrom(item)}
                    textInputStyle={styles.textInputStyle}
                    itemStyle={styles.itemStyle}
                    containerStyle={styles.test}
                    itemTextStyle={styles.itemTextStyle}
                    itemsContainerStyle={styles.itemsContainerStyle}
                    placeholderTextColor={"#000"}
                    items={data}
                    placeholder={to}
                    resetValue={false}
                />

            </View>
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
                    <Text style={styles.buttonLabel}>Visitor Student</Text>
                </Button>

                <Button transparent style={styles.buttonContainer}>
                    <Text style={styles.buttonLabel}>University Staff</Text>
                </Button>
            </View>


            <View style={styles.containerOfButtons2}>
                <View style={styles.labelContainer}>
                    <Text style={styles.shortLabel}>Mobility Reduced: </Text>
                </View>
                <Button transparent style={styles.buttonContainer}>
                    <Text style={styles.buttonLabelMobility}>Yes</Text>
                </Button>

                <Button transparent style={styles.buttonContainer}>
                    <Text style={styles.buttonLabelMobility}>No</Text>
                </Button>
            </View>


            <View style={styles.containerOfButtons3}>
                <View style={styles.labelContainer}>
                    <Text style={styles.shortLabel}>Method of Travel: </Text>
                </View>

                <Button transparent style={styles.buttonContainer}>

                    <Icon name="md-car" style={styles.icon}></Icon>

                    <Text style={styles.buttonLabel}>Car</Text>
                </Button>

                <Button transparent style={styles.buttonContainer}>

                    <Icon name="md-walk" style={styles.icon}></Icon>

                    <Text style={styles.buttonLabel}>Walking</Text>
                </Button>

                <Button transparent style={styles.buttonContainer}>

                    <Icon name="md-bus" style={styles.icon}></Icon>

                    <Text style={styles.buttonLabel}>Bus</Text>
                </Button>

                <Button transparent style={styles.buttonContainer}>
                    <Icon name="ios-bus" style={styles.icon}></Icon>
                    <Text style={styles.buttonLabel}>Shuttle Bus</Text>
                </Button>
            </View>

            <View style={styles.backArrowContainer}>
                <Button transparent style={styles.backArrow}>
                    <Icon name="md-arrow-round-back" style={styles.icon}></Icon>
                </Button>
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        //justifyContent: "space-between",
        height: "100%",
        width: "100%",
        flex: 1
    },
    mainLabel: {
        color: "#FFFFFF",
        position: "absolute",
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        top: "36%"
    },
    shortLabel: {
        position: "absolute",
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        opacity: 0.3,
        backgroundColor: "#326060"
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
        fontSize: 20,
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
        backgroundColor: "#ffc0cb",
        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "center",
        bottom: "45%"

    },
    containerOfButtons2: {
        position: "absolute",
        backgroundColor: "#ffc0cb",
        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "center",
        bottom: "27.5%"

    },
    containerOfButtons3: {
        position: "absolute",
        backgroundColor: "#ffc0cb",
        width: "100%",
        height: "15%",
        flexDirection: "row",
        justifyContent: "center",
        bottom: "10%"
    },
    scrollView: {
        backgroundColor: "#326060",
        marginHorizontal: 20,
        height: "50%",
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
        backgroundColor: "#5ac18e",
        width: "100%",
        height: "18%",
        flexDirection: "column",
        justifyContent: "space-around",
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
    test: {

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
        // backgroundColor: "#353A50",
        // borderRadius: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        // margin: "2%",
        // top: "15%",
        left: "10%"
    },
    backArrowContainer: {
        position: "absolute",
        backgroundColor: "#ffa500",
        width: "100%",
        height: "6%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
        top: "10%"
    }
});

export { PreferenceMenu };