import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Icon, Button } from "native-base";
import SearchableDropdown from "react-native-searchable-dropdown";
import { MapData } from "../components/MapData";
import { sgwRooms } from "../constants/sgwRooms";
import { buildingData } from "../constants/buildingData";
import { DoubleSearchSVG } from "../assets/DoubleSearchSVG.js";


/**
 * FIXME: 
 * 1) FetchData Returns duplicate sometimes in the searchItems and I think it concerns services and departements.
 * 2) TODO: - Services and departments should not be in the searchItems.
 *      Thus different parameters need to be sent to MapData()
 * 3) TODO: Algorithm for classrooms and refers to B)
 * 
 * A.U
 */
function fetchData () {
    const searchInfo = MapData({ passBuildingName: "", buildingName: true, classRooms: true, departments: true, services: true, accesibility: false, flatten: true }, sgwRooms(), buildingData());
    return searchInfo;
}


/**
 * US12 - As a user, I want to be able to select a destination building by clicking on it.
 * US14 - As a user, I should be able to set my current location as the starting point.
 *
 * Description: The following function renders a preference menu with 2 search bars. The "from" conatains the current location which 
 * is set automatically (but can be modified) and the "to" contains the destination
 */
DoubleSearch.propTypes = {
    navigation: PropTypes.object
};

/**
 * Overall :
 * TODO: 1.  Algorithm for another Classrom, refers to B) and fetchData() - 3
 * 
 * A.U
 * @param {*} props 
 */
function DoubleSearch (props) {
    const [to, setTo] = React.useState("");
    const [from, setFrom] = React.useState("");
    const [coordinatesFrom, setCoordinatesFrom] = React.useState("");
    const [coordinatesTo, setCoordinatesTo] = React.useState("");
    const [currentLocationCoords, setCurrentLocationCoords] = React.useState({ latitude: null, longitude: null });

    /**
     * Description: Method to go back to the previous screen.
     * Using Stack navigator.
     */
    const goBack = () => {
        props.navigation.goBack();
    };
    /**
     * Description: This method will navigate between the DoubleSearch screen to the PreviewDirection screen.
     * Particularity: 
     * 1. We use Stack navigator
     * 2. Error Handling to prevent unwanted behavior in rendering of map in subsequent screens (PreviewDirection &
     * Direction).
     *      - The same address for origin and destination is not accepted
     *      - If the Current Direction is wanted, fetch the proper coordinates
     *      - If there's no destination, refuse search
     *      - A value selected beyond the search Items displayed by the dropdown is not accepted.
     * 
     * A.U
     */
    const goToPreviewDirectionScreen = () => {
        if (to.name == from.name) {
            return alert("Origin and destination are the same. Please try Again.");
        }
        else if (coordinatesFrom && coordinatesTo) {
            props.navigation.navigate("PreviewDirections", { From: coordinatesFrom, To: coordinatesTo });
        }
        else if (from.name == "Current Location" && currentLocationCoords.latitude && currentLocationCoords.longitude) {
            props.navigation.navigate("PreviewDirections", { From: currentLocationCoords, To: coordinatesTo });
        }
        //TODO: Refer To A)
        else if (currentLocationCoords.latitude && currentLocationCoords.longitude) {
            props.navigation.navigate("PreviewDirections", { From: currentLocationCoords, To: coordinatesTo });
        }
        else if (from.name == "Current Location" && !currentLocationCoords) {
            return alert("Error: Are location services on?");
        }
        else {
            return alert("The destination field is missing or you typed an invalid location. Please try again.");
        }
    };
    
    const destinationName =  props.navigation.getParam("destinationName", "Destination");

    /**
     * Algorithm to find the coordinates of a given building name.
     * returns longitude and latitude
     * TODO: B) Another algorithm or extend this one to take in consideration classrooms.
     * A.U
     * @param {*} name 
     */
    const getCoordinates = (name) => {

        var list = buildingData();
        for (var key in list) {
            if (list[key].name.includes(name)) {
                return list[key].coordinates;
            }
        }
        return null;
    };

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                setCurrentLocationCoords({
                    latitude: coords.latitude,
                    longitude: coords.longitude
                });
            },
            (error) => alert("Error: Are location services on?"),
            { enableHighAccuracy: true }
        );
    };

    let fromName = from.name;
    let toName = to.name;

    if (fromName !== undefined)
        AsyncStorage.setItem("fromLocation", fromName.toString());

    if (toName !== undefined)
        AsyncStorage.setItem("toLocation", toName.toString());

    if (toName === undefined && fromName === undefined) {
        toName = "";
        AsyncStorage.setItem("fromLocation", toName.toString());
        AsyncStorage.setItem("toLocation", destinationName);
    }

    /**
     * Used an useEffect to fetch the currentLocation
     * A.U
     */
    useEffect(() => {
        if (from.name == "Current Location" || from.name === undefined) {
            getCurrentLocation();
        }
        if (to.name === undefined) {
            const initialTo = props.navigation.getParam("destinationName", "Destination");
            setCoordinatesTo(getCoordinates(initialTo));
            setTo({ name: initialTo });
        }
    });

    /**
     * FIXME: Refers to fetchData()
     * TODO: A) the unshift method is called to add at the start of the array the value of Current Location.
     *          However, one could argue that we don't want to make them select Current Location as it's not 
     *          intuitive. However, I do not know how to fetch the data if no item is selected in the 
     *          dropdown. 
     *          This is very important since the onTextChange props returns nothing when we are not writing or 
     *          when nothing was passed or selected. This is annoying since if the user selected something and then changed his
     *          mind and select nothing, the item passed is the previous value!
     * 
     * Clues: I left some clue about what could be investigated with the tag Refer TODO: A). So just Ctr+F that.
     * Overall: As of now, The user has to select the Current Location for the double search to fetch the current Location coordinates. 
     *
     * A.U
     */
    var originItems = fetchData();
    var destinationItems = fetchData(); //We do not want the second search bar to Current Location as a search option in the dropdown.
    originItems.unshift({ "id": 0, "name": "Current Location" });


    return (
        <View style={styles.container} data-test="DoubleSearch">
            {/* <View style={styles.topBackground} /> FIXME: Because you used absolute positioning, this is useless...*/}
            <View style={styles.backArrowContainer}>
                <Button transparent style={styles.backArrow} onPress={goBack}>
                    <Icon name="md-arrow-round-back" style={styles.icon}></Icon>
                </Button>
            </View>
            <View style={styles.svgContainer}>
                <DoubleSearchSVG />
            </View>
            <Text style={styles.titleLabel}>Starting Point & Destination</Text>

            <View style={styles.searchbarsContainer}>
                <View style={styles.originSearchContainer}>
                    <Text style={styles.searchBarLabels}>From: </Text>
                    <SearchableDropdown
                        onTextChange={val => val} //Refer TODO: A)
                        onItemSelect={item => { setFrom(item); setCoordinatesFrom(getCoordinates(item.name)); }}
                        defaultIndex={0} //Refer TODO: A)
                        textInputStyle={styles.textInputStyle}
                        itemStyle={styles.itemStyle}
                        containerStyle={styles.containerStyle}
                        itemTextStyle={styles.itemTextStyle}
                        itemsContainerStyle={styles.itemsContainerStyle}
                        items={originItems}
                        placeholder={"Current Position"}
                        placeholderTextColor={"grey"}
                        textInputProps={{
                            keyboardAppearance: "dark",
                            clearButtonMode: "while-editing",
                            clearTextOnFocus: false,
                        }}
                    />
                </View>
                <View style={styles.destinationSearchContainer}>
                    <Text style={styles.searchBarLabels}>To: </Text>
                    <SearchableDropdown
                        onTextChange={val => val}
                        onItemSelect={item => { setTo(item); setCoordinatesTo(getCoordinates(item.name)); }}
                        textInputStyle={styles.textInputStyle}
                        itemStyle={styles.itemStyle}
                        containerStyle={styles.containerStyle}
                        itemTextStyle={styles.itemTextStyle}
                        itemsContainerStyle={styles.itemsContainerStyle}
                        placeholderTextColor={"grey"}
                        items={destinationItems}
                        placeholder={destinationName}
                        textInputProps={{
                            keyboardAppearance: "dark",
                            clearButtonMode: "while-editing",
                            clearTextOnFocus: false,
                        }}
                    />
                </View>
            </View>
            <Button transparent style={styles.routeButton} onPress={goToPreviewDirectionScreen}><Text style={{ color: "white", fontSize: 14 }}>View Route</Text></Button>
        </View >
    );
}
export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
        backgroundColor: "#2A2E43",
        flexDirection: "column"
    },
    topBackground: {
        width: "100%",
        height: "43%",
        backgroundColor: "#353A50"
    },
    titleLabel: {
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
    searchbarsContainer: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        flex: 1,
        alignContent: "center",
        alignItems: "center",
        top: "14%",
        // backgroundColor: "yellow",
        position: "absolute"
    },
    originSearchContainer: {
        top: "5%",
        flexDirection: "column",
        width: "100%",
        left: "5%"
    },
    destinationSearchContainer: {
        flexDirection: "column",
        width: "100%",
        left: "5%",
        top: "7%",
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
        fontSize: 20,
        paddingVertical: 5
    },
    svgContainer: {
        width: "100%",
        bottom: "10%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: "15%"
    }
});

export default DoubleSearch;
