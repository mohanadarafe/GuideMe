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
 * 1) FetchData Returns duplicate sometimes in the searchItems
 * 2) - If a Service is unique to a building, searching for a service should find the
 *    coordinates of that corresponding building.
 *    - If it's not, we should not allow them to search those values in this context
 * 3) Same for departements
 * 4) TODO: Algorithm for classrooms 
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
 * The following function renders a preference menu with 2 search bars. The "from" conatains the current location which 
 * is set automatically (but can be modified) and the "to" contains the destination
 */
DoubleSearch.propTypes = {
    navigation: PropTypes.object
};

function DoubleSearch (props) {
    // const [data, setData] = React.useState([]); FIXME: I don't think this is needed anymore A.U
    const [to, setTo] = React.useState("");
    const [from, setFrom] = React.useState("");
    const [coordinatesFrom, setCoordinatesFrom] = React.useState("");
    const [coordinatesTo, setCoordinatesTo] = React.useState("");
    const [currentLocationCoords, setCurrentLocationCoords] = React.useState({latitude: null, longitude: null});

    const goBack = () => {
        props.navigation.goBack();
    };
    const goToPreviewDirectionScreen = () => {
        if (to.name == from.name) {
            return alert("Origin and destination are the same. Please try Again.")
        }
        else if (from.name == "Current Location" && currentLocationCoords) {
            props.navigation.navigate("PreviewDirections", {From: currentLocationCoords, To: coordinatesTo});
        }
        else if (from.name == "Current Location" && !currentLocationCoords) {
            return alert("Error: Are location services on?");
        }
        else if (coordinatesFrom && coordinatesTo) {
            props.navigation.navigate("PreviewDirections", {From: coordinatesFrom, To: coordinatesTo});
        }
        else {
            return alert ("The destination field is missing or you typed an invalid location. Please try again.")
        }
    };

    const selectDestinationName = () => {
        return props.navigation.getParam("destinationName", "Destination");
    };

    const getCoordinates =  (name) => {

        var list = buildingData();
        for (var key in list) {
          if (list[key].name.includes(name)){
                return list[key].coordinates;
          }
        }
        return null;
    }

    const getCurrentLocation = () => { navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
            setCurrentLocationCoords({
                latitude: coords.latitude,
                longitude: coords.longitude
            })  
        },
        (error) => alert('Error: Are location services on?'),
        { enableHighAccuracy: true }
      )
    }

/**
 * FIXME: I think the following setters are no longer necessary. A.U
 */
    let fromName = from.name;
    let toName = to.name;

    if (fromName !== undefined)
        AsyncStorage.setItem("fromLocation", fromName.toString());

    if (toName !== undefined) 
        AsyncStorage.setItem("toLocation", toName.toString());
    
    if (toName === undefined && fromName === undefined) {
        toName = "";
        AsyncStorage.setItem("fromLocation", toName.toString());
        AsyncStorage.setItem("toLocation", selectDestinationName());
    }

/**
 * I removed the useEffect because only one call is necessary to the constant file.
 * Update: Used an useEffect to fetch the currentLocation
 * Replaced by the following two lines... 
 * Second line adds Current position on top of list
 * 
 */
    useEffect(() => {
        if(from.name == "Current Location") {
            getCurrentLocation();
        }
    });

    /**
     * FIXME: Refers to fetchData()
     */
    var dataItems = fetchData();
    dataItems.unshift({"id": 0, "name": "Current Location"})

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
                <View style = {styles.originSearchContainer}>
                    <Text style={styles.searchBarLabels}>From: </Text>
                    <SearchableDropdown
                        onTextChange={val => setFrom(val)}
                        onItemSelect={item => {setFrom(item); setCoordinatesFrom(getCoordinates(item.name));  }}
                        defaultIndex = {0}
                        textInputStyle={styles.textInputStyle}
                        itemStyle={styles.itemStyle}
                        containerStyle={styles.containerStyle}
                        itemTextStyle={styles.itemTextStyle}
                        itemsContainerStyle={styles.itemsContainerStyle}
                        items={dataItems}
                        placeholder= {"Starting Position"} 
                        placeholderTextColor = {"grey"}
                        textInputProps = {{
                            keyboardAppearance: "dark", 
                            clearButtonMode: "while-editing",
                            clearTextOnFocus: false,
                        }}
                    />
                </View>
                <View style = {styles.destinationSearchContainer}>
                    <Text style={styles.searchBarLabels}>To: </Text>
                    <SearchableDropdown
                        onTextChange={val => val}
                        onItemSelect={item => { setTo(item); setCoordinatesTo(getCoordinates(item.name)); }}
                        textInputStyle={styles.textInputStyle}
                        itemStyle={styles.itemStyle}
                        containerStyle={styles.containerStyle}
                        itemTextStyle={styles.itemTextStyle}
                        itemsContainerStyle={styles.itemsContainerStyle}
                        placeholderTextColor = {"grey"}
                        items={dataItems}
                        placeholder={selectDestinationName()}
                        textInputProps = {{
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
        color: "#3ACCE1",
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
