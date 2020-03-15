import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, AsyncStorage} from "react-native";
import { Icon, Button } from "native-base";
import SearchableDropdown from "react-native-searchable-dropdown";
import { MapData } from "../components/MapData";
import { sgwRooms } from "../constants/sgwRooms";
import { buildingData } from "../constants/buildingData";
import { DoubleSearchSVG } from "../assets/DoubleSearchSVG.js";



function fetchData() {
    const searchInfo = MapData({ passBuildingName: "", buildingName: true, classRooms: true, departments: true, services: true, accesibility: false, flatten: true }, sgwRooms(), buildingData());
    return searchInfo;
}

/**
 * US12 - As a user, I want to be able to select a destination building by clicking on it.
 * US14 - As a user, I should be able to set my current location as the starting point.
 *
 * The following function renders a preference menu with 2 search bars. The "from" conatains the current location which 
 * is set automatically (but can be modified) and the "to" contains the destination
 */
DoubleSearch.propTypes ={
    navigation: PropTypes.object
};

function DoubleSearch(props) {

    const [data, setData] = React.useState();
    const [to, setTo] = React.useState("");
    const [from, setFrom] = React.useState("");

    const goToBackToMoreDetails = () => {
        props.navigation.goBack();
    };
    const getDirectionScreen = () => {
        props.navigation.navigate("MapDirections");
    };

    const selectDestinationPath = () => {
        return props.navigation.getParam("destinationName", "null");
    };

    //TODO: The new "From" location entered by the user will be stored in the asyncStorage with this key
    AsyncStorage.setItem("fromLocation",from);
    // The new "To" destination can also be retrieved from the asyncStorage with this key
    AsyncStorage.setItem("destination",to);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setData(fetchData());
        }, 1);
        return () => clearInterval(intervalId);
    });

    return (
        <View style={styles.container}>
            <View style={styles.topBackground}/>

            <View style={styles.svgContainer}>
                <DoubleSearchSVG />
            </View>
            <View style={styles.searchbarContainer}>
                <Text style={styles.titleLabel}>Starting Point & Destination</Text>
                <Text style={styles.searchBarLabels}>From: </Text>
                <SearchableDropdown
                    onTextChange={val => val} 
                    onItemSelect={item => setFrom(item)}
                    textInputStyle={styles.textInputStyle}
                    itemStyle={styles.itemStyle}
                    containerStyle={styles.containerStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemsContainerStyle={styles.itemsContainerStyle}
                    placeholderTextColor={"#000"}
                    items={data}
                    placeholder="Current Location" 
                    resetValue={false}
                />
                <View style={{ width: "100%", height: "3%" }}></View>
                <Text style={styles.searchBarLabels}>To: </Text>
                <SearchableDropdown
                    onTextChange={val => val}
                    onItemSelect={item => setTo(item)}
                    textInputStyle={styles.textInputStyle}
                    itemStyle={styles.itemStyle}
                    containerStyle={styles.containerStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemsContainerStyle={styles.itemsContainerStyle}
                    placeholderTextColor={"#000"}
                    items={data}
                    placeholder={selectDestinationPath()}
                    resetValue={false}
                />
            </View>
            <Button transparent style={styles.routeButton} onPress={getDirectionScreen}><Text style={{ color: "white", fontSize: 14 }}>View Route</Text></Button>
            <View style={styles.backArrowContainer}>
                <Button transparent style={styles.backArrow} onPress={goToBackToMoreDetails}>
                    <Icon name="md-arrow-round-back" style={styles.icon}></Icon>
                </Button>
            </View>
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
    topBackground:{
        width: "100%",
         height: "43%",
        backgroundColor: "#353A50" 
    },
    titleLabel: {
        color: "white",
        fontSize: 20,
        fontFamily: "encodeSansExpanded",
        paddingBottom: 10,
        bottom: "2%"
    },
    searchbarContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
        top: "14%"
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
    searchBarLabels: {
        color: "#FFFFFF",
        opacity: 0.3,
        alignSelf: "flex-start",
        left: "8%",
        fontSize: 20,
        paddingVertical: 10,
        bottom: "2%"
    },
    svgContainer: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    }
});

export default DoubleSearch;