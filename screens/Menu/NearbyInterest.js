import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, AsyncStorage } from "react-native";
import { Icon, Button } from "native-base";
import { Feather } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { BottomMenu } from "../../components/BottomMenu";

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
    /**
     * The asyncstorage getter that will let us grab the value coming from the bottomMenu component
     * @param  {} =>{letname=awaitAsyncStorage.getItem("sideMenu)"
     * @param  {} ;setFromScreen(name)
     */
    const getFromScreen = async () => {
        let name = await AsyncStorage.getItem("sideMenu");
        setFromScreen(name);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            getFromScreen();
        }, 1);
        return () => clearInterval(intervalId);
    });

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
    const goToNearbyInterestDetails = () => {
        props.navigation.navigate("NearbyInterestDetails");
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
    const data = [
        { key: "a", rate: "1" }, { key: "b", rate: "2" }, { key: "c", rate: "3" }, { key: "d", rate: "4" }, { key: "e", rate: "5" }, { key: "f", rate: "6" }, { key: "g", rate: "7" }, { key: "h", rate: "8" }, { key: "i", rate: "9" }, { key: "j", rate: "10" }, { key: "j", rate: "11" }
    ];

    const numColumns = 2;

    return (
        <View style={styles.container}>
            <View style={styles.menuButtonContainer}>
                {fromScreen !== "sideMenu" &&
                    <TouchableOpacity style={styles.backButton} onPress={goBack}>
                        <Icon testID="bottomArrowIcon" name="ios-arrow-down" style={styles.arrowDown}  />
                    </TouchableOpacity>
                }
                {fromScreen === "sideMenu" &&
                    <TouchableOpacity style={styles.menuButton} onPress={goToMenu}>
                        <Feather name="menu" style={styles.icon} />
                    </TouchableOpacity>
                }
            </View>
            <Text style={styles.mainLabel}>Points of Interest</Text>
            <View style={styles.flatListContainer}>
                <FlatList
                    onEndReachedThreshold={0}
                    contentContainerStyle={styles.list}
                    data={data}
                    numColumns={numColumns}
                    keyExtractor={(item) => {
                        return item.key;
                    }}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={goToNearbyInterestDetails}>
                            <View key={index}>
                                <View style={styles.itemContainer}>
                                    <View style={styles.itemImageContainer}>
                                    </View>
                                    <View style={styles.itemTextContainer}>
                                        <Text style={styles.itemText}>Name of place: {item.key}</Text>
                                        <Text style={styles.itemText}>Rating of place: {item.rate}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View >
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
        alignSelf:"center"
    },
    icon: {
        alignSelf:"center",
        color: "#FFFFFF",
        fontSize: 35,
    },
    menuButton: {
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
        height: "73%",
        bottom: "5%"
    },
    itemContainer: {
        flex: 1,
        margin: 5,
        minWidth: 170,
        maxWidth: 223,
        height: 200,
        maxHeight: 200,
        backgroundColor: "#353A50",
        borderRadius: 10
    },
    itemText: {
        color: "#FFFFFF",
        fontSize: 12,
        fontFamily: "encodeSansExpanded",
        marginHorizontal: "10%",
        marginVertical: "3%"
    },
    itemTextContainer: {
        width: "100%",
        height: "35%",
        flexDirection: "column",
        justifyContent: "center"
    },
    itemImageContainer: {
        backgroundColor: "#FFF",
        opacity: 0.3,
        width: "100%",
        height: "65%",
    },
});

export default NearbyInterest;
