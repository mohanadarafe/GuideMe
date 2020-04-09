import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, AsyncStorage } from "react-native";
import { Icon, Button } from "native-base";
import { Feather, Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { BottomMenu } from "../../components/BottomMenu";
import SegmentedControlTab from "react-native-segmented-control-tab";

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
function NearbyInterest(props) {

    const [fromScreen, setFromScreen] = React.useState();
    const [jsonElement, setJsonElement] = React.useState([]);
    const [selectedTab, setSelectedTab] = React.useState(0);
    const [campus, setCampus] = React.useState("SGW");
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
        props.navigation.navigate("NearbyInterestDetails", {
            name: item.key,
            rating: item.rating,
            photoref: item.img
        });
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

    // Static data for now 
    const data = [];

    // number of coloumns for the flatList 
    const numColumns = 2;

    const fetchData = async () => {

        try {
            // getItem method is necessary for the retrieval of the API Key 
            let keyId = await AsyncStorage.getItem("apiKeyId");
            let SGW_COORDS = `45.497063, -73.578431`;
            let LOY_COORDS = `45.458371, -73.638239`;
            let coordinates = (campus === "SGW" ? SGW_COORDS : LOY_COORDS)
            let RADIUS = `500`;
            let TYPE = `restaurant`;
            let MAX_WIDTH = `500`;
            let SENSOR = `false`;
            // let resp = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${SGW_COORDS}&radius=${RADIUS}&type=${TYPE}&key=${keyId}`);
            let jsonResp = await resp.json();
           

            var key;
            if (jsonResp && jsonResp.results.length > 0) {
                for (key in jsonResp.results) {
                    let placeName = jsonResp.results[key].name;
                    let placeRating = jsonResp.results[key].rating;
                    let photoRef = jsonResp.results[key].photos[0].photo_reference;
                    if (placeName !== null & placeRating !== null && photoRef !== null ) {
                        data.push({ key: placeName, rating: placeRating, img: photoRef});
                    }
                }
            }

            setJsonElement(data);
        }
        catch (error) {
            // alert("An error occured while trying to retrive the information. Please leave this screen and come back again.");
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            getFromScreen();
        }, 1);
        fetchData();
        return () => clearInterval(intervalId);
    });


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

                <TouchableOpacity style={styles.optionButton}>
                    <Ionicons name="ios-options" style={styles.option} />
                </TouchableOpacity>
            </View>


            <Text style={styles.mainLabel}>Points of Interest</Text>

        
          <SegmentedControlTab
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
                    }
                    else if (tab === 1) {
                        setCampus("LOY");
                    }
                }}
               ></SegmentedControlTab>


            <View style={styles.flatListContainer}>
                <FlatList
                    onEndReachedThreshold={0}
                    contentContainerStyle={styles.list}
                    data={jsonElement}
                    numColumns={numColumns}
                    keyExtractor={(item) => {
                        return item.key;
                    }}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => { goToNearbyInterestDetails(item) }}>
                            <View key={index}>
                                <View style={styles.itemContainer}>
                                    <View style={styles.itemImageContainer}>
                                        {/* // FIXME: add a default image when theres no internet connection  */}
                                        {/* <Image style={{ height: "100%", width: "100%" }} source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=CmRaAAAAAGS3__D7O6MNN29XzvOsx9WY5_PaSQHIkNBaOpvsPfnq2np1XnZ3C_vYyG96uq1ymazXICcE0NH0sfyg1BHBXYEbKP7nhAZL3amkXumjzNiV2-a9gAao95PQyWK-vIT8EhB7AT2alZEvyyFHT7mcxr-AGhR_mPQjgJgMFyy-JG_aRK-_wVv8JQ&sensor=false&key=AIzaSyDApykkW1hGVhUCZXf5pv9CIvAvyPBAy7k`}} /> */}
                                    </View>
                                    <View style={styles.itemTextContainer}>
                                        <Text style={styles.itemText}>Name of place: {item.key}</Text>
                                        <Text style={styles.itemText}>Rating of place: {item.rating}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>


        </View>


        // </View>
    );
}

NearbyInterest.propTypes = {
    navigation: PropTypes.object,
    openDrawer: PropTypes.func,
    navigate: PropTypes.func
};

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
    menuButton: {
        height: "100%",
        width: "20%",
        flexDirection: "row",
        justifyContent: "center"
    },
    option: {
        alignSelf: "center",
        color: "#FFFFFF",
        fontSize: 35,
    },
    optionButton: {
        height: "100%",
        width: "20%",
        flexDirection: "row",
        justifyContent: "center"
    },
    menuButtonContainer: {
        width: "100%",
        height: "6%",
        top: "7%",
    },
    flatListContainer: {
        height: "65%",
        bottom: "5%"
    },
    itemContainer: {
        flex: 1,
        margin: 5,
        minWidth: 185,
        maxWidth: 185,
        height: 200,
        maxHeight: 200,
        backgroundColor: "#353A50",
        borderRadius: 10,
    },
    itemText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontFamily: "encodeSansExpanded",
        marginHorizontal: "10%",
        marginVertical: "3%",
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
        top: "%",
        alignContent: "space-between",
        backgroundColor: "red",
        height: "20%",
        width: "100%",
        bottom: "%"
    },
    tabsContainerStyle: {
        // bottom: "100%",
        // top: "10%",

        top: "7%",
        backgroundColor: "red",
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
        // bottom: "100%",
    },
});

export default NearbyInterest;
