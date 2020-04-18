import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, AsyncStorage, TouchableOpacity } from "react-native";
import { Icon, Button } from "native-base";
import SearchableDropdown from "react-native-searchable-dropdown";
import { MapData } from "../components/MapData";
import { ClassRooms } from "../constants/ClassRooms";
import { buildingData } from "../constants/buildingData";
import { DoubleSearchSVG } from "../assets/DoubleSearchSVG.js";


function fetchData() {
    const searchInfo = MapData({ context: "Search" });
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

var originItems = fetchData();
var destinationItems = fetchData(); //We do not want the second search bar to Current Location as a search option in the dropdown.
originItems.unshift({ "id": 0, "name": "Current Location" });

/**
 * Overall :
 * 
 * A.U
 * @param {*} props 
 */

function DoubleSearch(props) {
    const [to, setTo] = React.useState("");
    const [from, setFrom] = React.useState("");
    const [coordinatesFrom, setCoordinatesFrom] = React.useState(null);
    const [coordinatesTo, setCoordinatesTo] = React.useState("");
    const [currentLocationCoords, setCurrentLocationCoords] = React.useState(null);
    const [pointOfInterest, setPointOfInterest] = React.useState(null);
    const [coordinatesPOI, setCoordinatesPOI] = React.useState({ latitude: null, longitude: null });


    const namePointOfInterest = props.navigation.getParam("name_POI", null);
    const latitudePointOfInterest = props.navigation.getParam("latitude_POI", null);
    const longitudePointOfInterest = props.navigation.getParam("longitude_POI", null);
    
    /**
     * Adding the point of interest as an item in the dropdownlist of the Destination search bar
     */
    const addItem = () => {
            destinationItems.unshift({ id: 0, name: namePointOfInterest});   
    }

    const [placeholder, setPlaceholder] = React.useState("");


    /**
     * Description: Method to back to the previous screen.
     * Using Stack navigator.
     */
    
    const CourseScheduleLocation = props.navigation.getParam("CourseScheduleLocation", "");

    const goBack = () => {
            if(namePointOfInterest){
                destinationItems.shift();
                props.navigation.goBack();

            }else{
                props.navigation.goBack();
            }   
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
     * 3. Added the scenario in which we have two classrooms from the same building. We go in IndoorMapView
     * 
     * A.U
     */

    const goToPreviewDirectionScreen = () => {
      
        // current location to POI
        if ((from.name == "Current Location" || from.name == undefined) && currentLocationCoords && pointOfInterest !==null) {
            props.navigation.navigate("PreviewDirections", { From: currentLocationCoords, To: coordinatesPOI, fromName: "Current Location", toName: pointOfInterest });

        }
        // building name to POI
        else if (coordinatesFrom && pointOfInterest !==null) {
            props.navigation.navigate("PreviewDirections", { From: coordinatesFrom, To: coordinatesPOI, fromName: from.name, toName: pointOfInterest });
        }

        else if (to.name == from.name) {
            return alert("Origin and destination are the same. Please try Again.");
        }

        // current location to building name
        else if ((from.name == "Current Location" || from.name == undefined) && currentLocationCoords) {
            props.navigation.navigate("PreviewDirections", { From: currentLocationCoords, To: coordinatesTo, fromName: "Current Location", toName: to.name });
        }
    
        else if(from.name.includes("Washroom") || from.name.includes("Water")){
            alert("Directions from indoor points of interests are not supported! Try going to the point of interest.")
        }

        else if(!coordinatesFrom.isClassRoom && (to.name.includes("Washroom") || to.name.includes("Water"))){
            alert("Directions to indoor points of interests are only accepted from classrooms!")
        }

        // class room to washroom or water fountain 
        else if(coordinatesFrom.isClassRoom && (to.name.includes("Washroom") || to.name.includes("Water"))){
            props.navigation.navigate("IndoorMapView", { From: from.name, To: to.name })
        }
        // classroom to classroom
        else if (coordinatesFrom.longitude == coordinatesTo.longitude && coordinatesFrom.latitude == coordinatesTo.latitude) {
            props.navigation.navigate("IndoorMapView", { From: from.name, To: to.name })
        }

        // building to buildling 
        else if (coordinatesFrom && coordinatesTo) {
            props.navigation.navigate("PreviewDirections", { From: coordinatesFrom, To: coordinatesTo, fromName: from.name, toName: to.name });
        }

        else {
            return alert("The destination or origin field is missing or invalid. Please try again.");
        }
    };

    const destinationName = props.navigation.getParam("destinationName", "Destination");
    const value = props.navigation.getParam("destinationIndex", "");
    /**
     * 
     */
    const fetchCurrentPosition = () => {

        getPosition().then(({ coords }) => {
            setCurrentLocationCoords({
                latitude: coords.latitude,
                longitude: coords.longitude
            })
        })
            .catch((err) => {
                alert(err.message);
            });
    }

    /**
     * Algorithm to find the coordinates of a given building name or classroom name.
     * returns longitude and latitude.
     * In the case of a service or department, it will return the coordinates of the
     * building it belongs to.
     * 
     * A.U
     * @param {*} name 
     */
    const getCoordinates = (name) => {

        let buildingList = buildingData();
        let classRoomsList = ClassRooms();
        if (/\d/.test(name)) {
            for (var key in classRoomsList) {
                if (classRoomsList[key].room.includes(name)) {
                    const buildingCoords = buildingList[key].coordinates;
                    const isClassroom = { isClassRoom: name };
                    const result = { ...buildingCoords, ...isClassroom };
                    return result;
                }
            }
        }
        for (var key in buildingList) {
            if (buildingList[key].name.includes(name) || buildingList[key].services.includes(name) || buildingList[key].departments.includes(name) || buildingList[key].fullName.includes(name)) {
                return buildingList[key].coordinates;
            }
        }
        if (name == "Current Location") {
            fetchCurrentPosition();
        }
        return null;
    };

    var getPosition = function (options) {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

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
     * Used an useEffect to fetch the currentLocation, to fetch the set CourseSchedule and POI props in their rightful hook
     */
    useEffect(() => {

            if (to.name === undefined) {
                if (destinationName) {
                    setCoordinatesTo(getCoordinates(destinationName));
                    setTo({ name: destinationName });
                    setPlaceholder(destinationName);
                }
                if (CourseScheduleLocation) {
                    setCoordinatesTo(getCoordinates(CourseScheduleLocation));
                    setTo({ name: CourseScheduleLocation });
                    setPlaceholder(CourseScheduleLocation);
                }
            }
        if (from.name === undefined) {
            fetchCurrentPosition();
        }

        setPointOfInterest(namePointOfInterest)
        setCoordinatesPOI({
            latitude: latitudePointOfInterest,
            longitude: longitudePointOfInterest
        })

        if(namePointOfInterest){
        addItem()
        setPlaceholder(namePointOfInterest)
        }
        
    }, []);

    //Depending on the condition will return disabled button or not
    var goToPreviewDirectionButton;
    if (coordinatesTo != null || coordinatesFrom != null || pointOfInterest != null) {
        goToPreviewDirectionButton = <Button transparent testID="DoubleSearch_enabledViewRouteButton" style={styles.routeButton} onPress={goToPreviewDirectionScreen}><Text style={{ color: "white", fontSize: 14 }}>View Route</Text></Button>;
    }
    else if (coordinatesFrom == null && !currentLocationCoords && (from.name == undefined || to.name == "")) {
        goToPreviewDirectionButton = <Button transparent testID="DoubleSearch_disabledViewRouteButton" style={styles.routeButtonDisabled} onPress={goToPreviewDirectionScreen} disabled={true}><Text style={{ color: "white", fontSize: 14 }}>View Route</Text></Button>;
    }
    else {
        goToPreviewDirectionButton = <Button transparent testID="DoubleSeach_disabledViewRouteButton" style={styles.routeButtonDisabled} onPress={goToPreviewDirectionScreen} disabled={true}><Text style={{ color: "white", fontSize: 14 }}>View Route</Text></Button>;
        alert("Invalid Location! Please try to enter a valid classroom or building name");
    }

return (
    <View testID="DoubleSearch_ScreenView" style={styles.container} data-test="DoubleSearch">
        <View style={styles.backArrowContainer}>
            <TouchableOpacity onPress={goBack}>
                <Icon name="md-arrow-round-back" style={styles.icon}></Icon>
            </TouchableOpacity>
        </View>
        <View style={styles.svgContainer}>
            <DoubleSearchSVG />
        </View>
        <Text style={styles.titleLabel}>Starting Point & Destination</Text>

        <View style={styles.searchbarsContainer}>
            <View testID="DoubleSearch_FromSearchBarView" style={styles.originSearchContainer}>
                <Text style={styles.searchBarLabels}>From: </Text>
                <SearchableDropdown
                    testID="DoubleSearch_FromSearchBar"
                    onTextChange={val => val}
                    onItemSelect={item => { setFrom(item); setCoordinatesFrom(getCoordinates(item.name)); }}
                    defaultIndex={"0"}
                    textInputStyle={styles.textInputStyle}
                    itemStyle={styles.itemStyle}
                    containerStyle={styles.containerStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemsContainerStyle={styles.itemsContainerStyle}
                    items={originItems}
                    placeholder={"Starting Position"}
                    placeholderTextColor={"grey"}
                    textInputProps={{
                        keyboardAppearance: "dark",
                        clearButtonMode: "while-editing",
                        clearTextOnFocus: false,
                    }}
                />
            </View>
            <View testID="DoubleSearch_ToSearchBarView" style={styles.destinationSearchContainer}>
                <Text style={styles.searchBarLabels}>To: </Text>
                <SearchableDropdown testID="DoubleSearch_ToSearchBar"
                    onTextChange={val => val}
                    onItemSelect={item => { setTo(item); setCoordinatesTo(getCoordinates(item.name)); (namePointOfInterest == item.name ? setPointOfInterest(namePointOfInterest) : setPointOfInterest(null));}}
                    textInputStyle={styles.textInputStyle}
                    defaultIndex={(String)(value)} 
                    itemStyle={styles.itemStyle}
                    containerStyle={styles.containerStyle}
                    itemTextStyle={styles.itemTextStyle}
                    itemsContainerStyle={styles.itemsContainerStyle}
                    placeholderTextColor={"black"}
                    items={destinationItems}
                    placeholder={placeholder}
                    textInputProps={{
                        keyboardAppearance: "dark",
                        clearButtonMode: "while-editing",
                        clearTextOnFocus: false,
                    }}
                />
            </View>
        </View>
        {goToPreviewDirectionButton}
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
    backArrowContainer: {
        width: "100%",
        height: "6%",
        top: "6%"
    },
    icon: {
        position: "absolute",
        color: "#FFFFFF",
        left: "5%",
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
    routeButtonDisabled: {
        width: "90%",
        height: "8%",
        fontSize: 25,
        bottom: "8%",
        justifyContent: "center",
        backgroundColor: "grey",
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
