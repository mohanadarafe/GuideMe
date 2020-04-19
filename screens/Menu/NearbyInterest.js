import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, AsyncStorage } from "react-native";
import { Icon } from "native-base";
import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { sideMenuStyle } from "../../assets/styling/sideMenuStyling";


/**
 * US34 - As a user, I would like to see the nearest outdoor points of interest #14
 * US35 - As a user, I would like to get the direction to the chosen nearest point of interest #15
 * US36 - As a user, I would like to see a detailed description of the selected places #29
 * 
 * Description: This screen will presents the layout 
 * for the display of the point of interests. The points 
 * of interest information will be retrieved from the Google Places API.
 * The screen is composed on a flatList to create a grid, and have 
 * an pressable item for each points of interest
 */
/**Prop passed
 * @param  {} navigation props.navigation is the name of the object from Navigator library
 */
function NearbyInterest (props) {

    const [fromScreen, setFromScreen] = React.useState();
    const [jsonElementArray_SGW, setjsonElementArray_SGW] = React.useState(null);
    const [jsonElementArray_LOY, setjsonElementArray_LOY] = React.useState(null);


    const [selectedTab, setSelectedTab] = React.useState(0);
    const [radius, setRadius] = React.useState(100);
    const [campus, setCampus] = React.useState("SGW");

    const campusBool = props.navigation.getParam("campusBool");
    /**
     * The asyncstorage getter that will let us grab the value coming from the bottomMenu component
     * @param  {} =>{letname=awaitAsyncStorage.getItem("sideMenu)"
     * @param  {} ;setFromScreen(name)
     */
    const getFromScreen = async () => {
        let name = await AsyncStorage.getItem("sideMenu");
        setFromScreen(name);
    };

    /**
     * The method will slide the side menu from the right side of the screen
     * @param  {} =>{props.navigation.openDrawer(
     */
    const goToMenu = () => {
        props.navigation.openDrawer();
    };
    /**
     * The method will let us navigate to the NearbyInterestDetails screen
     * @param  {} =>{props.navigation.navigate("NearbyInterestDetails)"
     */
    const goToNearbyInterestDetails = (item) => {
        props.navigation.navigate("NearbyInterestDetails", { item: item, name: item.key });
    };
    /**
     * The method will let us navigate to the Map screen 
     * @param  {} =>{AsyncStorage.setItem("sideMenu)"
     * @param  {} ""
     * @param  {} ;props.navigation.navigate("Map)"
     */
    const goBack = () => {
        AsyncStorage.setItem("sideMenu", "");
        props.navigation.navigate("Map");
    };

    // number of coloumns for the flatList 
    const numColumns = 2;


    /**
     * This method is the function used for the fetching of the objects in json format from the Google Places API
     * The method fetches json objects from the api, filters the fields to create its own objects 
     * and returns an array in the jsonElementArray_SGW hook
     */
    const fetchData_SGW = async () => {

        try {
            let keyId = await AsyncStorage.getItem("apiKeyId");
            let SGW_COORDS = "45.496996, -73.578481";
            let RADIUS = 100;
            let TYPE = "restaurant";
            let MAX_WIDTH = "500";
            let SENSOR = "false";
            let resp = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${SGW_COORDS}&radius=${RADIUS}&type=${TYPE}&key=${keyId}`);
            let jsonResp = await resp.json();

            setjsonElementArray_SGW(getFilteredjsonElementArray_SGW(jsonResp, keyId, MAX_WIDTH, SENSOR));

        } catch (error) {

            alert("An error occured while trying to retrive the information. Please leave this screen and come back again.");
        }
    };

    const getFilteredjsonElementArray_SGW = (jsonResp, keyId, MAX_WIDTH, SENSOR, ) => {

        var filtering = jsonResp.results.map(element => {

            return {
                key: element.name,
                rating: element.rating,
                open_hours: element.opening_hours.open_now,
                address: element.vicinity,
                latitude: element.geometry.location.lat,
                longitude: element.geometry.location.lng,
                reviews: element.user_ratings_total,
                img: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${MAX_WIDTH}&photoreference=${element.photos[0].photo_reference}&sensor=${SENSOR}&key=${keyId}`
            };
        });
        return filtering;
    };

    const fetchData_LOY = async () => {

        try {
            let keyId = await AsyncStorage.getItem("apiKeyId");
            let LOY_COORDS = "45.458371,-73.638239";

            let RADIUS = 500;
            let TYPE = "restaurant";
            let MAX_WIDTH = "500";
            let SENSOR = "false";
            let resp = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LOY_COORDS}&radius=${RADIUS}&type=${TYPE}&key=${keyId}`);
            let jsonResp = await resp.json();

            setjsonElementArray_LOY(getFilteredjsonElementArray_LOY(jsonResp, keyId, MAX_WIDTH, SENSOR));

        } catch (error) {

            alert("An error occured while trying to retrive the information. Please leave this screen and come back again.");
        }
    };

    const getFilteredjsonElementArray_LOY = (jsonResp, keyId, MAX_WIDTH, SENSOR, ) => {

        var filtering = jsonResp.results.map(element => {

            return {
                key: element.name,
                rating: element.rating,
                open_hours: element.opening_hours.open_now,
                address: element.vicinity,
                latitude: element.geometry.location.lat,
                longitude: element.geometry.location.lng,
                reviews: element.user_ratings_total,
                img: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${MAX_WIDTH}&photoreference=${element.photos[0].photo_reference}&sensor=${SENSOR}&key=${keyId}`
            };
        });
        return filtering;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            getFromScreen();
        }, 1);
        fetchData_SGW();
        fetchData_LOY();
        if (campusBool === false) {
            setRadius(1000);
            setCampus("LOY");
            setSelectedTab(1);
        }
        else if (campusBool === true) {
            setRadius(100);
            setCampus("SGW");
            setSelectedTab(0);
        }
        return () => clearInterval(intervalId);
    }, [campusBool]);

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                {fromScreen !== "sideMenu" &&
                    <TouchableOpacity style={styles.backButton} onPress={goBack}>
                        <Icon testID="bottomArrowIcon" name="ios-arrow-down" style={styles.arrowDown} />
                    </TouchableOpacity>
                }
                {fromScreen === "sideMenu" &&
                    <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                        <Feather name="menu" style={styles.icon} />
                    </TouchableOpacity>
                }

            </View>

            <Text style={styles.mainLabel}>Points of Interest</Text>
            <Text style={styles.radiusLabel}>Search radius: {radius} meters</Text>


            <SegmentedControlTab
                id="tab_button"
                tabsContainerStyle={styles.tabsContainerStyle}
                values={["SGW", "LOY"]}
                selectedIndex={selectedTab}
                tabStyle={styles.tabStyle}
                borderRadius={0}
                tabTextStyle={styles.tabTextStyle}
                activeTabStyle={styles.activeTabStyle}
                activeTabTextStyle={styles.activeTabTextStyle}
                onTabPress={tab => {
                    setSelectedTab(tab);
                    if (tab === 0) {
                        setCampus("SGW");
                        setRadius("100");

                    }
                    else if (tab === 1) {
                        setCampus("LOY");
                        setRadius("1000");
                    }
                }}
            ></SegmentedControlTab>


            <View style={styles.flatListContainer}>
                <FlatList
                    onEndReachedThreshold={0}
                    contentContainerStyle={styles.list}
                    data={campus == "SGW" ? jsonElementArray_SGW : jsonElementArray_LOY}
                    numColumns={numColumns}
                    keyExtractor={(item) => {
                        return item.key;
                    }}
                    renderItem={({ item, index }) => (
                        < TouchableOpacity onPress={() => { goToNearbyInterestDetails(item); }}>
                            <View key={index}>
                                <View style={styles.itemContainer}>
                                    <View style={styles.itemImageContainer}>
                                        {item.img &&
                                            <Image style={styles.itemImage} source={{ uri: item.img }} />
                                        }
                                    </View>
                                    <View style={styles.itemTextContainer}>
                                        {item.key.length > 22 &&
                                            <Text style={styles.itemText}>{item.key.substring(0, 22) + "..."}</Text>
                                        }
                                        {item.key.length <= 22 &&
                                            <Text style={styles.itemText}>{item.key}</Text>
                                        }

                                        <Text style={styles.itemText2}>{item.reviews + " Reviews"}</Text>
                                    </View>
                                </View>
                            </View>
                        </ TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}

NearbyInterest.propTypes = {
    navigation: PropTypes.object,
    openDrawer: PropTypes.func,
    navigate: PropTypes.func
};

const nearbyInterestStyle = {
    mainLabel: {
        color: "#FFFFFF",
        position: "absolute",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        top: "15%"
    },
    radiusLabel: {
        color: "#FFFFFF",
        position: "absolute",
        fontSize: 12,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        top: "20%"
    },
    list: {
        flexDirection: "column"
    },
    arrowDown: {
        color: "#ffffff",
        top: "5%",
        fontSize: 54,
    },
    backButton: {
        alignSelf: "center"
    },
    icon: {
        alignSelf: "center",
        color: "#FFFFFF",
        fontSize: 35,
    },
    option: {
        alignSelf: "center",
        color: "#FFFFFF",
        fontSize: 35,
    },
    optionButton: {
        bottom: "5%",
        left: "40%",
    },
    flatListContainer: {
        height: "65%",
        bottom: "4%"
    },
    itemContainer: {
        flex: 1,
        margin: 5,
        minWidth: 185,
        maxWidth: 185,
        height: 200,
        maxHeight: 200,
        backgroundColor: "#1b1e2b",
        borderRadius: 10,
    },
    itemText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "encodeSansExpanded",
        marginHorizontal: "10%",
        marginVertical: "3%",
        width: "70%"
    },
    itemText2: {
        color: "#FFFFFF",
        fontSize: 10,
        fontFamily: "encodeSansExpanded",
        marginHorizontal: "10%",
        marginVertical: "0%",
        width: "70%"
    },
    itemTextContainer: {
        width: "100%",
        height: "35%",
        flexDirection: "column",
        justifyContent: "center"
    },
    itemImageContainer: {
        width: "100%",
        height: "65%",
    },
    controlTabContainer: {
        alignContent: "space-between",
        backgroundColor: "red",
        height: "20%",
        width: "100%",
    },
    tabsContainerStyle: {
        top: "13%",
    },
    tabStyle: {
        backgroundColor: "#2A2E43",
        borderWidth: 0,
        borderColor: "white",
        borderBottomColor: "#FFFFFF",
        paddingHorizontal: "15%"

    },
    tabTextStyle: {
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    activeTabStyle: {
        backgroundColor: "#2A2E43",
        borderBottomColor: "#3ACCE1"
    },
    activeTabTextStyle: {
        color: "#3ACCE1",
        backgroundColor: "#2A2E43",
        fontWeight: "bold"
    },
    tabContent: {
        color: "#fff",
        fontSize: 18,
        margin: 24,
    },
    itemImage: {
        height: "100%", width: "100%"
    }
};

export const styles = StyleSheet.create({ ...sideMenuStyle, ...nearbyInterestStyle });

export default NearbyInterest;
